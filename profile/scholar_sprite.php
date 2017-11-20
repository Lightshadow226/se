<?php

session_start();

if(isset($_SESSION['id']))
{
	$id = $_SESSION['id']; // Picks up the id of the user that is logged in
}



try{
	$db = new PDO('mysql:host=localhost; dbname=USERS', 'S3R3NA', 'Karolina2016');
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//echo "Connected to the database!";

}catch (PDOException $ex){
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



if($sex == "0")
{
	//Allocation of images, file paths
	$bodytype ="images/female/f_body.png";
	$face_image ="images/female/f_face.png";
	$eye_image ="images/female/f_eyes.png";
	$lips_image ="images/female/f_lips.png";
	
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
				$hair_s="images/female/f_hair1.png";
			}
			elseif($hairstyle == "2")
			{
				$hair_s="images/female/f_hair2.png";
			}
			elseif($hairstyle == "3")
			{
				$hair_s="images/female/f_hair3.png";
			}
			elseif($hairstyle == "4")
			{
				$hair_s="images/female/f_hair4.png";
			}
			else
			{
				$hair_s="images/female/f_hair1.png";
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
			
			
			//Assignment of Shirt Variable
			if($shirt == "1")
			{
				$shirt_image ="images/female/f_uniform.png";		
			}
			elseif($shirt == "2")
			{
				$shirt_image ="images/female/f_uniform.png";
			}
			else
			{
				$shirt_image ="images/female/f_uniform.png";
			}
			
			
			//Assignment of Pants Variable
			if($pants == "1")
			{
				$pants_image ="images/female/f_uniform.png";		
			}
			elseif($pants == "2")
			{
				$pants_image ="images/female/f_uniform.png";
			}
			else
			{
				$pants_image ="images/female/f_uniform.png";
			}
			
			//Assignment of Shoes Variable
			if($shoes == "1")
			{
				$shoes_image ="images/female/f_shoes.png";		
			}
			elseif($shoes == "2")
			{
				$shoes_image ="images/female/f_shoes.png";
			}					
			else
			{
				$shoes_image ="images/female/f_shoes.png";
			}	
	
}	
else
{
	$bodytype ="images/male/m_body.png";
	$face_image ="images/male/m_face.png";
	$eye_image ="images/male/m_eyes.png";
	$lips_image ="images/male/m_lips.png";

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
				$hair_s="images/male/m_hair1.png";
			}
			elseif($hairstyle == "2")
			{
				$hair_s="images/male/m_hair2.png";
			}
			elseif($hairstyle == "3")
			{
				$hair_s="images/male/m_hair3.png";
			}
			elseif($hairstyle == "4")
			{
				$hair_s="images/male/m_hair4.png";
			}
			else
			{
				$hair_s="images/male/m_hair1.png";
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
			
			
			//Assignment of Shirt Variable
			if($shirt == "1")
			{
				$shirt_image ="images/male/m_uniform.png";		
			}
			elseif($shirt == "2")
			{
				$shirt_image ="images/male/m_uniform.png";
			}
			else
			{
				$shirt_image ="images/male/m_uniform.png";
			}
			
			
			//Assignment of Pants Variable
			if($pants == "1")
			{
				$pants_image ="images/male/m_uniform.png";		
			}
			elseif($pants == "2")
			{
				$pants_image ="images/male/m_uniform.png";
			}
			else
			{
				$pants_image ="images/male/m_uniform.png";
			}
			
			//Assignment of Shoes Variable
			if($shoes == "1")
			{
				$shoes_image ="images/male/m_shoes.png";		
			}
			elseif($shoes == "2")
			{
				$shoes_image ="images/male/m_shoes.png";
			}					
			else
			{
				$shoes_image ="images/male/m_shoes.png";
			}		
			
}


header('Content-Type: image/png');

$destination = imagecreatefrompng($bodytype);
$source = imagecreatefrompng($face_image);
$source2 = imagecreatefrompng($eye_image);
$source3 = imagecreatefrompng($lips_image);
$source4 = imagecreatefrompng($hair_s);
$source5 = imagecreatefrompng($shoes_image);
$source6 = imagecreatefrompng($shirt_image);

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

$largeur_source6 = imagesx($source6);
$hauteur_source6 = imagesy($source6);

imagefilter($source2, IMG_FILTER_COLORIZE, $e_r, $e_g, $e_b, $e_op); //Eye color
imagefilter($source3, IMG_FILTER_COLORIZE, $s_r, $s_g, $s_b, $s_op); //Lip color = skin color
imagefilter($source4, IMG_FILTER_COLORIZE, $h_r, $h_g, $h_b, $h_op); //Hair color
imagefilter($destination, IMG_FILTER_COLORIZE, $s_r, $s_g, $s_b, $s_op); //Skin color


imagecopy($destination, $source, 0, 0, 0, 0, $largeur_source, $hauteur_source);
imagecopy($destination, $source2, 0, 0, 0, 0, $largeur_source2, $hauteur_source2);
imagecopy($destination, $source3, 0, 0, 0, 0, $largeur_source3, $hauteur_source3);
imagecopy($destination, $source4, 0, 0, 0, 0, $largeur_source4, $hauteur_source4);
imagecopy($destination, $source5, 0, 0, 0, 0, $largeur_source5, $hauteur_source5);
imagecopy($destination, $source6, 0, 0, 0, 0, $largeur_source6, $hauteur_source6);

imagepng($destination);	


?>