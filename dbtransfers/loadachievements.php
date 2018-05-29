<?php

include_once '../resources/session.php';
include_once "../resources/database.php";

$id = $_SESSION['id'];

//*********************************************
//parse achievements table
//*********************************************

$table = "achievements";

$sqlQuery = "SELECT * FROM " . $table . " WHERE id = '$id'";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

$achievements = array();

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $achievements = $rs;
}

$size = (sizeof($achievements) / 2) - 1;

echo "<html>\n";
echo "<input id=\"achievements_size\" value = $size></input>\n";//output the total size once

//for each achievement
for($i = 0; $i < $size; $i++)
{
    //on identifie la nouvelle variable
    $newVariable = "a" . $i;
    
    //on store la variable
    $slide = $achievements[$newVariable];
    
    //on affiche la variable dans le DOM
    echo "<input id= \"$newVariable\" value = $slide></input>\n";
}

//*********************************************
//parse illustrations table
//*********************************************

$table = "illustrations";

$sqlQuery = "SELECT * FROM " . $table . " WHERE id = '$id'";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

$illustrations = array();

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $illustrations = $rs;
}

// $size = (sizeof($illustrations) / 2) - 1;
$chapterSize = array
(
    0,
    4,
    2,
);

// echo "<input id=\"illustrations_size\" value = " . $chapterSize . "></input>\n";//output the total size once

//for each chapter
for($i = 1; $i < sizeof($chapterSize); $i++)
{
    //for each achievement
    for($j = 0; $j < $chapterSize[$i]; $j++)
    {
        $thisChapter = $i;
        $thisIllustration = $j + 1;

        //on identifie la nouvelle variable
        $newVariable = "c" . $thisChapter . "i" . $thisIllustration;
        
        //on store la variable
        $slide = $illustrations[$newVariable];
        
        //on affiche la variable dans le DOM
        echo "<input id= \"$newVariable\" value = $slide></input>\n";
    }
    
}
echo "</html>\n";

?>