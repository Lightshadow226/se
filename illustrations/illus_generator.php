<?php

//Colorization by Illustration - Common colors for both male and female

function getSkinColor($skin, $illustration)
{
	if($illustration == 1) //If we are working with the first illustration (may need to adapt this, aka not put the number of the illustration but some other indication if multiple illustrations are good with the same colorization)
	{
		if($skin == 0) //white
		{
			$rgb = array(0, 0, 0, 0);
		}
		elseif($skin == 1) // tan
		{
			$rgb = array(-35, -30, -35, 0);
		}
		elseif($skin == 2) //asian
		{	
			$rgb = array(35, 35, 0, 0);
		}
		elseif($skin == 3) //brown
		{
			$rgb = array(-55, -60, -100, 0);
		}
		elseif($skin == 4) //black
		{
			$rgb = array(-105, -90, -70, 0);
		}
		else //Default is going to be skin color 0 in case the randomizer fucks up. Defaults will be given for all characteristics.
		{
			$rgb = array(0, 0, 0, 0);
		}

		return $rgb;
	}
}

function getHairColor($haircolor, $illustration)
{
	if($illustration == 1) // same as above
	{
		if($haircolor == 0) //brown
		{
			$rgb = array(-60, -60, -60, 0);
		}
		elseif($haircolor == 1) //blonde
		{
			$rgb = array(40, 20, -20, 0);
		}
		elseif($haircolor == 2) //red
		{
			$rgb = array(-30, -100, -60, 0);
		}
		elseif($haircolor == 3) //black
		{
			$rgb = array(-100, -100, -25, 0);
		}
		else
		{
			$rgb = array(-60, -60, -60, 0); //default to 0
		}
	
		return $rgb;
	}
}

function getEyeColor($eyecolor, $illustration)
{
	if($illustration == 1)
	{
		if($eyecolor == 0) //brown
		{
			$rgb = array(-40, -90, -110, 0);
		}
		elseif($eyecolor == 1) //blue
		{
			$rgb = array(10, 40, 90, 0);
		}
		elseif($eyecolor == 2) //green
		{
			$rgb = array(-150, 30, -40, 0);
		}
		elseif($eyecolor == 3) //grey
		{
			$rgb = array(-0, 0, 0, 0);
		}
		else
		{
			$rgb = array(-40, -90, -110, 0);
		}
	
		return $rgb;	
	}

}

function getHairStyle($sex, $hairstyle, $illustration)
{
	if($illustration == 1)
	{
		if($sex == 1) //male
		{
			$hair_s = array( "images/ch1/1/m/hair_" + $hairstyle + ".png", "images/ch1/1/m/hair_1_light.png");

		}
		else //female by default
		{
			$hair_s = array( "images/ch1/1/f/hair_" + $hairstyle + ".png", "images/ch1/1/f/hair_1_light.png");
		}
	}

	return $hair_s;
}