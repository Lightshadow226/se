<?php
//add our database connection script
include_once 'resources/database.php';
include_once 'resources/utilities.php';
include_once 'resources/send-email.php';

if(isset($_POST['passwordResetBtn']))//Password Reset
{
    $form_errors = array();
    
    $required_fields = array('new_password', 'confirm_password');

    $form_errors = array_merge($form_errors, check_empty_fields($required_fields));
    
    $fields_to_check_length = array('new_password' => 6, 'confirm_password' => 6);
    
    $form_errors = array_merge($form_errors, check_min_lenght($fields_to_check_length));

    if(empty($form_errors))
    {
        $id = $_POST['user_id'];
        $password1 = $_POST['new_password'];
        $password2 = $_POST['confirm_password'];

        if($password1 != $password2)
        {
            $result = "<p style='padding:20px; border: 1px solid gray; color: red;'>New password and confirm password does not match</p>";
		}
		else
        {
            try
            {
                $sqlQuery = "SELECT id FROM userinfo WHERE id =:id";
                
                $statement = $db->prepare($sqlQuery);
                
                $statement->execute(array(':id' => $id));

                if($statement->rowCount() == 1)
                {
                    $hashed_password = password_hash($password1, PASSWORD_DEFAULT);

                    $sqlUpdate = "UPDATE userinfo SET password =:password WHERE id=:id";

                    $statement = $db->prepare($sqlUpdate);
                    
                    $statement->execute(array(':password' => $hashed_password, ':id' => $id));

                    $result = "<p style='padding:20px; border: 1px solid gray; color: green;'> Password Reset Successful</p>";
                }
                else
                {
                    $result = "<p style='padding:20px; border: 1px solid gray; color: red;'> The email address provided
                                does not exist in our database, please try again</p>";
                }
			}
			catch(PDOException $ex)
            {
                $result = "<p style='padding:20px; border: 1px solid gray; color: red;'> An error occurred: ".$ex->getMessage()."</p>";
            }
        }
    }
    else
    {
        if(count($form_errors) == 1)
        {
            $result = "<p style='color: red;'> There was 1 error in the form<br>";
		}
		else
        {
            $result = "<p style='color: red;'> There were " .count($form_errors). " errors in the form <br>";
        }
    }


}
else if(isset($_POST['passwordRecoveryBtn']))//Password Recovery
{
	$form_errors = array();
	
	$required_fields = array('email');
	
	$form_errors = array_merge($form_errors, check_empty_fields($required_fields));
	
	$form_errors = array_merge($form_errors, check_email($_POST));
	
	if(empty($form_errors))
	{
		$email = $_POST['email'];
		
		try
		{
			$sqlQuery = "SELECT * FROM userinfo WHERE email =:email";
			
			$statement = $db->prepare($sqlQuery);
			
			$statement->execute(array(':email' => $email));
			
			if($rs = $statement->fetch())
			{
				$username = $rs['username'];
				$email = $rs['email'];
				$user_id = $rs['id'];
				$encode_id = base64_encode("encodeuserid{$user_id}");
				
				// HTML code for the email to be sent to the new student
				$mail_body = '<html>
				<body>
				
				<div style="text-align:center; background-color:#ff4956;" class="logo_div">
					<img src="http://sweetelitegame.com/images/se-logo.png">
				</div>
											
				
				<h2 style="text-align:center; color:#682666;">Password Recovery Link</h2>
				
				<div style="padding=20px;">
				<p>Dear '.$username.',</p>
				
				<p>Forgot your password? Not a problem!</p>
				
				<p>To reset your password, please click on the link below:</p>
				
				<p style="text-align:center;"><a href="http://sweetelitegame.com/testfiles/profiletest/forgot_password.php?id='.$encode_id.'">Reset Password</a></p>
				
				<p>Contact us if you are still having problems.</p>
				
				<p><strong>The Sweet Elite Staff</strong></p>
				</div>
				
				<footer style="background-color:#DBDAD7; color:#682566; padding: 5px 0 5px 0; text-align: center;">
					<p>&copy;2016-2017 Dulcet Games Inc.</p>
				</footer>
				
				</html>';
				
				$mail->addAddress($email, $username);
				$mail->Subject = "Password Recovery Link";
				$mail->Body = $mail_body;
				
				if(!$mail->Send())
				{
					$result="Email sending failed: $mail->ErrorInfo";
					
				}
				else
				{
					$result="Password reset link sent succesfully! Check your inbox.";
				}
			}
			else
			{
				$result = "Oops! The email you entered does not exist in our database, please try again!";
			}
		}
		catch (PDOException $ex)
		{
			$result = "<p style='padding:20px; border: 1px solid gray; color: red;'> An error occurred: ".$ex->getMessage()."</p>";
		}
		
	}
	else
	{
		if(count($form_errors) == 1)
		{
				$result = "<p style='color: red;'> There was 1 error in the form<br>";
		}
		else
		{
			$result = "<p style='color: red;'> There were " .count($form_errors). " errors in the form <br>";
		}
	}
}

?>
