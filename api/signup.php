<?php
$servername = getenv('IP');
$username = "patiparn";
$password = "bomgeo57";
$dbname = "bnk48-react";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $data = json_decode(file_get_contents('php://input'), true);
    
    $username = trim($data["username"]);
    $password = trim($data["password"]);
    $firstname = trim($data["firstname"]);
    $lastname = trim($data["lastname"]);
    $email = trim($data["email"]);
    $avatar = trim($data["avatar"]);
    

    $sql = "INSERT INTO users (username, password, firstname, lastname,
        email, avatar) VALUES ('$username', '$password', '$firstname',
        '$lastname', '$email', '$avatar')";

    $result = $conn->query($sql);

    $jsonArrayObject = (array(
        'username' => $username,
        'password' => $password,
        'firstname' => $firstname,
        'lastname' => $lastname,
        'email' => $email,
        'avatar' => $avatar
    ));
    $json_array = json_encode($jsonArrayObject);
    echo $json_array;
}else{
    echo "it is not POST request";
}

$conn->close();
?>