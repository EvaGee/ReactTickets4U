-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 13, 2019 at 11:02 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickets`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `account_name` varchar(100) NOT NULL,
  `account_ref` varchar(100) NOT NULL,
  `available_balance` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `account_name`, `account_ref`, `available_balance`, `created_at`, `updated_at`) VALUES
(16, 'Jo sha', '708899536', 0, '2019-04-12 09:20:55', '0000-00-00 00:00:00'),
(17, 'Lucas', '708899537', 0, '2019-04-16 07:41:29', '0000-00-00 00:00:00'),
(18, 'martin', '0727721659', 0, '2019-05-02 08:33:51', '0000-00-00 00:00:00'),
(19, 'Gabriel Makau', '0705679493', 17020, '2019-05-30 11:07:05', '0000-00-00 00:00:00'),
(20, 'Evans Manana', '0782603014', 0, '2019-05-30 11:15:16', '0000-00-00 00:00:00'),
(21, 'Jude Kikuyu', '0725049683', 0, '2019-05-30 12:00:39', '0000-00-00 00:00:00'),
(22, 'Evans Manana', '0719828319', 72, '2019-06-21 06:35:34', '0000-00-00 00:00:00'),
(23, 'JUde', '0773427047', 2, '2019-06-21 10:08:09', '0000-00-00 00:00:00'),
(24, 'Jon', '07777777777', 0, '2019-06-21 21:57:52', '0000-00-00 00:00:00'),
(25, 'Rob Hillman', '07725955620', 0, '2019-06-29 05:50:30', '0000-00-00 00:00:00'),
(26, 'Prashanth', '9550282909', 0, '2019-07-07 06:07:19', '0000-00-00 00:00:00'),
(27, 'Madam Sarah', '722987023', 0, '2019-07-10 10:20:20', '0000-00-00 00:00:00'),
(28, 'Andrew', '0724419446', 0, '2019-07-11 13:32:29', '0000-00-00 00:00:00'),
(29, 'EvaGee', '0707070707', 0, '2019-09-06 09:34:47', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0-off & 1-on',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'sports', 1, '2018-10-12 06:46:23', '0000-00-00 00:00:00'),
(3, 'Concerts', 1, '2019-03-26 09:20:48', '0000-00-00 00:00:00'),
(4, 'Theaters', 1, '2019-03-26 09:20:48', '0000-00-00 00:00:00'),
(5, 'Parties', 1, '2019-03-26 09:21:15', '0000-00-00 00:00:00'),
(6, 'Communities', 1, '2019-03-26 09:21:15', '0000-00-00 00:00:00'),
(7, 'Classes', 1, '2019-03-26 09:21:29', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(15) UNSIGNED NOT NULL,
  `account_id` int(15) NOT NULL,
  `ipay_commission` float NOT NULL DEFAULT '8' COMMENT '%',
  `event_title` varchar(40) NOT NULL,
  `event_venue` varchar(40) NOT NULL,
  `event_coodinates` varchar(40) NOT NULL,
  `event_date` date NOT NULL,
  `event_status` int(3) NOT NULL,
  `event_free` int(3) NOT NULL,
  `event_category_id` int(15) NOT NULL,
  `event_created_by` varchar(199) NOT NULL,
  `event_promoted` int(3) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `account_id`, `ipay_commission`, `event_title`, `event_venue`, `event_coodinates`, `event_date`, `event_status`, `event_free`, `event_category_id`, `event_created_by`, `event_promoted`, `created_at`, `updated_at`, `end_date`) VALUES
(68, 17, 8, 'Test', 'Kililimbi', 'Carbanas', '2019-11-20', 0, 1, 5, 'l@gmail.com', 0, '2019-04-16 09:01:52', '0000-00-00 00:00:00', '0000-00-00'),
(69, 18, 8, 'Twende Costo', 'South coast', 'South coast', '2019-12-10', 1, 1, 5, 'ngushdare@gmail.com', 0, '2019-06-27 06:40:32', '0000-00-00 00:00:00', '0000-00-00'),
(70, 18, 8, 'Sales Training Event', 'IMPACT INSTITUTE', 'IMPACT INSTITUTE', '2019-10-17', 1, 1, 7, 'ngushdare@gmail.com', 0, '2019-06-27 07:05:13', '0000-00-00 00:00:00', '0000-00-00'),
(71, 18, 8, 'iPay Affiliate Program launch', 'Nailab, 4th Floor Bishop Magua Centre', 'Nailab, 4th Floor Bishop Magua Centre', '2019-09-11', 1, 1, 7, 'ngushdare@gmail.com', 0, '2019-06-27 07:30:02', '0000-00-00 00:00:00', '0000-00-00'),
(72, 27, 8, 'Westgate Autoshow', 'Westgate Shopping Mall', 'Westlands', '2020-01-03', 1, 1, 6, 'aspenenterprisesltd@gmail.com', 0, '2019-07-10 06:26:40', '0000-00-00 00:00:00', '2019-08-03'),
(73, 29, 8, 'e', 'e', 'e', '2019-09-19', 0, 1, 3, 'evam@gmail.com', 0, '2019-09-09 12:49:06', '0000-00-00 00:00:00', '2019-09-11');

-- --------------------------------------------------------

--
-- Table structure for table `event_Assets`
--

CREATE TABLE `event_Assets` (
  `id` int(11) NOT NULL,
  `event_id` int(11) UNSIGNED NOT NULL,
  `video` text NOT NULL,
  `sponsor_logo` text NOT NULL,
  `slider_image` blob NOT NULL,
  `cover_image` text NOT NULL,
  `event_description` text NOT NULL,
  `snapshots` text COMMENT 'json with image & description',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event_Assets`
