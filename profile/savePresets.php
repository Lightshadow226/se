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
        $statement1 = $db->prepare($sqlQuery1);
        $statement1->execute();

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

        $sqlQuery2 = "UPDATE scholarinfo SET scholar_eyecolor = '$eyes' WHERE id = '$id'";
        $statement2 = $db->prepare($sqlQuery2);
        $statement2->execute();

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

        $sqlQuery3 = "UPDATE scholarinfo SET scholar_haircolor = '$hair_color' WHERE id = '$id'";
        $statemen3 = $db->prepare($sqlQuery3);
        $statemen3->execute();

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

        $sqlQuery4 = "UPDATE scholarinfo SET scholar_hairstyle = '$hair_style' WHERE id = '$id'";
        $statement4 = $db->prepare($sqlQuery4);
        $statement4->execute();

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

        $sqlQuery5 = "UPDATE scholarinfo SET scholar_shoes_id = '$shoes' WHERE id = '$id'";
        $statement5 = $db->prepare($sqlQuery5);
        $statement5->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    //SKIN COLOR
    try
    {
        $skin = $_POST['skin_color'];

        $sqlQuery1 = "UPDATE scholarinfo SET scholar_skincolor = '$skin' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }
?>