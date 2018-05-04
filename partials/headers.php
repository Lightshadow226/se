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
			Welcome Back <?php if(isset($_SESSION['username'])) echo $_SESSION['username']; ?>!
			<strong>| Episode: </strong> <span id="barEpisode"></span>
			<strong>| Highest Affinity: </strong> <span id="barAffinity"></span>
			<strong>| Money: </strong> <span id="barMoney"></span>
			<strong>| Energy: </strong> <span id="barEnergy"></span>
			<strong>|</strong> 
			<a href="logout.php" style="font-size:8px; color:white;">LOGOUT</a>
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
<!-- TODO: remove included files from most pages and add them here instead for them to always be loaded (variables.js, library.js) -->

<!--<script src = "js/variables.js"></script>
<script src = "js/library.js"></script>-->
<script>
// highlights the current page in the header
$(function()
{
	page = location.href.toLowerCase();//contains the URL of the current page
	
	//if directly on SE: http://localhost/se/

	//alert(page);
	// alert(document.location.hostname);
	// alert(document.location.pathname);
	
    $('.menu_item').each(function()
    {
		var pageName = this.href.toLowerCase();//contains the entire URL
		
		// alert(page.substr(page.length - 3));
		// alert(pageName);
		// alert(pageName.substr(pageName.length - 9));

		var last3 = page.substr(page.length - 3);//to verify if the folder is simply "se/"
		var last9 = pageName.substr(pageName.length - 9);//to verify if the page leads to "index.php"

		if (page.indexOf(pageName) > -1)//returns the position of the word  || (pageName == "index"))
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

	updateTopBar();
});

$(document).ready(function()
{
	$('body').addClass('loaded');
	
	updateTopBar();
});

async function updateTopBar()
{
	alert(user.last_chapter_played);
	await pullVariablesFromDB();
	alert(user.last_chapter_played);

	document.getElementById('barEpisode').innerHTML = getCurrentChapter().title;
	
	//TODO: ASYNC PROBLEM AGAIN: solution found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
	document.getElementById('barAffinity').innerHTML = getHighestAffinity().name;
	
	document.getElementById('barMoney').innerHTML = "∞";
	
	document.getElementById('barEnergy').innerHTML = "∞";
}

//WORKS: http://huidesign.com/automatically-highlight-current-page-in-navigation-with-css-jquery/
//DOESN'T WORK: https://stackoverflow.com/questions/30073190/html-css-navigation-bar-highlighting-current-page

</script>

<?php include_once 'partials/googleAds.php' ?>