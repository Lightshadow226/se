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

<style>

.db_handles
{
    display: none;
}

</style>

    <!-- ***** -->

    <div id="db_handle_username" class="db_handles"><?php echo $username; ?></div>

    <div id="db_handle_energy" class="db_handles"><?php echo $energy; ?></div>

    <div id="db_handle_money" class="db_handles"><?php echo $money; ?></div>

    <div id="db_handle_nbreplays" class="db_handles"><?php echo $nbreplays; ?></div>

    <!-- ***** -->

    <div id="db_handle_story_location" class="db_handles"><?php echo $story_location; ?></div>

    <div id="db_handle_last_chapter_played" class="db_handles"><?php echo $last_chapter; ?></div>

    <!-- ***** -->

    <div id="db_handle_a1" class="db_handles"><?php echo $a1; ?></div>

    <div id="db_handle_a2" class="db_handles"><?php echo $a2; ?></div>

    <div id="db_handle_a3" class="db_handles"><?php echo $a3; ?></div>

    <div id="db_handle_a4" class="db_handles"><?php echo $a4; ?></div>

    <div id="db_handle_a5" class="db_handles"><?php echo $a5; ?></div>

    <div id="db_handle_a6" class="db_handles"><?php echo $a6; ?></div>

    <div id="db_handle_a7" class="db_handles"><?php echo $a7; ?></div>

    <div id="db_handle_a8" class="db_handles"><?php echo $a8; ?></div>

    <div id="db_handle_a9" class="db_handles"><?php echo $a9; ?></div>

    <div id="db_handle_a10" class="db_handles"><?php echo $a10; ?></div>

    <div id="db_handle_a11" class="db_handles"><?php echo $a11; ?></div>

    <div id="db_handle_a12" class="db_handles"><?php echo $a12; ?></div>

    <div id="db_handle_a13" class="db_handles"><?php echo $a13; ?></div>

    <div id="db_handle_a14" class="db_handles"><?php echo $a14; ?></div>

    <div id="db_handle_a15" class="db_handles"><?php echo $a15; ?></div>

</html>