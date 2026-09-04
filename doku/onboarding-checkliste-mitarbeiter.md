# Checkliste: Mitarbeiter für Kundenwebseiten freischalten

*Interne Checkliste AO Consulting. Gilt für jeden Mitarbeiter, der Kundenwebseiten über
GitHub und Claude veröffentlichen oder ändern soll. Erster Durchlauf: Awan Tofik.
Dauer insgesamt: etwa eine Stunde, verteilt auf Admir und den Mitarbeiter. Stand: 04.09.2026.*

Legende: **[A]** macht Admir · **[M]** macht der Mitarbeiter · **[G]** machen beide gemeinsam

---

## A. Zugänge anlegen (einmalig, ca. 20 Minuten)

- [ ] **A1 [A] Claude-Zugang.** Mitarbeiter im Claude-Team-Konto von AO Consulting einladen
      (claude.ai → Einstellungen → Mitglieder → Einladen, Firmen-Mail). Er braucht einen
      Platz mit Zugriff auf Cowork.
- [ ] **A2 [M] Claude-Desktop-App installieren** (claude.ai/download) und mit der Firmen-Mail
      anmelden. Ohne die Desktop-App geht es nicht, weil der Mac für den Upload gebraucht wird.
- [ ] **A3 [M] Chrome installieren** (falls nicht vorhanden) und die Erweiterung
      **„Claude in Chrome"** hinzufügen. Damit prüft Claude die Vorschau im Browser.
- [ ] **A4 [M] GitHub-Konto anlegen.** github.com → „Sign up" → **Firmen-Mail**, eigenes
      Passwort, Zwei-Faktor mit dem Handy einrichten (GitHub fragt danach).
      Benutzernamen an Admir schicken (Vorschlag: `vorname-nachname-ao`).
- [ ] **A5 [A] Ins Firmenprofil einladen.** github.com/orgs/aoconsultinggmbh/people →
      „Invite member" → Benutzername → Rolle **Member** (nicht Owner).
- [ ] **A6 [M] Einladung annehmen** (E-Mail von GitHub → „Join").
- [ ] **A7 [A] Prüfen, dass Mitglieder Projekte anlegen dürfen:**
      github.com/organizations/aoconsultinggmbh/settings/member_privileges →
      „Repository creation" → Public angehakt.
- [ ] **A8 [M] Eigenen Zugangsschlüssel für Claude erstellen.** GitHub → Profilbild → Settings
      → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token:
      - Token name: `Claude – Kundenwebseiten – <Vorname>`
      - Expiration: 1 Jahr (GitHub erinnert eine Woche vorher per Mail)
      - Resource owner: **aoconsultinggmbh** (steht das Firmenprofil nicht in der Liste → Admir
        prüft github.com/organizations/aoconsultinggmbh/settings/personal-access-tokens und
        erlaubt fine-grained Tokens für Mitglieder)
      - Repository access: **All repositories**
      - Repository permissions: **Contents, Pages, Workflows, Secrets** je „Read and write"
      - Generate token → Text (`github_pat_…`) kopieren
      Falls GitHub „pending approval" meldet: Admir genehmigt unter Settings → Personal access tokens.
- [ ] **A9 [M] Schlüssel im Passwort-Manager ablegen.** Eintrag „GitHub – Kundenwebseiten –
      Claude" im eigenen Tresor. **Nie** in Notizen, Chats, Mails oder Dateien speichern.
- [ ] **A10 [A] Passwort-Manager: Ordner „Kundenwebseiten" freigeben** (für Hoster-Zugänge,
      die später dazukommen).

## B. Wissen mitgeben (ca. 15 Minuten lesen)

- [ ] **B1 [A] Skill freigeben.** Der Skill „webseite-veroeffentlichen" muss für den Mitarbeiter
      sichtbar sein (Claude → Skills → für die Organisation freigeben). Ohne Skill funktioniert
      es auch, aber langsamer und uneinheitlicher.
- [ ] **B2 [M] Lesen:** `README.md` im Projekt puchmayr-website (Aufbau, Regeln).
- [ ] **B3 [M] Lesen:** `doku/livegang-anleitung.md` (die drei Bausteine, Vorschau/Freigabe/Live).
- [ ] **B4 [G] Die fünf Regeln durchsprechen:**
      1. Nichts geht ohne Freigabe live. `main` = Vorschau, `live` = echte Seite.
      2. Keine externen Schriften, Skripte oder Einbettungen ohne Klick-Freigabe.
      3. Impressum und Datenschutz nur nach Rücksprache mit dem Kunden ändern.
      4. Zugangsdaten nur im Passwort-Manager und in GitHub-Secrets.
      5. Jede Änderung im Vorschau-Link prüfen, bevor sie an den Kunden geht.
