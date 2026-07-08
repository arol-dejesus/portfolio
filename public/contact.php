<?php
/**
 * Backend du formulaire de contact — hébergement mutualisé Hostinger (PHP, sans VPS).
 * Reçoit le formulaire (JSON), valide, et envoie l'email.
 *
 * ⚙️ À configurer : $TO (destinataire) et $FROM (adresse email SUR TON DOMAINE,
 *    créée dans hPanel Hostinger — indispensable pour la délivrabilité).
 */

// ---- Configuration ----
$TO   = 'aroldjoutsop19@gmail.com';         // où recevoir les messages
$FROM = 'contact@' . ($_SERVER['SERVER_NAME'] ?? 'localhost'); // ex: contact@ton-domaine.com

// Origines autorisées à appeler ce backend (le frontend hébergé gratuitement).
// Ajoute ici l'URL de ton frontend (Vercel/Netlify/Cloudflare) + ton domaine perso.
$ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://aroldejesus.vercel.app',
    'https://aroldejesus.netlify.app',
    // 'https://ton-domaine.com',
];

// ---- CORS ----
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $ALLOWED_ORIGINS, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Requête préflight du navigateur
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Autorise seulement POST
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Lit le corps JSON (ou form-urlencoded en secours)
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name     = trim($data['name'] ?? '');
$email    = trim($data['email'] ?? '');
$subject  = trim($data['subject'] ?? '');
$message  = trim($data['message'] ?? '');
$honeypot = trim($data['company'] ?? ''); // champ caché anti-spam

// Anti-spam : si le honeypot est rempli, on fait semblant de réussir
if ($honeypot !== '') {
    echo json_encode(['success' => true]);
    exit;
}

// Validation
if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Champs invalides.']);
    exit;
}

// Nettoyage basique (évite l'injection d'en-têtes)
$clean = function (string $v): string {
    return str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v);
};
$name    = $clean($name);
$email   = $clean($email);
$subject = $clean($subject);

$mailSubject = $subject !== '' ? $subject : "Contact portfolio — $name";

$body  = "Nouveau message depuis le portfolio\n";
$body .= "----------------------------------\n";
$body .= "Nom     : $name\n";
$body .= "Email   : $email\n";
$body .= "Sujet   : $mailSubject\n\n";
$body .= "Message :\n$message\n";

$headers  = "From: Portfolio Arol Dejesus <{$FROM}>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Sujet encodé UTF-8
$encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';

$ok = @mail($TO, $encodedSubject, $body, $headers);

if ($ok) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Échec de l'envoi de l'email."]);
}
