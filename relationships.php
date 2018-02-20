<!doctype html>
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

    <?php include_once 'partials/headers.php' ?>


    <div id="popup-container" class="invisible">
        <img id="school_file_img_container" class="fullscreen-child" src="_new_images_folder/characters/school_files/alistair.png">
        <div id="top-right-x">X</div>
    </div>

    <div class = "main_content">
        
        <div class="add_padding card-firstdiv" style = "margin-bottom: 20px;">

            <h1>Relationships</h1>

            <div id="button_container_horizontal">
    
            </div>

        </div>
            
        <div id="character_lines_container">
            
        </div>
            
        <div id = "DB_handle">
			
		</div>
    </div>

    <?php include_once 'partials/footers.php' ?>

</body>

<script src = "js/jquery_3.2.1.js"></script>
<script src = "js/variables.js"></script>
<script src = "js/library.js"></script>
<script src = "js/relationships.js"></script>

</html>