<?php 

function scholar_randomizer($sex,$skin,$hairstyle,$haircolor,$eyecolor)
{
	if($sex == 0) //If a female has been generated
	{
		$bodytype ="profile/images/female/f_body.png";
		$face_image ="profile/images/female/f_face.png";
		$eye_image ="profile/images/female/f_eyes.png";
		$lips_image ="profile/images/female/f_lips.png";
		$uniform ="profile/images/female/f_uniform.png"; 
		
		if($skin == 0)
		{
			$s_r = 30;
			$s_g = -20;
			$s_b = -45;
			$s_op = 0;
		}
		elseif($skin == 1)
		{
			$s_r = -15;
			$s_g = -60;
			$s_b = -100;
			$s_op = 0;
		}
		elseif($skin == 2)
		{
			$s_r = 70;
			$s_g = -25;
			$s_b = -85;
			$s_op = 0;
		}
		elseif($skin == 3)
		{
			$s_r = -40;
			$s_g = -100;
			$s_b = -140;
			$s_op = 0;
		}
		elseif($skin == 4)
		{
			$s_r = -105;
			$s_g = -160;
			$s_b = -190;
			$s_op = 0;
		}
		else //Default is going to be skin color 0 in case the randomizer fucks up. Defaults will be given for all characteristics.
		{
			$s_r = 30;
			$s_g = -20;
			$s_b = -45;
			$s_op = 0;
		}
		
		//Hairstyle assignment of variables
		if($hairstyle == 0)
		{
			$hair_s="profile/images/female/f_hair1.png";
		}
		elseif($hairstyle == 1)
		{
			$hair_s="profile/images/female/f_hair2.png";
		}
		elseif($hairstyle == 2)
		{
			$hair_s="profile/images/female/f_hair3.png";
		}
		elseif($hairstyle == 3)
		{
			$hair_s="profile/images/female/f_hair4.png";
		}
		else
		{
			$hair_s="profile/images/female/f_hair1.png";
		}
		
		//Hair color assignment of variables
		if($haircolor == 0)
		{
			$h_r = 80;
			$h_g = 15;
			$h_b = -200;
			$h_op = 0;		
		}
		elseif($haircolor == 1)
		{
			$h_r = -40;
			$h_g = -80;
			$h_b = -150;
			$h_op = 0;
		}
		elseif($haircolor == 2)
		{
			$h_r = -120;
			$h_g = -120;
			$h_b = -110;
			$h_op = 0;
		}
		elseif($haircolor == 3)
		{
			$h_r = 80;
			$h_g = -90;
			$h_b = -200;
			$h_op = 0;
		}
		else
		{
			$h_r = -40;
			$h_g = -80;
			$h_b = -150;
			$h_op = 0;
		}
		
		//Eye Color assignment of variables
		if($eyecolor == 0)
		{
			$e_r = -10;
			$e_g = -10;
			$e_b = 290;
			$e_op = 0;		
		}
		elseif($eyecolor == 1)
		{
			$e_r = -130;
			$e_g = 30;
			$e_b = -90;
			$e_op = 0;
		}
		elseif($eyecolor == 2)
		{
			$e_r = -50;
			$e_g = -50;
			$e_b = -50;
			$e_op = 0;
		}
		elseif($eyecolor == 3)
		{
			$e_r = -30;
			$e_g = -90;
			$e_b = -110;
			$e_op = 0;
		}
		else
		{
			$e_r = -30;
			$e_g = -90;
			$e_b = -110;
			$e_op = 0;
		}
	}
	else //If a male has been generated
	{
		$bodytype ="profile/images/male/m_body.png";
		$face_image ="profile/images/male/m_face.png";
		$eye_image ="profile/images/male/m_eyes.png";
		$lips_image ="profile/images/male/m_lips.png";
		$uniform ="profile/images/male/m_uniform.png";
	
		if($skin == 0)
		{
			$s_r = 30;
			$s_g = -20;
			$s_b = -45;
			$s_op = 0;		
		}
		elseif($skin == 1)
		{
			$s_r = -15;
			$s_g = -60;
			$s_b = -100;
			$s_op = 0;
		}
		elseif($skin == 2)
		{
			$s_r = 70;
			$s_g = -25;
			$s_b = -85;
			$s_op = 0;
		}
		elseif($skin == 3)
		{
			$s_r = -40;
			$s_g = -100;
			$s_b = -140;
			$s_op = 0;
		}
		elseif($skin == 4)
		{
			$s_r = -105;
			$s_g = -160;
			$s_b = -190;
			$s_op = 0;
		}
		else
		{
			$s_r = 30;
			$s_g = -20;
			$s_b = -45;
			$s_op = 0;
		}
		
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
		
		//Hair color assignment of variables
		if($haircolor == 0)
		{
			$h_r = 80;
			$h_g = 15;
			$h_b = -200;
			$h_op = 0;		
		}
		elseif($haircolor == 1)
		{
			$h_r = -40;
			$h_g = -80;
			$h_b = -150;
			$h_op = 0;
		}
		elseif($haircolor == 2)
		{
			$h_r = -120;
			$h_g = -120;
			$h_b = -110;
			$h_op = 0;
		}
		elseif($haircolor == 3)
		{
			$h_r = 80;
			$h_g = -90;
			$h_b = -200;
			$h_op = 0;
		}
		else
		{
			$h_r = -40;
			$h_g = -80;
			$h_b = -150;
			$h_op = 0;
		}
		
		//Eye Color assignment of variables
		if($eyecolor == 0)
		{
			$e_r = -10;
			$e_g = -10;
			$e_b = 290;
			$e_op = 0;		
		}
		elseif($eyecolor == 1)
		{
			$e_r = -130;
			$e_g = 30;
			$e_b = -90;
			$e_op = 0;
		}
		elseif($eyecolor == 2)
		{
			$e_r = -50;
			$e_g = -50;
			$e_b = -50;
			$e_op = 0;
		}
		elseif($eyecolor == 3)
		{
			$e_r = -30;
			$e_g = -90;
			$e_b = -110;
			$e_op = 0;
		}
		else
		{
			$e_r = -30;
			$e_g = -90;
			$e_b = -110;
			$e_op = 0;
		}
	}
	
}

