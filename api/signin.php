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
    

    $sql = "SELECT * FROM users WHERE username = '$username'";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if ($password = $row["password"]) {
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
            die("Your password and your username are not match.");
        }
    }else{
        echo "0 results";
    }
}else{
    echo "it is not POST request";
}

$conn->close();
?>