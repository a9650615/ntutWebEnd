<?php
	$result;
	if($requested_uri[0] == 'founder')
	switch($method){
		case 'POST':
			$name = $_POST['name'];
			$money = $_POST['money'];
			$sponsorID = $_POST['sponsorID'];
			$token = $_POST['token'];
			$category = $_POST['category'];
			mysqli_query($connected, "INSERT INTO founders (name, money, sponsorID, token, category) VALUES ('$name', '$money', '$sponsorID', '$token', '$category')");
			break;
		case 'GET':
			$type =  $requested_uri[1];
			//sponsorID/ID
			$sponsorID = $requested_uri[2];
			if($type == 'sponsorID')
				$result = mysqli_query($connected, "SELECT * FROM founders WHERE sponsorID = '$sponsorID' ");
			else if ($type == 'token')
				$result = mysqli_query($connected, "SELECT * FROM founders WHERE token = '$token'");
			else if ($type == 'category')
				$result = mysqli_query($connected, "SELECT IFNULL(SUM(money),0) AS response FROM founders WHERE category = '$sponsorID' UNION SELECT IFNULL(SUM(goal),0) AS asd FROM fundings WHERE category = '$sponsorID' UNION SELECT COUNT(DISTINCT(token)) AS funding FROM fundings WHERE category = '$sponsorID'");
			else
				$result = mysqli_query($connected, "SELECT * FROM founders");
			break;
		case 'DELETE':
			$ID = $requested_uri[2];
				$result = mysqli_query($connected, "DELETE FROM founders WHERE ID = '$ID' ");
			break;	
	}

	
?>