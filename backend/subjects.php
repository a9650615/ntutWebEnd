<?php
	$result;
	if($requested_uri[0] == 'fundings')
	switch($method){
		case 'POST':
			$type = $_GET['type'];
			$title = $_POST['title'];
			$content = $_POST['content'];
			$category = $_POST['category'];
			$ID = $requested_uri[2];
			if($type == "POST")
				mysqli_query($connected, "INSERT INTO fundings (title, content, category) VALUES ('$title', '$content', $category)");
			else
				mysqli_query($connected, "UPDATE fundings SET title = '$title', content = '$content', category = '$category', lastEdited = NOW() WHERE ID = '$ID' ");
			
			break;
		case 'GET':
			//category/ID
			$category = $requested_uri[2];
			if($category != "")
				$result = mysqli_query($connected, "SELECT * FROM fundings WHERE category = $category ");
			else
				$result = mysqli_query($connected, "SELECT * FROM fundings");
			break;
		case 'DELETE':
			$ID = $requested_uri[2];
			$result = mysqli_query($connected, "DELETE FROM fundings WHERE ID = '$ID' ");
			break;	
	}
	


	
?>