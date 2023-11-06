-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2023 at 01:40 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipehub`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryid` int(8) NOT NULL,
  `recipeid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `categoryname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryid`, `recipeid`, `categoryname`) VALUES
(9991, '0', 'chinese'),
(9992, '0', 'itelian'),
(9993, '0', 'american'),
(9994, '0', 'japanese'),
(9995, '0', 'healthy'),
(9996, '0', 'middleeastern'),
(9999, '0', 'desi');

-- --------------------------------------------------------

--
-- Table structure for table `contactinfo`
--

CREATE TABLE `contactinfo` (
  `contactid` int(8) NOT NULL,
  `socialmedia` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `home_no` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactinfo`
--

INSERT INTO `contactinfo` (`contactid`, `socialmedia`, `phone_no`, `home_no`) VALUES
(8388, 'zfgfzg', '69696', '969696'),
(8848, 'ktilik', '45696', '649696'),
(8868, 'eyjeyj', '41696', '96969426'),
(8888, 'afgsdg', '57696', '69696');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderid` int(8) NOT NULL,
  `userid` int(8) NOT NULL,
  `premiumid` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymentid` int(8) NOT NULL,
  `userid` int(8) NOT NULL,
  `premiumid` int(8) NOT NULL,
  `orderid` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `userid` int(8) NOT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `birthdate` datetime NOT NULL,
  `gender` varchar(255) NOT NULL,
  `profilepic` varchar(255) DEFAULT NULL,
  `contactid` int(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `isPremium` tinyint(1) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `aboutMe` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`userid`, `fname`, `lname`, `birthdate`, `gender`, `profilepic`, `contactid`, `password`, `isPremium`, `location`, `aboutMe`, `username`, `email`) VALUES
(1, 'a', 'aa', '0001-02-19 00:00:00', 'm', 'NULL', 8388, '1234', 0, NULL, NULL, '', 'a@b.com'),
(2, 'b', 'bb', '0003-02-19 00:00:00', 'f', 'NULL', 8848, '1334', 0, NULL, NULL, '', 'b@q.com'),
(3, 'c', 'cc', '0005-02-19 00:00:00', 'm', 'NULL', 8868, '2334', 0, NULL, NULL, '', 'L2@r.com'),
(4, NULL, NULL, '2003-01-12 00:00:00', 'Male', NULL, NULL, 'dd', 1, 'mm', NULL, 'dd', 'pp@pp.com'),
(6, NULL, NULL, '0003-01-02 00:00:00', 'Male', NULL, NULL, '1212', NULL, 'df', NULL, 'sad', 'moc@com.com'),
(8, NULL, NULL, '0003-01-02 00:00:00', 'Male', NULL, NULL, '1234', NULL, 'df', NULL, 'nnn', 'ew@sd.com'),
(9, NULL, NULL, '0006-06-07 00:00:00', 'Male', NULL, NULL, '1234', NULL, 'reaaa', NULL, 'ASD', 'llll@ll.com'),
(10, NULL, NULL, '0012-12-31 00:00:00', 'Male', NULL, NULL, '1234', NULL, 'fsdf', NULL, 'azxc', 'lkjh@sad.go');

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `recipeid` int(11) NOT NULL,
  `recipename` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL,
  `recipedescription` varchar(255) DEFAULT NULL,
  `recipepic` blob DEFAULT NULL,
  `recipenutrients` varchar(255) DEFAULT NULL,
  `recipeingrediants` varchar(255) DEFAULT NULL,
  `recipesteps` varchar(255) DEFAULT NULL,
  `recipestags` varchar(255) DEFAULT NULL,
  `recipelink1` varchar(255) DEFAULT NULL,
  `recipelink2` varchar(255) DEFAULT NULL,
  `recipelink3` varchar(255) DEFAULT NULL,
  `isPremium` tinyint(1) DEFAULT NULL,
  `reciperating` int(11) DEFAULT 0,
  `usersWhoRatedCount` int(11) DEFAULT 0,
  `totalRatingCount` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipeid`, `recipename`, `userid`, `recipedescription`, `recipepic`, `recipenutrients`, `recipeingrediants`, `recipesteps`, `recipestags`, `recipelink1`, `recipelink2`, `recipelink3`, `isPremium`, `reciperating`, `usersWhoRatedCount`, `totalRatingCount`) VALUES
(1, 'asd', 'dd', 'jhj', NULL, 'asd', 'dasd\r\nsad', 'asdaaf\r\nasd\r\nad', '#Appetizers', 'asd', 'asd', 'adsd', 0, 3, 3, 8),
(2, 'rrt', 'dd', 'kjk', NULL, 'rtr', 'rtrt\r\nrtr', 'ttrtrtrr', '#Sides', 'rt', 'tr', 'rt', 1, 0, 0, 0),
(3, 'tgs', 'dd', 'iuhkj', NULL, 'gtsh', 'gsthsh', 'sthsh', 'gsth', 'stagsag', 'gstg', 'gsg', 0, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryid`);

--
-- Indexes for table `contactinfo`
--
ALTER TABLE `contactinfo`
  ADD PRIMARY KEY (`contactid`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderid`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentid`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipeid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `categoryid` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10001;

--
-- AUTO_INCREMENT for table `contactinfo`
--
ALTER TABLE `contactinfo`
  MODIFY `contactid` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8889;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderid` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymentid` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `userid` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
