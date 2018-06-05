<?php
include_once 'partials/parseSignup.php';
?>

<!DOCTYPE html>
<html>
<?php include_once 'partials/head.php' ?>

<body>
<div class = "login-forms">

		<a href="index.php"><img id="logo" class="" src="images/general/se-logo.png"></a>
		<div class = "">
			<div class="card-nomargin add_padding">
				<h1>Registration</h1>
				<p style="text-align:center;"> Your account is almost ready! Click on the link in your email to activate it.</p><br>
				<p style="text-align:center;"> It may take several minutes for you to receive the email. If it doesn't show up in your inbox, <b>check your spam or junk folder.</b> Some email providers don't think we're popular enough for your normal inbox. :(</p><br>
				<p style="text-align:center;"> If the email still doesn't reach you, <a href="mailto:support@sweetelitegame.com?Subject=Email%20Activation" target="_top">contact the staff here.</a></p>
				<br><p style="text-align:center;"><a href="index.php">Back</a> </p> </br>
            	<?php if(isset($result)) echo $result; ?>

        	</div>
		</div>
		</div>

</body>

</html>