--

INSERT INTO `event_Assets` (`id`, `event_id`, `video`, `sponsor_logo`, `slider_image`, `cover_image`, `event_description`, `snapshots`, `created_at`, `updated_at`) VALUES
(93, 69, '', '', 0x68747470733a2f2f64617368626f6172642e7469636b65747334752e636f2e6b652f6173736574732f75706c6f6164732f64333765396130343338306564623935313733656534626637336662363039322e6a706567, 'https://dashboard.tickets4u.co.ke/assets/uploads/7015ce2be9e43ecfc24f199cc128b5e9.jpeg', '<p style=\"margin-bottom: 6px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41); font-size: 14px;\"><a class=\"_58cn\" href=\"https://www.facebook.com/hashtag/bonfirecsrupdate?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARABbCKDNzdldpvBpCjKG3hvlSdePTDfacJ0Uwt5ykDj2mlRyM9MGQ2OFjMDeoKsJQ4dVuk1pEuYGA6ZURW1Kmw4uaD1ht0yo6U85D0QJwu96TWt4J-QF9fTP0ZMxohRb-zzBEq_DJSzKvtQ4sS_pxE27G_sCUZTx_C6KraOh4o7BMDxKchGUbMb9SIIM1R_DKVvGYcgush3xKrceCGSBeQWImdUkKdq4vNm1YY4RSJ19WUnNpmNveTShA4GP4v__qj-d0BIflMTp_P8WzQfAFvjHEQp4T0ASBx5jcW6OlGSF4BTUkvd-n8e36VmNoi05PDvLm8tgaJI-xTNxMABqv9Nng&amp;__tn__=%2ANK-R\" data-ft=\"{&quot;type&quot;:104,&quot;tn&quot;:&quot;*N&quot;}\" style=\"color: rgb(54, 88, 153); font-family: inherit;\"><span class=\"_5afx\" style=\"direction: ltr; unicode-bidi: isolate; font-family: inherit;\"><span aria-label=\"hashtag\" class=\"_58cl _5afz\" style=\"unicode-bidi: isolate; font-family: inherit;\"><br class=\"Apple-interchange-newline\">#</span><span class=\"_58cm\" style=\"font-family: inherit;\">BonfireCSRupdate</span></span></a>: Tufly Twende Coasto Pap&nbsp;<span class=\"_5mfr\" style=\"margin: 0px 1px; font-family: inherit;\"><span class=\"_6qdm\" style=\"background-repeat: no-repeat; background-size: contain; color: transparent; display: inline-block; text-shadow: none; vertical-align: text-bottom; font-family: inherit; height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1/16/2708.png&quot;);\">✈</span></span><span class=\"_5mfr\" style=\"margin: 0px 1px; font-family: inherit;\"><span class=\"_6qdm\" style=\"background-repeat: no-repeat; background-size: contain; color: transparent; display: inline-block; text-shadow: none; vertical-align: text-bottom; font-family: inherit; height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1/16/2708.png&quot;);\">✈</span></span><span class=\"_5mfr\" style=\"margin: 0px 1px; font-family: inherit;\"><span class=\"_6qdm\" style=\"background-repeat: no-repeat; background-size: contain; color: transparent; display: inline-block; text-shadow: none; vertical-align: text-bottom; font-family: inherit; height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1/16/2708.png&quot;);\">✈</span></span>&nbsp;!! The Day is here ...Kupanda Ndege ya&nbsp;<a class=\"profileLink\" href=\"https://www.facebook.com/silverstoneair/?__tn__=K-R&amp;eid=ARDSFnCDnDfWN8cXVU0o7SvIgiSN9yi8Gm7OGz7HtdBrgNk7pVQ_4yjHzz7gv4aEWaFCny6mgLKGAAVR&amp;fref=mentions&amp;__xts__%5B0%5D=68.ARABbCKDNzdldpvBpCjKG3hvlSdePTDfacJ0Uwt5ykDj2mlRyM9MGQ2OFjMDeoKsJQ4dVuk1pEuYGA6ZURW1Kmw4uaD1ht0yo6U85D0QJwu96TWt4J-QF9fTP0ZMxohRb-zzBEq_DJSzKvtQ4sS_pxE27G_sCUZTx_C6KraOh4o7BMDxKchGUbMb9SIIM1R_DKVvGYcgush3xKrceCGSBeQWImdUkKdq4vNm1YY4RSJ19WUnNpmNveTShA4GP4v__qj-d0BIflMTp_P8WzQfAFvjHEQp4T0ASBx5jcW6OlGSF4BTUkvd-n8e36VmNoi05PDvLm8tgaJI-xTNxMABqv9Nng\" data-hovercard=\"/ajax/hovercard/page.php?id=401306243617245&amp;extragetparams=%7B%22__tn__%22%3A%22%2CdK-R-R%22%2C%22eid%22%3A%22ARDSFnCDnDfWN8cXVU0o7SvIgiSN9yi8Gm7OGz7HtdBrgNk7pVQ_4yjHzz7gv4aEWaFCny6mgLKGAAVR%22%2C%22fref%22%3A%22mentions%22%7D\" data-hovercard-prefer-more-content-show=\"1\" style=\"color: rgb(54, 88, 153); font-family: inherit;\">Silverstone Air</a>&nbsp;For the First Time to Diani....DIANI WASIJA&nbsp;<span class=\"_47e3 _5mfr\" title=\"smile emoticon\" style=\"line-height: 0; vertical-align: middle; margin: 0px 1px; font-family: inherit;\"><img class=\"img\" role=\"presentation\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/1f642.png\" alt=\"\" style=\"vertical-align: -3px;\" width=\"16\" height=\"16\"><span aria-hidden=\"true\" class=\"_7oe\" style=\"display: inline; font-size: 0px; width: 0px; font-family: inherit;\">:)</span></span>&nbsp;<span class=\"_47e3 _5mfr\" title=\"smile emoticon\" style=\"line-height: 0; vertical-align: middle; margin: 0px 1px; font-family: inherit;\"><img class=\"img\" role=\"presentation\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/1f642.png\" alt=\"\" style=\"vertical-align: -3px;\" width=\"16\" height=\"16\"><span aria-hidden=\"true\" class=\"_7oe\" style=\"display: inline; font-size: 0px; width: 0px; font-family: inherit;\">:)</span></span></p><p style=\"margin-top: 6px; margin-bottom: 6px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41); font-size: 14px;\">George\r\n and Richard (The Driver and conductor who did a Noble Act of assisting a\r\n passenger Philomena Mbithi who went into labor in the bus deliver a \r\nbaby )plus Family on board to enjoy their holiday courtesy of&nbsp;<a class=\"profileLink\" href=\"https://www.facebook.com/bonfireadventures/?__tn__=K-R&amp;eid=ARDCyqjgdVcAIcfXMKk8ntxY_AWdBp8uVJejX5Vz9tMDS4AQN24R3jw2b3cC9cr2a8uE4xhP2eZoDAu3&amp;fref=mentions&amp;__xts__%5B0%5D=68.ARABbCKDNzdldpvBpCjKG3hvlSdePTDfacJ0Uwt5ykDj2mlRyM9MGQ2OFjMDeoKsJQ4dVuk1pEuYGA6ZURW1Kmw4uaD1ht0yo6U85D0QJwu96TWt4J-QF9fTP0ZMxohRb-zzBEq_DJSzKvtQ4sS_pxE27G_sCUZTx_C6KraOh4o7BMDxKchGUbMb9SIIM1R_DKVvGYcgush3xKrceCGSBeQWImdUkKdq4vNm1YY4RSJ19WUnNpmNveTShA4GP4v__qj-d0BIflMTp_P8WzQfAFvjHEQp4T0ASBx5jcW6OlGSF4BTUkvd-n8e36VmNoi05PDvLm8tgaJI-xTNxMABqv9Nng\" data-hovercard=\"/ajax/hovercard/page.php?id=121712727864294&amp;extragetparams=%7B%22__tn__%22%3A%22%2CdK-R-R%22%2C%22eid%22%3A%22ARDCyqjgdVcAIcfXMKk8ntxY_AWdBp8uVJejX5Vz9tMDS4AQN24R3jw2b3cC9cr2a8uE4xhP2eZoDAu3%22%2C%22fref%22%3A%22mentions%22%7D\" data-hovercard-prefer-more-content-show=\"1\" style=\"color: rgb(54, 88, 153); font-family: inherit;\">BONFIRE ADVENTURES AND EVENTS</a>&nbsp;- FULLY PAID 3 DAYS FLYING PACKAGE TO DIANI&nbsp;<a class=\"profileLink\" href=\"https://www.facebook.com/amanitbr/?__tn__=K-R&amp;eid=ARBjXknuyP2Q0VepMU_IbZnm74pH9AQ47VGtEv8fQ-6gHbrgPa2C5-YY6sMNe82FzMjtTFYHHGlbKAep&amp;fref=mentions&amp;__xts__%5B0%5D=68.ARABbCKDNzdldpvBpCjKG3hvlSdePTDfacJ0Uwt5ykDj2mlRyM9MGQ2OFjMDeoKsJQ4dVuk1pEuYGA6ZURW1Kmw4uaD1ht0yo6U85D0QJwu96TWt4J-QF9fTP0ZMxohRb-zzBEq_DJSzKvtQ4sS_pxE27G_sCUZTx_C6KraOh4o7BMDxKchGUbMb9SIIM1R_DKVvGYcgush3xKrceCGSBeQWImdUkKdq4vNm1YY4RSJ19WUnNpmNveTShA4GP4v__qj-d0BIflMTp_P8WzQfAFvjHEQp4T0ASBx5jcW6OlGSF4BTUkvd-n8e36VmNoi05PDvLm8tgaJI-xTNxMABqv9Nng\" data-hovercard=\"/ajax/hovercard/page.php?id=110989951132&amp;extragetparams=%7B%22__tn__%22%3A%22%2CdK-R-R%22%2C%22eid%22%3A%22ARBjXknuyP2Q0VepMU_IbZnm74pH9AQ47VGtEv8fQ-6gHbrgPa2C5-YY6sMNe82FzMjtTFYHHGlbKAep%22%2C%22fref%22%3A%22mentions%22%7D\" data-hovercard-prefer-more-content-show=\"1\" style=\"color: rgb(54, 88, 153); font-family: inherit;\">Amani Tiwi Beach Resort</a>&nbsp;A 4 STAR HOTEL ON ALL INCLUSIVE MEAL PLAN .</p><p style=\"margin-top: 6px; margin-bottom: 6px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41); font-size: 14px;\">The excitement on their face tells it all. George and Richard Jibambeni .. Enjoy to the fullest ..&nbsp;<a class=\"_58cn\" href=\"https://www.facebook.com/hashtag/bonfirecelebratingheroes?source=feed_text&amp;epa=HASHTAG&amp;__xts__%5B0%5D=68.ARABbCKDNzdldpvBpCjKG3hvlSdePTDfacJ0Uwt5ykDj2mlRyM9MGQ2OFjMDeoKsJQ4dVuk1pEuYGA6ZURW1Kmw4uaD1ht0yo6U85D0QJwu96TWt4J-QF9fTP0ZMxohRb-zzBEq_DJSzKvtQ4sS_pxE27G_sCUZTx_C6KraOh4o7BMDxKchGUbMb9SIIM1R_DKVvGYcgush3xKrceCGSBeQWImdUkKdq4vNm1YY4RSJ19WUnNpmNveTShA4GP4v__qj-d0BIflMTp_P8WzQfAFvjHEQp4T0ASBx5jcW6OlGSF4BTUkvd-n8e36VmNoi05PDvLm8tgaJI-xTNxMABqv9Nng&amp;__tn__=%2ANK-R\" data-ft=\"{&quot;type&quot;:104,&quot;tn&quot;:&quot;*N&quot;}\" style=\"color: rgb(54, 88, 153); font-family: inherit;\"><span class=\"_5afx\" style=\"direction: ltr; unicode-bidi: isolate; font-family: inherit;\"><span aria-label=\"hashtag\" class=\"_58cl _5afz\" style=\"unicode-bidi: isolate; font-family: inherit;\">#</span><span class=\"_58cm\" style=\"font-family: inherit;\">BonfireCelebratingHeroes</span></span></a><a href=\"https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.bonfireadventures.com%2F%3Ffbclid%3DIwAR3POyE6ggYXMnlK2XHsV4blqjSJ1yaHz2_MBBm2udRgYHvRlbL6lP5vnOo&amp;h=AT3AhUdkgB1mTIeJtIcWQsnA2TpBoOTbdW4iP5hTupqwYyMTx9F2QrowNAPRSDRoAUIzUDaOs2QlugsqEjRiiMLdKv57jta4n90rZl8fs85F2g_dSAP_3bxubhNqsMrK7yo3ago3xygDTl2Sl4ThMLyCiXVrE6AlvNkRtjD3w2LS1rrX3rK8FhqJ08rk9hLYFgdelWYvXSLw35son7ZFlUnhuT9pOpekfw5IosGlzYtBnkps6tR9g8uNhKHAxAbDPzIHv_6jXDYp4q4JoPq5d_PzzQdWRbMF3rNsqgolicS55IEl4dWoViWuNMLKtBZgHDHoY1CC8XuzVlmVFy0z0DzwqGgADJPIq2oNtuCMKoM_Tr279hL6P7I09DKbzqnCof2P7rhWcC4_c9vYDMFnb9g1cXlo06CFZzIrYJTWi6f9NJRoD4iZr4EV0-QA5x6qHdFf9-gn5OcrgaIY5Dpg5f_Vqgsv1yPbeV4kv8dlZPC6uswKhfn_B8hyxFBVjrfcMDTkS5T8odfs_g0pdmNkqya-o-v5QHGuTBUkRyoD-W6H_wOTLAkLyIcAcea6TUMb1A4wfdB9J03mz89lGOI9ZVlqysPTIgqm39OIKWbGYW9aLyGSD1H-UATPPtFA\" target=\"_blank\" data-ft=\"{&quot;tn&quot;:&quot;-U&quot;}\" rel=\"noopener nofollow\" data-lynx-mode=\"async\" style=\"color: rgb(54, 88, 153); font-family: inherit;\">www.bonfireadventures.com</a></p><p style=\"margin-top: 6px; margin-bottom: 0px; display: inline; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41); font-size: 14px;\">Rem we have been nominated for the Kenya Wedding Awards as BEST HONEYMOON TRAVEL AGENT Please Vote for us by clicking this link<a href=\"https://l.facebook.com/l.php?u=http%3A%2F%2Fvote.kenyaweddingawards.co.ke%2Fwp%2Fvote%2F%3Ffbclid%3DIwAR0YNrmZ4cMYvIdlRVjQj7eGfh5umWAVdjD_cc4Zob6PcM-e8sRnG9jUWeI&amp;h=AT0Nh03n95DYv54MuSi69Ene7Op2nIgRILMWLzMeBgd5Xn9JcjARbPoFZYAvZn6spGHP594uJT8eFSbc-d3TRwSysRcYkKbGdiJSRnvXqJ6TAeAeYwUdX4lLpbIyPKPur9BqR74OhhMwp7QPrzcCQ2YuVgyHAI36ZbuwrpNwaGYbxJyYcdrqGpII6kr53MVniYi0geWImwlRXdWPY__5P4-czyCZL4hVc2gGQxxOLOpn6-q0Hq99YflIYDEZHPTePfb1g6KGpVCAE-B5IDQLbGzm-iflbdRJmuBHUuknk_aezG0Hsk99x-uQVYXCrH-wOqgtEdAgwqxXD8F0NGV0PbPGKXCuQF9NlUTqsP4RumnGPl5vvsBqhNNBSIBJuSU3ONd_uIVBseYLvF_4DVXW7OqUNDy9x4XQVzfaKWDoGhy_rQow6x2W7bFl1t_AD_HQsFhuw5EJPzMqZlkMqbQb3vbgyQzVw-9SoszN-D4XLNcGL_nol5QDpUB8CIA7MHM-HmLImalyKNSa5VfL5ecG4ymG-pxYdRBlGys_FXpdukJfJcdt3d3QTyt7XQRoqVlvjoz2uhg_i5Smt0XwMM0UQY41CoZs5NTbe4Ds10zl-7vULjzcqd9rmi3QrdeD\" target=\"_blank\" data-ft=\"{&quot;tn&quot;:&quot;-U&quot;}\" rel=\"noopener nofollow\" data-lynx-mode=\"async\" style=\"color: rgb(54, 88, 153); font-family: inherit;\">http://vote.kenyaweddingawards.co.ke/wp/vote/</a>&nbsp;..Thank you for voting for us</p>', NULL, '2019-06-27 10:40:32', '0000-00-00 00:00:00'),
(94, 70, '', '', 0x68747470733a2f2f64617368626f6172642e7469636b65747334752e636f2e6b652f6173736574732f75706c6f6164732f62373866643765353661643431363435663536306162326133613934626365362e6a706567, 'https://dashboard.tickets4u.co.ke/assets/uploads/428326646fe01ae47f3ce595d0ad224e.jpg', 'You are hereby invited to the Best Sales Training Event in the country yet.Starting from 6th November 2018.<br>Topics to be covered<br><br><ul><li><b>Sec 1: </b>Effective Sales Communication</li><li><b>Sec 2: </b>Efficient Prospecting and Lead Generation</li><li><b>Sec 3:</b> The Psychology of Sales</li><li><b>Sec 4:</b> Customer Service and Retention<br></li></ul>Advance booking only for the very few slots available.Get in touch Abijah on 0707 694 822 for more details.<br>', NULL, '2019-06-27 11:05:13', '0000-00-00 00:00:00'),
(95, 71, '', '', 0x68747470733a2f2f64617368626f6172642e7469636b65747334752e636f2e6b652f6173736574732f75706c6f6164732f36373230386138336437353738336366343339623137636566643964383761362e6a7067, 'https://dashboard.tickets4u.co.ke/assets/uploads/cdd7a2fd2816ae090c4ebfa87b094d88.jpg', '<ol>\r\n<li>Get up to 10% of iPay Commission fees as a cash back to you.</li>\r\n<li>Easy and FREE to sign up</li>\r\n<li>You can track the merchants you invite with our easy-to-integrate tracking dashboard</li> \r\n<li>Monetize your network by bringing them more value and watch them bring value to you</li>\r\n</ol>\r\n\r\n\r\nYou are invited to the iPay Affiliate Program launch that will take place on&nbsp; 5th April 2019<br>Come and network as you learn about the opportunity of iPay as a payment gateway and how you can<br>monetize your network.<br><br>To book your slot register for free at ticks4u.co.ke by Wednesday 3rd April 2019<br>\r\n<br><br>\r\n<div style=\"background-color: #f5ba18;padding: 10px; font-size: 11px;color:#000; border-radius: 3px;\">\r\nPlease note that there is limited parking space at the venue.\r\nHowever, NCC parking is available around the building.\r\nAlso, taxi hailing to and from the venue would be our preferred suggestion to you.\r\n</div>\r\n<br><br>\r\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3988.7930794274407!2d36.78867461410119!3d-1.2989227860048502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f109990e04d95%3A0x8681f0b12292ba2b!2sUpper+Hill+Estate%2C+Nairobi!3m2!1d-1.2989522!2d36.7908288!5e0!3m2!1sen!2ske!4v1554360885764!5m2!1sen!2ske\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n', NULL, '2019-06-27 11:30:02', '0000-00-00 00:00:00'),
(96, 72, '', 'https://dashboard.tickets4u.co.ke/assets/uploads/1389e708cd0138d722157908608aaaf5.png', 0x68747470733a2f2f64617368626f6172642e7469636b65747334752e636f2e6b652f6173736574732f75706c6f6164732f63613162616435353064643163393966303230303331336134383933623661622e706e67, 'https://dashboard.tickets4u.co.ke/assets/uploads/9bdd3247f52d0d9ca50b0ef745cb7184.png', '\r\n\r\n\r\n\r\n<style type=\"text/css\">\r\np.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 60.0px Helvetica; color: #19384a}\r\np.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 15.0px Helvetica; color: #031c29}\r\n</style>\r\n\r\n\r\n<p class=\"p1\"></p>\r\n<p class=\"p2\">The Westgate Shopping Mall Auto Show is the premier showcase of the newest model cars, vans, crossovers,</p>\r\n<p class=\"p2\">hybrids, light trucks, sport utilities to suit every budget and lifestyle.</p><p class=\"p2\"><br></p>\r\n<p class=\"p2\">Consumers and shoppers will not only see all the newest affordable vehicles and your flagship models . It will</p>\r\n<p class=\"p2\">be the perfect place to see the latest examples of fuel efficient technologies and aftermarket accessories.</p><p class=\"p2\"><br></p>\r\n<p class=\"p2\">The Westgate Shopping Mall Auto Show seeks to target a broad range of companies across the motor industry</p>\r\n<p class=\"p2\">including; manufacturers, insurance companies, financing companies and vehicle accessories etc.</p><p class=\"p2\"><br></p>\r\n<p class=\"p2\">Shoppers will have a chance to interact with various dealer representatives on the ground; it will be easy to</p>\r\n<p class=\"p2\">do the math, compare prices and features, saving both time and money.</p><p class=\"p2\"><br></p>\r\n<p class=\"p2\">The Westgate Auto Show will be great for those looking to make their next vehicle purchase and the entire</p>\r\n<p class=\"p2\">family will have lots of fun.</p>', NULL, '2019-07-10 10:26:40', '0000-00-00 00:00:00'),
(97, 73, '', '', '', '', 'e', NULL, '2019-09-09 09:49:06', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `event_recon`
--

CREATE TABLE `event_recon` (
  `id` int(11) NOT NULL,
  `vid` varchar(50) NOT NULL,
  `session_id` varchar(50) NOT NULL,
  `reference` varchar(50) NOT NULL,
  `amount` int(11) NOT NULL,
  `channel` varchar(50) NOT NULL,
  `account_no` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `ipay_ref` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_recon`
--

INSERT INTO `event_recon` (`id`, `vid`, `session_id`, `reference`, `amount`, `channel`, `account_no`, `status`, `ipay_ref`, `created_at`, `updated_at`) VALUES
(1, 'test', '0719828319', '13efbc089b7fdde', 1, 'mpesapaybill', '300014|0719828319', 'PENDING', '', '2019-06-21 08:23:04', '0000-00-00 00:00:00'),
(2, 'test', '0719828319', 'c190b8930385ccc', 1, 'mpesapaybill', '300014|0719828319', 'PENDING', '', '2019-06-21 08:23:24', '0000-00-00 00:00:00'),
(3, 'test', '0719828319', '9b46642c04194aa', 1, 'mpesapaybill', '300014|0719828319', 'PENDING', '', '2019-06-21 08:23:32', '0000-00-00 00:00:00'),
(4, 'test', '0719828319', '3244d12b3aba1d2', 24, 'elipa', '254719828319', 'PENDING', '', '2019-06-21 08:24:32', '0000-00-00 00:00:00'),
(5, 'test', '0719828319', '9b6b541d969dfb7', 24, 'elipa', '254719828319', 'PENDING', '', '2019-06-21 08:41:10', '0000-00-00 00:00:00'),
(6, 'test', '0719828319', 'e5cf92bdd2d1a40', 30, 'elipa', '254719828319', 'PENDING', '', '2019-06-21 08:52:25', '0000-00-00 00:00:00'),
(7, 'test', '0719828319', '188628b685d2cd9', 10, 'mpesa', '254719828319', 'PENDING', '', '2019-06-21 08:54:18', '0000-00-00 00:00:00'),
(8, 'test', '0719828319', '50150e1c739b131', 10, 'mpesapaybill', '300014|0719828319', 'PENDING', '', '2019-06-21 08:56:56', '0000-00-00 00:00:00'),
(9, 'test', '0719828319', '4395ed8344b1792', 4, 'mpesapaybill', '300014|0719828319', 'PENDING', '', '2019-06-21 09:13:15', '0000-00-00 00:00:00'),
(10, 'test', '0719828319', '57341c23ae38fa1', 30, 'mpesa', '254719828319', 'PENDING', '', '2019-06-22 11:21:29', '0000-00-00 00:00:00'),
(11, 'test', '0719828319', '9fea4ef987c820d', 2, 'mpesapaybill', '300014|0719828319', 'PENDING', '', '2019-06-22 11:22:20', '0000-00-00 00:00:00'),
(12, 'test', '0719828319', 'cac659acd35aa81', 2, 'mpesapaybill', '300014|0719828319', 'PENDING', '', '2019-06-22 11:22:35', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `event_tickets_types`
--

CREATE TABLE `event_tickets_types` (
  `id` int(11) NOT NULL,
  `event_id` int(11) UNSIGNED NOT NULL,
  `ticket_type` int(12) NOT NULL,
  `amount` int(11) NOT NULL,
  `total_tickets` varchar(50) NOT NULL DEFAULT 'NA',
  `available_tickets` varchar(50) NOT NULL DEFAULT 'NA',
  `ticket_close_on` varchar(50) NOT NULL DEFAULT 'NA',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event_tickets_types`
--

INSERT INTO `event_tickets_types` (`id`, `event_id`, `ticket_type`, `amount`, `total_tickets`, `available_tickets`, `ticket_close_on`, `created_at`, `updated_at`) VALUES
(111, 71, 1, 0, '100000', '100000', '2020-02-02', '2019-06-27 11:30:02', '0000-00-00 00:00:00'),
(112, 72, 1, 0, '4000', '4000', '2019-11-11', '2019-07-10 10:26:40', '0000-00-00 00:00:00'),
(110, 70, 2, 1000, '100000', '100000', '2019-10-10', '2019-06-27 11:05:13', '0000-00-00 00:00:00'),
(109, 69, 2, 14000, '1000', '1000', '2018-12-22', '2019-06-27 10:40:32', '0000-00-00 00:00:00'),
(113, 73, 3, 2, '2', '2', '2020-01-01', '2019-09-09 09:49:06', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sell_ticket`
--

CREATE TABLE `sell_ticket` (
  `id` int(11) NOT NULL,
  `event_id` int(11) UNSIGNED NOT NULL,
  `number_of_tickets` int(11) NOT NULL,
  `ticket_amount` int(11) NOT NULL,
  `ticket_type` text NOT NULL COMMENT 'vip, vvip',
  `clientName` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `serial_number` varchar(50) NOT NULL,
  `used_status` int(11) NOT NULL DEFAULT '0' COMMENT '0-not',
  `transaction_status` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sell_ticket`
--

INSERT INTO `sell_ticket` (`id`, `event_id`, `number_of_tickets`, `ticket_amount`, `ticket_type`, `clientName`, `phone`, `email`, `order_id`, `serial_number`, `used_status`, `transaction_status`, `created_at`, `updated_at`) VALUES
(22, 77, 1, 20, '2', 'Evans Manana', '0797033412', 'evansmanana496@gmail.com', '9e2f6', '4b41448d', 0, 'PENDING', '2019-05-31 09:46:12', '0000-00-00 00:00:00'),
(23, 77, 1, 20, '2', 'Evans Manana', '0797033412', 'evansmanana496@gmail.com', '89ea0', '2825d1fc', 0, 'PENDING', '2019-05-31 10:03:41', '0000-00-00 00:00:00'),
(24, 78, 2, 500, '2', 'martin', '0727721659', 'ngushdare@gmail.com', '5ae2a', 'bf1137f9', 0, 'SUCCESS', '2019-06-03 11:31:17', '0000-00-00 00:00:00'),
(25, 78, 1, 1000, '3', 'martin', '0727721659', 'ngushdare@gmail.com', '5ae2a', 'ca08821c', 0, 'SUCCESS', '2019-06-03 11:31:17', '0000-00-00 00:00:00'),
(26, 78, 0, 3000, '4', 'martin', '0727721659', 'ngushdare@gmail.com', '5ae2a', 'b7a097b7', 0, 'SUCCESS', '2019-06-03 11:31:17', '0000-00-00 00:00:00'),
(27, 78, 2, 500, '2', 'GABRIEL MAKAU', '0705679493', 'gabriel@ipayafrica.com', '10801', 'a664ed40', 0, 'SUCCESS', '2019-06-03 11:57:13', '0000-00-00 00:00:00'),
(28, 78, 8, 1000, '3', 'GABRIEL MAKAU', '0705679493', 'gabriel@ipayafrica.com', '10801', '3fa01aa1', 0, 'SUCCESS', '2019-06-03 11:57:13', '0000-00-00 00:00:00'),
(29, 78, 1, 3000, '4', 'GABRIEL MAKAU', '0705679493', 'gabriel@ipayafrica.com', '10801', 'd6c8c734', 0, 'SUCCESS', '2019-06-03 11:57:13', '0000-00-00 00:00:00'),
(30, 78, 1, 500, '2', 'GABRIEL MAKAU', '0705679493', 'gabriel@ipayafrica.com', '8bc79', '78b5cbfe', 0, 'SUCCESS', '2019-06-04 09:33:08', '0000-00-00 00:00:00'),
(31, 78, 1, 1000, '3', 'GABRIEL MAKAU', '0705679493', 'gabriel@ipayafrica.com', '8bc79', 'a03b9d8f', 0, 'SUCCESS', '2019-06-04 09:33:08', '0000-00-00 00:00:00'),
(32, 78, 1, 3000, '4', 'GABRIEL MAKAU', '0705679493', 'gabriel@ipayafrica.com', '8bc79', 'f4245efe', 0, 'SUCCESS', '2019-06-04 09:33:08', '0000-00-00 00:00:00'),
(33, 79, 1, 20, '2', 'martin', '0727721659', 'ngushdare@gmail.com', '05f44', '1427715a', 0, 'PENDING', '2019-06-21 06:47:34', '0000-00-00 00:00:00'),
(34, 79, 1, 20, '2', 'Evans Manana', '0719828319', 'evansmanana496@gmail.com', 'ed971', '94d9f109', 0, 'PENDING', '2019-06-21 06:51:44', '0000-00-00 00:00:00'),
(35, 79, 1, 20, '2', 'EVANS MANANA', '0719828319', 'manana@ipayafrica.com', '135e3', '6bf678f5', 0, 'SUCCESS', '2019-06-21 07:46:52', '0000-00-00 00:00:00'),
(36, 79, 1, 20, '2', 'Evans Manana', '0719828319', 'evansmanana496@gmail.com', '802bb', 'e8185959', 0, 'PENDING', '2019-06-21 07:50:33', '0000-00-00 00:00:00'),
(37, 79, 1, 20, '2', 'Evans Manana', '0719828319', 'evansmanana496@gmail.com', '04da7', '841d5f64', 0, 'SUCCESS', '2019-06-21 07:55:50', '0000-00-00 00:00:00'),
(38, 79, 1, 20, '2', 'Evans Manana', '0782603014', 'manana@ipayafrica.com', '3f51e', '450eb4c2', 0, 'SUCCESS', '2019-06-21 08:03:04', '0000-00-00 00:00:00'),
(39, 79, 1, 20, '2', 'EVANS MANANA', '0719828319', 'evansmanana496@gmail.com', 'b9999', 'dec164ca', 0, 'SUCCESS', '2019-06-21 09:07:24', '0000-00-00 00:00:00'),
(40, 79, 1, 20, '2', 'Evans Manana', '0719828319', 'evansmanana496@gmail.com', '4a303', '10cb6954', 0, 'PENDING', '2019-06-21 09:40:31', '0000-00-00 00:00:00'),
(41, 80, 1, 1, '2', 'Jude Kikuyu', '0773427047', 'jude@ipayafrica.com', '9a911', '3539ed17', 0, 'SUCCESS', '2019-06-21 10:40:44', '0000-00-00 00:00:00'),
(42, 80, 1, 1, '2', 'Evans Manana', '0719828319', 'evansmanana496@gmail.com', 'c306b', 'ef41f498', 0, 'SUCCESS', '2019-06-21 11:40:18', '0000-00-00 00:00:00'),
(43, 72, 8, 0, '1', 'EvaGee', '0707154742', 'evawanjirug@gmail.com', '26895', 'b1019f81', 0, 'PENDING', '2019-07-26 12:33:39', '0000-00-00 00:00:00'),
(44, 72, 8, 0, '1', 'EvaGee', '0707153742', 'evawanjirug@gmail.com', '390c1', '4927debf', 0, 'PENDING', '2019-07-26 12:34:20', '0000-00-00 00:00:00'),
(45, 72, 6, 0, '1', 'EvaGee', '0707070707', 'evawanjirug@gmail.com', '87b0f', 'd0f5adbb', 0, 'PENDING', '2019-07-29 07:18:03', '0000-00-00 00:00:00'),
(46, 72, 4, 0, '1', 'EvaGee', '0707070707', 'evawanjirug@gmail.com', '8295d', '3f3aa247', 0, 'PENDING', '2019-07-29 07:48:38', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `sub_id` int(12) NOT NULL,
  `sub_mail` varchar(100) NOT NULL,
  `sub_status` int(5) NOT NULL DEFAULT '1',
  `sub_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`sub_id`, `sub_mail`, `sub_status`, `sub_date`) VALUES
(1, 'j@gmail.com', 1, '2019-04-23 07:52:27'),
(2, 'je@gmail.com', 1, '2019-04-23 08:14:22'),
(4, 'jo@gmail.com', 1, '2019-04-23 08:27:20'),
(5, 'jo@gmail', 1, '2019-04-23 08:27:44'),
(6, 'jeo@gmail.com', 1, '2019-04-23 08:29:03'),
(7, 'jol@gmail.com', 1, '2019-04-23 08:29:22'),
(8, '', 1, '2019-06-14 06:33:19');

-- --------------------------------------------------------

--
-- Table structure for table `ticket_types`
--

CREATE TABLE `ticket_types` (
  `typeid` int(12) NOT NULL,
  `type_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ticket_types`
--

INSERT INTO `ticket_types` (`typeid`, `type_name`) VALUES
(1, 'Free'),
(2, 'Regular'),
(3, 'VIP'),
(4, 'VVIP');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_phone` varchar(20) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_role` int(11) NOT NULL DEFAULT '1' COMMENT '1-scantickets, 2-createevents, 3-all',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `account_id`, `user_name`, `user_phone`, `user_email`, `user_password`, `user_role`, `created_at`, `updated_at`) VALUES
(18, 18, 'martin', '0727721659', 'ngushdare@gmail.com', 'a4bd1ba7eee1777631082cf386603f4e', 1, '2019-05-02 08:33:51', '0000-00-00 00:00:00'),
(19, 19, 'Gabriel Makau', '0705679493', 'gabriel@ipayafrica.com', 'fc5d532ed33040972ba887a80fedfcf3', 3, '2019-05-30 11:07:05', '0000-00-00 00:00:00'),
(20, 20, 'Evans Manana', '0782603014', 'manana@ipayafrica.com', '5a720f63cdf02378fc6450ca53c1b7c3', 3, '2019-05-30 11:15:16', '0000-00-00 00:00:00'),
(22, 22, 'Evans Manana', '0719828319', 'evansmanana496@gmail.com', '5a720f63cdf02378fc6450ca53c1b7c3', 3, '2019-06-21 06:35:34', '0000-00-00 00:00:00'),
(23, 23, 'JUde', '0773427047', 'jude@ipayafrica.com', '447bc1efbbe8e2df4b30f1b3030dacbc', 1, '2019-06-21 10:08:09', '0000-00-00 00:00:00'),
(24, 24, 'Jon', '07777777777', 'jonlloyd1981@hotmail.com', '36eb126c8db809046b58739328cef21d', 3, '2019-06-21 21:57:52', '0000-00-00 00:00:00'),
(25, 25, 'Rob Hillman', '07725955620', 'hillman6@me.com', '133028a2ba2510025e5b27632cff9aac', 3, '2019-06-29 05:50:30', '0000-00-00 00:00:00'),
(26, 26, 'Prashanth', '9550282909', 'prashanthreddy.ee@gmail.com', '72fb60a40c4fd2e98ff134ea5fbe6531', 3, '2019-07-07 06:07:19', '0000-00-00 00:00:00'),
(27, 27, 'Madam Sarah', '722987023', 'aspenenterprisesltd@gmail.com', '334d9392d8e44fafeccacef7985753f2', 3, '2019-07-10 10:20:20', '0000-00-00 00:00:00'),
(28, 28, 'Andrew', '0724419446', 'andrew@ipayafrica.com', '27af96ce9c93896ff42b9fbe1d08fca3', 3, '2019-07-11 13:32:29', '0000-00-00 00:00:00'),
(29, 29, 'EvaGee', '0707070707', 'evam@gmail.com', '06905965f433ffe3fe4bbb6086607b85', 3, '2019-09-06 09:34:47', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_Assets`
--
ALTER TABLE `event_Assets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_recon`
--
ALTER TABLE `event_recon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reference` (`reference`);

--
-- Indexes for table `event_tickets_types`
--
ALTER TABLE `event_tickets_types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_event_id_tickets` (`event_id`);

--
-- Indexes for table `sell_ticket`
--
ALTER TABLE `sell_ticket`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`sub_id`),
  ADD UNIQUE KEY `sub_mail` (`sub_mail`);

--
-- Indexes for table `ticket_types`
--
ALTER TABLE `ticket_types`
  ADD PRIMARY KEY (`typeid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_phone` (`user_phone`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(15) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
--
-- AUTO_INCREMENT for table `event_Assets`
--
ALTER TABLE `event_Assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;
--
-- AUTO_INCREMENT for table `event_recon`
--
ALTER TABLE `event_recon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `event_tickets_types`
--
ALTER TABLE `event_tickets_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;
--
-- AUTO_INCREMENT for table `sell_ticket`
--
ALTER TABLE `sell_ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `sub_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `ticket_types`
--
ALTER TABLE `ticket_types`
  MODIFY `typeid` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
