<?php include_once 'resources/session.php' ?>

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

<body>

	<?php include_once 'partials/headers.php' ?>
	
	<div class = "main_content">

		<?php if(!isset($_SESSION['username'])): ?><!-- logged off -->
			<!-- <P>You are currently not signed in. <a href="login.php">Login</a> to your account. Not yet a member? <a href="signup.php">Signup</a>.</p> -->

			<!-- BANNER -->
			<div id="banner">
				<img id="img_banner" src="images/banners/banner_logged_off.png">
				<div id = "button_container">
					<a href = "signup.php" id = "signup_button" class = "	">Sign Up</a>
					<a href = "login.php" id = "login_button" class = "button">Login</a>
				</div>
			</div>

			<!-- BADGES -->
			<div class = "card-nomargin">

				<div class = "card-fusionned card-content">
					<h1>Welcome to Arlington Academy</h1>
					<h5>Flirt and Uncover the Secrets of Arlington Academy</h5>
					
					</br>

					<p><i>In a school filled with rich, beautiful and insanely talented students, nothing could go wrong….could it? Arlington Academy has its secrets. Secrets it doesn’t want to expose.</i></p>

					</br>
					
					<p>Follow the adventures of the students of Arlington Academy, a prestigious high school only accessible to the best teenagers in their respective academic fields.</p>
					
					</br>

					<p>Choose your department, make friends, build a romance with your favorite character and work together to solve the Academy's dark secrets...</p>
					
					</br>
					
					<p><i>Will you be able to find out the truth? Or will the pressure be too much to handle... it's up to you!</i></p>

				</div>

				<div class = "card-fusionned flex-container">
					<img style = "width: 50%;" src = "images/separator.jpg"></img>	
				</div>

				<div class = "card-fusionned flex-container">

					<div class = "flex-panel">
						<div class = "badge">
							<img class = "img-badge" src = "images/game_images/badges/arlington_logo.png"></img>
						</div>
					</div>
					
					<!-- les 4 premiers badges -->
					<div class = "flex-panel flex-container" style="flex-direction: column;">

						<div class = "department-line flex-container">
							<div class = "badge">
								<img class = "img-badge" src = "images/game_images/badges/text/1.png"></img>
							</div>
						</div>

						<div class = "department-line flex-container">
							<div class = "badge">
								<img class = "img-badge" src = "images/game_images/badges/text/2.png"></img>
							</div>
						</div>

						<div class = "department-line flex-container">
							<div class = "badge">
								<img class = "img-badge" src = "images/game_images/badges/text/3.png"></img>
							</div>
						</div>

						<div class = "department-line flex-container">
							<div class = "badge">
								<img class = "img-badge" src = "images/game_images/badges/text/4.png"></img>
							</div>
						</div>

					</div>

					<!-- les 3 + 1 derniers badges -->
					<div class = "flex-panel flex-container" style="flex-direction: column;">

						<div class = "department-line flex-container">
							<div class = "badge">
								<img class = "img-badge" src = "images/game_images/badges/text/5.png"></img>
							</div>
						</div>

						<div class = "department-line flex-container">
							<div class = "badge">
								<img class = "img-badge" src = "images/game_images/badges/text/6.png"></img>
							</div>
						</div>

						<div class = "department-line flex-container">
							<div class = "badge">
								<img class = "img-badge" src = "images/game_images/badges/text/7.png"></img>
							</div>
						</div>

						<div class = "department-line flex-container">
							<div class = "badge">
								<img class = "img-badge" src = "images/game_images/badges/text/8.png"></img>
							</div>
						</div>

					</div>
					
				</div>
				<!-- 
				<div class = "flex-panel">
					<img class = "img-badge" src = "images/banners/welcome_to_arlignton.png"></img>
				</div> -->
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
			</div>
			
			<!-- CHARACTER RANDOMIZER -->
			<div class="card">
				<div class="card-header">
					<h3>Customize your character!</h3>
				</div>
				
				<div class="flex-container" style="height:411.375px; padding: 0px;"><!-- style="height=780px;" -->

					<div class = "flex-panel3 flex-container">
						<div class="flex-panel"></div>
						<div id="left_wing" class="center_div chevron-container"></div>
						<div id="random_character_panel" class = "flex-panel"></div>
						<div id="right_wing" class="center_div chevron-container"></div>
						<div class="flex-panel"></div>
					
					</div>
					
				</div>
			</div>

			<!-- START PLAYING -->
			<div class = "card">
				<div class = "card-header">
					<h3>Start Playing</h3>
				</div>
				
				<div class = "card-content">
					<h4>Sweet Elite's Demo is Now Available!</h4>
					<p><b>Sign up now and get access to 3 FREE chapters to celebrate the demo's release!</b></p>
					<br>

					<div class = "flex-container">
						<div class = "flex-panel3">
							<img class = "img-badge" src = "images/general/chapter_images/chapter0.png"></img>
							<h5>INTRODUCTION</h5>
							<p><b>Teaser:</b> You just arrived at Arlington Academy, but everything is so new and big! You're going to need help from a few senior students who will lay down the basics on you.</p>
						</div>

						<div class = "flex-panel3">
							<img class = "img-badge" src = "images/general/chapter_images/chapter1.png"></img>
							<h5>CHAPTER 1</h5>
							<p><b>Teaser:</b> Classes start tomorrow, so today is the time to try to make some new friends...but why is everybody so stressed today? What could be on their minds?</p>
						</div>

						<div class = "flex-panel3">
							<img class = "img-badge" src = "images/general/chapter_images/chapter2.png"></img>
							<h5>CHAPTER 2</h5>
							<p><b>Teaser:</b> It seems the whole school is to be revolving around a certain teenage celebrity and an exclusive homecoming party. But things aren't exactly as great as they look on the surface...</p>
						</div>
					</div>
				</div>

				<div style = "position: relative;">
					<div id = "button_container_v2">
						<div class = "flex-panel"></div>
						<a href = "signup.php" id = "signup_button_v2">Sign Up</a>
						<a href = "login.php" id = "login_button_v2">Login</a>
						<div class = "flex-panel"></div>
					</div>
				</div>
			</div>

		<?php else: ?><!-- logged in -->

			<div class="card-firstdiv add_padding" style="position: relative;">
				<img style="position: absolute; left: 0px; top: 10px; height: 5.5em; -webkit-font-smoothing: antialiased;" src="images/general/dashboard.png"/>
				<!-- <h1>Homepage</h1> -->
				<h4 class="center" style="margin-bottom: 10px;">Welcome Back, <?php if(isset($_SESSION['username'])) echo $_SESSION['username']; ?>!</h4> <!-- <a href="logout.php">Logout</a> </p> -->

				<!--FIRST SECTION: Profile overview & Current Chapter-->
				<div class="flex-container">
					<!--LEFT container: PROFILE INFO-->
					<div class="flex-panel logged-in-three-containers">
						<!--Profile image-->	
						<div id="profile-overview-top" class="flex-panel">
							<img id="index-profile-img" style="width:100%; display: block;" src="profile/character_small_portrait.php"/>
							<!-- style="display:block;" fait en sorte que le gap en-dessous de l'image disparait https://stackoverflow.com/questions/7774814/remove-white-space-below-image -->
						</div>

						<!--Buttons container-->	
						<div id="profile-overview-bottom" class="center"><!--border: 2px dotted #f3def2; border-top: none;">-->
							<a class="button pink_button" style="margin: 10px;" href="dorm.php">Dorm</a>
							<a class="button pink_button" style="margin: 10px;" href="profile.php">Profile</a>
							<div class="flex-panel"></div>
							<div class="flex-panel"></div>
						</div>
					</div>

					<!--MIDDLE container: MOST AFFINITY-->
					<div class="flex-panel flex-container-vertical logged-in-three-containers">
						<div class="flex-panel" style="padding: 10px; border: 2px solid #f3def2; border-top-left-radius: 10px; border-top-right-radius: 10px;">
							<!--title-->
							<div class="flex-container">
								<div class="flex-panel" style="position: relative;">
									<!--image-->
									<img id="highestAffinityIMG"/>
									<!--percentage-->
									<h1 id="highestAffinityPERCENTAGE"></h1>
								</div>

								<div class="flex-container-vertical">
									<div class="flex-panel"></div>
									<h4 style="vertical-align: middle; font-weight: 300; margin-left:20px; font-size: 1.5em;">Highest Infinity:</h4>
									<h1 id="highestAffinityTITLE" class="center" style="color: #682666; font-weight: 300;"></h1>
									<div class="flex-panel"></div>
								</div>
							</div>

							<!--description-->
							<p id="highestAffinityDESCRIPTION" style="margin-top: 10px; line-height: 1.5em; text-align: justify;"></p>
							
						</div>
						
						<!--Button container-->
						<div class="center" style="width: 100%; background-color: #f3def2;  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
							<div class="center">
								<a class="button purple_button" style="margin: 10px;" href="relationships.php">Relationships</a>
							</div>
						</div>
					</div>
				
					<!--RIGHT container: CURRENT CHAPTER-->
					<div class="flex-panel flex-container-vertical logged-in-three-containers">
						<div class="flex-panel" style="padding: 10px; border: 2px solid #fdeac7; border-top-left-radius: 10px; border-top-right-radius: 10px;">
							<h4 id="currentChapter" style="margin: 10px; text-align: center; font-weight: 300; font-size: 1.5em;">Current Chapter:</h4>

							<img id="chap_img" class="character_img_index" style="border: 2px solid #fdeac7; box-shadow: 0 0 10px #fdeac7;"/>
							<!-- box-shadow: 0 0 10px #F7B334; -->
							
							<h5 id="title" style="text-transform: uppercase; color: #F7B334; font-weight: 300; font-size: 2em;"></h5>
							
							<!--description-->
							<div class="flex-panel">
								<p id="description" style="margin-top: 10px; line-height: 1.5em; text-align: justify;"></p>
							</div>
							
						</div>
						

						<!--Button container-->
						<div class="center" style="width: 100%; background-color: #fdeac7;  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
							<div id="button_container_index" style="margin:10px;"></div>
						</div>
					</div>
				</div>
			</div>

		<?php endif ?>
		
		<!-- MERCHANDISE -->
		<!-- <div class = "card">
			<div class = "card-header">
				<h3>Merchandise</h3>
			</div>
				
			<div id="merchandise">
				<div class = "flex-panel">
					<img class = "img-badge" style="height:100%; border-bottom-left-radius: 10px;" src = "images/banners/customize_your_character.png"></img>
				</div>
				
				<div class = "flex-panel">
					<img class = "img-badge" style="height:100%;" src = "images/banners/customize_your_character.png"></img>
				</div>
				
				<div class = "flex-panel">
					<img class = "img-badge" style="height:100%;" src = "images/banners/customize_your_character.png"></img>
				</div>
				
				<div class = "flex-panel">
					<img class = "img-badge" style="height:100%; border-bottom-right-radius: 10px;" src = "images/banners/customize_your_character.png"></img>
				</div>
			</div>
		</div> -->

		<!-- Test pour Mouna -->
		<!-- <div class = "card">
			
			<div class="card-header">
				<h3>Header</h3>
			</div>

			<div class="card-content">
				<p>CONTENT</p>
				<br>
				<a class="button pink_button" href="game.php">blabla</a>
			</div>

		</div> -->

		<!-- DEBUG <div class="box left-shadow bottom-shadow"></div> -->
		
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

		<div id = "DB_handle">
			
		</div>

		<div id = "IMG_handle">
			
		</div>


	</div>

<?php include_once 'partials/footers.php' ?>

</body>

<script src = "js/charactersMeet.js"></script>
<script src = "js/variables.js"></script><!--needed for the logged in functionality of "current chapter"-->
<script src = "js/library.js"></script>
<script src = "js/index.js"></script><!--needed for the logged in functionality of "current chapter"-->
<script>
	//logged out
	initialize();//initialize the random generator
</script>

</html>

