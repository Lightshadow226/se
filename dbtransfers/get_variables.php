<?php

include_once "../resources/database.php";

//*********************************************
//parse USERINFO table
//*********************************************

$id = 1;

$sqlQuery = "SELECT * FROM userinfo WHERE id = :id";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $username = $rs['username'];//the variable username will contain the username of the last item of the array parsed

    $energy = $rs['energy'];

    $money = $rs['money'];

    $nbreplays = $rs['nbreplays'];
}

//*********************************************
//parse STORY table
//*********************************************

$id = 1;

$sqlQuery = "SELECT * FROM story WHERE id = :id";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $story_location = $rs['storylocation'];//the variable username will contain the username of the last item of the array parsed

    $last_chapter = $rs['lastchapterplayed'];
}

//*********************************************
//parse AFFINITY table
//*********************************************

$id = 1;

$sqlQuery = "SELECT * FROM affinity WHERE id = :id";
$statement = $db->prepare($sqlQuery);
$statement->execute(array(':id' => $id));

while($rs = $statement->fetch())//"rs" = "row statements"
{
    $a1 = $rs['karolina'];//the variable username will contain the username of the last item of the array parsed

    $a2 = $rs['ellie'];

    $a3 = $rs['neha'];

    $a4 = $rs['raquel'];

    $a5 = $rs['claire'];

    $a6 = $rs['alistair'];

    $a7 = $rs['tadashi'];

    $a8 = $rs['tegan'];

    $a9 = $rs['tyler'];

    $a10 = $rs['axel'];

    $a11 = $rs['ladyarlington'];

    $a12 = $rs['coachdavis'];

    $a13 = $rs['serena'];

    $a14 = $rs['cecile'];

    $a15 = $rs['teacherchapter2'];
}

?>

<html>

    <!-- ***** -->

    <div id="db_handle_username"><?php echo $username; ?></div>

    <div id="db_handle_energy"><?php echo $energy; ?></div>

    <div id="db_handle_money"><?php echo $money; ?></div>

    <div id="db_handle_nbreplays"><?php echo $nbreplays; ?></div>

    <!-- ***** -->

    <div id="db_handle_story_location"><?php echo $story_location; ?></div>

    <div id="db_handle_last_chapter_played"><?php echo $last_chapter; ?></div>

    <!-- ***** -->

    <div id="db_handle_a1"><?php echo $a1; ?></div>

    <div id="db_handle_a2"><?php echo $a2; ?></div>

    <div id="db_handle_a3"><?php echo $a3; ?></div>

    <div id="db_handle_a4"><?php echo $a4; ?></div>

    <div id="db_handle_a5"><?php echo $a5; ?></div>

    <div id="db_handle_a6"><?php echo $a6; ?></div>

    <div id="db_handle_a7"><?php echo $a7; ?></div>

    <div id="db_handle_a8"><?php echo $a8; ?></div>

    <div id="db_handle_a9"><?php echo $a9; ?></div>

    <div id="db_handle_a10"><?php echo $a10; ?></div>

    <div id="db_handle_a11"><?php echo $a11; ?></div>

    <div id="db_handle_a12"><?php echo $a12; ?></div>

    <div id="db_handle_a13"><?php echo $a13; ?></div>

    <div id="db_handle_a14"><?php echo $a14; ?></div>

    <div id="db_handle_a15"><?php echo $a15; ?></div>

</html>