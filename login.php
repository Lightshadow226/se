<?php
include_once 'partials/parseLogin.php';
?>

<!DOCTYPE html>
<html>
<?php include_once 'partials/head.php' ?>

<body>
	<div class = "login-forms">
	
		<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>

		<div class = ""><!-- style = "width: fit-content;" -->

			<div class="card-nomargin add_padding">
				<h1>Log In</h1>
				
				</br>
				
				<?php if(isset($result)) echo $result; ?>
				<?php if(!empty($form_errors)) echo show_errors($form_errors); ?>   
				
				<form method="post" action="" class="center">
					
					<div class = "flex-container">
						<div class = "flex-panel"></div>
						<p class = "flex-panel login-signup-labels">Username:</p>
						<input id = "login-username" class = "flex-panel2 login-signup-textfields" type="text" placeholder = "Username" name="username"></input>
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
					
					<input class = "button pink-button-subtle" type="submit" name="loginBtn" value="Log In"></td></tr>
					
					<br>

					<br>
					
					<p style="text-transform:uppercase;font-weight:500;font-size:0.7em;color:#682666;sletter-spacing:0.2em;"><a href="signup.php">CREATE AN ACCOUNT</a> &nbsp;&diams;&nbsp; <a href="password_reset.php">Forgot your password?</a></p>
					
					<br>

				</form>
				
				<p style="text-align:center;"><a href="index.php">Back</a></p>
			
			</div>
		</div>
	</div>

</body>

<script src = "js/jquery_3.2.1.js"></script>
<script>$('#login-username').focus();</script>

</html>

