<?php

include_once '../resources/session.php';
include_once "../resources/database.php";

$id = $_SESSION['id'];

//*********************************************
//parse STORY table to find out current chapter
//*********************************************

$sqlQuery = "SELECT * FROM story WHERE id = :id";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $story_location = $rs['storylocation'];
    $last_chapter = $rs['lastchapterplayed'];
    $physicallocationint = $rs['physicallocationint'];
}

//*********************************************
//parse chapterX table
//*********************************************

$sqlQuery = "SELECT * FROM chapter0_story WHERE id = :id";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

$isVisited = array();

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $isVisited = $rs;//the variable username will contain the username of the last item of the array parsed
    // echo sizeof($rs) . "<br>";
    // echo $rs['c'] . "\n";
}

$size = (sizeof($isVisited) / 2) - 2;

echo "<html>";
echo "<input id=\"chapter_size\" value = $size></input>";

//for each slide in the current chapter
for($i = 0; $i <= $size; $i++)
{
    //on identifie la nouvelle variable
    $newVariable = "c" . $i;

    //on store la variable
    $slide = $isVisited[$newVariable];

    //on crée la variable dans le DOM
    echo "<input id= \"$newVariable\" value = $slide></input>";
}

?>