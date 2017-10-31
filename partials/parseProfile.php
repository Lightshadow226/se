<?php
include_once 'resources/utilities.php';
include_once 'resources/database.php';

if((isset($_SESSION['id']) || isset($_GET['user_identity'])) && !isset($_POST['updateProfileBtn']))
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
else if(isset($_POST['updateProfileBtn'], $_POST['token']))
{
    if(validate_token($_POST['token']))
    {
	    $form_errors = array();
	
	    $required_fields = array('email', 'username');
	
	    $form_errors = array_merge($form_errors, check_empty_fields($required_fields));
	
	    $fields_to_check_length = array('username' => 4);
	
	    $form_errors = array_merge($form_errors, check_min_lenght($fields_to_check_length));
	
	    $form_errors = array_merge($form_errors, check_email($_POST));
	
	    $email = $_POST['email'];
	    $username = $_POST['username'];
	    $hidden_id = $_POST['hidden_id'];
	
	    if(empty($form_errors))
	    {
	        try
	        {
	            $sqlUpdate = "UPDATE userinfo SET username =:username, email =:email WHERE id =:id";
	            $statement = $db->prepare($sqlUpdate);
	            $statement->execute(array(':username' => $username, ':email' => $email, ':id' => $hidden_id));
	
	            if($statement->rowCount() == 1)
	            {
	                $result = "Profile Updated Successfully!";
	
				}
				else
	            {
	                $result = "You have not made any changes";
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
	        }
	        else
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