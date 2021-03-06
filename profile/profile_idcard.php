<?php

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


if($sex == "0")
{
	//Allocation of images, file paths
	$bodytype ="studentid/female/f_body.png";
	$face_image ="studentid/female/f_face.png";
	$eye_image ="studentid/female/f_eyes.png";
    $lips_image ="studentid/female/f_lips.png";
    $uniform ="studentid/female/f_uniform.png";
	
	//Skin Color assignment of variables
	if($skincolor == "1")
	{
		$s_r = 30;
		$s_g = -20;
		$s_b = -45;
		$s_op = 0;		
	}
	elseif($skincolor == "2")
	{
		$s_r = -15;
		$s_g = -60;
		$s_b = -100;
		$s_op = 0;
	}
	elseif($skincolor == "3")
	{
		$s_r = 70;
		$s_g = -25;
		$s_b = -85;
		$s_op = 0;
	}
	elseif($skincolor == "4")
	{
		$s_r = -40;
		$s_g = -100;
		$s_b = -140;
		$s_op = 0;
	}
	elseif($skincolor == "5")
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
	
	//Hairstyle assignment of variables
	if($hairstyle == "1")
	{
		$hair_s="studentid/female/f_hair1.png";
	}
	elseif($hairstyle == "2")
	{
		$hair_s="studentid/female/f_hair2.png";
	}
	elseif($hairstyle == "3")
	{
		$hair_s="studentid/female/f_hair3.png";
	}
	elseif($hairstyle == "4")
	{
		$hair_s="studentid/female/f_hair4.png";
	}
	else
	{
		$hair_s="studentid/female/f_hair1.png";
	}
	
	//Hair color assignment of variables
	if($haircolor == "1")
	{
		$h_r = 80;
		$h_g = 15;
		$h_b = -200;
		$h_op = 0;		
	}
	elseif($haircolor == "2")
	{
		$h_r = -40;
		$h_g = -80;
		$h_b = -150;
		$h_op = 0;
	}
	elseif($haircolor == "3")
	{
		$h_r = -120;
		$h_g = -120;
		$h_b = -110;
		$h_op = 0;
	}
	elseif($haircolor == "4")
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
	if($eyecolor == "1")
	{
		$e_r = -10;
		$e_g = -10;
		$e_b = 290;
		$e_op = 0;		
	}
	elseif($eyecolor == "2")
	{
		$e_r = -130;
		$e_g = 30;
		$e_b = -90;
		$e_op = 0;
	}
	elseif($eyecolor == "3")
	{
		$e_r = -50;
		$e_g = -50;
		$e_b = -50;
		$e_op = 0;
	}
	elseif($eyecolor == "4")
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
else
{
	$bodytype ="studentid/male/m_body.png";
	$face_image ="studentid/male/m_face.png";
	$eye_image ="studentid/male/m_eyes.png";
    $lips_image ="studentid/male/m_lips.png";
    $uniform ="studentid/male/m_uniform.png";

	if($skincolor == "1")
	{
		$s_r = 30;
		$s_g = -20;
		$s_b = -45;
		$s_op = 0;		
	}
	elseif($skincolor == "2")
	{
		$s_r = -15;
		$s_g = -60;
		$s_b = -100;
		$s_op = 0;
	}
	elseif($skincolor == "3")
	{
		$s_r = 70;
		$s_g = -25;
		$s_b = -85;
		$s_op = 0;
	}
	elseif($skincolor == "4")
	{
		$s_r = -40;
		$s_g = -100;
		$s_b = -140;
		$s_op = 0;
	}
	elseif($skincolor == "5")
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
	
	if($hairstyle == "1")
	{
		$hair_s="studentid/male/m_hair1.png";
	}
	elseif($hairstyle == "2")
	{
		$hair_s="studentid/male/m_hair2.png";
	}
	elseif($hairstyle == "3")
	{
		$hair_s="studentid/male/m_hair3.png";
	}
	elseif($hairstyle == "4")
	{
		$hair_s="studentid/male/m_hair4.png";
	}
	else
	{
		$hair_s="studentid/male/m_hair1.png";
	}
	
	//Hair color assignment of variables
	if($haircolor == "1")
	{
		$h_r = 80;
		$h_g = 15;
		$h_b = -200;
		$h_op = 0;		
	}
	elseif($haircolor == "2")
	{
		$h_r = -40;
		$h_g = -80;
		$h_b = -150;
		$h_op = 0;
	}
	elseif($haircolor == "3")
	{
		$h_r = -120;
		$h_g = -120;
		$h_b = -110;
		$h_op = 0;
	}
	elseif($haircolor == "4")
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
	if($eyecolor == "1")
	{
		$e_r = -10;
		$e_g = -10;
		$e_b = 290;
		$e_op = 0;		
	}
	elseif($eyecolor == "2")
	{
		$e_r = -130;
		$e_g = 30;
		$e_b = -90;
		$e_op = 0;
	}
	elseif($eyecolor == "3")
	{
		$e_r = -50;
		$e_g = -50;
		$e_b = -50;
		$e_op = 0;
	}
	elseif($eyecolor == "4")
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

header('Content-Type: image/png');

$destination = imagecreatefromjpeg($card_base);
$source = imagecreatefrompng($face_image);
$source2 = imagecreatefrompng($eye_image);
$source3 = imagecreatefrompng($lips_image);
$source4 = imagecreatefrompng($hair_s);
$source5 = imagecreatefrompng($uniform);
$source6 = imagecreatefrompng($bodytype);

//Writing on the image
$textcolor = imagecolorallocate($destination, 0, 0, 255);
imagestring($destination, 10, 150, 205, $name, $textcolor);

imagealphablending($source, true);
imagesavealpha($source, true);

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

$largeur_source6 = imagesx($source6);
$hauteur_source6 = imagesy($source6);

imagefilter($source2, IMG_FILTER_COLORIZE, $e_r, $e_g, $e_b, $e_op); //Eye color
imagefilter($source3, IMG_FILTER_COLORIZE, $s_r, $s_g, $s_b, $s_op); //Lip color = skin color
imagefilter($source4, IMG_FILTER_COLORIZE, $h_r, $h_g, $h_b, $h_op); //Hair color
imagefilter($source6, IMG_FILTER_COLORIZE, $s_r, $s_g, $s_b, $s_op); //Skin color

imagecopy($destination, $source6, 0, 0, 0, 0, $largeur_source6, $hauteur_source6);
imagecopy($destination, $source, 0, 0, 0, 0, $largeur_source, $hauteur_source);
imagecopy($destination, $source2, 0, 0, 0, 0, $largeur_source2, $hauteur_source2);
imagecopy($destination, $source3, 0, 0, 0, 0, $largeur_source3, $hauteur_source3);
imagecopy($destination, $source4, 0, 0, 0, 0, $largeur_source4, $hauteur_source4);
imagecopy($destination, $source5, 0, 0, 0, 0, $largeur_source5, $hauteur_source5);

imagepng($destination);	

?>