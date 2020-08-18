create database schoolDatabase;
use schoolDatabase;

-- Class: with the columns: id, name, begins (date), ends (date)
SET NAMES utf8mb4;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATE NOT NULL,
   `ends` DATE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255)  NOT NULL,
   `phone` varchar(30) NOT NULL,
    `class_id` int(10) unsigned, 
   PRIMARY KEY (`id`),
    CONSTRAINT `fk_class_id` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table.

USE schoolDatabase;
CREATE INDEX name_index ON student(name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER  TABLE class ADD  status ENUM('notstarted', 'ongoing', 'finished') DEFAULT 'notstarted';