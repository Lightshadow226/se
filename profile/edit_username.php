<?php
include_once '../resources/session.php';
include_once '../partials/headers.php';
include_once '../resources/utilities.php';
include_once '../resources/database.php';


if((isset($_SESSION['id']) || isset($_GET['user_identity'])) && !isset($_POST['updateUsernameBtn']))
{
    if(isset($_GET['user_identity']))
    {
        $url_encoded_id = $_GET['user_identity'];
        $decode_id = base64_decode($url_encoded_id);
        $user_id_array = explode("encodeuserid", $decode_id);
        $id = $user_id_array[1];
    }else
    {
        $id = $_SESSION['id'];
    }
    
    
}
elseif(isset($_POST['updateUsernameBtn']))
{
	    $form_errors = array();
	
	    $required_fields = array('username');
	
	    $form_errors = array_merge($form_errors, check_empty_fields($required_fields));
	
	    $fields_to_check_length = array('username' => 4);
	
	    $form_errors = array_merge($form_errors, check_min_lenght($fields_to_check_length));
	
	    $username = $_POST['username'];
	    $id = $_POST['hidden_id'];
	    
	    $sqlQuery = "SELECT * FROM userinfo WHERE id = :id";
	    $statement = $db->prepare($sqlQuery);
	    $statement->execute(array(':id' => $id));
	    
	    while($rs = $statement->fetch())
	    {
		    $username_from_db = $rs['username'];
            }
            

	    if($username_from_db == $username)
	    {
		$result = "You have not made any changes.";
	    }
	    elseif(checkDuplicateUsername($username, $db))
	    {
		$result = flashMessage("This username is already taken!");
	    }
	    elseif(empty($form_errors))
	    {
			
				try
				{
					$sqlUpdate = "UPDATE userinfo SET username = :username WHERE id = :id";
					$statement = $db->prepare($sqlUpdate);
					$statement->execute(array(':username' => $username, ':id' => $id));
	
		
			           	 if($statement->rowCount() == 1)
			           	 {
			               	 	$result = "Profile Updated Successfully!";
			           	 }else
			           	 {
			                	$result = "You have not made any changes";
			           	 }
		
		
		       		}catch (PDOException $ex)
		        	{
		           		 $result = flashMessage("An error occured:" .$ex->getMessage());
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



<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">
	<meta name="description" content="Sweet Elite is a dating sims inspired by the popular Japanese Otome.Flirt with students and uncover Arlington Academy's dark secrets.Choose your own story!">
	
	<title>Sweet Elite: Flirt and Uncover the Secrets of Arlington Academy!<</title>

	<link href="css/se-stylesheet.css" rel="stylesheet" type="text/css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type='text/css'>


	<link rel="icon" type="image/ico" href="images/favicon.png"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>

<header id="header">
</header>

	<?php include_once '../partials/headers.php' ?>

	<div class = "main_content">
	<div class="card-nomargin add_padding">
	
	<h1>Edit your Username</h1>
            <?php if(isset($result)) echo $result; ?>
            <?php if(!empty($form_errors)) echo show_errors($form_errors); ?>


			<?php if(!isset($_SESSION['username'])):?>
				<p>Sorry! Only registered members are allowed to see this page. <a href="login.php">Log in</a> or <a href="signup.php">Sign up</a> to view your profile!</p>
			<?php else: ?>
				<p>Enter your new username here.</p>
				<form method="post" action="" class="center">
					Username:
					<p><input type="text" name="username" value="<?php if(isset($username)) echo $username; ?>"></p>
					<input type="hidden" value="<?php echo _token(); ?>" name="token">
					<input type="hidden" name="hidden_id" value="<?php if(isset($id)) echo $id; ?>">
					<p><input type="submit" name="updateUsernameBtn" value="UPDATE"></p>
				</form>
			<?php endif ?>

        </div>
	</div>


	<?php include_once '../partials/footers.php' ?>


</body>

</html>
