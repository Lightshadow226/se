<?php 

function getEyeColor($eyecolor)//Eye Color assignment of variables
{
	if($eyecolor == 0)//blue
	{
		$rgb = array(-100, 50, 100, 0);
	}
	elseif($eyecolor == 1)//green
	{
		$rgb = array(-40, 0, -40, 0);
	}
	elseif($eyecolor == 2)//grey
	{
		$rgb = array(-50, -50, -50, 0);
	}
	elseif($eyecolor == 3)//brown
	{
		$rgb = array(5, -40, -50, 0);
	}
	else
	{
		$rgb = array(-30, -90, -110, 0);
	}

	return $rgb;
}

function getHairColor($haircolor)//Hair color assignment of variables
{
	if($haircolor == 0)//blonde
	{
		$rgb = array(85, 10, -80, 0);
	}
	elseif($haircolor == 1)//brown
	{
		$rgb = array(-100, -130, -150, 0);
	}
	elseif($haircolor == 2)//black
	{
		$rgb = array(-120, -120, -110, 0);
	}
	elseif($haircolor == 3)//red
	{
		$rgb = array(50, -100, -160, 0);
	}
	else
	{
		$rgb = array(40, -80, -150, 0);
	}

	return $rgb;
}

function getHairStyle($sex, $hairstyle, $type)//Hairstyle assignment of variables
{
	$sexFolder = ["female", "male"];
	$rootFolder = "";
	
	if($type == "studentid")
	{
		$rootFolder = "studentid/";
	}
	else if($type == "fullsprite")
	{
		$rootFolder = "images/";
	}
	else if($type == "mediumsprite")
	{
		$rootFolder = "images/index/";
	}

	return $rootFolder . $sexFolder[$sex] . "/hair/hair" .$hairstyle . ".png";;
}

function getShirt($sex, $shirtIndex)
{
	$folder = ["female", "male"];
	return "images/" . $folder[$sex] . "/shirts/shirt" . $shirtIndex . ".png";
}

function getPants($sex, $pantsIndex)
{
	$folder = ["female", "male"];
	return "images/" . $folder[$sex] . "/pants/pant" . $pantsIndex . ".png";
}

function getShoes($sex, $shoesIndex)
{
	$folder = ["female", "male"];
	return "images/" . $folder[$sex] . "/shoes/shoe" . $shoesIndex . ".png";
}

function getSkinColor($skin)//Get the skin color
{
	if($skin == 0)//white
	{
		$rgb = array(65, 0, -50, 0);
	}
	elseif($skin == 1)//tan
	{
		$rgb = array(10, -70, -150, 0);
	}
	elseif($skin == 2)//asian-ish
	{	
		$rgb = array(60, -20, -95, 0);
	}
	elseif($skin == 3)//brown
	{
		$rgb = array(-20, -110, -160, 0);
	}
	elseif($skin == 4)//black
	{
		$rgb = array(-60, -120, -150, 0);
	}
	else //Default is going to be skin color 0 in case the randomizer fucks up. Defaults will be given for all characteristics.
	{
		$rgb = array(30, -20, -45, 0);
	}

	return $rgb;
}

function getGenericVariables($sex, $type)
{
	$sexFolder = ["female/", "male/"];

	if($type == "studentid")//si on fait le student ID
	{
		$rootFolder = "studentid/";
	}
	else if($type == "fullsprite")//si on génère une image standard (sprite)
	{
		$rootFolder = "images/";
	}
	else if($type == "mediumsprite")//si on génère une image standard, mais en plus petit format (small sprite)
	{
		$rootFolder = "images/index/";
	}

	$generic = array
	(
		$rootFolder . $sexFolder[$sex] . "body.png",
		$rootFolder . $sexFolder[$sex] . "face.png",
		$rootFolder . $sexFolder[$sex] . "eyes.png",
		$rootFolder . $sexFolder[$sex] . "lips.png",
	);

	if($type != "fullsprite")
	{
		array_push($generic, $rootFolder . $sexFolder[$sex] . "uniform.png");//only add the uniform if we're doing the student ID
	}

	return $generic;
}

?>