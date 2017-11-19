<?php

include_once 'partials/parsePasswordReset.php';
?>


<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">
	<meta name="description" content="Sweet Elite is a dating sims inspired by the popular Japanese Otome.Flirt with students and uncover Arlington Academy's dark secrets.Choose your own story!">
	
	<title>Sweet Elite: Flirt and Uncover the Secrets of Arlington Academy!<</title>

	<link href="css/se-stylesheet.css" rel="stylesheet" type="text/css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type='text/css'>


	<link rel="icon" type="image/ico" href="images/favicon.png"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body class = "center-screen">

    <?php /*include_once 'partials/headers.php'*/?>

	<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>

	<div class = "">

        <div class="card-nomargin add_padding">

			<h1>Password Reset</h1>
			
			<?php if(isset($result)) echo $result; ?>
			
			<?php if(!empty($form_errors)) echo show_errors($form_errors); ?>
		
			<form method="post" action="" class = "center">
				
				<p>Forgot your Password?</p>
				<p>Enter your email below and we will send you a reset link!</p>
				
				<br>

				<div class = "flex-container">
					<div class = "flex-panel"></div>
					<p class = "flex-panel login-signup-labels">Email:</p>
					<input id = "passwordreset-email" class = "flex-panel2 login-signup-textfields" type="text" placeholder = "Email" name="email"></input>
					<div class = "flex-panel"></div>
				</div>	
			
				<br>
				
				<p><input class = "button pink-button-subtle" type="submit" name="passwordRecoveryBtn" value="Send Reset Link"></p>

			</form>

	<br><p style="text-align:center;"><a href="index.php">Back</a> </p>
        </div>
	</div>

    <?php/* include_once 'partials/footers.php'*/ ?>

</body>

<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>$('#passwordreset-email').focus();</script>

</html>