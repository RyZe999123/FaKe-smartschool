<?php
$to = 'fahd9fahdelhajli@gmail.com';
$subject = 'Test Email';
$message = 'Ceci est un email de test.';
$headers = 'From: webmaster@example.com' . "\r\n" .
           'Reply-To: webmaster@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'Email envoyé avec succès!';
} else {
    echo 'Erreur lors de l\'envoi de l\'email.';
}
?>
