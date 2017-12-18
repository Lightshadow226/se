<?php 
include_once '../resources/session.php';
include_once '../resources/database.php';
include_once '../resources/utilities.php';

if((isset($_SESSION['id']) || isset($_GET['user_identity'])) && !isset($_POST['changePasswordBtn']))
{
    if(isset($_GET['user_identity']))
    {
        $url_encoded_id = $_GET['user_identity'];
        $decode_id = base64_decode($url_encoded_id);
        $user_id_array = explode("encodeuserid", $decode_id);
        $id = $user_id_array[1];
	}
	else
    {
        $id = $_SESSION['id'];
    }
    
    $sqlQuery = "SELECT * FROM userinfo WHERE id = :id";
    $statement = $db->prepare($sqlQuery);
    $statement->execute(array(':id' => $id));

    while($rs = $statement->fetch())
    {
        $username = $rs['username'];
        $email = $rs['email'];
        $date_joined = strftime("%b %d, %Y", strtotime($rs["joindate"]));
    }
    
    $encode_id = base64_encode("encodeuserid{$id}");
}
elseif(isset($_POST['changePasswordBtn']))
{
	$form_errors = array();
	
	$required_fields = array('current_password', 'new_password', 'confirm_password');
	
	$form_errors = array_merge($form_errors, check_empty_fields($required_fields));
	
	$fields_to_check_lenght = array('new_password' => 6, 'confirm_password' => 6);
	
	$form_errors = array_merge($form_errors, check_min_lenght($fields_to_check_lenght));
	
	if(empty($form_errors))
	{
		$id = $_POST['hidden_id'];
		$current_password = $_POST['current_password'];
		
		if($password1 != $password2)
		{
			$result = "New password and confirmed password do not match: please try again.";
		}
		else
		{
			try
			{
				$sqlQuery = "SELECT password FROM userinfo WHERE id = :id";
				$statement = $db->prepare($sqlQuery);
				$statement->execute(array(':id' => $id));

				if ($row = $statement->fetch())
				{
					$password_from_db = $row['password'];
					
					if(password_verify($current_password,$password_from_db))
					{
						$hashed_password = password_hash($password1,PASSWORD_DEFAULT);

						$sqlUpdate = "UPDATE userinfo SET password = :password WHERE id = :id";
						$statement = $db->prepare($sqlUpdate);
						$statement->execute(array(':password' => $hashed_password, ':id' => $id));

						if($statement->rowCount() === 1)
						{
							$result = "Password Succesfully Updated!";
						}
						else
						{
							$result = "No Changes Have been Made.";
						}
					}
					else
					{
						$result = "Your current password is not correct. Please try again.";
					}
				}
				else
				{
					signout();
				}
			}
			catch (PDOException $ex)
			{
				$result = flashMessage("An error occured:" .$ex->getMessage());
			}
		}
	}
	else
	{
		if(count($form_errors) == 1)
		{
				$result = flashMessage("There was one error:");
		}
		else
		{
				$result = flashMessage("There were " .count($form_errors). " errors:");
		}
	}
}
?>

<html>
<head>

	<meta charset="UTF-8">
	<meta name="description" content="Sweet Elite is a dating sims inspired by the popular Japanese Otome.Flirt with students and uncover Arlington Academy's dark secrets.Choose your own story!">
	
	<title>Sweet Elite: Flirt and Uncover the Secrets of Arlington Academy!<</title>

	<link href="../css/se-stylesheet.css" rel="stylesheet" type="text/css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type='text/css'>


	<link rel="icon" type="image/ico" href="images/favicon.png"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body class="center-screen">

	<a href="../index.php"><img id="logo" class="" src="../images/general/se-logo.png"></a>

	<div class="">
	<?php include_once '../resources/utilities.php' ?>

        <div class="card-nomargin add_padding">
            <h1>Password Management</h1>

            <?php if(isset($result)) echo $result; ?>
            <?php if(!empty($form_errors)) echo show_errors($form_errors); ?>

			<?php if(!isset($_SESSION['username'])):?>

				<p>Sorry! Only registered members are allowed to see this page. <a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to view your profile!</p>

			<?php else: ?>

				<form method="post" action="" class="center">

					<div class = "flex-container">
						<p class = "flex-panel login-signup-labels" style= "flex:2; padding-right:10px;">Current Password:</p>
						<input id="current-password" class = "flex-panel2 login-signup-textfields" type="text" placeholder = "Password" type="password" name="current_password" value=""></input>
						<div class = "flex-panel"></div>
					</div>
					
					</br>

					<div class = "flex-container">
						<p class = "flex-panel login-signup-labels" style= "flex:2; padding-right:10px;">New Password:</p>
						
						<input id="current-password" class = "flex-panel2 login-signup-textfields" type="text" placeholder = "Think of something cool!" type="password" name="new_password" value=""></input>
						<div class = "flex-panel"></div>
					</div>

					</br>

					<div class = "flex-container">
						<p class = "flex-panel login-signup-labels" style= "flex:2; padding-right:10px;">Confirm New Password:</p>
						
						<input id="current-password" class = "flex-panel2 login-signup-textfields" type="text" placeholder = "Just to be safe!" type="password" name="confirm_password" value=""></input>
						<div class = "flex-panel"></div>
					</div>
						
					</br>
					
					<input type="hidden" value="<?php echo _token(); ?>" name="token">
					<input type="hidden" name="hidden_id" value="<?php if(isset($id)) echo $id; ?>">
					
					<input class="button pink-button-subtle" type="submit" name="changePasswordBtn" value="CHANGE PASSWORD"></input>
		
		  	   	</form>

				<br><p style="text-align:center;"><a href="../profile.php">Back</a> </p>
			
			<?php endif ?>

        </div>
	</div>

</body>

<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>$('#current-password').focus();</script>

</html>