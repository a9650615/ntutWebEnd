<?php
	$result;
	if($requested_uri[0] == 'founders')
	switch($method){
		case 'POST':
			$name = $_POST['name'];
			$moneyt = $_POST['money'];
			$sponsorID = $_POST['sponsorID'];
			$result = mysqli_query($connected, "INSERT INTO founders (name, money, sponsorID) VALUES ('$name', '$money', $sponsorID)");
			
			break;
		case 'GET':
			//sponsorID/ID
			$sponsorID = $requested_uri[2];
			if($sponsorID != "")
				$result = mysqli_query($connected, "SELECT * FROM founders WHERE sponsorID = $sponsorID ");
			else
				$result = mysqli_query($connected, "SELECT * FROM founders");
			break;
		case 'DELETE':
			$ID = $requested_uri[2];
				$result = mysqli_query($connected, "DELETE FROM founders WHERE ID = '$ID' ");
			break;	
	}

	
?>