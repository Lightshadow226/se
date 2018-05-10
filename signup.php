<?php
include_once 'partials/parseSignup.php';
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

	<?php /*include_once 'partials/headers.php'*/?>

	<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>

	<div class = "">

        <div class="card-nomargin add_padding">
		
			<h1>Registration</h1>

			</br>
			
			<?php if(isset($result)) echo $result; ?>
			
			<?php if(!empty($form_errors)) echo show_errors($form_errors); ?>
            
			<form method="post" action="" class="center">

				<div class = "flex-container">
					<div class = "flex-panel"></div>
					<p class = "flex-panel login-signup-labels">Email:</p>
					<input id = "signup-email" class = "flex-panel2 login-signup-textfields" type="text" placeholder = "Email" name="email"></input>
					<div class = "flex-panel"></div>
				</div>

				</br>
				
				<div class = "flex-container">
					<div class = "flex-panel"></div>
					<p class = "flex-panel login-signup-labels">Username:</p>
					<input class = "flex-panel2 login-signup-textfields" type="text" placeholder = "Username" name="username"></input>
					<div class = "flex-panel"></div>
				</div>
				
				</br>

				<div class = "flex-container">
					<div class = "flex-panel"></div>
					<p class = "flex-panel login-signup-labels">Password:</p>
					<input class = "flex-panel2 login-signup-textfields" type="password" placeholder = "Password" name="password"></input>
					<div class = "flex-panel"></div>
				</div>
				
				<input type="hidden" value="<?php echo _token(); ?>" name="token">
				
				<br>
				
				<p><input class = "button pink-button-subtle" type="submit" name="signupBtn" value="REGISTER"></p>
				
				<br>
				
				<p style="text-transform:uppercase;font-weight:500;font-size:0.7em;color:#ff4956;letter-spacing:0.2em;">Already have an account? <a href="login.php">Log in</a></p>

			</form>
		
		<br><p style="text-align:center;"><a href="index.php">Back</a> </p>

        </div>
	</div>

<?php /*include_once 'partials/footers.php'*/?>

</body>

<script src = "js/jquery_3.2.1.js"></script>
<script>$('#signup-email').focus();</script>

</html>

