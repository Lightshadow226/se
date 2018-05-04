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

<body>

	<?php include_once 'partials/headers.php' ?>
	<?php include_once 'partials/parseProfile.php' ?>

	<div class = "main_content">
	
	<div class="card-firstdiv add_padding" style="position: relative;">

			<?php if(!isset($_SESSION['username'])):?>
				<h1>Profile</h1>
				<p>Sorry! Only registered members are allowed to see this page. <a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to view your profile!</p>
			
			<?php else: ?>
				
				<div class="flex-container">
				
					<div class="flex-panel add_padding">
						<img style="width:100%" src="profile/profilesprite.php">
					</div>
						
					<div class=" flex-panel2">
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

									<div style="padding: 10px;">
										<div style="padding: 10px 80px;">
											<img class="center_div" style="width: 100%;" src="profile/profile_idcard.php">
										</div>
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
											<div class="button pink_button"><a style="color:white;" href="">Reset Progress</a></div>
										</div>
									</div>

								</div>		
							</div>

						</div>
					</div>
				</div>
			<?php endif ?>
		</div>
	</div>

	<?php include_once 'partials/footers.php' ?>

</body>

<script src = "js/variables.js"></script><!--needed for the logged in functionality of "current chapter"-->
<script src = "js/library.js"></script>

</html>