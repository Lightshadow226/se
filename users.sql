-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 10, 2018 at 12:45 AM
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
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
(1, 'Scholar', 'XX-XX-XXXX', 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

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
(1, 0, 0, 0);

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
