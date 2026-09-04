#!/bin/bash
# ---------------------------------------------------------------------------
# Vorschau des Entwurfs, so wie er sich später auf dem Server verhält.
#
# Doppelklick auf diese Datei. Es startet ein kleiner Webserver in diesem
# Ordner und der Browser öffnet die Startseite.
#
# Warum überhaupt: Öffnet man index.html direkt per Doppelklick, läuft die
# Seite unter dem Protokoll "file:". YouTube verweigert die Wiedergabe dann
# mit "Fehler 153", weil kein gültiger Referrer mitgesendet wird. Über diesen
# Weg läuft alles wie später live: Video, Karte, Schriften.
#
# Zum Beenden: dieses Fenster schließen oder Strg + C drücken.
# ---------------------------------------------------------------------------

cd "$(dirname "$0")/website" || exit 1

PORT=8080
while lsof -i :$PORT >/dev/null 2>&1; do PORT=$((PORT + 1)); done

echo ""
echo "  Puchmayr Dentaltechnik, Entwurfsvorschau"
echo "  ----------------------------------------"
echo "  Adresse:  http://localhost:$PORT/"
echo "  Beenden:  Strg + C oder dieses Fenster schließen"
echo ""

sleep 1 && open "http://localhost:$PORT/" &

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "$PORT" --bind 127.0.0.1
else
  echo "  python3 wurde nicht gefunden."
  echo "  Bitte einmal 'xcode-select --install' im Terminal ausführen."
  read -r -p "  Mit Enter schließen."
fi
