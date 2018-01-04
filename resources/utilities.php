<?php 

function check_empty_fields($required_fields_array)
{
	//Initializing an array to store any error message from the form
	$form_errors = array();
	
	//Looping through the requiredfields array
	foreach($required_fields_array as $name_of_field){
		if(!isset($_POST[$name_of_field]) || $_POST[$name_of_field] == NULL)
		{
			$form_errors[] = $name_of_field . " is required"; 
		}
	}
	
	return $form_errors;
}

/*
$fields_to_check_lenght, an array containing the name of fields
For which we want to check the minimum required lenght e.g array('username' => 4, 'email;' => 12)
return the array containing all the errors
*/

function check_min_lenght($fields_to_check_lenght)
{
	//Initializing an array to store any error message from the form
	$form_errors = array();
	
	foreach($fields_to_check_lenght as $name_of_field => $minimum_lenght_required)
	{
		if(strlen(trim($_POST[$name_of_field])) < $minimum_lenght_required)
		{
			$form_errors[] = $name_of_field . " is too short. It must be {$minimum_lenght_required} characters long.";
		}
	}

	return $form_errors;
}


function check_email($data)
{	
	//Initializing an array to store any error message from the form
	$form_errors = array();
	$key = 'email';
	
	//Check if the key email exists in the data array
	if (array_key_exists($key, $data))
	{
	
		//Check if the email field has a value
		if($_POST[$key] != null)
		{
		
			//Remove all illegal characters from email
			$key = filter_var($key, FILTER_SANITIZE_EMAIL);
			
			//Check if input is a valid email address
			if(filter_var($_POST[$key], FILTER_VALIDATE_EMAIL) === false)
			{
				$form_errors[] = $key . " is not a valid email address";
			}
		}
			
	}

	return $form_errors;
}


function show_errors($form_errors_array){
	$errors = "<p><ul style='color: red;'>";
	
	//loop through each error array and display all items in a list
	foreach($form_errors_array as $the_error){
		$errors .= "<li> {$the_error} </li>";
	}
	
	$errors .= "</ul></p>";
	
	return $errors;
}


function flashMessage ($message, $passOrFail = "Fail")
{
	if($passOrfail === "Pass")
	{
		$data="<p style='padding: 20px; border: 1px solid; color: green;'>{$message}</p>";
	}else
	{
		$data="<p style='padding: 20px; border: 1px solid; color: red;'>{$message}</p>";
	}

	return $data;
}


function redirectTo($page)
{
	header("Location: {$page}.php");
}


function checkDuplicateUsername($value, $db)
{
	try
	{
		$sqlQuery = "SELECT username FROM userinfo WHERE username=:username";
		$statement = $db->prepare($sqlQuery);
		$statement->execute(array(':username' => $value));
		
		if($row = $statement->fetch())
		{
			return true;
		}
		
		return false;
		
	}catch (PDOException $ex)
	{
		//handle exception
	}
}


function checkDuplicateEmail($value, $db)
{
	try
	{
		$sqlQuery = "SELECT email FROM userinfo WHERE email=:email";
		$statement = $db->prepare($sqlQuery);
		$statement->execute(array(':email' => $value));
		
		if($row = $statement->fetch())
		{
			return true;
		}
		
		return false;
		
	}catch (PDOException $ex)
	{
		//handle exception
	}
}


function rememberMe($user_id)
{
	$encryptCookieData = base64_encode("ASnoi899sdkl{$user_id}");
	//Cookie set to expire in about 30 days
	setcookie("rememberUserCookie", $encryptCookieData, time()+60*60*24*100, "/"); //The "/" means that the cookie is available in entire website (otherwise, select the directory you prefer).
}


function isCookieValid($db)
{
	$isValid = false;
	
	if(isset($_COOKIE['rememberUserCookie']))
	{
		//Decide cookies and extract user ID
		$decryptCookieData = base64_decode($_COOKIE['rememberUserCookie']);
		$user_id = explode("ASnoi899sdkl", $decryptCookieData);
		$userId = $user_id[1];
		
		//Check if ID retrieved from the cookie exists in the database
		$sqlQuery = "SELECT * FROM userinfo WHERE id = :id";
		$statement = $db->prepare($sqlQuery);
		$statement->execute(array(':id' => $userID));
		
		if($row = $statement->fetch())
		{
			$id = $row['id'];
			$username = $row['username'];
			
			//Create the user session variable
			$_SESSION['id'] = $id;
			$_SESSION['username'] = $username;
			$isValid = true;
		}
		else
		{
			//Cookie ID is invalid. Destroy session and logout user
			$isValid = false;
			signout();
			
		}
	}
	
	return $isValid;
}


function signout()
{
	unset($_SESSION['username']);
	unset($_SESSION['id']);
	
	if(isset($_COOKIE['rememberUserCookie']))
	{
		unset($_COOKIE['rememberUserCookie']);
		setcookie('rememberUserCookie', null, -1, '/');
	}
	
	session_destroy();
	session_regenerate_id(true);
	redirectTo('index');
}


function guard()
{
	$isValid = true;
	$inactive = 60*20; //20 mins
	$fingerprint = md5($_SERVER['REMOTE_ADDR'] . $_SERVER['HTTP_USER_AGENT']);
	
	if((isset($_SESSION['fingerprint']) && $_SESSION['fingerprint'] != $fingerprint))
	{
		$isValid = false;
		signout();
	}
	else if ((isset($_SESSION['last_active']) && (time() - $_SESSION['last_active']) > $inactive) && $_SESSION['username'])
	{
		$isValid = false;
		signout();
	}
	else
	{
		$_SESSION['last_active'] = time();
	}
	
	return $isValid;
}


function _token()
{
	$randomtoken = base64_encode(openssl_random_pseudo_bytes(32));
	
	return $_SESSION['token'] = $randomtoken;


}

function validate_token($requestToken)
{
	if(isset($_SESSION['token']) && $requestToken === $_SESSION['token'])
	{
		unset($_SESSION['token']);
		
		return true;
	}
	
	return false;
}

?>