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
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>

<body id="body">

	<?php include_once 'partials/headers.php' ?>

	<div class = "main_content">

		<div id="dorm">

			<div id="dorm_base_img_container">
				<img class="img" src = "images/game_images/dorm/dorm.jpg"></img>
			</div>

			<!-- <div id="dorm_overlay">
				<img class="img" style="z-index:2;" src = "images/game_images/dorm/dorm_ward.png"></img>
			</div> -->

			
		</div>

		<div>
			<button type="button" class="button pink-button-subtle" style="z-index:1;" onclick="window.open('map.php', '_self');">Bag (map)</button>
			<button type="button" class="button pink-button-subtle" style="z-index:1;" onclick="window.open('dorm.php', '_self');">Book (objectives & progression)</button>
			<button type="button" class="button pink-button-subtle" style="z-index:1;" onclick="window.open('illustrations_achievements.php', '_self');"> Laptop (Illustrations & achievements)</button>
			<button type="button" class="button pink-button-subtle" style="z-index:1;" onclick="wardrobe();">Wardrobe (change clothes/appearance)</button>
		</div>
		
		<div id = "DB_handle">
				
		</div>

	</div>

	<div id = "Character_handle">

		<!-- <input id = "Character_handle_sex" value = "1"></input>
		<input id = "Character_handle_skincolor" value = "1"></input>
		<input id = "Character_handle_haircolor"></input>
		<input id = "Character_handle_hairstyle"></input>
		<input id = "Character_handle_eyecolor"></input>
		<input id = "Character_handle_clothes"></input> -->

	</div>
	
	<?php include_once 'partials/footers.php' ?>
</body>

	
<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src = "js/variables.js"></script><!--this is to get all the variables that are needed from the database--><!--Eventually, this will become a PHP file, as we need to extract many values from the database-->
<script src = "js/library.js"></script><!--this is to get all the functions that are needed-->
<script src = "js/dorm.js"></script>

<script>
	raz();
</script>
	
</html>
