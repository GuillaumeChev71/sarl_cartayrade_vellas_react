<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Adresse email du gestionnaire
    $to = 'dev@itgcdev.fr';
    $subject = 'Nouveau message du formulaire de contact';
    $headers = "From: $email";

    // Construire le message
    $email_message = "Nom: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Téléphone: $phone\n";
    $email_message .= "Message:\n$message";

    // Envoyer l'email
    if (mail($to, $subject, $email_message, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Email envoyé avec succès!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Erreur lors de l\'envoi de l\'email.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Méthode non autorisée.']);
}
?>
