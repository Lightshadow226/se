<?php include_once 'resources/session.php' ?>

<!DOCTYPE html>
<html>
<?php include_once 'partials/head.php' ?>

<body>

	<?php include_once 'partials/headers.php' ?>

	<div class="main_content">

        <?php if(isset($_SESSION['username'])): ?>
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
                    <br><h4 class="center";>FOLLOW US FOR MORE UPDATES:</h4><br>
                </div>
		    </div>

            <div id="coming_soon" class="center" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-bottom: 5px;">
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
            
			<div id = "DB_handle"></div>

		<?php else: ?>
            <P>Sorry! Only registered members can access this page. <a href="login.php">Click here</a> to log into your account. Not yet a member? <a href="signup.php">Signup</a>!</p>
		<?php endif ?>
        
	</div>

    <?php include_once 'partials/footers.php' ?>

</body>


</html>

