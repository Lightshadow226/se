<?php

	include_once 'resources/session.php';
	include_once 'resources/database.php';
	include_once 'resources/utilities.php';

?>

<header>

	<div id="loader-wrapper">
		<div id="loader">
		</div>
		<img id="img_loader" src="logo.png"/>
		
		<div class="loader-section section-left"></div>
		<div class="loader-section section-right"></div>
	
	</div>

	<i style="display: none;"><?php echo guard(); ?></i>

	<?php if((isset($_SESSION['username']) || isCookieValid($db))): ?><!-- If the username is specified (the user is logged on) -->

		<div id="user_info" class="">
			Welcome Back <?php if(isset($_SESSION['username'])) echo $_SESSION['username']; ?>! <a href="logout.php" style="font-size:8px; color:white;">LOGOUT</a> </p>
		</div>

		<div id="nav_menu_container">
			
			<a href="index.php"><img id="logo" src="images/general/se-logo.png"></a>

			<div id="pink_menu">
				<div class="flex-panel"></div>
				<a class="menu_item" href="index.php">Dashboard</a>	
				<a class="menu_item" href="dorm.php">My Dorm</a>
				<a class="menu_item" href="map.php">City Map</a>
				<a id="game_link" class="menu_item" href="game.php">My Game</a>
				<a class="menu_item" href="relationships.php">Relationships</a>
				<a class="menu_item" href="profile.php">My Profile</a>
				<div class="flex-panel"></div>
			</div>
		</div>

	<?php else: ?><!-- If the  user is NOT logged on -->
	
		<div id="user_info" class="">
			HELLO FUTURE SCHOLAR! <a href="login.php" style="font-size:8px; color:white;">LOGIN</a> | <a href="Signup.php" style="font-size:8px; color:white;">SIGNUP</a>
		</div>
		
		<div id="nav_menu_container">

			<a href="index.php"><img id="logo" src="images/general/se-logo.png"></a>

			<div id="pink_menu">
				<div class="flex-panel"></div>
				<a class="menu_item" href="index.php">Home</a> 
				<a class="menu_item" href="#">Shop</a>
				<a class="menu_item" href="about.php">About</a>
				<a class="menu_item" href="terms.php">Terms</a>
				<a class="menu_item" href="contact.php">Contact</a>
				<div class="flex-panel"></div>
			</div>
		</div>

	<?php endif ?>

</header>

<script src = "js/jquery_3.2.1.js"></script>
<script>
// highlights the current page in the header
$(function()
{
    page = location.href.toLowerCase();
	
	// alert(document.location.hostname);
	// alert(document.location.pathname);
	
    $('.menu_item').each(function()
    {
		if (page.indexOf(this.href.toLowerCase()) > -1)
        {
            $(this).addClass('menu-item-activated');
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
});

$(document).ready(function()
{
    $('body').addClass('loaded');
});

//WORKS: http://huidesign.com/automatically-highlight-current-page-in-navigation-with-css-jquery/
//DOESN'T WORK: https://stackoverflow.com/questions/30073190/html-css-navigation-bar-highlighting-current-page

</script>