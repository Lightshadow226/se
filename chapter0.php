<?php
		include_once 'resources/session.php';
		include_once 'resources/database.php';
		include_once 'resources/utilities.php';
?>

<html>
	
<?php include_once 'partials/head.php' ?>

<body>

	<div id="popupHandler"></div>

	<?php if(!isset($_SESSION['username'])):?>
		<div class="login-forms">
			<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>
			<div class="card-nomargin add_padding">
				<h1>Game</h1>
				<p>Sorry! Only registered members are allowed to see this page. <br><a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to play.</br></p>
			</div>
		</div>
	<?php else: ?>

		<?php include_once 'partials/headers.php' ?>

		<div class = "main_content">

			<div id = "Container">
				<?php include_once 'partials/generateGameContainer.php' ?>
			</div>

			<div id = "DB_handle"></div>
				
		</div>
		<?php include_once 'partials/footers.php' ?>
		
	<?php endif ?>


</body>

	<script src = "js/chapters/chapter0.js"></script><!--there is going to be one .js file for every chapter, so we load it in the memory here-->
	<script src = "js/gameengine.js"></script><!--the game engine needs to be last, as it will interact with all the variables from the .js files above-->

</html>
