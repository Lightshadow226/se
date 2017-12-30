<?php 

function getSkinColor($skin)//Get the skin color
{
	if($skin == 0)
	{
		$rgb = array(30, -20, -45, 0);
	}
	elseif($skin == 1)
	{
		$rgb = array(-15, -60, -100, 0);
	}
	elseif($skin == 2)
	{
		$rgb = array(70, -25, -85, 0);
	}
	elseif($skin == 3)
	{
		$rgb = array(-40, -100, -140, 0);
	}
	elseif($skin == 4)
	{
		$rgb = array(-105, -160, -190, 0);
	}
	else //Default is going to be skin color 0 in case the randomizer fucks up. Defaults will be given for all characteristics.
	{
		$rgb = array(30, -20, -45, 0);
	}

	return $rgb;
}

function getHairColor($haircolor)//Hair color assignment of variables
{
	if($haircolor == 0)
	{
		$rgb = array(80, 15, -200, 0);
	}
	elseif($haircolor == 1)
	{
		$rgb = array(-40, -80, -150, 0);
	}
	elseif($haircolor == 2)
	{
		$rgb = array(-120, -120, -110, 0);
	}
	elseif($haircolor == 3)
	{
		$rgb = array(80, -90, -200, 0);
	}
	else
	{
		$rgb = array(40, -80, -150, 0);
	}

	return $rgb;
}

function getEyeColor($eyecolor)//Eye Color assignment of variables
{
	if($eyecolor == 0)
	{
		$rgb = array(-10, -10, 290, 0);
	}
	elseif($eyecolor == 1)
	{
		$rgb = array(-130, -30, -90, 0);
	}
	elseif($eyecolor == 2)
	{
		$rgb = array(-50, -50, -50, 0);
	}
	elseif($eyecolor == 3)
	{
		$rgb = array(-30, -90, -110, 0);
	}
	else
	{
		$rgb = array(-30, -90, -110, 0);
	}

	return $rgb;
}

function getHairStyle($sex, $hairstyle)//Hairstyle assignment of variables
{
	if($sex == 0) //If a female has been generated
	{
		if($hairstyle == 0)
		{
			$hair_s = "profile/images/female/f_hair1.png";
		}
		elseif($hairstyle == 1)
		{
			$hair_s = "profile/images/female/f_hair2.png";
		}
		elseif($hairstyle == 2)
		{
			$hair_s = "profile/images/female/f_hair3.png";
		}
		elseif($hairstyle == 3)
		{
			$hair_s = "profile/images/female/f_hair4.png";
		}
		else
		{
			$hair_s = "profile/images/female/f_hair1.png";
		}
	}
	else//if we want to generate a male
	{
		if($hairstyle == 0)
		{
			$hair_s="profile/images/male/m_hair1.png";
		}
		elseif($hairstyle == 1)
		{
			$hair_s="profile/images/male/m_hair2.png";
		}
		elseif($hairstyle == 2)
		{
			$hair_s="profile/images/male/m_hair3.png";
		}
		elseif($hairstyle == 3)
		{
			$hair_s="profile/images/male/m_hair4.png";
		}
		else
		{
			$hair_s="profile/images/male/m_hair1.png";
		}
	}

	return $hair_s;
}

function getGenericVariables($sex)
{
	if($sex == 0) //If a female has been generated
	{
		$generic = array("profile/images/female/f_body.png", "profile/images/female/f_face.png", "profile/images/female/f_eyes.png", "profile/images/female/f_lips.png", "profile/images/female/f_uniform.png");
		//body type, face image, eye image, lips image, uniform
	}
	elseif($sex == 1) //If a male has been generated
	{
		$generic = array( "profile/images/male/m_body.png", "profile/images/male/m_face.png", "profile/images/male/m_eyes.png", "profile/images/male/m_lips.png", "profile/images/male/m_uniform.png");
	}

	return $generic;
}

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
	$hair_number = getHairStyle($sex, $hairstyle);
	$genericVariables = getGenericVariables($sex);
	
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