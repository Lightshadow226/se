<?php
// File and new size
$filename = 'shirt1.png';
$percent = 1.5;

// Content type
header('Content-Type: image/png');

// Get new sizes
list($width, $height) = getimagesize($filename);
$newwidth = $width * $percent;
$newheight = $height * $percent;

// Load
$thumb = imagecreatetruecolor($newwidth, $newheight);
$source = imagecreatefrompng($filename);

// Resize
imagecopyresized($thumb, $source, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);

// Output
imagejpeg($thumb);
?>