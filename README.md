# Webseite Puchmayr Dentaltechnik

Dieses Projekt enthält die komplette Webseite von **Puchmayr Dentaltechnik GmbH**
(Berlin-Steglitz), betreut von **AO Consulting GmbH**.

Die Seite ist eine **statische Webseite**: nur HTML, CSS, Bilder und Schriften.
Kein WordPress, keine Datenbank, keine Plugins. Das macht sie schnell, sicher und
datenschutzfreundlich. Es gibt nichts, das regelmäßig aktualisiert werden müsste.

## So ist das Projekt aufgebaut

| Ordner / Datei | Was drin ist |
|---|---|
| `website/` | **Die eigentliche Webseite.** Alles, was in diesem Ordner liegt, ist die Seite. |
| `website/index.html` | Startseite |
| `website/*.html` | Die weiteren Seiten (Leistungen, Impressum, Datenschutz, ...) |
| `website/assets/` | Design (`stil.css`), Skripte, Einwilligungsbanner, Barrierefreiheits-Widget |
| `website/img/` | Alle Bilder |
| `website/fonts/` | Die Schrift Plus Jakarta Sans (lokal, keine Verbindung zu Google) |
| `doku/` | Anleitungen und die ausführliche Dokumentation des Entwurfs |
| `.github/workflows/` | Die Automatik: veröffentlicht die Seite bei jeder Änderung von selbst |
| `vorschau.command` | Doppelklick auf dem Mac: zeigt die Seite lokal im Browser |

## Wo die Seite zu sehen ist

- **Vorschau-Adresse** (automatisch, immer der aktuelle Stand aus diesem Projekt):
  **https://aoconsultinggmbh.github.io/puchmayr-website/**
  Die Vorschau ist für Suchmaschinen gesperrt (`noindex`). Nach einer Änderung dauert es 1–2 Minuten.
- **Echte Adresse:** `https://www.puchmayr.de` (nach dem Livegang, siehe `doku/livegang-anleitung.md`)

## So werden Änderungen gemacht

1. Der Kunde oder wir beschreiben die Änderung (z. B. „neue Telefonnummer",
   „Text auf der Vollkeramik-Seite anpassen", „neues Teamfoto").
2. Claude bekommt den Zugangsschlüssel zu diesem Projekt (liegt im Passwort-Manager
   von AO Consulting) und die Beschreibung der Änderung.
3. Claude ändert die Dateien in `website/` und lädt sie hier hoch („Commit").
4. Die Automatik veröffentlicht den neuen Stand innerhalb von 1–2 Minuten.
   Erst auf der Vorschau-Adresse, nach dem Livegang auch auf dem echten Server.

Jede Änderung ist im Reiter **„Commits"** protokolliert und kann jederzeit
rückgängig gemacht werden.

## Wichtige Regeln

- **Niemals externe Schriften oder Skripte einbinden** (Google Fonts, jQuery von
  einem CDN usw.). Die Datenschutzerklärung sagt aus, dass die Seite ohne Fremdanfragen
  lädt. Das muss wahr bleiben.
- **Karte und Video laden erst nach Klick.** Diese Mechanik nicht entfernen.
- Neue Bilder als **WebP + JPG** ablegen, mit sprechendem Dateinamen
  (klein, Bindestriche), und `width`/`height` im HTML angeben.
- Vor einer Änderung an Impressum oder Datenschutz: mit dem Kunden abstimmen.

Die ausführliche Dokumentation des Entwurfs (Design-Entscheidungen, SEO, Barrierefreiheit,
Einwilligungsbanner) steht in `doku/entwurf-dokumentation.md`.
