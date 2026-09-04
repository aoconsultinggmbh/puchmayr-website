# Livegang-Anleitung: Von der Vorschau zur echten Webseite

*Für alle bei AO Consulting, die die Puchmayr-Webseite (oder eine ähnliche statische
Seite) live schalten sollen. Ohne Vorwissen lesbar. Stand: 04.09.2026.*

---

## 1. Das Bild im Kopf: drei Bausteine

```
 Kunde schickt Änderung
         │
         ▼
 ┌───────────────┐      Automatik       ┌──────────────────────┐
 │    GitHub     │ ───────────────────▶ │  Vorschau-Adresse    │  (kostenlos, github.io)
 │  "Aktenschrank"│                      └──────────────────────┘
 │  Claude arbeitet│      Automatik       ┌──────────────────────┐
 │  hier          │ ───────────────────▶ │  Deutscher Hoster    │  → www.puchmayr.de
 └───────────────┘      (FTPS)           │  (All-Inkl o. ä.)    │
                                         └──────────────────────┘
```

- **GitHub** ist der Ort, an dem das Original der Seite liegt. Jede Änderung wird
  protokolliert und kann rückgängig gemacht werden. **Hier arbeitet Claude.**
- **Vorschau-Adresse:** GitHub zeigt den aktuellen Stand kostenlos unter einer
  Adresse wie `https://FIRMENPROFIL.github.io/puchmayr-website/`. Für den Kunden
  zum Anschauen. Für Google gesperrt. Server in den USA, deshalb nicht für die
  echte Domain.
- **Deutscher Hoster:** Der echte Server, auf dem `www.puchmayr.de` läuft.
  Server in Deutschland, Vertrag zur Auftragsverarbeitung (AV-Vertrag), ca. 5–10 € im Monat.

**Warum nicht direkt Claude → Hoster?** Claude hat aus Sicherheitsgründen keinen
Zugang zum Server. Der Weg geht immer über GitHub. Vorteil: eine Stelle, ein
Protokoll, und der Hoster-Zugang liegt nur bei GitHub (verschlüsselt), nicht bei Claude.

---

## 2. Was vor dem Livegang noch fertig werden muss

Diese Punkte stehen offen. Erst wenn sie erledigt sind, wird die Domain umgestellt.

| # | Punkt | Wer | Erledigt? |
|---|---|---|---|
| 1 | **Hoster bestellen** (Abschnitt 3) | AO Consulting | ☐ |
| 2 | **Automatik GitHub → Hoster einrichten** (Abschnitt 4) | AO Consulting + Claude | ☐ |
| 3 | **Kontaktformular anschließen** (Abschnitt 5) | Claude | ☐ |
| 4 | **Datenschutzerklärung fertigstellen** (Abschnitt 6) | Kunde + Claude, dann Anwalt | ☐ |
| 5 | **Gelben Hinweiskasten** auf Impressum und Datenschutz entfernen | Claude | ☐ |
| 6 | **Texte der fünf neuen Leistungsseiten** vom Kunden fachlich freigeben lassen | Kunde | ☐ |
| 7 | **Adressen angleichen:** Die alte Seite hat Adressen wie `/vollkeramik/`, die neue `vollkeramik.html`. Auf dem Server sorgt die Datei `website/.htaccess` dafür, dass beides geht. Vor dem Livegang testen. | Claude | ☐ |
| 8 | **Domain umstellen** (Abschnitt 7) | AO Consulting, ggf. Kunde | ☐ |
| 9 | Nach dem Livegang: Search Console, Google-Profil (Abschnitt 8) | AO Consulting | ☐ |

---

## 3. Hoster wählen und bestellen

**Anforderungen** (alle drei Vorschläge erfüllen sie):

- Server in Deutschland, AV-Vertrag online abschließbar
- FTP mit Verschlüsselung (FTPS oder SFTP), damit die Automatik hochladen kann
- PHP (braucht das Kontaktformular)
- SSL-Zertifikat inklusive (das Schloss im Browser), meist „Let's Encrypt"

**Empfehlung A: All-Inkl** (all-inkl.com, Dresden)
Paket **„PrivatPlus"** oder **„Business"**. Ca. 5–10 € pro Monat, oft die ersten
Monate kostenlos. Sehr verbreitet, deutscher Telefonsupport. Domain-Umzug möglich.
Verwaltung heißt dort **„KAS"** (Kunden-Administrations-System).

