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
			$token = $_POST['token'];
			$ID = $requested_uri[2];
			if($type == "POST")
				mysqli_query($connected, "INSERT INTO fundings (title, content, category, goal, token, date, lastEdited) VALUES ('$title', '$content', '$category', '$goal', '$token', NOW(), NOW())");
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
			if($type == 'category') {
				$result = mysqli_query($connected, "SELECT *, fundings.ID AS ID,(SELECT IFNULL(SUM(money),0) FROM `founders` WHERE `founders`.`sponsorID`=`fundings`.`ID`) AS `sponsored` FROM fundings LEFT JOIN accounts ON (fundings.token = accounts.token) WHERE fundings.category='$id' order by fundings.ID desc");
				//  mysqli_query($connected, "SELECT a.*, b.* FROM `fundings` as a, `accounts` as b WHERE a.token = b.token order by a.ID desc")
			}
			else if($type == 'account')
				$result = mysqli_query($connected, "SELECT * FROM fundings LEFT JOIN (accounts) ON (fundings.token = accounts.token) WHERE fundings.token = '$token'");
			else if($type == 'subject')
				$result = mysqli_query($connected, "SELECT *,(SELECT IFNULL(SUM(money),0) FROM `founders` WHERE `founders`.`sponsorID`=`fundings`.`ID`) AS `sponsored` FROM fundings LEFT JOIN (accounts) ON (fundings.token = accounts.token) WHERE fundings.ID='$id'");
			else
				$result = mysqli_query($connected, "SELECT *,(SELECT IFNULL(SUM(money),0) FROM `founders` WHERE `founders`.`sponsorID`=`fundings`.`ID`) AS `sponsored` FROM fundings LEFT JOIN (accounts) ON (fundings.token = accounts.token)");
			break;
		case 'DELETE':
			$ID = $requested_uri[2];
			$result = mysqli_query($connected, "DELETE FROM fundings WHERE ID = '$ID' ");
			break;	
	}
	


	
?>