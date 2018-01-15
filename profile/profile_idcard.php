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
    $department = $rs['scholar_department'];
	$sex = $rs['scholar_sex'];
	$skincolor = $rs['scholar_skincolor'];
	$hairstyle = $rs['scholar_hairstyle'];
	$haircolor = $rs['scholar_haircolor'];
    $eyecolor = $rs['scholar_eyecolor'];
    $name = $rs['scholar_name'];

}

//Allocation of student ID base depending on the user's departmnet
if($department == "0")
{
    $card_base = "studentid/bases/business.jpg";
}
elseif($department == "1")
{
    $card_base = "studentid/bases/athletics.jpg";
}
elseif($department == "2")
{
    $card_base = "studentid/bases/finearts.jpg";
}
elseif($department == "3")
{
    $card_base = "studentid/bases/performingarts.jpg";
}
elseif($department == "4")
{
    $card_base = "studentid/bases/puresciences.jpg";
}
elseif($department == "5")
{
    $card_base = "studentid/bases/health.jpg";
}
elseif($department == "6")
{
    $card_base = "studentid/bases/fashion.jpg";
}

$skin_rgb = getSkinColor($skincolor);
$hair_rgb = getHairColor($haircolor);
$eye_rgb = getEyeColor($eyecolor);
$hair_number = getHairStyle($sex, $hairstyle, "studentid");
$genericVariables = getGenericVariables($sex, "studentid");
// GET PANTS
// GET SHOES
// etc. (must be simplified to the lowest level

header('Content-Type: image/png');

$destination = imagecreatefromjpeg($card_base);
$source1 = imagecreatefrompng($genericVariables[1]);//face image
$source2 = imagecreatefrompng($genericVariables[2]);//eye image
$source3 = imagecreatefrompng($genericVariables[3]);//lips image
$source4 = imagecreatefrompng($hair_number);//hair style
$source5 = imagecreatefrompng($genericVariables[4]);//uniform
$source6 = imagecreatefrompng($genericVariables[0]);//body type

//Writing on the image
$textcolor = imagecolorallocate($destination, 0, 0, 255);
imagestring($destination, 10, 150, 205, $name, $textcolor);

imagealphablending($source1, true);
imagesavealpha($source1, true);

$largeur_source = imagesx($source1);
$hauteur_source = imagesy($source1);

$largeur_source2 = imagesx($source2);
$hauteur_source2 = imagesy($source2);

$largeur_source3 = imagesx($source3);
$hauteur_source3 = imagesy($source3);

$largeur_source4 = imagesx($source4);
$hauteur_source4 = imagesy($source4);

$largeur_source5 = imagesx($source5);
$hauteur_source5 = imagesy($source5);

$largeur_source6 = imagesx($source6);
$hauteur_source6 = imagesy($source6);

imagefilter($source2, IMG_FILTER_COLORIZE, $eye_rgb[0], $eye_rgb[1], $eye_rgb[2], $eye_rgb[3]); //Eye color
imagefilter($source3, IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]); //Lip color = skin color
imagefilter($source4, IMG_FILTER_COLORIZE, $hair_rgb[0], $hair_rgb[1], $hair_rgb[2], $hair_rgb[3]); //Hair color
imagefilter($source6, IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]);//Skin color

imagecopy($destination, $source6, 0, 0, 0, 0, $largeur_source6, $hauteur_source6);
imagecopy($destination, $source1, 0, 0, 0, 0, $largeur_source, $hauteur_source);
imagecopy($destination, $source2, 0, 0, 0, 0, $largeur_source2, $hauteur_source2);
imagecopy($destination, $source3, 0, 0, 0, 0, $largeur_source3, $hauteur_source3);
imagecopy($destination, $source4, 0, 0, 0, 0, $largeur_source4, $hauteur_source4);
imagecopy($destination, $source5, 0, 0, 0, 0, $largeur_source5, $hauteur_source5);

imagepng($destination);	

?>