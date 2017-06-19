<?php
  
	$result;
	if($requested_uri[0] == 'account')
	switch($method){
		case 'POST':
			$type = $_GET['type'];
			$token = $_POST['token'];
			$email = $_POST['email'];
			$name = $_POST['name'];
			$profile = $_POST['profile'];
			$description = $_POST['description'];
			$loginResult = mysqli_query($connected,"SELECT * FROM accounts WHERE token = '$token'");
			if($type == 'login'){
				if(mysqli_num_rows($loginResult) != 0){
					mysqli_query($connected, "UPDATE accounts SET lastLogin = NOW() WHERE token = '$token' ");
					$status = 'login_success';
				}else{
					mysqli_query($connected, "INSERT INTO accounts (token, email, name, profile) VALUES ('$token', '$email', '$name', '$profile')");
					$status = 'account_created';
				}
			}else if($type = 'edit'){
				mysqli_query($connected, "UPDATE accounts SET lastLogin = NOW(), name = '$name', email = '$email', profile = '$profile', description = '$description'  WHERE token = '$token' ");
			}
			break;
		case 'GET':
			//category/ID
			$token = $requested_uri[2];
			if($token != "")
				$result = mysqli_query($connected, "SELECT * FROM accounts WHERE token = $token ");
			break;
		case 'DELETE':
			$token = $requested_uri[2];
			$result = mysqli_query($connected, "DELETE FROM accounts WHERE token = '$token' ");
			break;	
	}
	


	
?>