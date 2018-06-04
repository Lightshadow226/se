<?php
include_once 'partials/parseSignup.php';
?>

<!DOCTYPE html>
<html>
<?php include_once 'partials/head.php' ?>

<body>
<div class = "login-forms">
	<?php /*include_once 'partials/headers.php'*/?>

	<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>

	<div class = "">

        <div class="card-nomargin add_padding">
		
			<h1>Registration</h1>
			<p style="font-size:0.65em;text-transform:uppercase;width:75%;">*By Signing Up, you are agreeing to our <a href="terms.php">Terms</a> and declaring that you are <em>at least 13 years old</em></p>

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
</div>

<?php /*include_once 'partials/footers.php'*/?>

</body>

<script src = "js/jquery_3.2.1.js"></script>
<script>$('#signup-email').focus();</script>

</html>

