<?php

include "../../../../../profile/imageGenerator.php";
include "../../illustrationGenerator.php";

$thisChapter = 2;
$thisIllustration = 1;

$destination = generateIllustration($thisChapter, $thisIllustration);

// Display the final product
header('Content-Type: image/png');
imagepng($destination);

?>