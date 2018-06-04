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
<?php include_once 'partials/head.php' ?>

<body>
	<div class = "login-forms">

		<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>

		<div class = "">

			<div class="card-nomargin add_padding">

				<h1>Password Reset</h1>

				<?php if(isset($result)) echo $result; ?>
				<?php if(!empty($form_errors)) echo show_errors($form_errors); ?>

				<form method="post" action="" class="center">

						<div class = "flex-container">
							<p class = "flex-panel login-signup-labels">New Password:</p>
							<p><input id="default" class = "flex-panel2 login-signup-textfields" type="password" value="" name="new_password"></p>
							<div class = "flex-panel"></div>
						</div>

						</br>
				
						<div class = "flex-container">
							<p class = "flex-panel login-signup-labels">Confirm Password:</p>
							<p><input class = "flex-panel2 login-signup-textfields" type="password" value="" name="confirm_password"></p>
							<div class = "flex-panel"></div>
						</div>
				
						<input type="hidden" value="<?php if(isset($id)) echo $id; ?>" name="user_id">
						
						<br><p><input class = "button pink-button-subtle" type="submit" name="passwordResetBtn" value="Reset Password"></p><br>
				</form>

				<p style="text-align:center;"><a href="index.php">Back</a></p>
			</div>
		</div>
	</div>

</body>

<script src = "js/jquery_3.2.1.js"></script>
<script>$('#default').focus();</script>

</html>