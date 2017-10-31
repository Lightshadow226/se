<?php
include_once 'resources/session.php';
include_once 'resources/database.php';
include_once 'resources/utilities.php';

if(isset($_POST['loginBtn'], $_POST['token']))
{

//validate the token
	if(validate_token($_POST['token']))
	{
		//array to hold errors
		    $form_errors = array();
		
		//validate
		    $required_fields = array('username', 'password');
		    $form_errors = array_merge($form_errors, check_empty_fields($required_fields));
		
		    if(empty($form_errors))
		    {
		        //collect form data
		        $user = $_POST['username'];
		        $password = $_POST['password'];
		       
		        isset($_POST['remember']) ? $remember = $_POST['remember'] : $remember = ""; //If the user has checked the remember me box, $remember is equal to "yes" (the value of $_POST), if not, it is an empty string.
		
		        //check if user exist in the database
		        $sqlQuery = "SELECT * FROM userinfo WHERE username = :username";
		        $statement = $db->prepare($sqlQuery);
		        $statement->execute(array(':username' => $user));
		
		       if($row = $statement->fetch())
		        {
		           $id = $row['id'];
		           $hashed_password = $row['password'];
		           $username = $row['username'];
		           $activated = $row['activated'];
		           
		           if($activated === "0")
		           {
		           	$result =flashMessage("Please activate your account!");
		           }
		           else
		           {
		                     
			           if(password_verify($password, $hashed_password))
			           {
			               $_SESSION['id'] = $id;
			               $_SESSION['username'] = $username;
			
			               $fingerprint = md5($_SERVER['REMOTE_ADDR'] . $_SERVER['HTTP_USER_AGENT']);
			               $_SESSION['last_active'] = time();
			               $_SESSION['fingerprint'] = $fingerprint;
			
			
			
			               if($remember === "yes")
			               {
			                   rememberMe($id);
			               }
			
			               redirectTo('index');
			           }
			           else
			           {
			               $result =flashMessage("Invalid Password");
			           }
		           }
		
			  }
			  else
			  {
			           $result =flashMessage("Invalid Username");
			  }
			
		     }else
		     {
			        if(count($form_errors) == 1)
			        {
			            $result = flashMessage("There was an error:");
			        }else
			        {
			            $result = flashMessage("There were " .count($form_errors). " errors:");
			        }
		     }
	}
	else
	{
		$result = "<p>This request originates from an unknown source. This is a possible attack. Please contact the Sweet Elite Staff if you think this is a mistake.</p>";
	}


}
?>