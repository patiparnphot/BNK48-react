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
    
    $university = trim($data["university"]);
    $highschool = trim($data["highschool"]);
    $firstname = trim($data["firstname"]);
    $lastname = trim($data["lastname"]);
    $nickname = trim($data["nickname"]);
    $aka = trim($data["aka"]);
    $birthday = trim($data["birthday"]);
    $height = trim($data["height"]);
    $bloodgroup = trim($data["bloodgroup"]);
    $address = trim($data["address"]);
    $favcolor = trim($data["favcolor"]);
    $favfood = trim($data["favfood"]);
    $hobby = trim($data["hobby"]);
    $lang = trim($data["lang"]);
    $description = trim($data["description"]);
    $image = trim($data["image"]);
    $author = "1";

    $sql = "INSERT INTO idols (university, highschool, firstname, lastname,
        nickname, aka, birthday, height, bloodgroup, address, favcolor, favfood,
        hobby, lang, description, image, author) VALUES ('$university', '$highschool',
        '$firstname', '$lastname', '$nickname', '$aka', '$birthday', '$height', '$bloodgroup',
        '$address', '$favcolor', '$favfood', '$hobby', '$lang', '$description', '$image', '$author')";

    $result = $conn->query($sql);

    $jsonArrayObject = (array(
        'university' => $university,
        'highschool' => $highschool,
        'firstname' => $firstname,
        'lastname' => $lastname,
        'nickname' => $nickname,
        'aka' => $aka,
        'birthday' => $birthday,
        'height' => $height,
        'bloodgroup' => $bloodgroup,
        'address' => $address,
        'favcolor' => $favcolor,
        'favfood' => $favfood,
        'hobby' => $hobby,
        'lang' => $lang,
        'description' => $description,
        'image' => $image,
        'author' => $author
    ));
    $json_array = json_encode($jsonArrayObject);
    echo $json_array;
}else{
    echo "0 results";
}

$conn->close();
?>