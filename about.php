<!DOCTYPE html>
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

	<div class = "main_content">
        <div class = "card-firstdiv add_padding">
            <h1>Welcome to Sweet Elite!</h1>
            <p class="center add_padding">Sweet Elite is an online Otome game following the adventures of the students of Arlington Academy. Your character, the <b>Scholar</b>, is a scholarship student and makes a series of major choices, affecting both their destiny and those of the people around them. </p>
            <p class="center add_padding"><b>Flirt with students, build your romance and uncover Arlington Academy's dark secrets. Create your own story!<b></p>
            <div class = "flex-container">
                <div class = "flex-panel3">
                </div>

                <div class = "flex-panel3">
                    <img class = "img-badge" src = "images/separator.jpg"></img>
                </div>

                <div class = "flex-panel3">
                </div>

            </div>

            <h6>Features:</h6>
                <div class=" flex-container">
                    <div class="features_illustration">
                        <img class="imgh" src="images/general/features/dualart.png">
                    </div>
                    
                    <div class="description">        
                        <h4 style="text-align: left;">DUAL ARTSTYLE</h4>

                        <p style="text-align: left;">Our CGs are made by our two main artists, each of them adding in their own charm.</p>
                        <p style="text-align: left;">We know you like variety.</p>
                    </div>

                </div>

                <div class="flex-container">
                
                    <div class="description">        
                        <h4 style="text-align: right;">SAME-SEX DATING OPTIONS</h4>

                        <p style="text-align: right;">Because in our current day and age, we think introducing an LGBT branch to the storyline of an Otome is long overdue.</p>
                        <p style="text-align: right;">Sweet Elite has 5 datable girls and 5 datable guys.</p>
                    </div>

                    
                    <div class="features_illustration">
                        <img class="imgh" src="images/general/features/samesex.png">
                    </div>
                </div>

                <div class="flex-container">
                    <div class="features_illustration">
                        <img class="imgh" src="images/general/features/infmetersite.png">
                    </div>

                    <div class="description">        
                        <h4 style="text-align: left;">FRIENDSHIP AND ROMANCE OPTIONS</h4>

                        <p style="text-align: left;">Sometimes, you just don't like a person that way. Choose between friendship or romance dialogue options and watch the story adapt to your choices and build relationships accordingly! The possibilities are infinite with the Infinity Meter!</p><br>
                        <p style="text-align: left;">The best part? Our character won't complain about being "stuck in the friendzone!"</p>
                    </div>
                </div>

                <div class="flex-container">

                    <div class="description">        
                        <h4 style="text-align: right;">CHOOSE A DEPARTMENT</h4>

                        <p style="text-align: right;">Everybody has a talent, now it's time to choose yours! Choose a department for your character as they become a Scholar at Arlington Academy!</p><br>

                    </div>

                    <div class="features_illustration">
                        <img class="imgh" src="images/general/features/depts.png">
                    </div>

                </div>

                <?php if(!isset($_SESSION['username'])): ?><!-- logged off -->
                <div class = "flex-container">
                    <div class = "flex-panel3">
                    </div>

                    <div class = "flex-panel3">
                        <img class = "img-badge" src = "images/separator.jpg"></img>
                    </div>

                    <div class = "flex-panel3">
                    </div>

                </div>

                <h6>Need Convincing?</h6>
                <p class="center"><b>All you need to do is try our demo!<b></p><br>
                <p class="center"><a href = "signup.php" id = "signup_button" class = "button">Sign Up</a></p>
                <p class="center"><a href = "login.php" id = "login_button" class = "button">Login</a></p>
                <?php endif ?>

                <div class = "flex-container">
                    <div class = "flex-panel3">
                    </div>

                    <div class = "flex-panel3">
                        <img class = "img-badge" src = "images/separator.jpg"></img>
                    </div>

                    <div class = "flex-panel3">
                    </div>

                </div>

                <h6>Are you a parent?</h6>
                <p class="center"><a href="parents.php">Click Here for More Information</a></p><br>

		</div>
	</div>

    <?php include_once 'partials/footers.php' ?>

</body>  

</html>