- [ ] **B5 [A] Festlegen, wer freigeben darf** (Änderungen von Vorschau auf live).
      Vorschlag: zu Beginn nur Admir; nach den ersten Projekten auch der Mitarbeiter.

## C. Erste Übung am echten Projekt (ca. 15 Minuten)

- [ ] **C1 [M] Claude-Desktop-App öffnen** → neuer Cowork-Chat → „Link to this computer".
- [ ] **C2 [M] Test-Änderung anfordern**, wörtlich:
      „Puchmayr: bitte in der Fußzeile den Text ‚Cookie-Einstellungen' in ‚Datenschutz-Einstellungen'
      ändern. Schlüssel: github_pat_…" (Schlüssel aus dem Passwort-Manager einfügen)
- [ ] **C3 [M] Vorschau prüfen:** https://aoconsultinggmbh.github.io/puchmayr-website/
      Nach 1–2 Minuten muss die Änderung zu sehen sein.
- [ ] **C4 [M] Änderung wieder zurücknehmen:** „Puchmayr: mach die letzte Änderung rückgängig."
- [ ] **C5 [G] Ergebnis in GitHub anschauen:** github.com/aoconsultinggmbh/puchmayr-website →
      „Commits". Beide Einträge müssen mit dem Namen des Mitarbeiters dastehen.
- [ ] **C6 [A] Freigabe einmal vorführen:** „Gib die Änderungen bei Puchmayr frei" (solange kein
      Hoster hinterlegt ist, meldet die Automatik nur, dass sie noch schläft – das ist richtig so).

## D. Erste eigene Webseite (wenn ein neuer Kunde kommt)

- [ ] **D1 [M] Dateien des Entwurfs in einen Ordner** auf dem Mac legen und in Cowork verbinden.
- [ ] **D2 [M] Claude beauftragen:** „Neue Kundenwebseite <Kunde> veröffentlichen, bitte nach dem
      Skill webseite-veroeffentlichen. Schlüssel: github_pat_…"
- [ ] **D3 [M] Projekt anlegen**, wenn Claude es sagt: github.com → „+" → New repository →
      Owner **aoconsultinggmbh** → Name `<kunde>-website` → Public → Create.
- [ ] **D4 [M] Vorschau-Schalter umlegen**, wenn Claude es sagt: Projekt → Settings → Pages →
      Source: **GitHub Actions**.
- [ ] **D5 [M] Vorschau-Link prüfen** und an den Kunden schicken.
- [ ] **D6 [A/M] Livegang** nach `doku/livegang-anleitung.md` (Hoster, Formular, Datenschutz,
      Domain). Hoster-Zugangsdaten in den Passwort-Manager-Ordner „Kundenwebseiten" und als
      Secrets ins Projekt.

## E. Laufender Betrieb

- [ ] **E1** Änderungswunsch vom Kunden → Chat mit Mac-Verbindung → „<Kunde>: <Änderung>.
      Schlüssel: …" → Vorschau prüfen → Kunde bestätigt → Freigabe → echte Seite prüfen.
- [ ] **E2** Schlüssel läuft ab (Mail von GitHub) → neuen erstellen wie A8, alten im
      Passwort-Manager ersetzen.
- [ ] **E3** Mitarbeiter verlässt die Firma → Admir entfernt ihn aus dem Firmenprofil
      (People → Remove) und aus dem Claude-Team. Damit sind alle seine Schlüssel wertlos.

## F. Offen für später (Admir)

- [ ] **F1** GitHub direkt mit Claude verbinden, damit der Schlüssel im Chat entfällt.
- [ ] **F2** Vorschau-Adresse ohne „github": `<kunde>.vorschau.ao-consult.de` (ein DNS-Eintrag
      bei ao-consult.de + Eintrag unter Settings → Pages → Custom domain).
- [ ] **F3** Aus puchmayr-website eine Vorlage machen (Settings → „Template repository"), damit
      neue Seiten mit „Use this template" starten.
- [ ] **F4** Schutzregel für den Zweig `live` (nur Freigabe-Berechtigte dürfen dorthin).
- [ ] **F5** Zweiten Owner im Firmenprofil benennen (Vertretung).
