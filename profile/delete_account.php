<?php 
include_once '../resources/session.php';
include_once '../resources/database.php';
include_once '../resources/utilities.php';
include_once '../resources/session.php';


if((isset($_SESSION['id']) || isset($_GET['user_identity'])) && !isset($_POST['deleteBtn']))
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
else if(isset($_POST['deleteBtn']))
{
	$form_errors = array();
		
	$required_fields = array('current_password');
		
	$form_errors = array_merge($form_errors, check_empty_fields($required_fields));
		
	if(empty($form_errors))
	{
		$id = $_POST['hidden_id'];
		$current_password = $_POST['current_password'];

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

					$sqlUpdate = "DELETE FROM userinfo WHERE id = :id";
					$statement = $db->prepare($sqlUpdate);
					$statement->execute(array(':id' => $id));

					if($statement->rowCount() === 1)
					{
						$result = "You have succesfully deleted your account.";
						signout();
						
					}
					else
					{
						$result = "No Changes Have been Made.";
					}

				}
				else
				{
					$result = "Your entered password is not correct. Please try again.";
				}
			}
			else
			{
				$result = "fetch did not execute.";
			}
		}
		catch (PDOException $ex)
		{
			$result = flashMessage("An error occured:" .$ex->getMessage());
		}
	}
	else
	{
		if(count($form_errors) == 1)
		{
			$result = flashMessage("There was one error:");
			$id = $_SESSION['id'];
		}
		else
		{
			$result = flashMessage("There were " .count($form_errors). " errors:");
			$id = $_SESSION['id'];
		}
	}
}

?>
<!DOCTYPE html>
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

<body>

	<header id="header">

    </header>

	<?php include_once '../partials/headers.php' ?>
	<?php include_once '../resources/utilities.php' ?>

	<div class = "main_content">
        <div class="card-nomargin add_padding">
            <h1>Delete Your Account</h1>

            <?php if(isset($result)) echo $result; ?>
            <?php if(!empty($form_errors)) echo show_errors($form_errors); ?>


			<?php if(!isset($_SESSION['username'])):?>
				<p>Sorry! Only registered members are allowed to see this page. <a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to view your profile!</p>
			<?php else: ?>

		            <form method="post" action="" class="center">
				        Enter your Password:
				        <p><input type="password" name="current_password" value=""></p>
       
		               	 	<input type="hidden" name="hidden_id" value="<?php if(isset($id)) echo $id; ?>">
		                	<p><input type="submit" name="deleteBtn" value="DELETE ACCOUNT"></p>
		
		  	   </form>
		  	   
			<?php endif ?>

        </div>
	</div>

	<?php include_once '../partials/footers.php' ?>

</body>

</html>