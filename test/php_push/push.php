<?php

include_once '../../resources/session.php';
include_once '../../resources/database.php';
include_once '../../resources/utilities.php';

    // $storylocation = $_POST['nom'];//storylocation
    // $lastchapterplayed = $_POST['message'];//lastchapterplayed

    $storylocation = $_POST['storylocation'];//storylocation
    $lastchapterplayed = $_POST['lastchapterplayed'];//lastchapterplayed

    $id = $_SESSION['id'];

    $status = "Error Sending SQL";

    try
    {
        $sqlQuery1 = "UPDATE story SET storylocation = '$storylocation' WHERE id = '$id'";
        $statement = $db->prepare($sqlQuery1);
        $statement->execute();

        $sqlQuery2 = "UPDATE story SET lastchapterplayed = '$lastchapterplayed' WHERE id = '$id'";
        $statement2 = $db->prepare($sqlQuery2);
        $statement2->execute();

        $status = "SQL Sent!";
    }
    catch (PDOException $ex)
    {
        echo $ex;
    }

    /*
    <script>
    alert("asdf");
    function myFunction()
    {
        alert('<?php echo $status; ?>');
    }
    
    myFunction();
    </script>
    
?>