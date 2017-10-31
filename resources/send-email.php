<?php
require 'class.phpmailer.php';

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = 'smtp';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->Host = "localhost";
$mail->IsHTML(true);

$mail->SMTPAuth = true;
$mail->Username = "sweetelite";
$mail->Password = "Tadashi2016";

//Sender Info
$mail->From = "no-reply@sweetelitegame.com";
$mail->FromName = "Sweet Elite";
?>