<?php
$servername = getenv('servername');
$username = getenv('username');
$password = getenv('password');
$dbname = getenv('dbname');

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the onnection is alright.
if (!$conn) {
    die('Connection error: ' . mysqli_connect_error());
} else {
    echo "Connected successfully";
};
?>