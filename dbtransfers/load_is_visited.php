<?php

include_once '../resources/session.php';
include_once "../resources/database.php";

$id = $_SESSION['id'];

//TODO: first, find the current chapter
$sqlQuery = "SELECT * FROM story WHERE id = :id";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $last_chapter = $rs['lastchapterplayed'];//get the last chapter played
}

//Then, modify the correct table: chapterX_story
$table = "chapter" . $last_chapter ."_story";

//*********************************************
//parse chapterX table
//*********************************************

$sqlQuery = "SELECT * FROM " . $table . " WHERE id = '$id'";
// echo $sqlQuery . "\n";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

$isVisited = array();

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $isVisited = $rs;//the variable username will contain the username of the last item of the array parsed
    // echo sizeof($rs) . "<br>";
    // echo $rs['c'] . "\n";
}

$size = (sizeof($isVisited) / 2) - 1;

echo "<html>\n";
echo "<input id=\"chapter_size\" value = $size></input>\n";//output the chapter size once

//for each slide in the current chapter
for($i = 0; $i < $size; $i++)
{
    //on identifie la nouvelle variable
    $newVariable = "c" . $i;
    
    //on store la variable
    $slide = $isVisited[$newVariable];
    
    //on affiche la variable dans le DOM
    echo "<input id= \"$newVariable\" value = $slide></input>\n";
}
echo "</html>\n";

?>