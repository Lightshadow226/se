<?php

	include_once 'resources/session.php';
	include_once 'resources/database.php';
	include_once 'resources/utilities.php';

?>

<head>
	<script src = "js/jquery_3.2.1.js"></script>
	<meta name="viewport" content="width=device-width"><!-- used for adapting to mobile -->
	
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
</head>

<header>

	<div id="loader-wrapper">
		<div id="loader">
		</div>
		<img id="img_loader" src="logo.png"/>
		<div class="loader-section"></div>
	</div>

	<i style="display: none;"><?php echo guard(); ?></i>

	<?php if(isset($_SESSION['username'])):?><!-- If the username is specified (the user is logged on) -->

		<div id="user_info">
			<span style="position: absolute; left: 10px;">Welcome Back <?php if(isset($_SESSION['username'])) echo $_SESSION['username']; ?>!</span>
			<strong>Episode: </strong> <span id="barEpisode"></span>
			<strong> | Highest Infinity: </strong> <span id="barAffinity"></span>
			<strong> | Money: </strong> <span id="barMoney"></span>
			<strong> | Energy: </strong> <span id="barEnergy"></span>
			<strong> | Replays: </strong> <span id="barReplays"></span>
			<span style="position: absolute; right: 10px;"><a href="logout.php" style="color:white;">Logout</a> | <a href="help.php" style="color:white;">Help</a> </span>
		</div>

		<div id="nav_menu_container">
			
			<a href="index.php"><img id="logo" src="images/general/se-logo.png"></a>

			<div id="pink_menu">
				<div class="flex-panel"></div>
				<a class="menu_item" href="index.php">Dashboard</a>	
				<a id="dorm_link" class="menu_item" href="dorm.php">My Dorm</a>
				<a class="menu_item" href="map.php">City Map</a>
				<a id="game_link" class="menu_item" href="game.php">My Game</a>
				<a class="menu_item" href="relationships.php">Relationships</a>
				<a class="menu_item" href="profile.php">My Profile</a>
				<div class="flex-panel"></div>
			</div>
		</div>

	<?php else: ?><!-- If the  user is NOT logged on -->
	
		<div id="user_info">
			HELLO FUTURE SCHOLAR!
			<span style="position: absolute; right: 10px;">
				<a href="login.php" style="color:white;">Log In</a>
				<strong>|</strong>
				<a href="signup.php" style="color:white;">Sign Up</a>
			</span>
		</div>
		
		<div id="nav_menu_container">

			<a href="index.php"><img id="logo" src="images/general/se-logo.png"></a>

			<div id="pink_menu">
				<div class="flex-panel"></div>
				<a class="menu_item" href="index.php">Home</a> 
				<a class="menu_item" href="shop.php">Shop</a>
				<a class="menu_item" href="about.php">About</a>
				<a class="menu_item" href="terms.php">Terms</a>
				<a class="menu_item" href="contact.php">Contact</a>
				<div class="flex-panel"></div>
			</div>
		</div>

	<?php endif ?>

</header>

<!-- TODO: remove included files from most pages and add them here instead for them to always be loaded (variables.js, library.js) -->
<!--
<script src = "js/variables.js"></script>
<script src = "js/library.js"></script>
-->

<!-- TODO: Put those scripts in a new JS file (headers.js)-->
<script>

	// highlights the current page in the header
	$(function()
	{
		page = location.href.toLowerCase();//contains the URL of the current page
		
		//if directly on SE: http://localhost/se/

		// console.log("URL: " + page);
		// alert(document.location.hostname);
		// alert(document.location.pathname);
		
		//WORKS: http://huidesign.com/automatically-highlight-current-page-in-navigation-with-css-jquery/
		$('.menu_item').each(function()
		{
			var pageName = this.href.toLowerCase();//contains the entire URL
			var last3 = page.substr(page.length - 3);//to verify if the folder is simply "se/"
			var last9 = pageName.substr(pageName.length - 9);//to verify if the page leads to "index.php"

			if (page.indexOf(pageName) > -1)//returns the position of the word in the URL || (pageName == "index", page == "http://localhost/se/index.php"))
			{
				$(this).addClass('menu-item-activated');
			}
			else if (last3 == "se/" && last9 == "index.php")//if the URL is empty but the page directs to "index.php" like "google.com" vs "https://www.google.com/index.php"
			{
				$(this).addClass('menu-item-activated');//TODO: change the condition for the final release, as the game is not going ot be in the folder "se/"
			}
		});
		
		var extension = ".php";

		for(var i = 0; i < chapter_images.length; i++)
		{
			if(document.location.pathname.toLowerCase() == "/se/" + chapter_images[i] + extension)
			{
				$('#game_link').addClass('menu-item-activated');
			}
		}

		if(document.location.pathname.toLowerCase() == "/se/illustrations_achievements" + extension)
			{
				$('#dorm_link').addClass('menu-item-activated');
			}

		updateGameBar();
	});

	$(document).ready(function()
	{
		$('body').addClass('loaded');
		
		updateGameBar();
	});

</script>

<?php include_once 'partials/googleAds.php' ?>