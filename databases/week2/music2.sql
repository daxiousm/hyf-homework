

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema music
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `music` DEFAULT CHARACTER SET utf8 ;
USE `music` ;

-- -----------------------------------------------------
-- Table `music`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `music`.`songs` (
  `TrackId` INT NOT NULL AUTO_INCREMENT,
  `SingersId` INT NOT NULL,
  `AlbumsId` INT NOT NULL,
  `SongName` VARCHAR(45) NULL,
  PRIMARY KEY (`TrackId`, `SingersId`, `AlbumsId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `music`.`Albums`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `music`.`Albums` (
  `AlbumsId` INT NOT NULL AUTO_INCREMENT,
  `SingersId` INT NOT NULL,
  `AlbumTitle` VARCHAR(45) NOT NULL,
  `songs_TrackId` INT NOT NULL,
  `songs_SingersId` INT NOT NULL,
  `songs_AlbumsId` INT NOT NULL,
  PRIMARY KEY (`AlbumsId`, `SingersId`, `AlbumTitle`, `songs_TrackId`, `songs_SingersId`, `songs_AlbumsId`),
  UNIQUE INDEX `SingerId_UNIQUE` (`AlbumsId` ASC) VISIBLE,
  INDEX `fk_Albums_songs1_idx` (`songs_TrackId` ASC, `songs_SingersId` ASC, `songs_AlbumsId` ASC) VISIBLE,
  CONSTRAINT `fk_Albums_songs1`
    FOREIGN KEY (`songs_TrackId` , `songs_SingersId` , `songs_AlbumsId`)
    REFERENCES `music`.`songs` (`TrackId` , `SingersId` , `AlbumsId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `music`.`Singers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `music`.`Singers` (
  `SingersId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(45) NULL,
  `LastName` VARCHAR(45) NULL,
  `SingerInfo` VARCHAR(45) NULL,
  `Albums_AlbumsId` INT NOT NULL,
  `Albums_SingersId` INT NOT NULL,
  `Albums_AlbumTitle` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`SingersId`),
  INDEX `fk_Singers_Albums1_idx` (`Albums_AlbumsId` ASC, `Albums_SingersId` ASC, `Albums_AlbumTitle` ASC) VISIBLE,
  CONSTRAINT `fk_Singers_Albums1`
    FOREIGN KEY (`Albums_AlbumsId` , `Albums_SingersId` , `Albums_AlbumTitle`)
    REFERENCES `music`.`Albums` (`AlbumsId` , `SingersId` , `AlbumTitle`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `music`.`Singers_has_songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `music`.`Singers_has_songs` (
  `Singers_SingersId` INT UNSIGNED NOT NULL,
  `songs_TrackId` INT NOT NULL,
  `songs_SingersId` INT NOT NULL,
  `songs_AlbumsId` INT NOT NULL,
  PRIMARY KEY (`Singers_SingersId`, `songs_TrackId`, `songs_SingersId`, `songs_AlbumsId`),
  INDEX `fk_Singers_has_songs_songs1_idx` (`songs_TrackId` ASC, `songs_SingersId` ASC, `songs_AlbumsId` ASC) VISIBLE,
  INDEX `fk_Singers_has_songs_Singers_idx` (`Singers_SingersId` ASC) VISIBLE,
  CONSTRAINT `fk_Singers_has_songs_Singers`
    FOREIGN KEY (`Singers_SingersId`)
    REFERENCES `music`.`Singers` (`SingersId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Singers_has_songs_songs1`
    FOREIGN KEY (`songs_TrackId` , `songs_SingersId` , `songs_AlbumsId`)
    REFERENCES `music`.`songs` (`TrackId` , `SingersId` , `AlbumsId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
