<?php
session_start();

if(isset($_SESSION['id']))
{
	$id = $_SESSION['id']; // Picks up the id of the user that is logged in
}

try
{
	$db = new PDO('mysql:host=localhost; dbname=USERS', 'root', 'root'); //TO CHANGE WHEN UPLOADING ONLINE
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
}

/*
$base = "images/ch1/1/base.jpg";
$skin = "images/ch1/1/m/skin.png";
$eyes = "images/ch1/1/m/eyes.png";
$hair = "images/ch1/1/m/hair_1.png";
$hairlight = "images/ch1/1/m/hair_1_light.png";
$uniform = "images/ch1/1/m/uniform.png";
$white = "images/ch1/1/m/white.png";
*/

$illustration_number = 1;

header('Content-Type: image/png');

$destination = imagecreatefromjpeg($base);//illustration base
$source1 = imagecreatefrompng($skin);//body-skin
$source2 = imagecreatefrompng($uniform);//body-uniform
$source3 = imagecreatefrompng($hair);//hairstyle
$source4 = imagecreatefrompng($hairlight);//hair lighting
$source5 = imagecreatefrompng($eyes);//eyes
$source6 = imagecreatefrompng($white);//white

imagealphablending($source1, true);
imagesavealpha($source1, true);

imagealphablending($destination, true);
imagesavealpha($destination, true);

$largeur_source1 = imagesx($source1);
$hauteur_source1 = imagesy($source1);

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

//colorization
imagefilter($source1, IMG_FILTER_COLORIZE, -35, -30, -35, 0);//Skin Color
imagefilter($source3, IMG_FILTER_COLORIZE, -100, -100, -25, 0); //Hair color
imagefilter($source5, IMG_FILTER_COLORIZE, -150, 30, -40, 0); //Eye color

//merging
imagecopy($destination, $source1, 0, 0, 0, 0, $largeur_source1, $hauteur_source1);
imagecopy($destination, $source2, 0, 0, 0, 0, $largeur_source2, $hauteur_source2);
imagecopy($destination, $source3, 0, 0, 0, 0, $largeur_source3, $hauteur_source3);
imagecopy($destination, $source4, 0, 0, 0, 0, $largeur_source4, $hauteur_source4);
imagecopy($destination, $source6, 0, 0, 0, 0, $largeur_source6, $hauteur_source6);
imagecopy($destination, $source5, 0, 0, 0, 0, $largeur_source5, $hauteur_source5);

imagepng($destination);

?>


//colorization of images
/*
imagefilter($source2, IMG_FILTER_COLORIZE, $eye_rgb[0], $eye_rgb[1], $eye_rgb[2], $eye_rgb[3]); //Eye color
imagefilter($source3, IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]); //Lip color = skin color
imagefilter($source4, IMG_FILTER_COLORIZE, $hair_rgb[0], $hair_rgb[1], $hair_rgb[2], $hair_rgb[3]); //Hair color
imagefilter($destination, IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]);//Skin color
*/


/*

---EYE COLORS---
Blue = imagefilter($source5, IMG_FILTER_COLORIZE, 10, 40, 90, 0);
Green = imagefilter($source5, IMG_FILTER_COLORIZE, -150, 30, -40, 0);
Brown = imagefilter($source5, IMG_FILTER_COLORIZE, -40, -90, -110, 0);
Grey = imagefilter($source5, IMG_FILTER_COLORIZE, 0, 0, 0, 0);

---HAIR COLORS---
Blonde = imagefilter($source3, IMG_FILTER_COLORIZE, 40, 20, -20, 0);
Brown = imagefilter($source3, IMG_FILTER_COLORIZE, -60, -60, -60, 0);
Red = imagefilter($source3, IMG_FILTER_COLORIZE, -30, -100, -60, 0);
Black = imagefilter($source3, IMG_FILTER_COLORIZE, -100, -100, -25, 0);

---SKIN COLORS---
White = imagefilter($source1, IMG_FILTER_COLORIZE, 0, 0, 0, 0);
Tan = imagefilter($source1, IMG_FILTER_COLORIZE, -35, -30, -35, 0);
Asian = imagefilter($source1, IMG_FILTER_COLORIZE, 35, 35, 0, 0);
Brown = imagefilter($source1, IMG_FILTER_COLORIZE, -55, -60, -100, 0);
Black = imagefilter($source1, IMG_FILTER_COLORIZE, -105, -90, -70, 0);


*/