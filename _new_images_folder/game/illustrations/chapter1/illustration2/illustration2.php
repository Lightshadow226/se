<?php

include "../../../../../profile/imageGenerator.php";
include "../../illustrationGenerator.php";

$thisChapter = 1;
$thisIllustration = 2;

$quality = getQuality();
$destination = generateIllustration($thisChapter, $thisIllustration);

// Display the image
header('Content-Type: image/jpeg');

ob_start();

imagejpeg($destination, null, $quality);
imagedestroy($destination);

ob_end_flush();

?>