**Empfehlung B: Hetzner Webhosting** (hetzner.com, Gunzenhausen)
Paket **„Level 1"** oder **„Level 4"**. Ab ca. 2 € pro Monat. Sehr günstig und sehr
solide. Verwaltung heißt dort **„konsoleH"**.

**Auch möglich:** IONOS, Strato, netcup. Funktioniert gleich, nur die Menüs sehen anders aus.

**Nicht nehmen:** Netlify, Vercel, Cloudflare Pages. Technisch bequem, aber
US-Anbieter mit Servern weltweit. Für eine deutsche Arztpraxis-nahe Seite ist der
deutsche Hoster die saubere Wahl.

**So bestellen (am Beispiel All-Inkl):**

1. all-inkl.com → Webhosting → Paket wählen → bestellen. Als Auftraggeber
   **AO Consulting GmbH** oder **den Kunden** eintragen (abstimmen, wer die Rechnung bekommt).
   Wenn der Kunde später unabhängig sein soll, lieber auf den Kunden bestellen.
2. Bei der Bestellung **keine neue Domain** bestellen. `puchmayr.de` existiert schon
   und wird später umgezogen oder umgeleitet.
3. Nach der Freischaltung (E-Mail) in **KAS** einloggen.
4. **AV-Vertrag** abschließen: KAS → „Auftragsverarbeitung" → online unterschreiben.
   PDF ablegen (Kundenordner).
5. **FTP-Zugang anlegen:** KAS → „FTP" → neuen FTP-Benutzer anlegen, Zielordner
   z. B. `/www.puchmayr.de/` oder den Ordner, der später der Domain zugeordnet wird.
   Ein **sicheres Passwort** erzeugen lassen. Notieren:
   - Server (z. B. `w01a2b3c.kasserver.com`)
   - Benutzername
   - Passwort
   - Ordner

Diese vier Angaben braucht Abschnitt 4. Sie gehören in den **Passwort-Manager**.

---

## 4. Automatik einrichten: GitHub lädt zum Hoster hoch

Das ist einmalig 5 Minuten Arbeit. Danach passiert es von selbst.

1. In GitHub das Projekt `puchmayr-website` öffnen.
2. Oben Reiter **„Settings"** → links **„Secrets and variables"** → **„Actions"**.
3. Knopf **„New repository secret"**. Vier Mal, jeweils Name und Wert eintragen:

   | Name | Wert |
   |---|---|
   | `FTP_SERVER` | Server-Adresse vom Hoster, z. B. `w01a2b3c.kasserver.com` |
   | `FTP_BENUTZER` | FTP-Benutzername |
   | `FTP_PASSWORT` | FTP-Passwort |
   | `FTP_ORDNER` | Zielordner, z. B. `/www.puchmayr.de/` (mit Schrägstrich vorn und hinten) |

   Die Namen müssen **genau so** geschrieben sein, Großbuchstaben inklusive.

4. Reiter **„Actions"** → links **„Livegang (Upload zum Hoster)"** → rechts
   **„Run workflow"** → grüner Knopf. Nach 1–2 Minuten steht ein grüner Haken:
   Die Seite liegt auf dem Server.
5. Ab jetzt: **Jede Änderung im Ordner `website/` landet automatisch auf dem Server.**

Wenn ein rotes Kreuz erscheint: auf den Lauf klicken, den Fehlertext kopieren und
Claude geben. Häufigste Ursache: Tippfehler im Passwort oder falscher Ordner.

**Testen, bevor die Domain umgestellt wird:** Der Hoster gibt eine Test-Adresse
(All-Inkl: z. B. `http://w01a2b3c.kasserver.com/`, oder eine Subdomain, die man in
KAS anlegt). Dort prüfen: Startseite, eine Leistungsseite, Impressum, Bilder, Schrift.

---

## 5. Kontaktformular anschließen

Im Entwurf **verschickt das Formular nichts**. Es prüft nur die Eingaben und zeigt
„Danke". Für den Livegang braucht es einen kleinen Versand-Baustein.