/*
$sex1 = rand(0,1); //Generates a random number between 0 and 1; 0 being female and 1 being male
$skin1 = rand(0,4); //Generates a random number between 0 and 4; all corresponding to one of the choices of skin color
$hairstyle1 = rand(0,3); //same logic applies to the rest
$haircolor1 = rand(0,3);
$eyecolor1 = rand(0,3);
*/

scholar_randomizer(0,0,0,0,0);

header('Content-Type: image/png');
	
$destination = imagecreatefrompng($bodytype);
$source = imagecreatefrompng($face_image);
$source2 = imagecreatefrompng($eye_image);
$source3 = imagecreatefrompng($lips_image);
$source4 = imagecreatefrompng($hair_s);
$source5 = imagecreatefrompng($uniform);

imagealphablending($source, true);
imagesavealpha($source, true);

imagealphablending($destination, true);
imagesavealpha($destination, true);

$largeur_source = imagesx($source);
$hauteur_source = imagesy($source);

$largeur_source2 = imagesx($source2);
$hauteur_source2 = imagesy($source2);

$largeur_source3 = imagesx($source3);
$hauteur_source3 = imagesy($source3);

$largeur_source4 = imagesx($source4);
$hauteur_source4 = imagesy($source4);

$largeur_source5 = imagesx($source5);
$hauteur_source5 = imagesy($source5);

imagefilter($source2, IMG_FILTER_COLORIZE, $e_r, $e_g, $e_b, $e_op); //Eye color
imagefilter($source3, IMG_FILTER_COLORIZE, $s_r, $s_g, $s_b, $s_op); //Lip color = skin color
imagefilter($source4, IMG_FILTER_COLORIZE, $h_r, $h_g, $h_b, $h_op); //Hair color
imagefilter($destination, IMG_FILTER_COLORIZE, $s_r, $s_g, $s_b, $s_op); //Skin color

imagecopy($destination, $source, 0, 0, 0, 0, $largeur_source, $hauteur_source);
imagecopy($destination, $source2, 0, 0, 0, 0, $largeur_source2, $hauteur_source2);
imagecopy($destination, $source3, 0, 0, 0, 0, $largeur_source3, $hauteur_source3);
imagecopy($destination, $source4, 0, 0, 0, 0, $largeur_source4, $hauteur_source4);
imagecopy($destination, $source5, 0, 0, 0, 0, $largeur_source5, $hauteur_source5);

imagepng($destination);

?>

