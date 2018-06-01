<?php

include "imageGenerator.php";

session_start();

if(isset($_SESSION['id']))
{
	$id = $_SESSION['id']; // Picks up the id of the user that is logged in
}

try
{
	$db = new PDO('mysql:host=localhost; dbname=USERS', 'root', 'root');
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//echo "Connected to the database!";
}
catch(PDOException $ex)
{
   	 //display error message
    	echo "Connection failed ".$ex->getMessage();
}

$sqlQuery = "SELECT * FROM scholarinfo WHERE id = :id";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

while($rs = $statement->fetch())
{
	$sex = $rs['scholar_sex'];
	$skincolor = $rs['scholar_skincolor'];
	$hairstyle = $rs['scholar_hairstyle'];
	$haircolor = $rs['scholar_haircolor'];
	$eyecolor = $rs['scholar_eyecolor'];
	$shirt = $rs['shirt_id'];
	$pants = $rs['pants_id'];
	$shoes = $rs['shoes_id'];
}

$eye_rgb = getEyeColor($eyecolor);
$hair_rgb = getHairColor($haircolor);
$hair_number = getHairStyle($sex, $hairstyle, "mediumsprite");
$shirtNumber = getShirt($sex, $shirt);//to be resized
$skin_rgb = getSkinColor($skincolor);
$genericVariables = getGenericVariables($sex, "mediumsprite");

$sources = array();

array_push($sources, imagecreatefrompng($genericVariables[0]));	//0 - body type
array_push($sources, imagecreatefrompng($genericVariables[1]));	//1 - face image
array_push($sources, imagecreatefrompng($genericVariables[2]));	//2 - eye image
array_push($sources, imagecreatefrompng($genericVariables[3]));	//3 - lips image
array_push($sources, imagecreatefrompng($hair_number));			//4 - Hairstyle
array_push($sources, imagecreatefrompng($shirtNumber));			//5 - Shirt

imagealphablending($sources[0], true);
imagesavealpha($sources[0], true);

imagealphablending($sources[1], true);
imagesavealpha($sources[1], true);

imagefilter($sources[0], IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]);//Skin color
imagefilter($sources[2], IMG_FILTER_COLORIZE, $eye_rgb[0], $eye_rgb[1], $eye_rgb[2], $eye_rgb[3]); //Eye color
imagefilter($sources[3], IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]); //Lip color = skin color
imagefilter($sources[4], IMG_FILTER_COLORIZE, $hair_rgb[0], $hair_rgb[1], $hair_rgb[2], $hair_rgb[3]); //Hair color

header('Content-Type: image/png');

// STEP 6: overlap all the images
for($i = 1; $i < sizeof($sources); $i++)
{
	$width = imagesx($sources[$i]);
	$height = imagesy($sources[$i]);
	
	if($i == 5)//if we're doing the shirt, we resize it to fit the "mediumsprite"
	{
		$multiplier = 1.1;
		$newWidth = $width * $multiplier;
		$newHeight = $height * $multiplier;

		$translateX = -120;
		$translateY = 0;

		//create a new image of the desired size
		$newImage = imagecreatetruecolor($newWidth, $newHeight);

		//make it transparent
		imagesavealpha($newImage, true);
	    $transparent = imagecolorallocatealpha($newImage, 0, 0, 0, 127);
		imagefill($newImage, 0, 0, $transparent);

		//put the enlarged shirt on top of it
		imagecopyresized($newImage, $sources[$i], 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);//SOLUTION: http://php.net/manual/en/function.imagecopyresized.php
		imagecopy($sources[0], $newImage, $translateX, $translateY, 0, 0, $newWidth, $newHeight);
	}
	else
	{
		imagecopy($sources[0], $sources[$i], 0, 0, 0, 0, $width, $height);//sources[0] is the background (the original image)
	}
}

imagepng($sources[0]);	
imagedestroy($sources[0]);	

?>