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

$idolId = trim($_GET["id"]);

$sql = "SELECT * FROM idols WHERE id = $idolId";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $jsonArrayObject = (array(
            'id' => $row["id"],
            'university' => $row["university"],
            'highschool' => $row["highschool"],
            'firstname' => $row["firstname"],
            'lastname' => $row["lastname"],
            'nickname' => $row["nickname"],
            'aka' => $row["aka"],
            'birthday' => $row["birthday"],
            'height' => $row["height"],
            'bloodgroup' => $row["bloodgroup"],
            'address' => $row["address"],
            'favcolor' => $row["favcolor"],
            'favfood' => $row["favfood"],
            'hobby' => $row["hobby"],
            'lang' => $row["lang"],
            'description' => $row["description"],
            'image' => $row["image"],
            'author' => $row["author"]
        ));
    }
    echo json_encode($jsonArrayObject);
}else{
    echo "0 results";
}

$conn->close();
?>