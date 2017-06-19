<?php
	$result;
	if($requested_uri[0] == 'fundings')
	switch($method){
		case 'POST':
			$type = $_GET['type'];
			$title = $_POST['title'];
			$content = $_POST['content'];
			$category = $_POST['category'];
			$goal = $_POST['goal'];
			$ID = $requested_uri[2];
			if($type == "POST")
				mysqli_query($connected, "INSERT INTO fundings (title, content, category, goal, token) VALUES ('$title', '$content', $category, $goal, $token)");
			else
				mysqli_query($connected, "UPDATE fundings SET title = '$title', content = '$content', category = '$category', goal = '$goal' lastEdited = NOW() WHERE ID = '$ID' ");
			
			break;
		case 'GET':
			$type = $requested_uri[1];
			//category/ID
			$category = $requested_uri[2];
			//founder/token
			$token = $requested_uri[2];
			//subject/ID
			$id = $requested_uri[2];
			if($type == 'category')
				$result = mysqli_query($connected, "SELECT * FROM fundings WHERE category = $category ");
			else if($type == 'account')
				$result = mysqli_query($connected, "SELECT * FROM fundings WHERE token = '$token'");
			else if($type == 'subject')
				$result = mysqli_query($connected, "SELECT * FROM fundings WHERE ID = '$id'");
			else
				$result = mysqli_query($connected, "SELECT * FROM fundings");
			break;
		case 'DELETE':
			$ID = $requested_uri[2];
			$result = mysqli_query($connected, "DELETE FROM fundings WHERE ID = '$ID' ");
			break;	
	}
	


	
?>