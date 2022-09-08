-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb`;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  `UID` VARCHAR(8) NOT NULL,
  `name` VARCHAR(200),
  `RG` VARCHAR(14),
  `type` CHAR(10),
  `email` VARCHAR(70),
  `password` VARCHAR(40),
  `balance` FLOAT,
  `isAdm` BOOLEAN,
  PRIMARY KEY (`UID`),
  UNIQUE INDEX `RG_UNIQUE` (`RG` ASC),
  `TIPO_ID` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;