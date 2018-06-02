<?php 

// include "profile/imageGenerator.php";

function getIllustrationVariables($sex, $hairstyle, $chapter, $illustration, &$positions, &$positionsNames)
{
    //sizeof($chaptersLength[$chapter]) -> this is the amount of illustrations in one chapter
    $chaptersLength = array
    (
        array//chapter 0
        (
            0
        ),
        array//chapter 1
        (
            1,//illustration 1
            2,//illustration 2
            1,//illustration 3
            0,//illustration 4
        ),
        array//chapter 2
        (
            1,
            1,
            0,
            0,
        )
    );

	$path = getMainPath($sex, $chapter, $illustration);// . "img";

    $generic = array();
    
    // $background = "chapter" . $chapter . "/illustration" . $illustration . "/background.png";
    $background = $path . "background.png";
    array_push($generic, $background);

    //if there's a skin image
    $filepath = $path . "skin.png";

    if(file_exists($filepath))
    {
        array_push($generic, $filepath);

        //we save what we saved and where we saved it
        array_push($positions, sizeof($generic) - 1);
        array_push($positionsNames, "skin");
    }

    //get all the clothes, etc.
    for($i = 0; $i < $chaptersLength[$chapter][$illustration - 1]; $i++)
    {
        $fullPath = $path . "img". $i . ".png";
        
        array_push($generic, $fullPath);//push the path into generic
    }
    
    if($chapter == 1 && $illustration == 1)
    {
        //re-append the skin
        $filepath = $path . "skin.png";

        if(file_exists($filepath))
        {
            array_push($generic, $filepath);

            //we save what we saved and where we saved it
            array_push($positions, sizeof($generic) - 1);
            array_push($positionsNames, "skin");
        }
    }
    
    //if there's a hair image
    $filepath = $path . "h" . $hairstyle . ".png";
    
    if(file_exists($filepath))
    {
        array_push($generic, $filepath);

        //we save what we saved and where we saved it
        array_push($positions, sizeof($generic) - 1);
        array_push($positionsNames, "hair");
    }

    // if there's an hair highlight image
    $filepath = $path . "h" . $hairstyle . "h.png";
    
    if(file_exists($filepath))
    {
        array_push($generic, $filepath);
    }
    
    // if there's an eye white image
    $filepath = $path . "eyeswhite.png";
    
    if(file_exists($filepath))
    {
        array_push($generic, $filepath);
    }

    // if there's an eye image
    $filepath = $path . "eyes.png";
    
    if(file_exists($filepath))
    {
        array_push($generic, $filepath);

        //we save what we saved and where we saved it
        array_push($positions, sizeof($generic) - 1);
        array_push($positionsNames, "eyes");
    }

    return $generic;
}

function getMainPath($sex, $chapter, $illustration)
{
    if($sex == 0) //If a female has been generated
	{
        $sexPath = "/female/";
	}
	elseif($sex == 1) //If a male has been generated
	{
        $sexPath = "/male/";
    }

    // $path = "chapter" . $chapter . "/illustration" . $illustration . $sexPath;
    $path = "../illustration" . $illustration . $sexPath;

    return $path;
}

function generateIllustration($currentChapter, $currentIllustration)
{
    // STEP 1: get variables
    // $sex = 0;
    // $skincolor = 2;
    // $hairstyle = 0;
    // $haircolor = 0;
    // $eyecolor = 0;
    // $shirt = 0;
    // $pants = 0;
    // $shoes = 0;

    session_start();
    
    if(isset($_SESSION['id']))
    {
        $id = $_SESSION['id']; // Picks up the id of the user that is logged in
    }
    
    try
    {
        $db = new PDO('mysql:host=localhost; dbname=USERS', 'S3R3NA', 'Tadashi2016');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected to the database!";
    }
    catch (PDOException $ex)
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
        $shirt = $rs['shirt_id'];
        $pants = $rs['pants_id'];
        $shoes = $rs['shoes_id'];
    }
    
    // STEP 2: create variables for all the images
    $sources = array();
    $positions = array();
    $positionsNames = array();

    $allImages = getIllustrationVariables($sex, $hairstyle, $currentChapter, $currentIllustration, $positions, $positionsNames);
    
    // STEP 3: convert all the images from string to images
    for($i = 0; $i < sizeof($allImages); $i++)
    {
        array_push($sources, imagecreatefrompng($allImages[$i]));
    }

    // STEP 4: get the colors
    $skin_rgb = getSkinColor($skincolor);
    $hair_rgb = getHairColor($haircolor);
    $eye_rgb = getEyeColor($eyecolor);
    // $hair_number = getHairStyle($sex, $hairstyle, "fullsprite");

    // STEP 5: apply color filters -> the image filter has to be before the loop (otherwise the colors are applied multiple times over each other)
    for($i = 0; $i < sizeof($positions); $i++)
    {
        if($positionsNames[$i] == "skin")
        {
            imagefilter($sources[$positions[$i]], IMG_FILTER_COLORIZE, $skin_rgb[0], $skin_rgb[1], $skin_rgb[2], $skin_rgb[3]);
        }
        else if($positionsNames[$i] == "hair")
        {
            imagefilter($sources[$positions[$i]], IMG_FILTER_COLORIZE, $hair_rgb[0], $hair_rgb[1], $hair_rgb[2], $hair_rgb[3]); //Hair color
        }
        else if($positionsNames[$i] == "eyes")
        {
            imagefilter($sources[$positions[$i]], IMG_FILTER_COLORIZE, $eye_rgb[0], $eye_rgb[1], $eye_rgb[2], $eye_rgb[3]); //Hair color
        }
    }

    // STEP 6: overlap all the images
    for($i = 1; $i < sizeof($sources); $i++)
    {
        $width = imagesx($sources[$i]);
        $height = imagesy($sources[$i]);
        
        imagecopy($sources[0], $sources[$i], 0, 0, 0, 0, $width, $height);//sources[0] is the background (the original image)
    }

    return $sources[0];
    // return 0;
}

function getQuality()
{
    return 40;
}

?>