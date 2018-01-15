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
			<div class="card-nomargin flex-container" style="height:411.375px;"><!-- style="height=780px;" -->
				<!-- <div>
					<img class = "img-badge" style="height:100%; width:auto; border-top-left-radius: 10px; border-bottom-left-radius: 10px;" src = "images/banners/customize_your_character.png"></img>
				</div> -->

				<div class = "flex-panel2 flex-container">
					
					<div class="flex-panel"></div>

					<div id="left_wing" class="center_div chevron-container"></div>

					<div id="random_character_panel" class = "flex-panel">
						<!-- <img src="randomizer.php" width="346" height="auto"> -->

						<!--ORIGINAL STYLE:
						style="-webkit-user-select: none;background-position: 0px 0px, 10px 10px;background-size: 20px 20px;background-image:linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);cursor: zoom-in;" -->
						<!--solution found at: https://stackoverflow.com/questions/900207/return-a-php-page-as-an-image -->
						<!-- ?php include_once 'randomizer.php' ?> -->
					</div>

					<div id="right_wing" class="center_div chevron-container"></div>
					
					<div class="flex-panel"></div>
				
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

			<div class="card-firstdiv add_padding">
				<!-- <h1>Homepage</h1> -->
				<h4 class="center">Welcome Back, <?php if(isset($_SESSION['username'])) echo $_SESSION['username']; ?>!</h4> <!-- <a href="logout.php">Logout</a> </p> -->

				<!--FIRST SECTION: Profile overview & Current Chapter-->
				<div class="flex-container">
					<!--Left container: PROFILE INFO-->
					<div class="flex-panel">
						<!--Profile image-->	
						<div class="flex-panel flex-container" style="border: 2px solid #ffe2e4; border-top-left-radius: 10px; border-top-right-radius: 10px;">
							<!-- <div class="flex-panel"></div> -->
							<!-- <div class="flex-panel"> -->
								<img src="profile/character_small_portrait.php"/>
							<!-- </div> -->
							<!-- <div class="flex-panel"></div> -->
						</div>

						<!--Buttons container-->	
						<div class="center" style="background-color: #ffe2e4;  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"><!--border: 2px dotted #f3def2; border-top: none;">-->
							<a class="button pink_button" style="margin: 10px;" href="dorm.php">Dorm</a>
							<a class="button pink_button" style="margin: 10px;" href="profile.php">Profile</a>
							<div class="flex-panel"></div>
							<div class="flex-panel"></div>
						</div>
					</div>

					<!--Middle container: MOST AFFINITY-->
					<div class="flex-panel2 add_padding">
						<!--Profile image-->	
						<h3 class="center add_padding">Highest Affinity</h3>
						
						<div class="flex-container">
							<div class="flex-panel">
								<img src="images/game_images/sprites/square_portraits/alistair.jpg" style="width: 100%; border-radius: 50%; border: 2px solid #f3def2; box-shadow: 0 0 10px #f3def2;"/>
								<h2 class="center" style="color: black;">Alistair</h2>
							</div>
							<div class="flex-panel2">
								<p style="padding: 10px; text-align: justify;">The most promising athlete of the school, he’s on a scholarship just like your Scholar! Alistair specializes in martial arts in general, but his favorite sport is boxing, in which he dreams of making a career out of it and competing in the Olympic Games one day. Unlike most of his classmates, Alistair comes from a middle-class family that struggles with money, and he’s determined to change that. Despite the difference in social classes, he and Tadashi have been best friends for a long time.</p>
							</div>
						</div>
						
						<!--Buttons container-->	
						<div class="center">
							<a class="button pink_button" style="margin: 10px;" href="relationships.php">Relationships</a>
						</div>
					</div>
					
					<!--Right container: CURRENT CHAPTER-->
					<div class="flex-panel2">
						<div id = "currentEpisodeIndex">
	
						</div>
					</div>
				</div>
			</div>

			<div id="dashboard">

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

<script src = "js/jquery_3.2.1.js"></script>
<script src="js/charactersMeet.js"></script>
<script src = "js/variables.js"></script><!--needed for the logged in functionality of "current chapter"-->
<script src = "js/library.js"></script>

<script src = "js/index.js"></script><!--needed for the logged in functionality of "current chapter"-->

<script>
	// var img = new Image().src = "randomizer.php";

	//$('#random_character_panel').html('<img src="' + ?php include_once 'randomizer.php' ?> + '"/>');

	var container = document.getElementById('random_character_panel');
	
	function initialize()
	{
		var left_wing = document.createElement('img');

			//left_wing.style.height = "auto";
			left_wing.src = "images/general/characters_page/chevrons/pink/leftchevron.png";
			left_wing.className = "chevron-img";
			left_wing.onmouseenter =    function f()
										{
											left_wing.src = "images/general/characters_page/chevrons/purple/leftchevron.png";
										}
			left_wing.onmouseleave =    function f()
										{
											left_wing.src = "images/general/characters_page/chevrons/pink/leftchevron.png";
										}
			left_wing.onclick =         function f()
										{
											randomImg();
										}

		var right_wing = document.createElement('img');
        
			right_wing.src = "images/general/characters_page/chevrons/pink/rightchevron.png";
			right_wing.className = "chevron-img";
			right_wing.onmouseenter = function f()
				{
					right_wing.src = "images/general/characters_page/chevrons/purple/rightchevron.png";
				}
			right_wing.onmouseleave = function f()
				{
					right_wing.src = "images/general/characters_page/chevrons/pink/rightchevron.png";
				}
			right_wing.onclick = function f()
				{
					randomImg();
				}

		document.getElementById('left_wing').appendChild(left_wing);
		document.getElementById('right_wing').appendChild(right_wing);

		randomImg();
	}

	function clearImg()
	{
		container.innerHTML = "";
	}

	function randomImg()
	{
		clearImg();

		// $('#IMG_handle').load('randomizer.php');//amazingly slow
		$.get('profile/randomizer.php');//amazingly faster

		var img = document.createElement('img');
			img.className = "true-center";
			img.src = 'profile/randomizer.php';
			img.style.height = "100%";//initially 346

		container.appendChild(img);
		container.style.position = "relative";
		// container.style.height = "100%";
	}

	initialize();

</script>

</html>

