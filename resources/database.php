<?php 

	try
	{
		$db = new PDO('mysql:host=localhost; dbname=USERS', 'S3R3NA', 'Tadashi2016');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		//echo "Connected to the database!";
	}
	catch (PDOException $ex)
	{
		//display error message
		echo "Connection failed ".$ex->getMessage();
	}

?>