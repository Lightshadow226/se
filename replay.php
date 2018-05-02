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
	<?php include_once 'partials/parseProfile.php' ?>

	<div class = "main_content">
	
	    <div class="card-firstdiv add_padding" style="position: relative;">

			<?php if(!isset($_SESSION['username'])):?>
				<h1>Profile</h1>
				<p>Sorry! Only registered members are allowed to see this page. <a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to view your profile!</p>
			
			<?php else: ?>
				<h1>Chapter Finished!</h1>

							<div class="logged-in-three-containers flex-container">
								<!--<div class="flex-container" style="padding: 2px; border: 2px solid #f3def2; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">-->
    
									<div style="flex:1;">
									</div>

									<div style="flex:2;">
										<div>
											<img class="center_div" style="width: 100%; border: 2px solid #fdeac7; border-radius: 10px; box-shadow: 0 0 10px #fdeac7;" src="images/general/chapter_images/chapter0.png">
										</div>
									</div>

									<div style="flex:1;">
									</div>

                            </div>
                            
                            <div class="flex-container">
                                <div style="flex:1;">     
                                </div>

                                <div style="flex:4; ">     
                                    
                                    <h5 style="padding: 10px;">You've Finished the Latest Chapter!</h5>
                                    <p class="center">There are no other chapters available for the moment. Follow our social media to know when the next chapter release is going to be!</p>
                                    <div class="center">
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
                                                background: #682666;
                                                color: white;
                                            }

                                            .fa-twitter
                                            {
                                                background: #682666;
                                                color: white;
                                            }

                                            .fa-youtube
                                            {
                                                background: #682666;
                                                color: white;
                                            }

                                            .fa-tumblr
                                            {
                                                background: #682666;
                                                color: white;
                                            }

                                        </style>

                                        <a href="https://www.facebook.com/sweeteliteofficial/" class="fa fa-facebook"></a>
                                        <a href="https://twitter.com/sestaff" class="fa fa-twitter"></a>
                                        <a href="https://www.youtube.com/channel/UC0W1REG-54i100QUDFoXKjg" class="fa fa-youtube"></a>
                                        <a href="http://sweetelite-staff.tumblr.com/" class="fa fa-tumblr"></a>
                                        <p style="visibility: hidden;">i</p>
                                  </div>

                                    <p class="center">You can also replay previous chapters while you wait!</p>
                                    <div class="center" style="padding: 10px;">
										<div class="button pink_button"><a style="color:white;" href="">Replay</a></div>
                                    </div>
                                    
                                </div>

                                <div style="flex:1;">     
                                </div>

                            </div>

			<?php endif ?>
		</div>
	</div>

	<?php include_once 'partials/footers.php' ?>

</body>
</html>