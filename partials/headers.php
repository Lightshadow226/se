<?php include_once 'resources/session.php';
 include_once 'resources/database.php';
 include_once 'resources/utilities.php';
 ?>

<i style="display: none;"><?php echo guard(); ?></i>

<?php if((isset($_SESSION['username']) || isCookieValid($db))): ?>

<div id="user_info" class="add_border">
			Welcome Back <?php if(isset($_SESSION['username'])) echo $_SESSION['username']; ?>! <a href="logout.php" style="font-size:8px; color:white";>LOGOUT?</a> </p>
		</div>
		
		<a href="index.php"><img class="logo add_border" src="images/general/se-logo.png"></a>

	<div id="nav_menu_container">
		<div class="pink_logo_bar add_border">
			<!--This div has no other purpose than to take space while not complicating lives with margins and padding-->
		</div>
		<div id="pink_menu" class="add_border">
			<a class="menu_item add_border" href="">My Dorm</a>
			<a class="menu_item add_border" href="">City Map</a>
			<a class="menu_item add_border" href="game.php">My Game</a>
			<a class="menu_item add_border" href="relationships.php">Relationships</a>
			<a class="menu_item add_border" href="profile.php">My Profile</a>
		</div>
	</div>
</div>

<?php else: ?>
 
<div id="user_info" class="add_border">
			HELLO FUTURE SCHOLAR!
</div>
	<a href="index.php"><img class="logo add_border" src="images/general/se-logo.png"></a>

	<div id="nav_menu_container">
		<div class="pink_logo_bar add_border">
			<!--This div has no other purpose than to take space while not complicating lives with margins and padding-->
		</div>
		<div id="pink_menu" class="add_border">
			<a class="menu_item add_border" href="">Home</a> 
			<a class="menu_item add_border" href="">About</a>
			<a class="menu_item add_border" href="">Contact</a>
			<a class="menu_item add_border" href="">Terms</a>
			<a class="menu_item add_border" href="">Shop</a>
		</div>
	</div>
</div>

<?php endif ?>
