<?php

$thisFile = getcwd();

echo "1. Current file: " . $thisFile . "<br>";
echo "<br>";

$rootFolder = rtrim($thisFile, "/partials");

echo "2. Root Folder: " . $rootFolder . "<br>";
echo "<br>";

$fullUrl = $rootFolder . "activate.php";
echo "3. " . $fullUrl = rtrim(getcwd(), "/partials") . "/activate.php";
echo "<br>";
echo "<br>";

echo "4. " . $_SERVER['REQUEST_URI'];
echo "<br>";
echo "<br>";

echo "5. " . $fullUrl = "sweetelitegame.com" . rtrim($_SERVER['REQUEST_URI'], "/partials/test.php") . "/activate.php";
echo "<br>";
echo "<br>";

echo "6. " . $fullUrl = "www.sweetelitegame.com/debug/tempFinalBeta/se";
echo "<br>";
echo "<br>";

?>