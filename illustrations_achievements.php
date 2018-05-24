<!-- <?php include_once 'resources/session.php' ?> -->

<!doctype html>
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

<body>

    <?php include_once 'partials/headers.php' ?>

    <div id="popup-container" class="invisible">
        <img id="popup-img" class="fullscreen-child popup-img" src="">
        <div id="top-right-x">X</div>
    </div>

    <div class="main_content">
        <div class="add_padding card-firstdiv">
            
            <h1 id="illu_achiev_id">Illustrations</h1>
            
            <div id="button_container_horizontal" class="flex-container" style="margin-bottom: 20px;"> <!-- les boutons jaunes -->
            
                <div class="flex-panel2"></div>

                <div id="illustrations-button" class="button yellow_button" style="margin: 10px" onclick="refresh_lines(0)">Illustrations</div>
                
                <div id="achievements-button" class="button yellow_button" style="margin: 10px" onclick="refresh_lines(1)">Achievements</div>
                
                <div class="flex-panel2"></div>

            </div>
        </div>

        <div id="illustrations">
            <div class="x-card-purple">
                <div class="x-card-purple-header">
                    <h4>Chapter 1</h4>
                </div>

                <div class="x-card-content flex-container">
                    <div class="card-left-content"><img class="x-card-img-purple" src="images/game_images/illustrations/chapter1/illustration1.jpg" onclick="showPopup(this.src)"></img></div>
                    <div class="card-middle-content"><img class="x-card-img-purple" src="images/game_images/illustrations/chapter1/illustration2.jpg" onclick="showPopup(this.src)"></img></div>
                    <div class="card-middle-content"><img class="x-card-img-purple" src="images/game_images/illustrations/chapter1/illustration3.jpg" onclick="showPopup(this.src)"></img></div>
                    <div class="card-right-content"><img class="x-card-img-purple" src="images/game_images/illustrations/chapter1/illustration4.jpg" onclick="showPopup(this.src)"></img></div>
                </div>
            </div>		

            <div class="x-card-pink">
                <div class="x-card-pink-header">
                    <h4>Chapter 2</h4>
                </div>

                <div class="x-card-content flex-container">
                    <div class="card-left-content"><img class="x-card-img-pink" src="images/game_images/illustrations/chapter2/illustration1.jpg" onclick="showPopup(this.src)"></img></div>
                    <div class="card-middle-content"><img class="x-card-img-pink" src="images/game_images/illustrations/chapter2/illustration2.jpg" onclick="showPopup(this.src)"></img></div>
                    <div class="card-middle-content"></div>
                    <div class="card-right-content"></div>
                </div>
            </div>		
        </div>
        
        <div id="achievements">

        </div>
    </div>

    <div id = "DB_handle"></div>

    <?php include_once 'partials/footers.php' ?>

</body>

<script src = "js/variables.js"></script>
<script src = "js/library.js"></script>
<script src = "js/illustrations_achievements.js"></script>

</html>