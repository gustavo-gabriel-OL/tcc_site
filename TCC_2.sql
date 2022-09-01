-- -----------------------------------------------------
-- Table `mydb`.`TIPO`
-- -----------------------------------------------------
CREATE TABLE `TIPO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RIFA`.`USER`
-- -----------------------------------------------------
CREATE TABLE `USER` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(100) NOT NULL,
  `CELULAR` INT NOT NULL,
  `LOGIN` VARCHAR(16) NOT NULL,
  `SENHA` VARCHAR(255) NOT NULL,
  `TIPO_ID` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;