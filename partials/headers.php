<?php

	include_once 'resources/session.php';
	include_once 'resources/database.php';
	include_once 'resources/utilities.php';

?>

<header>

	<i style="display: none;"><?php echo guard(); ?></i>

	<?php if((isset($_SESSION['username']) || isCookieValid($db))): ?><!-- If the username is specified (the user is logged on) -->

		<div id="user_info" class="">
			Welcome Back <?php if(isset($_SESSION['username'])) echo $_SESSION['username']; ?>! <a href="logout.php" style="font-size:8px; color:white;">LOGOUT</a> </p>
		</div>

		<div id="nav_menu_container">
			
			<a href="index.php"><img id="logo" src="images/general/se-logo.png"></a>

			<div id="all_pink_menu">
				<div id="pink_logo_bar">
					<!--This div has no other purpose than to take space while not complicating lives with margins and padding-->
				</div>

				<div id="pink_menu">
					<a class="menu_item" href="dorm.php">My Dorm</a>
					<a class="menu_item" href="map.php">City Map</a>
					<a class="menu_item" href="game.php">My Game</a>
					<a class="menu_item" href="relationships.php">Relationships</a>
					<a class="menu_item" href="profile.php">My Profile</a>
				</div>
			</div>
		</div>

	<?php else: ?><!-- If the  user is NOT logged on -->
	
		<div id="user_info" class="">
			HELLO FUTURE SCHOLAR! <a href="login.php" style="font-size:8px; color:white;">LOGIN</a> | <a href="Signup.php" style="font-size:8px; color:white;">SIGNUP</a>
		</div>
		
		<div id="nav_menu_container">

			<a href="index.php"><img id="logo" src="images/general/se-logo.png"></a>

			<div id="all_pink_menu">
				<div id="pink_logo_bar">
					<!--This div has no other purpose than to take space while not complicating lives with margins and padding-->
				</div>

				<div id="pink_menu">
					<a class="menu_item" href="index.php">Home</a> 
					<a class="menu_item" href="#">Shop</a>
					<a class="menu_item" href="about.php">About</a>
					<a class="menu_item" href="#">Terms</a>
					<a class="menu_item" href="contact.php">Contact</a>
				</div>
			</div>
		</div>

	<?php endif ?>

</header>