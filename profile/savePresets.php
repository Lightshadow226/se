<?php

include_once '../resources/session.php';
include_once '../resources/database.php';
include_once '../resources/utilities.php';

    $id = $_SESSION['id'];

    $status = "Error Sending SQL";

    //SEX
    try
    {
        $sex = $_POST['sex'];

        $sqlQuery1 = "UPDATE scholarinfo SET scholar_sex = '$sex' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    //EYES
    try
    {
        $eyes = $_POST['eyes'];

        $sqlQuery1 = "UPDATE scholarinfo SET scholar_eyecolor = '$eyes' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    //HAIR COLOR
    try
    {
        $hair_color = $_POST['hair_color'];

        $sqlQuery1 = "UPDATE scholarinfo SET scholar_haircolor = '$hair_color' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    //HAIR STYLE
    try
    {
        $hair_style = $_POST['hair_style'];

        $sqlQuery1 = "UPDATE scholarinfo SET scholar_hairstyle = '$hair_style' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    //SHOES
    try
    {
        $shoes = $_POST['shoes'];

        $sqlQuery1 = "UPDATE scholarinfo SET scholar_shoes_id = '$shoes' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }
?>