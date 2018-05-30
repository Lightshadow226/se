<?php

include_once '../resources/session.php';
include_once '../resources/database.php';
include_once '../resources/utilities.php';

$id = $_SESSION['id'];
$status = "Error Sending SQL";

//semi-solution: https://stackoverflow.com/questions/17449014/using-a-variable-as-the-column-name-in-a-mysql-query

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

//Get the size of the table (how many columns to save)

//SOLUTION 1: $columnCount = (int) $_SERVER['CONTENT_LENGTH'];//also works

//SOLUTION 2:
$sqlQuery = "SELECT * FROM " . $table . " WHERE id = '$id'";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

$isVisited = array();

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $isVisited = $rs;//the variable username will contain the username of the last item of the array parsed
}

$columnCount = (sizeof($isVisited) / 2) - 1;

//second, the correct variable to modify
for($i = 0; $i < $columnCount + 1; $i++)
{
    $column = "c" . $i;

    if(isset($_POST[$column]))
    {
        $columnValue = $_POST[$column];
    
        try
        {
            $sqlQuery = "UPDATE " . $table . " SET " . $column . " = '$columnValue' WHERE id = '$id'";
            $statement = $db->prepare($sqlQuery);
            $statement->execute();
    
            $status = "SQL Sent!";
        }
        catch (PDOException $ex)
        {
            echo $ex;
        }
    }
}