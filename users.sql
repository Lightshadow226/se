-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 15, 2018 at 09:28 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `affinity`
--

DROP TABLE IF EXISTS `affinity`;
CREATE TABLE IF NOT EXISTS `affinity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `karolina` int(100) NOT NULL DEFAULT '0',
  `ellie` int(100) NOT NULL DEFAULT '0',
  `neha` int(100) NOT NULL DEFAULT '0',
  `raquel` int(100) NOT NULL DEFAULT '0',
  `claire` int(100) NOT NULL DEFAULT '0',
  `alistair` int(100) NOT NULL DEFAULT '0',
  `tadashi` int(100) NOT NULL DEFAULT '0',
  `tegan` int(100) NOT NULL DEFAULT '0',
  `tyler` int(100) NOT NULL DEFAULT '0',
  `axel` int(100) NOT NULL DEFAULT '0',
  `ladyarlington` int(50) NOT NULL DEFAULT '0',
  `coachdavis` int(50) NOT NULL DEFAULT '0',
  `serena` int(50) NOT NULL DEFAULT '0',
  `cecile` int(50) NOT NULL DEFAULT '0',
  `teacherchapter2` int(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `affinity`
--

INSERT INTO `affinity` (`id`, `karolina`, `ellie`, `neha`, `raquel`, `claire`, `alistair`, `tadashi`, `tegan`, `tyler`, `axel`, `ladyarlington`, `coachdavis`, `serena`, `cecile`, `teacherchapter2`) VALUES
(1, 0, 0, 20, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `chapter0_story`
--

DROP TABLE IF EXISTS `chapter0_story`;
CREATE TABLE IF NOT EXISTS `chapter0_story` (
  `id` int(11) NOT NULL,
  `c0` tinyint(1) DEFAULT '0',
  `c1` tinyint(1) DEFAULT '0',
  `c2` tinyint(1) DEFAULT '0',
  `c3` tinyint(1) DEFAULT '0',
  `c4` tinyint(1) DEFAULT '0',
  `c5` tinyint(1) DEFAULT '0',
  `c6` tinyint(1) DEFAULT '0',
  `c7` tinyint(1) DEFAULT '0',
  `c8` tinyint(1) DEFAULT '0',
  `c9` tinyint(1) DEFAULT '0',
  `c10` tinyint(1) DEFAULT '0',
  `c11` tinyint(1) DEFAULT '0',
  `c12` tinyint(1) DEFAULT '0',
  `c13` tinyint(1) DEFAULT '0',
  `c14` tinyint(1) DEFAULT '0',
  `c15` tinyint(1) DEFAULT '0',
  `c16` tinyint(1) DEFAULT '0',
  `c17` tinyint(1) DEFAULT '0',
  `c18` tinyint(1) DEFAULT '0',
  `c19` tinyint(1) DEFAULT '0',
  `c20` tinyint(1) DEFAULT '0',
  `c21` tinyint(1) DEFAULT '0',
  `c22` tinyint(1) DEFAULT '0',
  `c23` tinyint(1) DEFAULT '0',
  `c24` tinyint(1) DEFAULT '0',
  `c25` tinyint(1) DEFAULT '0',
  `c26` tinyint(1) DEFAULT '0',
  `c27` tinyint(1) DEFAULT '0',
  `c28` tinyint(1) DEFAULT '0',
  `c29` tinyint(1) DEFAULT '0',
  `c30` tinyint(1) DEFAULT '0',
  `c31` tinyint(1) DEFAULT '0',
  `c32` tinyint(1) DEFAULT '0',
  `c33` tinyint(1) DEFAULT '0',
  `c34` tinyint(1) DEFAULT '0',
  `c35` tinyint(1) DEFAULT '0',
  `c36` tinyint(1) DEFAULT '0',
  `c37` tinyint(1) DEFAULT '0',
  `c38` tinyint(1) DEFAULT '0',
  `c39` tinyint(1) DEFAULT '0',
  `c40` tinyint(1) DEFAULT '0',
  `c41` tinyint(1) DEFAULT '0',
  `c42` tinyint(1) DEFAULT '0',
  `c43` tinyint(1) DEFAULT '0',
  `c44` tinyint(1) DEFAULT '0',
  `c45` tinyint(1) DEFAULT '0',
  `c46` tinyint(1) DEFAULT '0',
  `c47` tinyint(1) DEFAULT '0',
  `c48` tinyint(1) DEFAULT '0',
  `c49` tinyint(1) DEFAULT '0',
  `c50` tinyint(1) DEFAULT '0',
  `c51` tinyint(1) DEFAULT '0',
  `c52` tinyint(1) DEFAULT '0',
  `c53` tinyint(1) DEFAULT '0',
  `c54` tinyint(1) DEFAULT '0',
  `c55` tinyint(1) DEFAULT '0',
  `c56` tinyint(1) DEFAULT '0',
  `c57` tinyint(1) DEFAULT '0',
  `c58` tinyint(1) DEFAULT '0',
  `c59` tinyint(1) DEFAULT '0',
  `c60` tinyint(1) DEFAULT '0',
  `c61` tinyint(1) DEFAULT '0',
  `c62` tinyint(1) DEFAULT '0',
  `c63` tinyint(1) DEFAULT '0',
  `c64` tinyint(1) DEFAULT '0',
  `c65` tinyint(1) DEFAULT '0',
  `c66` tinyint(1) DEFAULT '0',
  `c67` tinyint(1) DEFAULT '0',
  `c68` tinyint(1) DEFAULT '0',
  `c69` tinyint(1) DEFAULT '0',
  `c70` tinyint(1) DEFAULT '0',
  `c71` tinyint(1) DEFAULT '0',
  `c72` tinyint(1) DEFAULT '0',
  `c73` tinyint(1) DEFAULT '0',
  `c74` tinyint(1) DEFAULT '0',
  `c75` tinyint(1) DEFAULT '0',
  `c76` tinyint(1) DEFAULT '0',
  `c77` tinyint(1) DEFAULT '0',
  `c78` tinyint(1) DEFAULT '0',
  `c79` tinyint(1) DEFAULT '0',
  `c80` tinyint(1) DEFAULT '0',
  `c81` tinyint(1) DEFAULT '0',
  `c82` tinyint(1) DEFAULT '0',
  `c83` tinyint(1) DEFAULT '0',
  `c84` tinyint(1) DEFAULT '0',
  `c85` tinyint(1) DEFAULT '0',
  `c86` tinyint(1) DEFAULT '0',
  `c87` tinyint(1) DEFAULT '0',
  `c88` tinyint(1) DEFAULT '0',
  `c89` tinyint(1) DEFAULT '0',
  `c90` tinyint(1) DEFAULT '0',
  `c91` tinyint(1) DEFAULT '0',
  `c92` tinyint(1) DEFAULT '0',
  `c93` tinyint(1) DEFAULT '0',
  `c94` tinyint(1) DEFAULT '0',
  `c95` tinyint(1) DEFAULT '0',
  `c96` tinyint(1) DEFAULT '0',
  `c97` tinyint(1) DEFAULT '0',
  `c98` tinyint(1) DEFAULT '0',
  `c99` tinyint(1) DEFAULT '0',
  `c100` tinyint(1) DEFAULT '0',
  `c101` tinyint(1) DEFAULT '0',
  `c102` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chapter0_story`
