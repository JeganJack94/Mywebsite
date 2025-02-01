<?php

// Receiver Email
$main_email = "aruljegan94@gmail.com";

// Fetching Values from POST
$name    = isset($_POST['xx_name']) ? trim($_POST['xx_name']) : '';
$email   = isset($_POST['xx_email']) ? trim($_POST['xx_email']) : '';
$message = isset($_POST['xx_message']) ? trim($_POST['xx_message']) : '';

// Validate Email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<span class='contact_error'>* Invalid email *</span>";
    exit;
}

// Email Subject & Headers
$subject = "Message from Contact Form";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: $email" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Email Template
$template = "
    <div>
        <h2>Contact Form Message</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong> $message</p>
        <p>We will contact you as soon as possible.</p>
    </div>
";

// Send Email
if (mail($main_email, $subject, $template, $headers)) {
    echo "<span class='returnmessage' style='color:green;'>Your message has been sent successfully!</span>";
} else {
    echo "<span class='contact_error'>* Failed to send message. Try again later. *</span>";
}

?>
