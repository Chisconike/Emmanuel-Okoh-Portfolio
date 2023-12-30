<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Your existing PHP code here
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Customize the email content as per your needs
    $to = "chinedue856@gmail.com";
    $subject = "New Form Submission: " . $subject;
    $headers = "From: " . $email;

    // Send the email
    mail($to, $subject, $message, $headers);
}
?>
