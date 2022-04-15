<?php
    $to =  $_POST['to'];
    $subject = "";
    $message = $_POST['message'];
    $from = "priyankagadhiya28@gmail.com";
    $headers = "From: $from";
    echo "Hi";
    return true;
    mail($to, $subject, $message, $headers);
    echo json_encode(["message" => "Thank you for reaching out to us! We will contact you very soon!"]);
?>