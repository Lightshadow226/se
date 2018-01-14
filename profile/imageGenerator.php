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

function getHairStyle($sex, $hairstyle, $studentid)//Hairstyle assignment of variables
{
	$path = "";//FAIRE FONCTIONNER ÇA ÉVENTUELLEMENT
	
	if($studentid)
	{
		if($sex == 0) //If a female has been generated
		{
			if($hairstyle == "0")
			{
				$hair_s="studentid/female/f_hair1.png";
			}
			elseif($hairstyle == "1")
			{
				$hair_s="studentid/female/f_hair2.png";
			}
			elseif($hairstyle == "2")
			{
				$hair_s="studentid/female/f_hair3.png";
			}
			elseif($hairstyle == "3")
			{
				$hair_s="studentid/female/f_hair4.png";
			}
			else
			{
				$hair_s="studentid/female/f_hair1.png";
			}
		}
		else 
		{
			if($hairstyle == "0")
			{
				$hair_s="studentid/male/m_hair1.png";
			}
			elseif($hairstyle == "1")
			{
				$hair_s="studentid/male/m_hair2.png";
			}
			elseif($hairstyle == "2")
			{
				$hair_s="studentid/male/m_hair3.png";
			}
			elseif($hairstyle == "3")
			{
				$hair_s="studentid/male/m_hair4.png";
			}
			else
			{
				$hair_s="studentid/male/m_hair1.png";
			}
		}
	}
	else
	{
		if($sex == 0) //If a female has been generated
		{
			if($hairstyle == 0)
			{
				$hair_s = "images/female/f_hair1.png";
			}
			elseif($hairstyle == 1)
			{
				$hair_s = "images/female/f_hair2.png";
			}
			elseif($hairstyle == 2)
			{
				$hair_s = "images/female/f_hair3.png";
			}
			elseif($hairstyle == 3)
			{
				$hair_s = "images/female/f_hair4.png";
			}
			else
			{
				$hair_s = "images/female/f_hair1.png";
			}
		}
		else//if we want to generate a male
		{
			if($hairstyle == 0)
			{
				$hair_s="images/male/m_hair1.png";
			}
			elseif($hairstyle == 1)
			{
				$hair_s="images/male/m_hair2.png";
			}
			elseif($hairstyle == 2)
			{
				$hair_s="images/male/m_hair3.png";
			}
			elseif($hairstyle == 3)
			{
				$hair_s="images/male/m_hair4.png";
			}
			else
			{
				$hair_s="images/male/m_hair1.png";
			}
		}
	}

	return $hair_s;
}

function getGenericVariables($sex, $studentid)
{
	$path = "";
	
	//simplifier en mettant path + "body.png"
	//path va s'initialiser avec le sexe

	if($studentid)//si on fait le student ID
	{
		$path = "studentid/";

		if($sex == 0) //If a female has been generated
		{
			$generic = array( "studentid/female/f_body.png", "studentid/female/f_face.png", "studentid/female/f_eyes.png", "studentid/female/f_lips.png", "studentid/female/f_uniform.png", "studentid/female/f_shoes.png");
			//body type, face image, eye image, lips image, shirt, shoes
		}
		elseif($sex == 1) //If a male has been generated
		{
			$generic = array( "studentid/male/m_body.png", "studentid/male/m_face.png", "studentid/male/m_eyes.png", "studentid/male/m_lips.png", "studentid/male/m_uniform.png", "studentid/male/m_shoes.png");
		}
	}
	else//si on génère une image standard (sprite)
	{
		$path = "images/";

		if($sex == 0) //If a female has been generated
		{
			$generic = array( "images/female/f_body.png", "images/female/f_face.png", "images/female/f_eyes.png", "images/female/f_lips.png", "images/female/f_uniform.png", "images/female/f_shoes.png");
			//body type, face image, eye image, lips image, shirt, shoes
		}
		elseif($sex == 1) //If a male has been generated
		{
			$generic = array( "images/male/m_body.png", "images/male/m_face.png", "images/male/m_eyes.png", "images/male/m_lips.png", "images/male/m_uniform.png", "images/male/m_shoes.png");
		}
	}

	return $generic;
}

?>