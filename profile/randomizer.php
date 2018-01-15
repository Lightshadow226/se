<?php 

include "imageGenerator.php";

function generateImg()
{
	//Generate Random Numbers
	$sex = rand(0,1); //Generates a random number between 0 and 1; 0 being female and 1 being male
	$skin = rand(0,4); //Generates a random number between 0 and 4; all corresponding to one of the choices of skin color
	$hairstyle = rand(0,3); //same logic applies to the rest
	$haircolor = rand(0,3);
	$eyecolor = rand(0,3);
	
	//Generate a random body
	$skin_rgb = getSkinColor($skin);
	$hair_rgb = getHairColor($haircolor);
	$eye_rgb = getEyeColor($eyecolor);
	$hair_number = getHairStyle($sex, $hairstyle, "mediumsprite");
	$genericVariables = getGenericVariables($sex, "mediumsprite");
	
	/*****DEBUG*****
		echo "Skin: R: " . $skin_rgb[0] . "; G: " . $skin_rgb[1] . "; B: " . $skin_rgb[2] . "; OP: " . $skin_rgb[3];
		echo nl2br("  \n");
		echo "Hair: R: " . $hair_rgb[0] . "; G: " . $hair_rgb[1] . "; B: " . $hair_rgb[2] . "; OP: " . $hair_rgb[3];
		echo nl2br("  \n");
		echo "Eyes: R: " . $eye_rgb[0] . "; G: " . $eye_rgb[1] . "; B: " . $eye_rgb[2] . "; OP: " . $eye_rgb[3];
		echo nl2br("  \n");
		echo "Hairstyle: " . $hair_number;
	*/
	
	//Generate the image

	header('Content-Type: image/png');

	$destination = imagecreatefrompng($genericVariables[0]);//body type
	$source1 = imagecreatefrompng($genericVariables[1]);//face image
	$source2 = imagecreatefrompng($genericVariables[2]);//eye image
	$source3 = imagecreatefrompng($genericVariables[3]);//lips image
	$source4 = imagecreatefrompng($hair_number);//hair style
	$source5 = imagecreatefrompng($genericVariables[4]);//uniform

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

	//Apply the colors
	imagefilter($source2, IMG_FILTER_COLORIZE, $eye_rgb[0], $eye_rgb[1], $eye_rgb[2], $eye_rgb[3]); //Eye color
	imagefilter($source3, IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]); //Lip color = skin color
	imagefilter($source4, IMG_FILTER_COLORIZE, $hair_rgb[0], $hair_rgb[1], $hair_rgb[2], $hair_rgb[3]); //Hair color
	imagefilter($destination, IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]);//Skin color

	imagecopy($destination, $source1, 0, 0, 0, 0, $largeur_source1, $hauteur_source1);
	imagecopy($destination, $source2, 0, 0, 0, 0, $largeur_source2, $hauteur_source2);
	imagecopy($destination, $source3, 0, 0, 0, 0, $largeur_source3, $hauteur_source3);
	imagecopy($destination, $source4, 0, 0, 0, 0, $largeur_source4, $hauteur_source4);
	imagecopy($destination, $source5, 0, 0, 0, 0, $largeur_source5, $hauteur_source5);

	imagepng($destination);
}

generateImg();//void function to generate the img, the entire php file is going to become an img (*.png) gile

?>