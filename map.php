<?php include_once 'resources/session.php' ?>

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

        <?php if(!isset($_SESSION['username'])): ?>
            <div id="coming_soon" class="center add_shading">
			    <img id="img_comming_soon" src="images/general/comingsoon.png">
		    </div>

            <div id="coming_soon" class="center flex-container">
                <div class = "flex-panel"></div>
			    <div style = "flex=3"><img id="img_diamondbar" src="images/diamond.png"></div>
                <div class = "flex-panel"></div>
		    </div>

            <div id="coming_soon" class="center">
			    <div>
                    <p>The city map is not quite ready yet...but it will be on the full version of the game! The staff is still working hard to release the new and improved Sweet Elite. We promise to let you know when it is ready!</p>
                    <br><h4 class="center";>FOLLOW US:</h4><br>
                </div>
		    </div>

            <div id="coming_soon" class="center">
                <style>
					.fa
					{
						padding: 20px;
						font-size: 30px;
						width: 30px;
						text-align: center;
						text-decoration: none;
						margin: 5px 2px;
						border-radius: 50%;
					}

					.fa:hover
					{
						/*opacity: 0.7;*/
						background: #ff4956;
						color: white;
					}

					.fa-facebook
					{
						background: #ffffff;
						color: 682666;
					}

					.fa-twitter
					{
						background: #ffffff;
						color: 682666;
					}

					.fa-youtube
					{
						background: #ffffff;
						color: 682666;
					}

					.fa-tumblr
					{
						background: #ffffff;
						color: 682666;
					}

				</style>

				<a href="https://www.facebook.com/sweeteliteofficial/" class="fa fa-facebook"></a>
				<a href="https://twitter.com/sestaff" class="fa fa-twitter"></a>
				<a href="https://www.youtube.com/channel/UC0W1REG-54i100QUDFoXKjg" class="fa fa-youtube"></a>
				<a href="http://sweetelite-staff.tumblr.com/" class="fa fa-tumblr"></a>
                <p style="visibility: hidden;">i</p>
		    </div>
            

		<?php else: ?>
            <P>Sorry! Only registered members can access this page. <a href="login.php">Click here</a> to log into your account. Not yet a member? <a href="signup.php">Signup</a>!</p>
		<?php endif ?>
        
	</div>

    <?php include_once 'partials/footers.php' ?>

</body>

</html>

