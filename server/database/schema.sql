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

INSERT INTO `BDD_projet_3`.`artist` 
(`id`, `name`, `description`, `birthday`, `death_date`)
VALUES
(1, 'Vincent van Gogh', 'Peintre post-impressionniste néerlandais connu pour sa palette vibrante et ses coups de pinceau expressifs.', '1853-03-30 00:00:00', '1890-07-29 00:00:00'),

(2, 'Pablo Picasso', 'Peintre et sculpteur espagnol, cofondateur du cubisme.', '1881-10-25 00:00:00', '1973-04-08 00:00:00'),

(3, 'Claude Monet', 'Figure clé de l\'impressionnisme français.', '1840-11-14 00:00:00', '1926-12-05 00:00:00'),

(4, 'Salvador Dalí', 'Peintre surréaliste espagnol connu pour ses images oniriques et fantasques.', '1904-05-11 00:00:00', '1989-01-23 00:00:00'),

(5, 'Andy Warhol', 'Chef de file du mouvement Pop Art.', '1928-08-06 00:00:00', '1987-02-22 00:00:00');


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

INSERT INTO `BDD_projet_3`.`movement` 
(`id`, `name`, `photo`, `description`)
VALUES
(1, 'Impressionnisme', 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Impression_Sunrise.jpg', 'Mouvement artistique du XIXe siècle caractérisé par des coups de pinceau visibles et une attention portée à la lumière.'),

(2, 'Cubisme', 'https://upload.wikimedia.org/wikipedia/en/5/53/Les_Demoiselles_d%27Avignon.jpg', 'Mouvement d\'avant-garde rompant avec la perspective traditionnelle et représentant les objets sous plusieurs angles.'),

(3, 'Surréalisme', 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg', 'Mouvement visant à libérer l\'imaginaire en puisant dans les rêves et l\'inconscient.'),

(4, 'Expressionnisme', 'https://upload.wikimedia.org/wikipedia/en/4/42/The_Scream.jpg', 'Style artistique exprimant les émotions humaines de manière intense et déformée.'),

(5, 'Art Pop', 'https://upload.wikimedia.org/wikipedia/en/b/b9/Marilyn_Diptych.jpg', 'Mouvement artistique des années 1950-60 célébrant la culture populaire et les médias.'),

(6, 'Symbolisme', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Arnold_Böcklin_-_Isle_of_the_Dead.jpg', 'Courant artistique du XIXe siècle fondé sur l\'évocation d\'images mystiques et oniriques.');


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

INSERT INTO `BDD_projet_3`.`user` 
(`id`, `name`, `birthday`, `date_inscription`, `mail`, `password`, `admin`, `artist_id`)
VALUES
(1, 'Alice Dupont', '1990-05-12 00:00:00', '2023-04-01 10:30:00', 'alice.dupont@example.com', 'hashedpassword123', 0, 1),
(2, 'Bob Martin', '1985-09-27 00:00:00', '2023-04-15 14:22:00', 'bob.martin@example.com', 'hashedpassword456', 1, NULL),
(3, 'Chloé Bernard', '1995-02-03 00:00:00', '2023-05-10 08:00:00', 'chloe.bernard@example.com', 'hashedpassword789', 0, 3),
(4, 'David Lefèvre', '1978-12-11 00:00:00', '2023-06-18 17:45:00', 'david.lefevre@example.com', 'hashedpassword321', 0, 2),
(5, 'Emma Roux', '2000-01-22 00:00:00', '2024-01-05 09:12:00', 'emma.roux@example.com', 'hashedpassword654', 1, NULL),
(6, 'Félix Moreau', '1992-07-30 00:00:00', '2024-03-22 13:00:00', 'felix.moreau@example.com', 'hashedpassword987', 0, 5);

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
    `musee` VARCHAR(255) NULL,
    `ville` VARCHAR(255) NULL,
    `pays` VARCHAR(255) NULL,
    `dimensions` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `artist_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_artwork_user_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_artwork_artist1_idx` (`artist_id` ASC) VISIBLE,
    CONSTRAINT `fk_artwork_artist1` FOREIGN KEY (`artist_id`) REFERENCES `BDD_projet_3`.`artist` (`id`),
    CONSTRAINT `fk_artwork_user` FOREIGN KEY (`user_id`) REFERENCES `BDD_projet_3`.`user` (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;

-- INSERT TEST

INSERT INTO `BDD_projet_3`.`artwork` 
(`id`, `name`, `user_id`, `date_artwork`, `photo`, `musee`, `ville`, `pays`, `dimensions`, `description`, `artist_id`) 
VALUES
(1, 'La Nuit étoilée', 1, '1889-06-01 00:00:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', 'Musée d\'Orsay', 'Paris', 'France', '221 x 332 cm', 'Paysage nocturne vibrant aux tourbillons célestes.', 1),

(2, 'Les Demoiselles d''Avignon', 2, '1907-07-01 00:00:00', 'https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/1440xAUTO_processed_article_2023_08_98c1570a-020f-47ac-b934-bd123ed9b569-banner-master.webp', NULL, NULL, NULL, '221 x 332 cm', 'Scène emblématique du cubisme avec cinq femmes nues aux formes anguleuses.', 2),

(3, 'Impression, soleil levant', 4, '1872-11-13 00:00:00', 'https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg', NULL, NULL, NULL, '221 x 332 cm', 'Tableau à l’origine du terme ''impressionnisme''.', 4),

(4, 'La Persistance de la mémoire', 5, '1931-04-01 00:00:00', 'https://misterprepa.net/wp-content/uploads/2023/07/Salvador-Dali-persistance-de-la-memoire-1931.jpg.webp', NULL, NULL, NULL, '221 x 332 cm', 'Montres molles sur un paysage désertique, allégorie du temps.', 5),

(5, 'Marilyn Diptych', 6, '1962-01-01 00:00:00', 'https://www.singulart.com/blog/wp-content/uploads/2024/02/Marilyn-Diptych.jpg', NULL, NULL, NULL, '221 x 332 cm', 'Portrait sériel de Marilyn Monroe devenu icône du Pop Art.', 6);

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

INSERT INTO `BDD_projet_3`.`movement_has_artwork` (movement_id, artwork_id) VALUES (1,1);
INSERT INTO `BDD_projet_3`.`movement_has_artwork` (movement_id, artwork_id) VALUES (2,1);

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