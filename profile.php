<?php
		include_once 'resources/session.php';
		include_once 'resources/database.php';
		include_once 'resources/utilities.php';
?>

<html>

<?php include_once 'partials/head.php' ?>

<body>

	<div id="popupHandler"></div>

	<?php if(!isset($_SESSION['username'])):?>
		<div class="login-forms">
			<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>
			<div class="card-nomargin add_padding">
				<h1>Game</h1>
				<p>Sorry! Only registered members are allowed to see this page. <br><a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to play.</br></p>
			</div>
		</div>
	<?php else: ?>

		<?php include_once 'partials/headers.php' ?>
		<?php include_once 'partials/parseProfile.php' ?>

		<div class = "main_content">
			
			<div class="card-firstdiv add_padding" style="position: relative;">
				<div class="flex-container">
			
					<div class="flex-panel add_padding">
						<img style="width:100%" src="profile/scholar_sprite.php">
					</div>
					
					<div class="flex-panel2">
						<h1>Profile</h1>
						
						<div class="flex-panel logged-in-three-containers">
							<div class="flex-panel" style="padding: 10px; border: 2px solid #f3def2; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
								<div class="center" style="width: 100%; background-color: #f3def2;  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
									<div class="center">
										<h4>YOUR INFORMATION</h4>
									</div>
								</div>

								<div style="padding: 10px;">
									<p style="width:100%;"><b>Email:</b> <?php if(isset($email)) echo $email; ?> | <a href="profile/edit_email.php?user_identity=<?php if(isset($encode_id)) echo $encode_id; ?>">Edit</a></p>
									</br>

									<p style="width:100%;"><b>Username:</b> <?php if(isset($username)) echo $username; ?> | <a href="profile/edit_username.php?user_identity=<?php if(isset($encode_id)) echo $encode_id; ?>">Edit</a></p>
									</br>
									
									<p style="width:100%;"><b>Password:</b> ********** | <a href="profile/edit_password.php?user_identity=<?php if(isset($encode_id)) echo $encode_id; ?>">Edit</a></p>
									</br>
									
									<p style="width:100%;"><b>Date Joined:</b> <?php if(isset($date_joined)) echo $date_joined; ?></p>
									</br>
								</div>
							</div>		
						</div>

						<div class="flex-panel logged-in-three-containers">
							<div class="flex-panel" style="padding: 10px; border: 2px solid #fdeac7; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
								<div class="center" style="width: 100%; background-color: #fdeac7;  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
									<div class="center">
										<h4>YOUR SCHOLAR</h4>
									</div>
								</div>

								<div style="margin-top: 10px;">
									<img  style="width: 100%; border-radius: 10px;" src="profile/profile_idcard.php">
								</div>
							</div>		
						</div>


						<div class="flex-panel logged-in-three-containers">
							<div class="flex-panel" style="padding: 10px; border: 2px solid #ffe2e4; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
								<div class="center" style="width: 100%; background-color: #ffe2e4;  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
									<div class="center">
										<h4>YOUR ACCOUNT</h4>
									</div>
								</div>

								<div style="padding: 10px;">
									<div class="center">
										<div id="reset-progess" class="button pink_button"><a style="color:white;">Reset Progress</a></div>
									</div>
								</div>
							</div>		
						</div>
					</div>
				</div>
			</div>

			<div id = "DB_handle"></div>
			
		</div>
	<?php endif ?>

    <?php include_once 'partials/footers.php' ?>

</body>

<script>

	document.getElementById('reset-progess').onclick = function()
	{
		var resetProgress = popup("RESET PROGRESS?", "yes/no");

		//override the onclick of the buttons
		resetProgress[0].onclick = function ()
		{
			deletePopup();
			console.log("Yes");
		}

		//override the onclick of the buttons
		resetProgress[1].onclick = function ()
		{
			deletePopup();
			console.log("No");
		}
	}

</script>

</html>
