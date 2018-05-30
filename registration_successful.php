<?php
include_once 'partials/parseSignup.php';
?>

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

<body class= "center-screen">
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

</body>

</html>