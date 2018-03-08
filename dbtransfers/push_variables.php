<?php

include_once '../resources/session.php';
include_once '../resources/database.php';
include_once '../resources/utilities.php';

    

    $id = $_SESSION['id'];

    $status = "Error Sending SQL";

    //*********************************************
    //USERINFO table
    //*********************************************

    $username = $_POST['username'];

    try
    {
        $sqlQuery1 = "UPDATE userinfo SET username = '$username' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    try
    {
        $energy = $_POST['energy'];

        $sqlQuery2 = "UPDATE userinfo SET energy = '$energy' WHERE id = '$id'";
        $statement2 = $db->prepare($sqlQuery2);
        $statement2->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }


    try
    {
        $money = $_POST['money'];
    
        $sqlQuery3 = "UPDATE userinfo SET money = '$money' WHERE id = '$id'";
        $statement3 = $db->prepare($sqlQuery2);
        $statement3->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    //*********************************************
    //SCHOLARINFO table
    //*********************************************

    try//we should push the rest of the variables (MAYBE it's wiser NOT to do it though)
    {
        $department = $_POST['department'];
    
        $sqlQuery = "UPDATE scholarinfo SET scholar_department = '$department' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    try
    {
        $scholarname = $_POST['scholarname'];
    
        $sqlQuery = "UPDATE scholarinfo SET scholar_name = '$scholarname' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    try
    {
        $gender = $_POST['gender'];
    
        $sqlQuery = "UPDATE scholarinfo SET scholar_gender = '$gender' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    //*********************************************
    //STORY table
    //*********************************************

    
    try
    {
        $storylocation = $_POST['storylocation'];//storylocation
        
        $sqlQuery1 = "UPDATE story SET storylocation = '$storylocation' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    try
    {
        $lastchapterplayed = $_POST['lastchapterplayed'];//lastchapterplayed

        $sqlQuery2 = "UPDATE story SET lastchapterplayed = '$lastchapterplayed' WHERE id = '$id'";
        $statement2 = $db->prepare($sqlQuery2);
        $statement2->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    try
    {
        $physicallocationint = $_POST['physicallocationint'];//physical location int
            
        $sqlQuery3 = "UPDATE story SET physicallocationint = '$physicallocationint' WHERE id = '$id'";
        $statement3 = $db->prepare($sqlQuery3);
        $statement3->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    //*********************************************
    //AFFINITY table
    //*********************************************
    $karolina = $_POST['karolina_affinity'];
    $ellie = $_POST['ellie_affinity'];
    $neha = $_POST['neha_affinity'];
    $raquel = $_POST['raquel_affinity'];
    $claire = $_POST['claire_affinity'];
    $alistair = $_POST['alistair_affinity'];
    $tadashi = $_POST['tadashi_affinity'];
    $tegan = $_POST['tegan_affinity'];
    $tyler = $_POST['tyler_affinity'];
    $axel = $_POST['axel_affinity'];
    $ladyarlington = $_POST['ladyarlington_affinity'];
    $coachdavis = $_POST['coachdavis_affinity'];
    $serena = $_POST['serena_affinity'];
    $cecile = $_POST['cecile_affinity'];
    $teacherchapter2 = $_POST['teacherchapter2_affinity'];

    try
    {
        $sqlQuery1 = "UPDATE affinity SET karolina = '$karolina' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $sqlQuery2 = "UPDATE affinity SET ellie = '$ellie' WHERE id = '$id'";
        $statement2 = $db->prepare($sqlQuery2);
        $statement2->execute();

        $sqlQuery3 = "UPDATE affinity SET neha = '$neha' WHERE id = '$id'";
        $statement3 = $db->prepare($sqlQuery3);
        $statement3->execute();

        $sqlQuery4 = "UPDATE affinity SET raquel = '$raquel' WHERE id = '$id'";
        $statement4 = $db->prepare($sqlQuery4);
        $statement4->execute();

        $sqlQuery5 = "UPDATE affinity SET claire = '$claire' WHERE id = '$id'";
        $statement5 = $db->prepare($sqlQuery5);
        $statement5->execute();

        $sqlQuery6 = "UPDATE affinity SET alistair = '$alistair' WHERE id = '$id'";
        $statement6 = $db->prepare($sqlQuery6);
        $statement6->execute();

        $sqlQuery7 = "UPDATE affinity SET tadashi = '$tadashi' WHERE id = '$id'";
        $statement7 = $db->prepare($sqlQuery7);
        $statement7->execute();

        $sqlQuery8 = "UPDATE affinity SET tegan = '$tegan' WHERE id = '$id'";
        $statement8 = $db->prepare($sqlQuery8);
        $statement8->execute();

        $sqlQuery9 = "UPDATE affinity SET tyler = '$tyler' WHERE id = '$id'";
        $statement9 = $db->prepare($sqlQuery9);
        $statement9->execute();

        $sqlQuery10 = "UPDATE affinity SET axel = '$axel' WHERE id = '$id'";
        $statement10 = $db->prepare($sqlQuery10);
        $statement10->execute();

        $sqlQuery11 = "UPDATE affinity SET ladyarlington = '$ladyarlington' WHERE id = '$id'";
        $statement11 = $db->prepare($sqlQuery11);
        $statement11->execute();

        $sqlQuery12 = "UPDATE affinity SET coachdavis = '$coachdavis' WHERE id = '$id'";
        $statement12 = $db->prepare($sqlQuery12);
        $statement12->execute();

        $sqlQuery13 = "UPDATE affinity SET serena = '$serena' WHERE id = '$id'";
        $statement13 = $db->prepare($sqlQuery13);
        $statement13->execute();

        $sqlQuery14 = "UPDATE affinity SET cecile = '$cecile' WHERE id = '$id'";
        $statement14 = $db->prepare($sqlQuery14);
        $statement14->execute();

        $sqlQuery15 = "UPDATE affinity SET teacherchapter2 = '$teacherchapter2' WHERE id = '$id'";
        $statement15 = $db->prepare($sqlQuery15);
        $statement15->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

?>