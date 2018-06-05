<?php
include_once 'partials/parsePasswordReset.php';
?>

<html>
<?php include_once 'partials/head.php' ?>

<body>
	<div class = "login-forms">
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
	</div>

</body>

<script src = "js/jquery_3.2.1.js"></script>
<script>$('#passwordreset-email').focus();</script>

</html>