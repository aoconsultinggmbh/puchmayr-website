<?php
/**
 * Kontaktformular Puchmayr Dentaltechnik: Versand per E-Mail vom Webserver.
 *
 * - Keine Speicherung auf dem Server, keine Datenbank, kein Drittanbieter.
 * - Spamschutz ohne externe Dienste: unsichtbares Feld (Honeypot) und Zeitpruefung.
 * - Antwort als JSON fuer das Skript (assets/skript.js); ohne JavaScript Weiterleitung.
 *
 * EINSTELLUNGEN (vor dem Livegang pruefen):
 */
$EMPFAENGER = 'oliver.puchmayr@puchmayr.de';   // Wohin die Anfragen gehen
$ABSENDER   = 'formular@puchmayr.de';          // Muss als Postfach/Weiterleitung beim Hoster existieren,
                                               // sonst landen die Mails im Spam.
$BETREFF    = 'Neue Anfrage über puchmayr.de';
$MIN_SEKUNDEN = 3;                             // Schneller fuellt kein Mensch das Formular aus

header('X-Content-Type-Options: nosniff');
$istJson = isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;

function antwort(bool $ok, string $text, int $status = 200): void {
    global $istJson;
    if ($istJson) {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'meldung' => $text], JSON_UNESCAPED_UNICODE);
    } else {
        // Ohne JavaScript: zurueck zur Startseite mit Hinweis
        header('Location: index.html?formular=' . ($ok ? 'gesendet' : 'fehler') . '#kontakt');
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    antwort(false, 'Ungültige Anfrage.', 405);
}

// --- Spamschutz -----------------------------------------------------------
if (!empty($_POST['website'])) {                       // Honeypot: Menschen sehen das Feld nicht
    antwort(true, 'Vielen Dank.');                      // Bots bekommen ein freundliches "ok" und nichts passiert
}
$t = isset($_POST['t']) ? (int)$_POST['t'] : 0;
if ($t <= 0 || (time() - $t) < $MIN_SEKUNDEN) {
    antwort(false, 'Bitte versuchen Sie es noch einmal.', 400);
}

// --- Eingaben -------------------------------------------------------------
function feld(string $name, int $max = 2000): string {
    $v = isset($_POST[$name]) ? trim((string)$_POST[$name]) : '';
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
}
$name      = feld('name', 200);
$praxis    = feld('praxis', 200);
$email     = feld('email', 200);
$telefon   = feld('telefon', 60);
$nachricht = feld('nachricht', 5000);
$datenschutz = !empty($_POST['datenschutz']);

$fehler = [];
if ($name === '')                                   $fehler[] = 'Name';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))     $fehler[] = 'E-Mail';
if (preg_replace('/\D/', '', $telefon) === '' || strlen(preg_replace('/\D/', '', $telefon)) < 6) $fehler[] = 'Telefon';
if ($nachricht === '')                              $fehler[] = 'Nachricht';
if (!$datenschutz)                                  $fehler[] = 'Datenschutz';
if ($fehler) {
    antwort(false, 'Bitte prüfen Sie: ' . implode(', ', $fehler) . '.', 422);
}

// --- Mail -----------------------------------------------------------------
$zeilen = [
    "Neue Anfrage über das Kontaktformular auf puchmayr.de",
    "",
    "Name:      $name",
    "Praxis:    " . ($praxis !== '' ? $praxis : '-'),
    "E-Mail:    $email",
    "Telefon:   $telefon",
    "",
    "Nachricht:",
    $nachricht,
    "",
    "---",
    "Gesendet am " . date('d.m.Y H:i') . " Uhr. Datenschutzhinweis wurde bestätigt.",
];
$body = implode("\n", $zeilen);

$kopf = [
    'From: Puchmayr Website <' . $ABSENDER . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
];
$betreff = '=?UTF-8?B?' . base64_encode($BETREFF . ' von ' . $name) . '?=';

$ok = @mail($EMPFAENGER, $betreff, $body, implode("\r\n", $kopf), '-f ' . $ABSENDER);
if ($ok) {
    antwort(true, 'Vielen Dank, Ihre Anfrage ist bei uns eingegangen.');
}
antwort(false, 'Der Versand hat leider nicht geklappt. Bitte rufen Sie uns an: 030 7963315.', 500);
