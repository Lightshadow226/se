<?php

include "../../../../../profile/imageGenerator.php";
include "../../illustrationGenerator.php";

$thisChapter = 1;
$thisIllustration = 2;

$destination = generateIllustration($thisChapter, $thisIllustration);

// Display the final product
header('Content-Type: image/png');
imagepng($destination);

?>