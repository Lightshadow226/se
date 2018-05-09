<?php

include_once 'partials/parsePasswordReset.php';

if(isset($_GET['id']))
{
	$encoded_id = $_GET['id'];
	$decoded_id = base64_decode($encoded_id);
	$id_array = explode("encodeuserid", $decoded_id);
	$id = $id_array[1];
	
}

?>


<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">
	<meta name="description" content="Sweet Elite is a dating sims inspired by the popular Japanese Otome.Flirt with students and uncover Arlington Academy's dark secrets.Choose your own story!">
	
	<title>Sweet Elite: Flirt and Uncover the Secrets of Arlington Academy!</title>

	<link href="css/se-stylesheet.css" rel="stylesheet" type="text/css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type='text/css'>


	<link rel="icon" type="image/ico" href="images/favicon.png"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body class = "center-screen">

	<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>

	<div class = "">
        <div class="card-nomargin add_padding">
            <h1>Password Reset</h1>
		<?php if(isset($result)) echo $result; ?>
		<?php if(!empty($form_errors)) echo show_errors($form_errors); ?>
		<form method="post" action="" class="center">

				<div class = "flex-container">
					<p class = "flex-panel login-signup-labels">New Password:</p>
					<p><input class = "flex-panel2 login-signup-textfields" type="password" value="" name="new_password"></p>
					<div class = "flex-panel"></div>
				</div>
		
				<div class = "flex-container">
					<p class = "flex-panel login-signup-labels">Confirm Password:</p>
					<p><input class = "flex-panel2 login-signup-textfields" type="password" value="" name="confirm_password"></p>
					<div class = "flex-panel"></div>
				</div>
		
		     	<input type="hidden" value="<?php if(isset($id)) echo $id; ?>" name="user_id">
		     	
		        <br><p><input class = "button pink-button-subtle" type="submit" name="passwordResetBtn" value="Reset Password"></p><br>
		</form>

<p style="text-align:center;"><a href="index.php">Back</a></p>        </div>
	</div>

</body>

</html>