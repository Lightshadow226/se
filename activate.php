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
				<h1>Email Confirmation</h1>
				<?php if(isset($result)) echo $result; ?>
				<br><p style="text-align:center;"><a href="index.php">Back</a> </p> </br>
        	</div>
		</div>
	</div>

</body>

</html>