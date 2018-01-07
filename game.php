<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">
	<meta name="description" content="Sweet Elite is a dating sims inspired by the popular Japanese Otome.Flirt with students and uncover Arlington Academy's dark secrets.Choose your own story!">
	
	<title>Sweet Elite: Flirt and Uncover the Secrets of Arlington Academy!</title>

	<link href="css/se-stylesheet.css" rel="stylesheet" type="text/css">
	<link href="css/se-game.css" rel="stylesheet" type="text/css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type='text/css'>

	<link rel="icon" type="image/ico" href="images/favicon.png"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body id="body">

<?php include_once 'partials/headers.php' ?>

	<div class = "main_content">

		<!-- <div class="add_padding card-nomargin" style = "margin-bottom: 20px;"> -->
			<h3 style="color:#682666; text-align:center;">Current Episode</h3>
		<!-- </div> -->

		<div id = "currentEpisode">

		</div>

		<!-- <div class="add_padding card-nomargin" style = "margin-bottom: 20px;"> -->
			<h3 style="color:#682666; text-align:center;">Finished Chapters</h3>
		<!-- <div> -->

		<div id = "finishedChapters">

		</div>

		<div id = "DB_handle">
			
		</div>

	</div>

	<?php include_once 'partials/footers.php' ?>

</body>

	<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src = "js/variables.js"></script><!--this is to get all the variables that are needed from the database--><!--Eventually, this will become a PHP file, as we need to extract many values from the database-->
	<script src = "js/library.js"></script><!--this is to get all the functions that are needed-->
	
	<script src = "js/gameboot.js"></script>

</html>
