<?php

include "../../../../../profile/imageGenerator.php";
include "../../illustrationGenerator.php";

// $thisChapter = $_POST['chapter'];
// $thisIllustration = $_POST['illustration'];
$thisChapter = 2;
$thisIllustration = 2;

$quality = getQuality();
$destination = generateIllustration($thisChapter, $thisIllustration);

// Display the final product
header('Content-Type: image/jpeg');

// start output buffering
ob_start();

// output the image - since ob is on: buffer it
imagejpeg($destination, null, $quality);
imagedestroy($destination);

// save the ob in $resource
$resource = ob_get_contents();// here is the image now in $resource AND in the output buffer since you didn't clean it (the ob)

// WORKS
// echo '<img style = "width: 200px; height: auto;"src = ' . imagejpeg($destination, null, $quality) . '/>';
// echo '<img style = "width: 200px; height: auto;"src = ' . $resource . '/>';
// echo '<img style = "width: 200px; height: auto;"src = "data:image/jpeg;base64,"' . base64_encode($resource) . '"/>';

// end ob and flush (= send the ob)
ob_end_flush();


/*
// https://stackoverflow.com/questions/30410954/how-not-to-output-an-image-to-the-browser
// start output buffering
ob_start();
// output the image - since ob is on: buffer it
imagejpeg($resource, NULL, 75);
// this break could be a problem - if this is in a control structure, remove it
break;
// save the ob in $resource
$resource = ob_get_contents();

// here is the image now in $resource AND in the output buffer since you didn't clean it (the ob)

// end ob and flush (= send the ob)
ob_end_flush();
*/

/*
function convert($size)
{
    $unit=array('b','kb','mb','gb','tb','pb');
    return @round($size/pow(1024,($i=floor(log($size,1024)))),2).' '.$unit[$i];
}

echo convert(memory_get_usage(true)); // 123 kb*/

?>