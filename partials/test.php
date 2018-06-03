<?php

$thisFile = getcwd();

// echo "1. Current file: " . $thisFile . "<br>";
// echo "<br>";

// $rootFolder = rtrim($thisFile, "/partials");

// echo "2. Root Folder: " . $rootFolder . "<br>";
// echo "<br>";

// $fullUrl = $rootFolder . "activate.php";
// echo "3. " . $fullUrl = rtrim(getcwd(), "/partials") . "/activate.php";
// echo "<br>";
// echo "<br>";

// echo "4. " . $_SERVER['REQUEST_URI'];
// echo "<br>";
// echo "<br>";

// echo "5. " . $fullUrl = "sweetelitegame.com" . rtrim($_SERVER['REQUEST_URI'], "/partials/test.php") . "/activate.php";
// echo "<br>";
// echo "<br>";

// echo "6. " . $fullUrl = "sweetelitegame.com/debug/tempFinalBeta/se";
// echo "<br>";
// echo "<br>";

// echo "7. " . "sweetelitegame.com" . $_SERVER['REQUEST_URI'];
// echo "<br>";
// echo "<br>";


$path_parts = pathinfo(__FILE__);

echo "Directory: " . $path_parts['dirname'], "\n";
echo "<br>";
echo "Basename: " . $path_parts['basename'], "\n";
echo "<br>";
echo "Extension: " . $path_parts['extension'], "\n";
echo "<br>";
echo "Filename: " . $path_parts['filename'], "\n"; // since PHP 5.2.0
echo "<br>";
echo "<br>";

$path_parts = pathinfo(__FILE__);
echo "Final: " . "sweetelitegame.com" . rtrim($_SERVER['REQUEST_URI'], $path_parts['basename']) . "activate.php";
echo "<br>";
?>