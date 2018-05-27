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

$sql = "SELECT * FROM idols";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    # code...
    $arr = [];
    $inc = 0;
    while ($row = $result->fetch_assoc()) {
        # code...
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
        $arr[$inc] = $jsonArrayObject;
        $inc++;
    }
    $json_array = json_encode($arr);
    echo $json_array;
}else{
    echo "0 results";
}

$conn->close();
?>