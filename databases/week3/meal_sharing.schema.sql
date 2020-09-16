
-- Schema meal_share

CREATE SCHEMA IF NOT EXISTS `meal_share` DEFAULT CHARACTER SET utf8 ;
USE `meal_share` ;


-- Table `meal_share`.`Reservation`

CREATE TABLE IF NOT EXISTS `meal_share`.`reservation` (
  `id` INT NOT NULL,
  `number_of_guests` INT NULL,
  `meal_id` INT NULL,
  `created_date` DATE NULL,
  `contact_phonenumber` VARCHAR(45) NULL,
  `contact_name` VARCHAR(45) NULL,
  `contact_email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- Table `meal_share`.`Meal`
CREATE TABLE IF NOT EXISTS `meal_share`.`meal` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `location` VARCHAR(45) NULL,
  `when` DATETIME NULL,
  `max_reservation` INT NULL,
  `price` DECIMAL NULL,
  `created_date` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;



-- Table `meal_share`.`Review`

CREATE TABLE IF NOT EXISTS `meal_share`.`review` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `meal_id` INT NULL,
  `stars` INT NULL,
  `created_date` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;



-- Table `meal_share`.`Reservation_has_Meal`

CREATE TABLE IF NOT EXISTS `meal_share`.`Reservation_has_Meal` (
  `reservation_id` INT NOT NULL,
  `meal_id` INT NOT NULL,
  PRIMARY KEY (`Reservation_id`, `Meal_id`),
  INDEX `fk_Reservation_has_Meal_Meal1_idx` (`Meal_id` ASC) VISIBLE,
  INDEX `fk_Reservation_has_Meal_Reservation_idx` (`Reservation_id` ASC) VISIBLE,
  CONSTRAINT `fk_Reservation_has_Meal_Reservation`
    FOREIGN KEY (`Reservation_id`)
    REFERENCES `meal_share`.`Reservation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reservation_has_Meal_Meal1`
    FOREIGN KEY (`meal_id`)
    REFERENCES `meal_share`.`meal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- Table `meal_share`.`Reservation_has_Review`

CREATE TABLE IF NOT EXISTS `meal_share`.`Reservation_has_Review` (
  `reservation_id` INT NOT NULL,
  `review_id` INT NOT NULL,
  PRIMARY KEY (`Reservation_id`, `Review_id`),
  INDEX `fk_Reservation_has_Review_Review1_idx` (`Review_id` ASC) VISIBLE,
  INDEX `fk_Reservation_has_Review_Reservation1_idx` (`Reservation_id` ASC) VISIBLE,
  CONSTRAINT `fk_Reservation_has_Review_Reservation1`
    FOREIGN KEY (`Reservation_id`)
    REFERENCES `meal_share`.`Reservation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reservation_has_Review_Review1`
    FOREIGN KEY (`Review_id`)
    REFERENCES `meal_share`.`Review` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



