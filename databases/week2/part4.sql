

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

CREATE TABLE IF NOT EXISTS `mydb`.`person` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `purchase` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `person_ID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`person_ID`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `mydb`.`person_has_user` (
  `person_ID` INT NOT NULL,
  `user_person_ID` INT NOT NULL,
  PRIMARY KEY (`person_ID`, `user_person_ID`),
  INDEX `fk_person_has_user_user1_idx` (`user_person_ID` ASC),
  INDEX `fk_person_has_user_person_idx` (`person_ID` ASC),
  CONSTRAINT `fk_person_has_user_person`
    FOREIGN KEY (`person_ID`)
    REFERENCES `mydb`.`person` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_person_has_user_user1`
    FOREIGN KEY (`user_person_ID`)
    REFERENCES `mydb`.`user` (`person_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


