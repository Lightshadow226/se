<?php

include_once '../resources/session.php';
include_once '../resources/database.php';
include_once '../resources/utilities.php';

$id = $_SESSION['id'];
$status = "Error Sending SQL";

//List of the 4 tables to be updated
$tables = array
(
    'userinfo',
    'scholarinfo',
    'story',
    'affinity'
);

//List of all the variables to be updated, grouped in tables
$variables = array
(
    //USERINFO table
    array
    (
        'username',
        'energy',
        'money',
    ),

    //SCHOLARINFO table
    array
    (
        'scholar_department',
        'scholar_name',
        'scholar_gender',
    ),

    //STORY table
    array
    (
        'storylocation',
        'lastchapterplayed',
        'physicallocationint',
    ),
    //AFFINITY table (Main 10)
    array
    (
        'karolina',
        'ellie',
        'neha',
        'raquel',
        'claire',
        'alistair',
        'tadashi',
        'tegan',
        'tyler',
        'axel',
        //AFFINITY table (Other)
        'ladyarlington',
        'coachdavis',
        'serena',
        'cecile',
        'teacherchapter2'
    ),
);

$table_qty = count($tables);

for($i = 0; $i < $table_qty; $i++)//For every table
{
    $array_size = count($variables[$i]) - 1;
    $current_table = $tables[$i];
    
    for($j = 0; $j < $array_size + 1; $j++)//Update all the variables in the table
    {
        $column = $variables[$i][$j];
        // echo $i . " (" . $current_table . ") | " . $j . " (" . $column . ")\n";

        if(isset($_POST[$column]))
        {
            $columnValue = $_POST[$column];

            try
            {
                $sqlQuery = "UPDATE " . $current_table . " SET " . $column . " = '$columnValue' WHERE id = '$id'";
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
}
?>