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

$username = trim($_GET["page"]);
    

$sql = "SELECT * FROM users WHERE username = '$username'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $jsonArrayObject = (array(
        'userId' => $row["id"],
        'username' => $row["username"],
        'password' => $row["password"],
        'firstname' => $row["firstname"],
        'lastname' => $row["lastname"],
        'email' => $row["email"],
        'avatar' => $row["avatar"]
    ));
    echo json_encode($jsonArrayObject);
}else{
    echo "0 results";
}

$conn->close();
?>