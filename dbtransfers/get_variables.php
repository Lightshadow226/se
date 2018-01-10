<?php

include_once '../resources/session.php';
include_once "../resources/database.php";

//*********************************************
//parse USERINFO table
//*********************************************

$id = $_SESSION['id'];

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

<!-- NOW WE NEED TO OUTPUT ALL OF THIS TO HTML TO PASS IT TO THE JS CODE -->

<html>

    <!-- USERINFO table -->
    <div id="db_handle_username"><?php echo $username; ?></div>
    <div id="db_handle_energy"><?php echo $energy; ?></div>
    <div id="db_handle_money"><?php echo $money; ?></div>
    <div id="db_handle_nbreplays"><?php echo $nbreplays; ?></div>

    <!-- STORY table -->
    <div id="db_handle_story_location"><?php echo $story_location; ?></div>
    <div id="db_handle_last_chapter_played"><?php echo $last_chapter; ?></div>

    <!-- AFFINITY table -->
    <input id="db_handle_a1" value=<?php echo $a1; ?>></input>
    <input id="db_handle_a2" value= <?php echo $a2; ?>></input>
    <input id="db_handle_a3" value = <?php echo $a3; ?>></input>
    <input id="db_handle_a4" value = <?php echo $a4; ?>></input>
    <input id="db_handle_a5" value = <?php echo $a5; ?>></input>
    <input id="db_handle_a6" value = <?php echo $a6; ?>></input>
    <input id="db_handle_a7" value = <?php echo $a7; ?>></input>
    <input id="db_handle_a8" value = <?php echo $a8; ?>></input>
    <input id="db_handle_a9" value = <?php echo $a9; ?>></input>
    <input id="db_handle_a10" value = <?php echo $a10; ?>></input>
    <input id="db_handle_a11" value = <?php echo $a11; ?>></input>
    <input id="db_handle_a12" value = <?php echo $a12; ?>></input>
    <input id="db_handle_a13" value = <?php echo $a13; ?>></input>
    <input id="db_handle_a14" value = <?php echo $a14; ?>></input>
    <input id="db_handle_a15" value = <?php echo $a15; ?>></input>

</html>