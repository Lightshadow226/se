<?php
		include_once 'resources/session.php';
		include_once 'resources/database.php';
		include_once 'resources/utilities.php';
?>

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
