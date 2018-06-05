<!DOCTYPE html>
<html>
<?php include_once 'partials/head.php' ?>

<body id="body">

	<?php include_once 'partials/headers.php' ?>

	<div class = "main_content">

		<div id="dorm">
			<div id="dorm_base_img_container">
				<img class="img" src = "images/game_images/dorm/dorm.jpg"></img>
			</div>
		</div>

		<div id="useless" style="display:none;"><!-- useless div lol, seulement le contenu est important -->
			<div id="dorm-wardrobe" class="dorm-clickable" onclick="wardrobe();"></div><!-- Wardrobe (change clothes/appearance) -->
			<div id="dorm-bag" class="dorm-clickable" onclick="window.open('map.php', '_self');"></div><!-- Bag (map) -->
			<div id="dorm-laptop" class="dorm-clickable" onclick="window.open('game.php', '_self');"></div><!-- Laptop (Illustrations & achievements) -->
			<div id="dorm-book" class="dorm-clickable" onclick="window.open('illustrations_achievements.php', '_self');"></div><!-- Book (objectives & progression) -->
		</div>
		
		<div id = "DB_handle"></div>

	</div>

	<?php include_once 'partials/footers.php' ?>

</body>
	
<script src = "js/dorm.js"></script>

</html>
