<?php
include 'repository.php';
/* 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); */

http_response_code(200);
print_r($_POST);
$repository = new Repository();
$qualifications = json_decode($_POST['qualifications']);
$qualification_id = json_decode($_POST['qualification']);
$qualification = array_filter(fn($q)=> $qualification_id == $q , $qualifications);
$response = ["message"=>$repository->responses[$qualification->name]];
die(json_encode($response));







