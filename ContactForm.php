<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "portfolio";
$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $name = $_POST['title'];
    $email = $_POST['email'];
    $description = $_POST['description'];
    $createdYear = $_POST['year'];
    $perHourPrice = $_POST['price'];
    $message = $_POST['Message'];
    $workID = $_POST['styleInput'];
    $service = $_POST['inputCategorySelect'];

    $sql = "INSERT INTO contact_me (name, email, subject, created_year, per_hour_price, message, work_id, service) VALUES ('$name', '$email', '$description', '$createdYear', '$perHourPrice', '$message', '$workID', '$service')";

    $result = $conn->query($sql);
    if ($result)
    {
        header("Location: ContactMe.html");
    }
    else
    {
        die("Record not inserted");
    }

    $conn->close();
}
?>