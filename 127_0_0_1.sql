-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: https://sweetelitegame.com:2083
-- Generation Time: Jan 30, 2018 at 01:22 AM
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
-- Database: `USERS`
--
CREATE DATABASE IF NOT EXISTS `USERS` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `USERS`;

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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `affinity`
--

INSERT INTO `affinity` (`id`, `karolina`, `ellie`, `neha`, `raquel`, `claire`, `alistair`, `tadashi`, `tegan`, `tyler`, `axel`, `ladyarlington`, `coachdavis`, `serena`, `cecile`, `teacherchapter2`) VALUES
(1, 25, 25, 25, 21, 25, 24, 20, 5, 0, 0, 0, 0, 0, 0, 0),
(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
(1, 'Scholar', 'XX-XX-XXXX', 0, 0, 4, 0, 2, 2, 1, 0, 1, 1, 1, 1, 1),
(2, 'Scholar', 'XX-XX-XXXX', 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(3, 'Scholar', 'XX-XX-XXXX', 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
CREATE TABLE IF NOT EXISTS `story` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `storylocation` int(11) NOT NULL DEFAULT '0',
  `lastchapterplayed` int(11) NOT NULL DEFAULT '0',
  `physicallocationint` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `story`
--

INSERT INTO `story` (`id`, `storylocation`, `lastchapterplayed`, `physicallocationint`) VALUES
(1, 168, 1, 10),
(2, 52, 0, 0),
(3, 0, 0, 0);

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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `username`, `password`, `email`, `activated`, `joindate`, `energy`, `money`, `nbreplays`) VALUES
(1, 'serena', '$2y$10$0Sno.aZA6rg4tEbs8F4pmu6WxKre7ukty4d5jcOX5m9i40zZZlR3W', 'june.serena.b@gmail.com', '1', '2017-10-30 16:28:33', 0, 100, 5),
(2, 'lightshadow', '$2y$10$WNc23xD/a6K3mDfXrcGkPepbmzev3qAN0jwB8rXLOTVsZzX/uFuKO', 'lightshadowman@gmail.com', '1', '2017-10-30 16:30:26', -1, 100, 5),
(3, 'shadex', '$2y$10$2JltO2.YjLpwiNQcU0ELb.RUWJCfLDLI9A.Qcsmvl5O.KnqgvcLEa', 'shadex@gmail.com', '1', '2017-11-02 20:59:09', -1, 100, 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
