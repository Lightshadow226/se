<?php include_once 'resources/session.php' ?>

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

	<?php include_once 'partials/headers.php' ?>

	<div class = "main_content">
        <div class="card-nomargin add_padding">
            <h1>Homepage</h1>
         
         	<?php if(!isset($_SESSION['username'])): ?>
			<P>You are currently not signed in. <a href="login.php">Login</a> to your account. Not yet a member? <a href="signup.php">Signup</a>.</p>
		<?php else: ?>
			<p>You are logged in as <?php if(isset($_SESSION['username'])) echo $_SESSION['username']; ?> <a href="logout.php">Logout</a> </p>
		<?php endif ?>

		</div>
		
		<div id="banner">
			<img id="img_banner" src="images/general/banner.png">
		</div>

		<!-- COMING SOON -->
		<div id="coming_soon" class="center add_shading">
			<img id="img_comming_soon" src="images/general/comingsoon.png">
			<p class="add_padding">Sweet Elite is a dating sims inspired by the popular Japanese Otome. Flirt with students and uncover Arlington Academy's dark secrets. Choose your own story!<br></p>
		</div>

		<!-- ABOUT GAME -->
		<div class = "card">
			<div class="card-header">
				<h3>About the Game</h3>
			</div>

			<div class="card-content">
				<p><i>In a school filled with rich, beautiful and insanely talented students, nothing could go wrong….could it? Arlington Academy has its secrets. Secrets it doesn’t want to expose. Will you be able to find out about the truth? Or will the pressure be too much for you to handle? It’s up to you!</i></p><br>
				<p><b>Sweet Elite</b> is an upcoming Otome game following the adventures of the students of Arlington Academy, a prestigious high school only accessible to the best teenagers in their respective academic fields.</p><br>
				<p>The player’s character, the <b>Scholar</b>, is a scholarship student and makes a series of major choices, affecting both their destiny and those of the people around them.</p><br>
				
				<a href="features.html" class="button pink_button">Learn More</a>
			</div>
		</div>

		<!-- MEET THE CHARACTERS -->
		<div class="card">
			<div class="card-header">
				<h3>Meet the Characters</h3>
			</div>

			<div id="chara_1" class="center">
			</div>

			<div id="chara_2" class="center">
			</div>

			<div class="card-content">
				<a href="characters.html" class="button pink_button">Character Profiles</a>
			</div>
		</div>

		<!-- FOLLOW US -->
		<div class="card">
			<div class="card-header">
				<h3>Follow Us</h3>
			</div>

			<div class="card-content">

				<style>
					.fa
					{
						padding: 20px;
						font-size: 30px;
						width: 30px;
						text-align: center;
						text-decoration: none;
						margin: 5px 2px;
						border-radius: 50%;
					}

					.fa:hover
					{
						/*opacity: 0.7;*/
						background: #682666;
						color: white;
					}

					.fa-facebook
					{
						background: #ff4956;
						color: white;
					}

					.fa-twitter
					{
						background: #ff4956;
						color: white;
					}

					.fa-youtube
					{
						background: #ff4956;
						color: white;
					}

					.fa-tumblr
					{
						background: #ff4956;
						color: white;
					}

				</style>

				<a href="https://www.facebook.com/sweeteliteofficial/" class="fa fa-facebook"></a>
				<a href="https://twitter.com/sestaff" class="fa fa-twitter"></a>
				<a href="https://www.youtube.com/channel/UC0W1REG-54i100QUDFoXKjg" class="fa fa-youtube"></a>
				<a href="http://sweetelite-staff.tumblr.com/" class="fa fa-tumblr"></a>
			</div>
		</div>



	</div>


<?php include_once 'partials/footers.php' ?>

</body>

</html>

