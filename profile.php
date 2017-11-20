<?php 
include_once 'partials/headers.php';
include_once 'partials/parseProfile.php';
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

	<body>

		<header id="header">

		</header>

		<?php include_once 'partials/headers.php' ?>

		<div class = "main_content">
			<div class="card-nomargin add_padding">
				<h1>Profile</h1>

				<?php if(!isset($_SESSION['username'])):?>
					
					<p>Sorry! Only registered members are allowed to see this page. <a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to view your profile!</p>
				
				<?php else: ?>
					<div class="card_noborder">
					
						<div class="child_card_noborder">
							<img class="img_sprite" src="profile/scholar_sprite.php">
						</div>
							
						<div class="child_card_noborder">
							<div class="fancy">
								<h4 style="text-align:center;">YOUR SCHOLAR</h4>
								<img src="profile/images/studentid.png"><br>
							</div>
												
							<div class="fancy">
								<br><h4 style="text-align:center;">YOUR INFORMATION</h4>
								<p><b>Email:</b> <?php if(isset($email)) echo $email; ?> | <a href="edit_email.php?user_identity=<?php if(isset($encode_id)) echo $encode_id; ?>">Edit</a></p><br>
								<p><b>Username:</b> <?php if(isset($username)) echo $username; ?> | <a href="edit_username.php?user_identity=<?php if(isset($encode_id)) echo $encode_id; ?>">Edit</a></p><br>
								<p><b>Password:</b> ***** | <a href="edit_password.php?user_identity=<?php if(isset($encode_id)) echo $encode_id; ?>">Edit</a></p><br>
								<p><b>Date Joined:</b> <?php if(isset($date_joined)) echo $date_joined; ?></p>   <br>
							</div>
							
							<div class="fancy">
								<br><h4 style="text-align:center;">YOUR ACCOUNT</h4>
								<div class="pink_button"><a style="color:white;" href="">Reset Progress</a></div>
								<div class="pink_button"><a style="color:white;" href="delete_account.php?user_identity=<?php if(isset($encode_id)) echo $encode_id; ?>">DELETE ACCOUNT</a></div>
							</div>
							
							</div>		
						</div>
				<?php endif ?>
			</div>
		</div>

		<?php include_once 'partials/footers.php' ?>

	</body>

</html>