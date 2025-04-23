
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
header("Access-Control-Allow-Origin: *"); // Enable CORS for local testing
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


// Get the raw POST data
$rawInput = file_get_contents("php://input");
file_put_contents("debug.txt", $rawInput);
$data = json_decode($rawInput);
if (!$data || !isset($data->name) || !isset($data->email)) {
    http_response_code(400); // Bad Request
    echo json_encode(["error" => "Missing required fields."]);
    exit;
}

// Compose email
$to = "yassuopro316@gmail.com";
$subject = "New Contact Message from " . $data->name;
$message = "Name: " . $data->name . "\n";
$message .= "Company Name: " . $data->companyName . "\n";
$message .= "Email: " . $data->email . "\n";
$message .= "Phone: " . $data->phone . "\n";
$message .= "Project Type: " . $data->projectType . "\n";
$message .= "Services: " . $data->services . "\n";
$message .= "Selected Service: " . $data->selectedService . "\n";
$message .= "Message: " . $data->message . "\n";

$headers = "From: hanzalay433@gmail.com\r\n";
$headers .= "Reply-To: " . $data->email . "\r\n";

// Send mail
$success = mail($to, $subject, $message, $headers);

if ($success) {
    http_response_code(200);
    echo json_encode(["message" => "Email sent successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email."]);
}
?>
