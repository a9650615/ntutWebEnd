<?php
	http_response_code(200);
	$connected = mysqli_connect("localhost", "root", "", "ntutweb");
	error_reporting(E_WARNING);
	
	// print_r($_SERVER);
	$uri_depth = 1; //�M�w�`��
	$data = [];
	$requested_uri = explode("/",$_SERVER['REQUEST_URI']);
	$method = $_SERVER['REQUEST_METHOD'];//REQUEST_METHOD
	// print_r(explode("/",$_SERVER['REQUEST_URI']));
	$requested_uri = array_slice($requested_uri, $uri_depth);
	//print_r($requested_uri);
	
	header('Content-Type:application/json;charset=utf-8');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, HEAD');
	include 'subjects.php';
	include 'founders.php';
	include 'accounts.php';

	$list = array();
	if($result){
		while($record=mysqli_fetch_assoc($result)){
			array_push($list,$record);
		}
	}
	 
	echo json_encode([
		'data'=> $list,
		'other_data' => $data,
		'status'=> $status,
		'error'=> mysqli_error($connected)
	]);
?>