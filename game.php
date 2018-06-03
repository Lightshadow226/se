<?php
		include_once 'resources/session.php';
		include_once 'resources/database.php';
		include_once 'resources/utilities.php';
?>

<html>
<?php include_once 'partials/head.php' ?>

<body>

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
		<?php include_once 'partials/parseProfile.php' ?>

		<div class = "main_content">

			<h3 class="game-title card-firstdiv">Current Episode</h3>
			<div id = "currentEpisode"></div>

			<h3 class="card game-title">Next Chapters</h3>
			<div id = "nextChapters"></div>

			<h3 class="card game-title">Finished Chapters</h3>
			<div id = "finishedChapters"></div>

			<div id = "DB_handle"></div>

		</div>
		
		<?php include_once 'partials/footers.php' ?>
	<?php endif ?>


</body>

	<script src = "js/gameboot.js"></script>

</html>
