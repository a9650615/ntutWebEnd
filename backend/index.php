<?php

	$connected = mysqli_connect("localhost", "root", "", "ntutweb");
	error_reporting(E_WARNING);
	
	//print_r($_SERVER);
	$uri_depth = 2; //決定深度
	$requested_uri = explode("/",$_SERVER['REQUEST_URI']);
	$method = $_SERVER['REQUEST_METHOD'];
	//print_r(explode("/",$_SERVER['REQUEST_URI']));
	$requested_uri = array_slice($requested_uri, $uri_depth);
	//print_r($requested_uri);
	
	header('Content-Type:application/json;charset=utf-8');
	include 'subjects.php';
	include 'founders.php';
	
	$list = array();
	if($result){
		while($record=mysqli_fetch_assoc($result)){
			array_push($list,$record);
		}
	}
	
	echo json_encode([
		'data'=> $list
	]);
?>