<?php

include_once '../resources/session.php';
include_once '../resources/database.php';
include_once '../resources/utilities.php';

$id = $_SESSION['id'];
$status = "Error Sending SQL";


$table = $_POST['type'];//either 'achievements' or 'illustrations'
$column = $_POST['column'];
$columnValue = $_POST['value'];//either 0 or 1

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

?>