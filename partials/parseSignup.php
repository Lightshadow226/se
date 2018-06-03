<?php 

include_once 'resources/database.php';
include_once 'resources/utilities.php';
include_once 'resources/session.php';
include_once 'resources/send-email.php';

//Process the form
if(isset($_POST['signupBtn'],$_POST['token']))
{	
	if(validate_token($_POST['token']))
	{		
		//Initializing an array to store any error message from the form
		$form_errors = array();
		
		//Form Validation
		$required_fields = array('email', 'username', 'password');
		
		//Call the function to check empty field and merge the return data into form_errors array (from utilities.php)
		$form_errors = array_merge($form_errors, check_empty_fields($required_fields));
		
		//Fields that requires checking for minimum lenght
		$fields_to_check_lenght = array('username' => 4, 'password' => 6);
		
		//Call the function to check minimum required lenght and merge the return data into form_errors array (utilities.php)
		$form_errors = array_merge($form_errors, check_min_lenght($fields_to_check_lenght));
		
		//Email validation, merge the return data into form_errors array
		$form_errors = array_merge($form_errors, check_email($_POST));
	
		//Collecting the form data and storing them into variables
			$email = $_POST['email'];
			$username = $_POST['username'];
			$password = $_POST['password'];
			
		//Check if the username or email already exists in the database
		if(checkDuplicateUsername($username, $db))
		{
			$result = flashMessage("This username is already taken!");
		}
		else if(checkDuplicateEmail($email, $db))
		{
			$result = flashMessage("This email is already taken!");
		}
		else if(empty($form_errors))//Checking if error array is empty. If yes, process the form data and insert
		{
			$hashed_password = password_hash($password, PASSWORD_DEFAULT);//hashing the password
			
			try
			{
				//Creating the SQL Statement
				$sqlInsert = "INSERT INTO userinfo (username, email, password, joindate) VALUES (:username, :email, :password, now())";
				
				//Using PDO to sanitize the data
				$statement = $db->prepare($sqlInsert);
				
				//Adding the data into the database
				$statement->execute(array(':username' => $username, ':email' => $email, ':password' => $hashed_password));
				
				//Checking if one new row has been created
				if ($statement->rowCount() == 1)
				{
					//Get the last inserted ID that was inserted into the database and encoding it
					$user_id = $db->lastInsertId();
					$encode_id = base64_encode("encodeuserid{$user_id}");

					//generate the rest of the database row for that user based on the ID
					$sqlInsert2 = "INSERT INTO story (id) SELECT id FROM userinfo WHERE id = $user_id";
					$sqlInsert3 = "INSERT INTO affinity (id) SELECT id FROM userinfo WHERE id = $user_id";
					$sqlInsert4 = "INSERT INTO scholarinfo (id) SELECT id FROM userinfo WHERE id = $user_id";
					$sqlInsert5 = "INSERT INTO chapter0_story (id) SELECT id FROM userinfo WHERE id = $user_id";
					$sqlInsert6 = "INSERT INTO chapter1_story (id) SELECT id FROM userinfo WHERE id = $user_id";
					$sqlInsert7 = "INSERT INTO chapter2_story (id) SELECT id FROM userinfo WHERE id = $user_id";
					$sqlInsert8 = "INSERT INTO achievements (id) SELECT id FROM userinfo WHERE id = $user_id";
					$sqlInsert9 = "INSERT INTO illustrations (id) SELECT id FROM userinfo WHERE id = $user_id";
					
					//Using PDO to sanitize the data
					$statement2 = $db->prepare($sqlInsert2);
					$statement3 = $db->prepare($sqlInsert3);
					$statement4 = $db->prepare($sqlInsert4);
					$statement5 = $db->prepare($sqlInsert5);
					$statement6 = $db->prepare($sqlInsert6);
					$statement7 = $db->prepare($sqlInsert7);
					$statement8 = $db->prepare($sqlInsert8);
					$statement9 = $db->prepare($sqlInsert9);

					//Adding the data into the database
					$statement2->execute();
					$statement3->execute();
					$statement4->execute();
					$statement5->execute();
					$statement6->execute();
					$statement7->execute();
					$statement8->execute();
					$statement9->execute();
				
					$path_parts = pathinfo(__FILE__);
					$fullUrl = "sweetelitegame.com" . rtrim($_SERVER['REQUEST_URI'], $path_parts['basename']) . "activate.php";

					/*THE CLASS "logo_div"  DOESN'T EXIST*/
					
					//Preparing the body of the email
					$mail_body =
						'<html>

						<body>
						
						<div style="text-align:center; background-color:#ff4956;" class="logo_div">
							<img src="http://sweetelitegame.com/images/se-logo.png">
						</div>
						
						<div class="main_content">
						
						<h2 style="text-align:center; color:#682666;">Welcome to Arlington Academy!</h2>
						
						<p>Dear '.$username.',
						<br>
						<br>
						Congratulations! On behalf of Arlington Academy, I am pleased to announce your acceptance for the class of 20XX!</p>
						
						<p>You can be proud to be joining a select group of people, ready to change the world by offering up their talents to the pursuit of excellence.</p>
						
						<p>What is your next step? <b>Confirm your student account by clicking on the link below:</b></p>
						
						<p style="text-align:center;"><a href="' . $fullUrl . '?id=' . $encode_id. '"> Confirm your Account!</a></p>
						
						<p>Once you have confirmed your account, you will be ready to start your adventure! I have assigned a senior student to help you on your first day at Arlington. They will teach you everything you need to know to start playing.</p>
						
						<p>If you need any help, please do not hesitate to contact the staff!</p>
						
						<p>Sincerly,</p>
						
						<p><img src="http://sweetelitegame.com/pubdomain/ladya-signature.png" height="100"></p>
						<p><b>LADY AMELIA ARLINGTON </b>| President & Dean of Arlington Academy</p>
						
						</div>
						
						<footer style="background-color:#dbdad7;color:#682566;padding:5px 0 5px 0;text-align:center;">
							<p>&copy;2016-2017 Dulcet Games Inc.</p>
						</footer>
						
						</body>
						</html>';

					//Sending the email
					$mail->addAddress($email, $username);
					$mail->Subject = "Welcome to Sweet Elite";
					$mail->Body = $mail_body;

					//Error Handling for PHPMailer
					if(!$mail->Send())
					{
						$result = "Email sending failed: $mail->ErrorInfo";
					}
					else
					{
						//$result = "Registration Succesful! Please check your email to activate your account.";
						header('Location: registration_successful.php');
						exit();		
					}
				}
			}
			catch(PDOException $ex) 
			{
				$result = flashMessage("An error has occured: ".$ex->getMessage());
			}
		}
	}else
	{
		$result = "<p>This request originates from an unknown source. This is a possible attack. Please contact the Sweet Elite Staff if you think this is a mistake.</p>";
	}
}
else if(isset($_GET['id'])) 
{
	$encoded_id = $_GET['id'];
	$decode_id = base64_decode($encoded_id);
	$user_id_array = explode("encodeuserid", $decode_id);
	$id = $user_id_array[1];

	$sql = "UPDATE userinfo SET activated =:activated WHERE id=:id AND activated='0'";

	$statement = $db->prepare($sql);
	$statement->execute(array(':activated' => "1", ':id' => $id));

	if ($statement->rowCount() == 1)
	{
		$result = '<h2>Email Confirmed </h2>
		<p>Your email address has been verified, you can now <a href="login.php">login</a> with your email and password!</p>';
	} 
	else
	{
		$result = "<p class='lead'>No changes made please contact the Sweet Elite Staff to activate your account if you still can't log in.</p>";
	}
}
?>