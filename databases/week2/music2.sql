

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
  `id` INT NOT NULL AUTO_INCREMENT,
  `singer_id` INT NOT NULL,
  `albums_id` INT NOT NULL,
  `song_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `music`.`Albums`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `music`.`Albums` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `singers_id` INT NOT NULL,
  `AlbumTitle` VARCHAR(45) NOT NULL,
  `songs_id` INT NOT NULL,
  PRIMARY KEY (`id`)),

ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `music`.`Singers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `music`.`Singers` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(45) NULL,
  `LastName` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)),
ENGINE = InnoDB;