**Empfohlener Weg:** Eine kleine PHP-Datei (`kontakt.php`) auf dem Hoster, die die
Nachricht per E-Mail an `oliver.puchmayr@puchmayr.de` schickt. Vorteile: Daten
bleiben auf dem deutschen Server, kein Drittanbieter, kein Google reCAPTCHA.
Spamschutz über ein unsichtbares Feld („Honeypot") und eine Zeitprüfung.

**Aufgabe für Claude, sobald der Hoster steht:**
„Baue `website/kontakt.php` für das Kontaktformular. Versand an
oliver.puchmayr@puchmayr.de, Absender `formular@puchmayr.de`, Honeypot und
Zeitprüfung als Spamschutz, Bestätigungsseite in der CI. Passe `assets/skript.js`
so an, dass das Formular an `kontakt.php` sendet. Ergänze Abschnitt 5 der
Datenschutzerklärung (Kontaktformular, Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO,
Speicherdauer)."

Hinweis: Die Absender-Adresse `formular@puchmayr.de` muss beim Hoster als Postfach
oder Weiterleitung existieren, sonst landen die Mails im Spam.

**Alternative ohne PHP:** Ein deutscher Formulardienst. Prüfen, ob AV-Vertrag und
Serverstandort passen. Der PHP-Weg ist einfacher und günstiger.

---

## 6. Datenschutzerklärung fertigstellen

In `website/datenschutz.html` sind Stellen markiert. Es fehlen:

1. **Hoster:** Aktuell steht dort **Raidboxes**. Muss auf den neuen Hoster geändert
   werden (Name, Anschrift, Link zur Datenschutzerklärung des Hosters, AV-Vertrag vorhanden).
2. **Speicherdauer der Server-Logfiles:** beim neuen Hoster nachlesen (All-Inkl: in
   der Datenschutzerklärung von all-inkl.com bzw. KAS-Einstellung „Logfiles").
3. **Einwilligungslösung:** Aktuell steht teils noch **Borlabs Cookie** (WordPress).
   Die neue Seite nutzt ein **eigenes Banner ohne Cookies** (Speicherung nur im
   Browser des Besuchers, `localStorage`). Abschnitt 6 entsprechend anpassen.
4. **Kontaktformular:** Abschnitt zum Versand ergänzen (siehe 5).
5. **Datenschutzbeauftragter:** vom Kunden bestätigen lassen, dass keiner benannt ist
   (unter 20 Beschäftigte mit ständiger automatisierter Verarbeitung: nicht Pflicht;
   Puchmayr hat 30 Beschäftigte, aber die meisten arbeiten nicht am Bildschirm; **der Kunde
   muss das klären**).
6. **Analyse-Werkzeuge:** vom Kunden bestätigen lassen, dass keine kommen. Falls
   doch (z. B. Matomo), vorher Claude informieren, das Banner braucht dann eine
   Kategorie „Statistik".
7. **Datum „Stand"** einsetzen.
8. **Gelben Hinweiskasten** oben entfernen (auch im Impressum).

Danach den Text **anwaltlich prüfen lassen**. Wir geben keine Rechtsberatung.

Aufgabe für Claude, wenn die Angaben da sind: „Trage in `datenschutz.html` ein:
Hoster = …, Logfile-Speicherdauer = …, kein DSB, keine Analyse, Stand = …; ersetze
Borlabs durch das eigene Banner; entferne den gelben Hinweiskasten in
`datenschutz.html` und `impressum.html`."

---

## 7. Domain umstellen: puchmayr.de zeigt auf den neuen Server

**Vorher klären: Wo liegt die Domain?** Die Domain (`puchmayr.de`) und der
Webspace (Raidboxes) sind zwei getrennte Dinge. Die Domain liegt bei einem
„Registrar". Herausfinden:

- Den Kunden fragen: „Bei wem zahlen Sie die Jahresgebühr für puchmayr.de?"
  (häufig: IONOS, Strato, united-domains, All-Inkl, Raidboxes-Partner)
- Oder Claude fragen: „Welche Nameserver hat puchmayr.de?" Das gibt einen Hinweis
  auf den Anbieter.

**Zwei Wege:**

**Weg A: Domain bleibt, wo sie ist, und zeigt auf den neuen Server** (schneller,
kein Umzug):
1. Beim neuen Hoster die **IP-Adresse** des Servers nachlesen (KAS → Domain → „Server-IP").
2. Beim Registrar in die **DNS-Einstellungen** gehen.
3. Den **A-Record** für `puchmayr.de` und `www.puchmayr.de` auf die neue IP setzen.
   Falls es einen **AAAA-Record** (IPv6) gibt: auf die IPv6 des neuen Hosters setzen oder löschen.
4. **E-Mail-Einträge (MX) NICHT anfassen!** Sonst kommt beim Kunden keine E-Mail mehr an.
5. Nach 1–24 Stunden zeigt die Domain auf den neuen Server. Der Hoster stellt das
   SSL-Zertifikat automatisch aus (KAS: „SSL" → Let's Encrypt aktivieren).

**Weg B: Domain zum neuen Hoster umziehen** (aufgeräumter, dauert 1–5 Tage):
1. Beim alten Registrar den **AuthCode** (auch „Auth-Info") anfordern.
2. Beim neuen Hoster „Domain umziehen" → AuthCode eingeben.
3. Vorher **alle DNS-Einträge (vor allem MX für E-Mail) notieren** und beim neuen
   Hoster identisch anlegen.

**Danach:**
- `https://www.puchmayr.de` aufrufen. Schloss da? Seite da? Alle Unterseiten?
- Alte Adressen testen: `https://www.puchmayr.de/vollkeramik/` muss die
  Vollkeramik-Seite zeigen (macht die `.htaccess`).
- **Raidboxes erst kündigen, wenn alles seit einer Woche sauber läuft.**

---

## 8. Nach dem Livegang

1. **Google Search Console:** Domain `puchmayr.de` anmelden (falls nicht schon),
   `https://www.puchmayr.de/sitemap.xml` einreichen.
2. **Rich Results Test** (search.google.com/test/rich-results) mit der Startseite
   und einer Leistungsseite: FAQ und LocalBusiness müssen grün sein.
3. **Google Business Profile:** „über 40 Jahre" auf **60 Jahre** korrigieren
   (Gründung 1966 ist belegt). Adresse, Öffnungszeiten, Telefon müssen identisch zur Webseite sein.
4. **Kontaktformular einmal echt testen** und prüfen, dass die Mail beim Kunden ankommt.
5. **Datenschutzerklärung** noch einmal komplett lesen: Stimmt alles mit dem, was die Seite tut?
6. Kunde informieren, Zugangsdaten (Hoster, GitHub-Hinweis) im Passwort-Manager ablegen.

---

## 9. Laufender Betrieb: So läuft eine Änderung

1. Änderung kommt vom Kunden (Mail, Anruf, Sprachmemo).
2. Neue Claude-Sitzung öffnen, den **GitHub-Zugangsschlüssel** aus dem
   Passwort-Manager einfügen und die Änderung beschreiben, z. B.:
   „Projekt github.com/FIRMENPROFIL/puchmayr-website. Hier der Schlüssel: github_pat_…
   Bitte auf der Startseite die Öffnungszeiten auf Mo–Do 7–17 Uhr, Fr 7–14 Uhr ändern."
3. Claude ändert die Datei, lädt sie hoch, und die Automatik veröffentlicht.
   Vorschau nach 1–2 Minuten, echte Seite ebenfalls.
4. Kurz auf der echten Seite prüfen. Fertig.

Wenn etwas schiefgeht: In GitHub → „Commits" den letzten Eintrag ansehen. Claude kann
jede Änderung mit einem Satz rückgängig machen („Mach den letzten Commit rückgängig").

---

## 10. Kosten im Überblick

| Posten | Kosten |
|---|---|
| GitHub (Firmenprofil, öffentliches Projekt) | 0 € |
| Vorschau-Adresse (GitHub Pages) | 0 € |
| Deutscher Hoster | ca. 2–10 € / Monat |
| Domain puchmayr.de | ca. 10–20 € / Jahr (zahlt der Kunde vermutlich schon) |
| Raidboxes (WordPress) | **entfällt** nach dem Umzug |

*Preise sind Richtwerte vom September 2026, bitte beim Anbieter prüfen.*
