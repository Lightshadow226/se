<?php

include_once '../resources/session.php';
include_once '../resources/database.php';
include_once '../resources/utilities.php';

$id = $_SESSION['id'];
$status = "Error Sending SQL";

//semi-solution: https://stackoverflow.com/questions/17449014/using-a-variable-as-the-column-name-in-a-mysql-query

//we have to make this generic AF

//first, the correct table: chapter0_story
$table = "chapter0_story";
$table_size = 102;

//second, the correct variable to modify
for($i = 0; $i < $table_size + 1; $i++)
{
    $column = "c" . $i;
    $columnValue = $_POST[$column];

    try
    {
        $sqlQuery = "UPDATE " . $table . " SET " . $column . " = '$columnValue' WHERE id = '$id'";
        echo $sqlQuery;
        
        $statement = $db->prepare($sqlQuery);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        // echo $ex;
    }
}