--

INSERT INTO `chapter0_story` (`id`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`, `c26`, `c27`, `c28`, `c29`, `c30`, `c31`, `c32`, `c33`, `c34`, `c35`, `c36`, `c37`, `c38`, `c39`, `c40`, `c41`, `c42`, `c43`, `c44`, `c45`, `c46`, `c47`, `c48`, `c49`, `c50`, `c51`, `c52`, `c53`, `c54`, `c55`, `c56`, `c57`, `c58`, `c59`, `c60`, `c61`, `c62`, `c63`, `c64`, `c65`, `c66`, `c67`, `c68`, `c69`, `c70`, `c71`, `c72`, `c73`, `c74`, `c75`, `c76`, `c77`, `c78`, `c79`, `c80`, `c81`, `c82`, `c83`, `c84`, `c85`, `c86`, `c87`, `c88`, `c89`, `c90`, `c91`, `c92`, `c93`, `c94`, `c95`, `c96`, `c97`, `c98`, `c99`, `c100`, `c101`, `c102`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `chapter1_story`
--

DROP TABLE IF EXISTS `chapter1_story`;
CREATE TABLE IF NOT EXISTS `chapter1_story` (
  `id` int(11) NOT NULL,
  `c0` tinyint(1) DEFAULT '0',
  `c1` tinyint(1) DEFAULT '0',
  `c2` tinyint(1) DEFAULT '0',
  `c3` tinyint(1) DEFAULT '0',
  `c4` tinyint(1) DEFAULT '0',
  `c5` tinyint(1) DEFAULT '0',
  `c6` tinyint(1) DEFAULT '0',
  `c7` tinyint(1) DEFAULT '0',
  `c8` tinyint(1) DEFAULT '0',
  `c9` tinyint(1) DEFAULT '0',
  `c10` tinyint(1) DEFAULT '0',
  `c11` tinyint(1) DEFAULT '0',
  `c12` tinyint(1) DEFAULT '0',
  `c13` tinyint(1) DEFAULT '0',
  `c14` tinyint(1) DEFAULT '0',
  `c15` tinyint(1) DEFAULT '0',
  `c16` tinyint(1) DEFAULT '0',
  `c17` tinyint(1) DEFAULT '0',
  `c18` tinyint(1) DEFAULT '0',
  `c19` tinyint(1) DEFAULT '0',
  `c20` tinyint(1) DEFAULT '0',
  `c21` tinyint(1) DEFAULT '0',
  `c22` tinyint(1) DEFAULT '0',
  `c23` tinyint(1) DEFAULT '0',
  `c24` tinyint(1) DEFAULT '0',
  `c25` tinyint(1) DEFAULT '0',
  `c26` tinyint(1) DEFAULT '0',
  `c27` tinyint(1) DEFAULT '0',
  `c28` tinyint(1) DEFAULT '0',
  `c29` tinyint(1) DEFAULT '0',
  `c30` tinyint(1) DEFAULT '0',
  `c31` tinyint(1) DEFAULT '0',
  `c32` tinyint(1) DEFAULT '0',
  `c33` tinyint(1) DEFAULT '0',
  `c34` tinyint(1) DEFAULT '0',
  `c35` tinyint(1) DEFAULT '0',
  `c36` tinyint(1) DEFAULT '0',
  `c37` tinyint(1) DEFAULT '0',
  `c38` tinyint(1) DEFAULT '0',
  `c39` tinyint(1) DEFAULT '0',
  `c40` tinyint(1) DEFAULT '0',
  `c41` tinyint(1) DEFAULT '0',
  `c42` tinyint(1) DEFAULT '0',
  `c43` tinyint(1) DEFAULT '0',
  `c44` tinyint(1) DEFAULT '0',
  `c45` tinyint(1) DEFAULT '0',
  `c46` tinyint(1) DEFAULT '0',
  `c47` tinyint(1) DEFAULT '0',
  `c48` tinyint(1) DEFAULT '0',
  `c49` tinyint(1) DEFAULT '0',
  `c50` tinyint(1) DEFAULT '0',
  `c51` tinyint(1) DEFAULT '0',
  `c52` tinyint(1) DEFAULT '0',
  `c53` tinyint(1) DEFAULT '0',
  `c54` tinyint(1) DEFAULT '0',
  `c55` tinyint(1) DEFAULT '0',
  `c56` tinyint(1) DEFAULT '0',
  `c57` tinyint(1) DEFAULT '0',
  `c58` tinyint(1) DEFAULT '0',
  `c59` tinyint(1) DEFAULT '0',
  `c60` tinyint(1) DEFAULT '0',
  `c61` tinyint(1) DEFAULT '0',
  `c62` tinyint(1) DEFAULT '0',
  `c63` tinyint(1) DEFAULT '0',
  `c64` tinyint(1) DEFAULT '0',
  `c65` tinyint(1) DEFAULT '0',
  `c66` tinyint(1) DEFAULT '0',
  `c67` tinyint(1) DEFAULT '0',
  `c68` tinyint(1) DEFAULT '0',
  `c69` tinyint(1) DEFAULT '0',
  `c70` tinyint(1) DEFAULT '0',
  `c71` tinyint(1) DEFAULT '0',
  `c72` tinyint(1) DEFAULT '0',
  `c73` tinyint(1) DEFAULT '0',
  `c74` tinyint(1) DEFAULT '0',
  `c75` tinyint(1) DEFAULT '0',
  `c76` tinyint(1) DEFAULT '0',
  `c77` tinyint(1) DEFAULT '0',
  `c78` tinyint(1) DEFAULT '0',
  `c79` tinyint(1) DEFAULT '0',
  `c80` tinyint(1) DEFAULT '0',
  `c81` tinyint(1) DEFAULT '0',
  `c82` tinyint(1) DEFAULT '0',
  `c83` tinyint(1) DEFAULT '0',
  `c84` tinyint(1) DEFAULT '0',
  `c85` tinyint(1) DEFAULT '0',
  `c86` tinyint(1) DEFAULT '0',
  `c87` tinyint(1) DEFAULT '0',
  `c88` tinyint(1) DEFAULT '0',
  `c89` tinyint(1) DEFAULT '0',
  `c90` tinyint(1) DEFAULT '0',
  `c91` tinyint(1) DEFAULT '0',
  `c92` tinyint(1) DEFAULT '0',
  `c93` tinyint(1) DEFAULT '0',
  `c94` tinyint(1) DEFAULT '0',
  `c95` tinyint(1) DEFAULT '0',
  `c96` tinyint(1) DEFAULT '0',
  `c97` tinyint(1) DEFAULT '0',
  `c98` tinyint(1) DEFAULT '0',
  `c99` tinyint(1) DEFAULT '0',
  `c100` tinyint(1) DEFAULT '0',
  `c101` tinyint(1) DEFAULT '0',
  `c102` tinyint(1) DEFAULT '0',
  `c103` tinyint(1) DEFAULT '0',
  `c104` tinyint(1) DEFAULT '0',
  `c105` tinyint(1) DEFAULT '0',
  `c106` tinyint(1) DEFAULT '0',
  `c107` tinyint(1) DEFAULT '0',
  `c108` tinyint(1) DEFAULT '0',
  `c109` tinyint(1) DEFAULT '0',
  `c110` tinyint(1) DEFAULT '0',
  `c111` tinyint(1) DEFAULT '0',
  `c112` tinyint(1) DEFAULT '0',
  `c113` tinyint(1) DEFAULT '0',
  `c114` tinyint(1) DEFAULT '0',
  `c115` tinyint(1) DEFAULT '0',
  `c116` tinyint(1) DEFAULT '0',
  `c117` tinyint(1) DEFAULT '0',
  `c118` tinyint(1) DEFAULT '0',
  `c119` tinyint(1) DEFAULT '0',
  `c120` tinyint(1) DEFAULT '0',
  `c121` tinyint(1) DEFAULT '0',
  `c122` tinyint(1) DEFAULT '0',
  `c123` tinyint(1) DEFAULT '0',
  `c124` tinyint(1) DEFAULT '0',
  `c125` tinyint(1) DEFAULT '0',
  `c126` tinyint(1) DEFAULT '0',
  `c127` tinyint(1) DEFAULT '0',
  `c128` tinyint(1) DEFAULT '0',
  `c129` tinyint(1) DEFAULT '0',
  `c130` tinyint(1) DEFAULT '0',
  `c131` tinyint(1) DEFAULT '0',
  `c132` tinyint(1) DEFAULT '0',
  `c133` tinyint(1) DEFAULT '0',
  `c134` tinyint(1) DEFAULT '0',
  `c135` tinyint(1) DEFAULT '0',
  `c136` tinyint(1) DEFAULT '0',
  `c137` tinyint(1) DEFAULT '0',
  `c138` tinyint(1) DEFAULT '0',
  `c139` tinyint(1) DEFAULT '0',
  `c140` tinyint(1) DEFAULT '0',
  `c141` tinyint(1) DEFAULT '0',
  `c142` tinyint(1) DEFAULT '0',
  `c143` tinyint(1) DEFAULT '0',
  `c144` tinyint(1) DEFAULT '0',
  `c145` tinyint(1) DEFAULT '0',
  `c146` tinyint(1) DEFAULT '0',
  `c147` tinyint(1) DEFAULT '0',
  `c148` tinyint(1) DEFAULT '0',
  `c149` tinyint(1) DEFAULT '0',
  `c150` tinyint(1) DEFAULT '0',
  `c151` tinyint(1) DEFAULT '0',
  `c152` tinyint(1) DEFAULT '0',
  `c153` tinyint(1) DEFAULT '0',
  `c154` tinyint(1) DEFAULT '0',
  `c155` tinyint(1) DEFAULT '0',
  `c156` tinyint(1) DEFAULT '0',
  `c157` tinyint(1) DEFAULT '0',
  `c158` tinyint(1) DEFAULT '0',
  `c159` tinyint(1) DEFAULT '0',
  `c160` tinyint(1) DEFAULT '0',
  `c161` tinyint(1) DEFAULT '0',
  `c162` tinyint(1) DEFAULT '0',
  `c163` tinyint(1) DEFAULT '0',
  `c164` tinyint(1) DEFAULT '0',
  `c165` tinyint(1) DEFAULT '0',
  `c166` tinyint(1) DEFAULT '0',
  `c167` tinyint(1) DEFAULT '0',
  `c168` tinyint(1) DEFAULT '0',
  `c169` tinyint(1) DEFAULT '0',
  `c170` tinyint(1) DEFAULT '0',
  `c171` tinyint(1) DEFAULT '0',
  `c172` tinyint(1) DEFAULT '0',
  `c173` tinyint(1) DEFAULT '0',
  `c174` tinyint(1) DEFAULT '0',
  `c175` tinyint(1) DEFAULT '0',
  `c176` tinyint(1) DEFAULT '0',
  `c177` tinyint(1) DEFAULT '0',
  `c178` tinyint(1) DEFAULT '0',
  `c179` tinyint(1) DEFAULT '0',
  `c180` tinyint(1) DEFAULT '0',
  `c181` tinyint(1) DEFAULT '0',
  `c182` tinyint(1) DEFAULT '0',
  `c183` tinyint(1) DEFAULT '0',
  `c184` tinyint(1) DEFAULT '0',
  `c185` tinyint(1) DEFAULT '0',
  `c186` tinyint(1) DEFAULT '0',
  `c187` tinyint(1) DEFAULT '0',
  `c188` tinyint(1) DEFAULT '0',
  `c189` tinyint(1) DEFAULT '0',
  `c190` tinyint(1) DEFAULT '0',
  `c191` tinyint(1) DEFAULT '0',
  `c192` tinyint(1) DEFAULT '0',
  `c193` tinyint(1) DEFAULT '0',
  `c194` tinyint(1) DEFAULT '0',
  `c195` tinyint(1) DEFAULT '0',
  `c196` tinyint(1) DEFAULT '0',
  `c197` tinyint(1) DEFAULT '0',
  `c198` tinyint(1) DEFAULT '0',
  `c199` tinyint(1) DEFAULT '0',
  `c200` tinyint(1) DEFAULT '0',
  `c201` tinyint(1) DEFAULT '0',
  `c202` tinyint(1) DEFAULT '0',
  `c203` tinyint(1) DEFAULT '0',
  `c204` tinyint(1) DEFAULT '0',
  `c205` tinyint(1) DEFAULT '0',
  `c206` tinyint(1) DEFAULT '0',
  `c207` tinyint(1) DEFAULT '0',
  `c208` tinyint(1) DEFAULT '0',
  `c209` tinyint(1) DEFAULT '0',
  `c210` tinyint(1) DEFAULT '0',
  `c211` tinyint(1) DEFAULT '0',
  `c212` tinyint(1) DEFAULT '0',
  `c213` tinyint(1) DEFAULT '0',
  `c214` tinyint(1) DEFAULT '0',
  `c215` tinyint(1) DEFAULT '0',
  `c216` tinyint(1) DEFAULT '0',
  `c217` tinyint(1) DEFAULT '0',
  `c218` tinyint(1) DEFAULT '0',
  `c219` tinyint(1) DEFAULT '0',
  `c220` tinyint(1) DEFAULT '0',
  `c221` tinyint(1) DEFAULT '0',
  `c222` tinyint(1) DEFAULT '0',
  `c223` tinyint(1) DEFAULT '0',
  `c224` tinyint(1) DEFAULT '0',
  `c225` tinyint(1) DEFAULT '0',
  `c226` tinyint(1) DEFAULT '0',
  `c227` tinyint(1) DEFAULT '0',
  `c228` tinyint(1) DEFAULT '0',
  `c229` tinyint(1) DEFAULT '0',
  `c230` tinyint(1) DEFAULT '0',
  `c231` tinyint(1) DEFAULT '0',
  `c232` tinyint(1) DEFAULT '0',
  `c233` tinyint(1) DEFAULT '0',
  `c234` tinyint(1) DEFAULT '0',
  `c235` tinyint(1) DEFAULT '0',
  `c236` tinyint(1) DEFAULT '0',
  `c237` tinyint(1) DEFAULT '0',
  `c238` tinyint(1) DEFAULT '0',
  `c239` tinyint(1) DEFAULT '0',
  `c240` tinyint(1) DEFAULT '0',
  `c241` tinyint(1) DEFAULT '0',
  `c242` tinyint(1) DEFAULT '0',
  `c243` tinyint(1) DEFAULT '0',
  `c244` tinyint(1) DEFAULT '0',
  `c245` tinyint(1) DEFAULT '0',
  `c246` tinyint(1) DEFAULT '0',
  `c247` tinyint(1) DEFAULT '0',
  `c248` tinyint(1) DEFAULT '0',
  `c249` tinyint(1) DEFAULT '0',
  `c250` tinyint(1) DEFAULT '0',
  `c251` tinyint(1) DEFAULT '0',
  `c252` tinyint(1) DEFAULT '0',
  `c253` tinyint(1) DEFAULT '0',
  `c254` tinyint(1) DEFAULT '0',
  `c255` tinyint(1) DEFAULT '0',
  `c256` tinyint(1) DEFAULT '0',
  `c257` tinyint(1) DEFAULT '0',
  `c258` tinyint(1) DEFAULT '0',
  `c259` tinyint(1) DEFAULT '0',
  `c260` tinyint(1) DEFAULT '0',
  `c261` tinyint(1) DEFAULT '0',
  `c262` tinyint(1) DEFAULT '0',
  `c263` tinyint(1) DEFAULT '0',
  `c264` tinyint(1) DEFAULT '0',
  `c265` tinyint(1) DEFAULT '0',
  `c266` tinyint(1) DEFAULT '0',
  `c267` tinyint(1) DEFAULT '0',
  `c268` tinyint(1) DEFAULT '0',
  `c269` tinyint(1) DEFAULT '0',
  `c270` tinyint(1) DEFAULT '0',
  `c271` tinyint(1) DEFAULT '0',
  `c272` tinyint(1) DEFAULT '0',
  `c273` tinyint(1) DEFAULT '0',
  `c274` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chapter1_story`
--

INSERT INTO `chapter1_story` (`id`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`, `c26`, `c27`, `c28`, `c29`, `c30`, `c31`, `c32`, `c33`, `c34`, `c35`, `c36`, `c37`, `c38`, `c39`, `c40`, `c41`, `c42`, `c43`, `c44`, `c45`, `c46`, `c47`, `c48`, `c49`, `c50`, `c51`, `c52`, `c53`, `c54`, `c55`, `c56`, `c57`, `c58`, `c59`, `c60`, `c61`, `c62`, `c63`, `c64`, `c65`, `c66`, `c67`, `c68`, `c69`, `c70`, `c71`, `c72`, `c73`, `c74`, `c75`, `c76`, `c77`, `c78`, `c79`, `c80`, `c81`, `c82`, `c83`, `c84`, `c85`, `c86`, `c87`, `c88`, `c89`, `c90`, `c91`, `c92`, `c93`, `c94`, `c95`, `c96`, `c97`, `c98`, `c99`, `c100`, `c101`, `c102`, `c103`, `c104`, `c105`, `c106`, `c107`, `c108`, `c109`, `c110`, `c111`, `c112`, `c113`, `c114`, `c115`, `c116`, `c117`, `c118`, `c119`, `c120`, `c121`, `c122`, `c123`, `c124`, `c125`, `c126`, `c127`, `c128`, `c129`, `c130`, `c131`, `c132`, `c133`, `c134`, `c135`, `c136`, `c137`, `c138`, `c139`, `c140`, `c141`, `c142`, `c143`, `c144`, `c145`, `c146`, `c147`, `c148`, `c149`, `c150`, `c151`, `c152`, `c153`, `c154`, `c155`, `c156`, `c157`, `c158`, `c159`, `c160`, `c161`, `c162`, `c163`, `c164`, `c165`, `c166`, `c167`, `c168`, `c169`, `c170`, `c171`, `c172`, `c173`, `c174`, `c175`, `c176`, `c177`, `c178`, `c179`, `c180`, `c181`, `c182`, `c183`, `c184`, `c185`, `c186`, `c187`, `c188`, `c189`, `c190`, `c191`, `c192`, `c193`, `c194`, `c195`, `c196`, `c197`, `c198`, `c199`, `c200`, `c201`, `c202`, `c203`, `c204`, `c205`, `c206`, `c207`, `c208`, `c209`, `c210`, `c211`, `c212`, `c213`, `c214`, `c215`, `c216`, `c217`, `c218`, `c219`, `c220`, `c221`, `c222`, `c223`, `c224`, `c225`, `c226`, `c227`, `c228`, `c229`, `c230`, `c231`, `c232`, `c233`, `c234`, `c235`, `c236`, `c237`, `c238`, `c239`, `c240`, `c241`, `c242`, `c243`, `c244`, `c245`, `c246`, `c247`, `c248`, `c249`, `c250`, `c251`, `c252`, `c253`, `c254`, `c255`, `c256`, `c257`, `c258`, `c259`, `c260`, `c261`, `c262`, `c263`, `c264`, `c265`, `c266`, `c267`, `c268`, `c269`, `c270`, `c271`, `c272`, `c273`, `c274`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `scholarinfo`
--

DROP TABLE IF EXISTS `scholarinfo`;
CREATE TABLE IF NOT EXISTS `scholarinfo` (
  `id` int(11) NOT NULL,
  `scholar_name` varchar(35) NOT NULL DEFAULT 'Scholar',
  `scholar_dob` varchar(15) NOT NULL DEFAULT 'XX-XX-XXXX',
  `scholar_gender` int(11) NOT NULL DEFAULT '0',
  `scholar_sex` int(11) NOT NULL DEFAULT '0',
  `scholar_department` int(11) NOT NULL DEFAULT '0',
  `scholar_haircolor` int(11) NOT NULL DEFAULT '1',
  `scholar_hairstyle` int(11) NOT NULL DEFAULT '1',
  `scholar_skincolor` int(11) NOT NULL DEFAULT '1',
  `scholar_eyecolor` int(11) NOT NULL DEFAULT '1',
  `wig_id` int(11) NOT NULL DEFAULT '1',
  `shirt_id` int(11) NOT NULL DEFAULT '1',
  `pants_id` int(11) NOT NULL DEFAULT '1',
  `socks_id` int(11) NOT NULL DEFAULT '1',
  `shoes_id` int(11) NOT NULL DEFAULT '1',
  `accessory_id` int(11) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scholarinfo`
--

INSERT INTO `scholarinfo` (`id`, `scholar_name`, `scholar_dob`, `scholar_gender`, `scholar_sex`, `scholar_department`, `scholar_haircolor`, `scholar_hairstyle`, `scholar_skincolor`, `scholar_eyecolor`, `wig_id`, `shirt_id`, `pants_id`, `socks_id`, `shoes_id`, `accessory_id`) VALUES
(1, 'Lightshadow', 'XX-XX-XXXX', 1, 0, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
CREATE TABLE IF NOT EXISTS `story` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `storylocation` int(11) NOT NULL DEFAULT '0',
  `lastchapterplayed` int(11) NOT NULL DEFAULT '0',
  `physicallocationint` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `story`
--

INSERT INTO `story` (`id`, `storylocation`, `lastchapterplayed`, `physicallocationint`) VALUES
(1, 274, 1, 12);

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE IF NOT EXISTS `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `activated` enum('0','1') DEFAULT '0',
  `joindate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `energy` int(11) NOT NULL DEFAULT '-1',
  `money` int(11) NOT NULL DEFAULT '100',
  `nbreplays` int(11) NOT NULL DEFAULT '5',
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `username`, `password`, `email`, `activated`, `joindate`, `energy`, `money`, `nbreplays`) VALUES
(1, 'Lightshadow', '$2y$10$UZMJfJuMm4C.5In91X/P7.uadWRn0/ZP9so5oONeRo.yVtIze1Psy', 'lightshadowman@gmail.com', '1', '2018-05-09 20:43:53', -1, 100, 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
