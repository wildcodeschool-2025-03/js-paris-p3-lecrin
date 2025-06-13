-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;

SET
    @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET
    @OLD_SQL_MODE = @@SQL_MODE,
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lecrin
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema BDD_projet_3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema BDD_projet_3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BDD_projet_3` DEFAULT CHARACTER SET utf8mb3;

USE `BDD_projet_3`;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`artist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`artist` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `birthday` DATETIME NOT NULL,
    `death_date` DATETIME NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`movement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`movement` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `photo` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(55) NOT NULL,
    `birthday` DATETIME NOT NULL,
    `date_inscription` DATETIME NOT NULL DEFAULT NOW(),
    `mail` VARCHAR(255) NOT NULL,
    `password` VARCHAR(150) NOT NULL,
    `admin` TINYINT(1) NOT NULL,
    `artist_id` INT NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `mail_UNIQUE` (`mail` ASC) VISIBLE,
    INDEX `fk_user_artist1_idx` (`artist_id` ASC) VISIBLE,
    CONSTRAINT `fk_user_artist1` FOREIGN KEY (`artist_id`) REFERENCES `BDD_projet_3`.`artist` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`artwork`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`artwork` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(55) NOT NULL,
    `user_id` INT NOT NULL,
    `date_artwork` DATETIME NOT NULL,
    `photo` TEXT NOT NULL,
    `date_post` DATETIME NOT NULL DEFAULT NOW(),
    `place` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `artist_id` INT NOT NULL,
    `movement_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_artwork_user_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_artwork_artist1_idx` (`artist_id` ASC) VISIBLE,
    INDEX `fk_artwork_movement1_idx` (`movement_id` ASC) VISIBLE,
    CONSTRAINT `fk_artwork_artist1` FOREIGN KEY (`artist_id`) REFERENCES `BDD_projet_3`.`artist` (`id`),
    CONSTRAINT `fk_artwork_movement1` FOREIGN KEY (`movement_id`) REFERENCES `BDD_projet_3`.`movement` (`id`),
    CONSTRAINT `fk_artwork_user` FOREIGN KEY (`user_id`) REFERENCES `BDD_projet_3`.`user` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`collection`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`collection` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`, `user_id`),
    INDEX `fk_collection_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_collection_id_idx` (`id` ASC) VISIBLE,
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
    CONSTRAINT `fk_collection_user1` FOREIGN KEY (`user_id`) REFERENCES `BDD_projet_3`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`comment` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` TEXT NOT NULL,
    `date` DATETIME NOT NULL,
    `user_id` INT NOT NULL,
    `artwork_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_comment_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_comment_artwork1_idx` (`artwork_id` ASC) VISIBLE,
    CONSTRAINT `fk_comment_artwork1` FOREIGN KEY (`artwork_id`) REFERENCES `BDD_projet_3`.`artwork` (`id`),
    CONSTRAINT `fk_comment_user1` FOREIGN KEY (`user_id`) REFERENCES `BDD_projet_3`.`user` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`link_artist_movement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`link_artist_movement` (
    `movement_id` INT NOT NULL,
    `artist_id` INT NOT NULL,
    PRIMARY KEY (`movement_id`, `artist_id`),
    INDEX `fk_movement_has_artist_artist1_idx` (`artist_id` ASC) VISIBLE,
    INDEX `fk_movement_has_artist_movement1_idx` (`movement_id` ASC) VISIBLE,
    CONSTRAINT `fk_movement_has_artist_artist1` FOREIGN KEY (`artist_id`) REFERENCES `BDD_projet_3`.`artist` (`id`),
    CONSTRAINT `fk_movement_has_artist_movement1` FOREIGN KEY (`movement_id`) REFERENCES `BDD_projet_3`.`movement` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`movement_has_artwork`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`movement_has_artwork` (
    `movement_id` INT NOT NULL,
    `artwork_id` INT NOT NULL,
    PRIMARY KEY (`movement_id`, `artwork_id`),
    INDEX `fk_movement_has_artwork_artwork1_idx` (`artwork_id` ASC) VISIBLE,
    INDEX `fk_movement_has_artwork_movement1_idx` (`movement_id` ASC) VISIBLE,
    CONSTRAINT `fk_movement_has_artwork_artwork1` FOREIGN KEY (`artwork_id`) REFERENCES `BDD_projet_3`.`artwork` (`id`),
    CONSTRAINT `fk_movement_has_artwork_movement1` FOREIGN KEY (`movement_id`) REFERENCES `BDD_projet_3`.`movement` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`user_following_artist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`user_following_artist` (
    `artist_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `date` DATETIME NOT NULL,
    PRIMARY KEY (`artist_id`, `user_id`),
    INDEX `fk_artist_has_user_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_artist_has_user_artist1_idx` (`artist_id` ASC) VISIBLE,
    CONSTRAINT `fk_artist_has_user_artist1` FOREIGN KEY (`artist_id`) REFERENCES `BDD_projet_3`.`artist` (`id`),
    CONSTRAINT `fk_artist_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `BDD_projet_3`.`user` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`user_liked_artwork`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`user_liked_artwork` (
    `user_id` INT NOT NULL,
    `artwork_id` INT NOT NULL,
    PRIMARY KEY (`user_id`, `artwork_id`),
    INDEX `fk_user_has_artwork_artwork1_idx` (`artwork_id` ASC) VISIBLE,
    INDEX `fk_user_has_artwork_user1_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_user_has_artwork_artwork1` FOREIGN KEY (`artwork_id`) REFERENCES `BDD_projet_3`.`artwork` (`id`),
    CONSTRAINT `fk_user_has_artwork_user1` FOREIGN KEY (`user_id`) REFERENCES `BDD_projet_3`.`user` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`user_saving_artwork`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`user_saving_artwork` (
    `user_id` INT NOT NULL,
    `artwork_id` INT NOT NULL,
    `date` DATETIME NOT NULL,
    PRIMARY KEY (`user_id`, `artwork_id`),
    INDEX `fk_user_has_artwork_artwork2_idx` (`artwork_id` ASC) VISIBLE,
    INDEX `fk_user_has_artwork_user2_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_user_has_artwork_artwork2` FOREIGN KEY (`artwork_id`) REFERENCES `BDD_projet_3`.`artwork` (`id`),
    CONSTRAINT `fk_user_has_artwork_user2` FOREIGN KEY (`user_id`) REFERENCES `BDD_projet_3`.`user` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `BDD_projet_3`.`collection_has_artwork`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDD_projet_3`.`collection_has_artwork` (
    `collection_id` INT NOT NULL,
    `artwork_id` INT NOT NULL,
    PRIMARY KEY (`collection_id`, `artwork_id`),
    INDEX `fk_collection_has_artwork_artwork1_idx` (`artwork_id` ASC) VISIBLE,
    INDEX `fk_collection_has_artwork_collection1_idx` (`collection_id` ASC) VISIBLE,
    CONSTRAINT `fk_collection_has_artwork_collection1` FOREIGN KEY (`collection_id`) REFERENCES `BDD_projet_3`.`collection` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_collection_has_artwork_artwork1` FOREIGN KEY (`artwork_id`) REFERENCES `BDD_projet_3`.`artwork` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

SET SQL_MODE = @OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;