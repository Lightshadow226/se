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
	<body class = "center-screen">
		<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>
		<div class = "">
			<div class="card-nomargin add_padding" style="position: relative;">
				<h1>Game</h1>
				<p>Sorry! Only registered members are allowed to see this page. <br><a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to play.</br></p>
			</div>
		</div>
	</body>
	<?php else: ?>

		<div class = "main_content">

			<div id = "Container">
				<?php include_once 'partials/generateGameContainer.php' ?>
			</div>

			<div id = "DB_handle"> </div>

		</div>
		<?php include_once 'partials/footers.php' ?>
		
	<?php endif ?>

</body>

	<script src = "js/variables.js"></script><!--this is to get all the variables that are needed from the database--><!--Eventually, this will become a PHP file, as we need to extract many values from the database-->
	<script src = "js/library.js"></script><!--this is to get all the functions that are needed-->
	<script src = "js/chapters/chapter1.js"></script><!--there is going to be one .js file for every chapter, so we load it in the memory here-->
	<script src = "js/gameengine.js"></script><!--the game engine needs to be last, as it will interact with all the variables from the .js files above-->

</html>
