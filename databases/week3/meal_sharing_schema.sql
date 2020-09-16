
-- Schema meal_schema

CREATE SCHEMA IF NOT EXISTS `meal_schema` DEFAULT CHARACTER SET utf8 ;
USE `meal_schema` ;


-- Table `meal_schema`.`Reservation`

CREATE TABLE IF NOT EXISTS `meal_schema`.`Reservation` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `number_of_guests` INT NULL,
  `meal_id` INT NULL,
  `created_date` DATE NULL,
  `contact_phonenumber` VARCHAR(45) NULL,
  `contact_name` VARCHAR(45) NULL,
  `contact_email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meal_schema`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meal_schema`.`Review` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `meal_id` INT NULL,
  `stars` INT NULL,
  `created_date` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meal_schema`.`Meal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meal_schema`.`Meal` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `location` VARCHAR(45) NULL,
  `when` DATETIME NULL,
  `max_reservation` INT NULL,
  `price` DECIMAL NULL,
  `created_date` DATE NULL,
  `Reservation_id` INT UNSIGNED NOT NULL,
  `Review_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Meal_Reservation_idx` (`Reservation_id` ASC) VISIBLE,
  INDEX `fk_Meal_Review1_idx` (`Review_id` ASC) VISIBLE,
  CONSTRAINT `fk_Meal_Reservation`
    FOREIGN KEY (`Reservation_id`)
    REFERENCES `meal_schema`.`Reservation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Meal_Review1`
    FOREIGN KEY (`Review_id`)
    REFERENCES `meal_schema`.`Review` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
