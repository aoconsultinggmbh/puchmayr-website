# Puchmayr Dentaltechnik: Design-Entwurf Startseite

Struktur nach dem Vorbild **germancrowns.com**, Farben und Inhalte von **Puchmayr**.

## Öffnen

**Empfohlen: `vorschau.command` doppelklicken.** Es startet einen kleinen Webserver in
diesem Ordner und öffnet die Startseite im Browser. Damit verhält sich der Entwurf
genau wie später auf dem Server. Zum Beenden das Terminalfenster schließen.

`index.html` direkt doppelklicken geht auch, hat aber zwei Einschränkungen, die nichts
mit dem Entwurf zu tun haben, sondern mit dem Protokoll `file:`:

- **Das YouTube-Video spielt nicht auf der Seite, sondern öffnet einen Tab bei YouTube.**
  YouTube verlangt für die eingebettete Wiedergabe einen gültigen HTTP-Referrer. Bei
  einer lokalen Datei gibt es keinen, YouTube antwortet mit „Fehler 153". Der Entwurf
  erkennt das und leitet den Klick auf den Play-Knopf direkt zu YouTube weiter, statt
  ein Fenster mit einer Fehlermeldung anzuzeigen.
- **Die Browser-Konsole meldet für zwei Schriftdateien einen CORS-Fehler.** Sichtbar
  ist davon nichts, die Schrift wird korrekt angezeigt.

Beides tritt auf der Livedomain nicht auf.

## Dateien im Ordner

| Datei | Inhalt |
|---|---|
| `vorschau.command` | startet die Vorschau über einen lokalen Webserver (macOS, Doppelklick) |
| `index.html` | Startseite |
| `vollkeramik.html` | Leistungsseite Vollkeramik |
| `implantatprothetik.html` | Leistungsseite Implantatprothetik |
| `kronen-und-bruecken.html` | Leistungsseite Kronen und Brücken |
| `aufbissschienen.html` | Leistungsseite Aufbissschienen |
| `prothetik.html` | Leistungsseite Prothetik |
| `digitale-fertigung.html` | Leistungsseite CAD/CAM und 3D-Druck |
| `impressum.html` | Impressum, inhaltlich fertig |
| `datenschutz.html` | Datenschutzerklärung, fünf offene Stellen |
| `gleichstellung.html` | Gleichstellungshinweis, inhaltlich fertig |
| `assets/stil.css` | gemeinsames Stylesheet aller zehn Seiten |
| `assets/schrift.css` | @font-face-Regeln für die lokal ausgelieferte Schrift |
| `assets/skript.js` | gemeinsames Skript, jeder Block prüft sein Element |
| `assets/barrierefreiheit.css` | Widget-Oberfläche, wiederverwendbar |
| `assets/barrierefreiheit.js` | Widget-Logik, baut sich selbst ins HTML |
| `assets/einwilligung.css` | Einwilligungsbanner, Oberfläche, wiederverwendbar |
| `assets/einwilligung.js` | Einwilligungsbanner, Logik und Schnittstelle |
| `sitemap.xml`, `robots.txt` | Vorlagen mit 10 URLs, Domain vor dem Livegang ersetzen |
| `fonts/` | Plus Jakarta Sans als WOFF2, fünf Schnitte, zusammen 136 KB |
| `img/` | 17 Motive je als WebP und JPG, Logo als PNG und WebP, Favicon als SVG und PNG |

CSS und JS liegen bewusst außerhalb der HTML-Dateien. Eine Änderung am Design
wirkt so auf alle zehn Seiten gleichzeitig.

## Leistungs-Unterseiten

Sechs Seiten, alle nach demselben Aufbau: kompakter Hero mit Brotkrumen, Einstiegstext
mit Bild, zwei bis vier Detailkarten, ein Kasten „Kurz zusammengefasst", eine dunkle
Fertigungssektion mit Checkliste, ein Abschnitt zur Zusammenarbeit, FAQ-Akkordeon,
Verlinkung auf die fünf anderen Leistungen und ein CTA-Band.

Jede Seite hat eigenen Title, eigene Description, eine eigene h1 mit Keyword und Ortsbezug
sowie eigenes `Service`-, `WebPage`-, `BreadcrumbList`- und `FAQPage`-Markup. Die
Organisation ist nur auf der Startseite definiert, die Unterseiten referenzieren sie
über `@id`. So sieht Google eine Entität und nicht sieben.

Die sechs „mehr Infos"-Buttons auf der Startseite sind jetzt verlinkt. Jede Unterseite
verweist auf die anderen fünf, damit Linkkraft im Leistungsbereich zirkuliert.

**Wichtig zum Inhalt:** Der Text der Vollkeramik-Seite ist der bestehende, vom Kunden
freigegebene Text der Staging-Seite. Die Texte der fünf anderen Seiten sind neu und
bewegen sich ausschließlich in dem, was auf der Seite belegt ist: genannte Materialien,
genannte Verfahren, genannte Serviceleistungen. Es sind keine Lieferzeiten, Preise,
Implantatsysteme oder Zertifizierungen erfunden. Trotzdem sollte Puchmayr die Texte
fachlich durchlesen und freigeben, bevor sie live gehen.

## Rechtsseiten

Auf der Staging-Seite existieren Impressum, Datenschutzerklärung und
Gleichstellungshinweis nur als leere Divi-Hüllen; der Inhalt ist dort überall der
Theme-Fülltext „Your content goes here." Die Pflichtangaben stammen deshalb aus den
beiden echten Seiten des Kunden, **puchmayr.de** und **puchmayr-karriere.de**.

| Seite | Stand |
|---|---|
| Gleichstellungshinweis | **fertig.** Der Satz zur sprachlichen Gleichbehandlung wurde 1:1 übernommen, ergänzt um den Inklusionspreis aus dem Über-uns-Text. |
| Impressum | **fertig.** Alle Pflichtangaben nach § 5 DDG sind eingesetzt, dazu Aufsichtsbehörde, Berufsbezeichnung, berufsrechtliche Regelung und der vollständige Bildnachweis. |
| Datenschutzerklärung | **weitgehend vollständig.** Zwölf Abschnitte, passend zu dem, was diese Website tatsächlich tut. Hoster, Einwilligungslösung und lokale Schriftauslieferung sind übernommen. Fünf Angaben fehlen noch. |

**Diese Seiten sind keine Rechtsberatung.** Oben auf Impressum und Datenschutz steht ein
gelber Hinweiskasten, der das klarstellt. Er muss vor dem Livegang entfernt werden,
zusammen mit dem Ausfüllen der markierten Stellen. Danach sollte der Text anwaltlich
geprüft werden.

### Was aus den Kundenseiten übernommen wurde

Impressum:

- Handelsregister **HRB 111586B**, Registergericht **Amtsgericht Charlottenburg**
- Vertretung: **Geschäftsführer Dipl.-Ing. Oliver Puchmayr**
- USt-IdNr. **DE258236642**
- Telefax **+49 30 7955612**
- Aufsichtsbehörde: **Handwerkskammer Berlin**, Blücherstraße 68, 10961 Berlin
- Berufsbezeichnung **Zahntechnisches Laboratorium**, verliehen in Deutschland
- berufsrechtliche Regelung: **Handwerksordnung**, mit Link auf gesetze-im-internet.de
- Verbraucherstreitbeilegung: nicht bereit und nicht verpflichtet
- Bildnachweis: **Iwan Artemjew** (neue Laboraufnahmen), **Kristin Schnell**
  (medizinerportraits.de) und **Cityfoto Berlin**

Einen Verantwortlichen nach § 18 Abs. 2 MStV führt keine der beiden Kundenseiten. Der
Abschnitt wurde deshalb gestrichen: Er greift erst bei journalistisch-redaktionellen
Angeboten, was auf ein Dentallabor nicht zutrifft.

Datenschutzerklärung:

- Hoster **Raidboxes GmbH**, Hafenstraße 32, 48153 Münster, AV-Vertrag vorhanden
- Einwilligungsverwaltung **Borlabs Cookie**
- **Schriften lokal ausgeliefert**, keine Verbindung zu Google Fonts
- Verantwortliche Stelle mit **oliver.puchmayr@puchmayr.de**
- Datenschutzbeauftragter: auf keiner der beiden Seiten benannt

Google Analytics, Meta-Pixel, reCAPTCHA und Zapier laufen ausschließlich auf der
Karriereseite. Für diese B2B-Seite bleibt der Abschnitt „keine Analyse und keine
Werbung" mit einem Verweis auf die Karriereseite stehen.

### Was Puchmayr noch liefern muss

Das Impressum ist vollständig. In der Datenschutzerklärung fehlen fünf Angaben:

1. Speicherdauer der Server-Logfiles, Angabe von Raidboxes
2. Bestätigung, dass weiterhin kein Datenschutzbeauftragter benannt ist
3. welches Formular-Plugin in der Livefassung eingesetzt wird
4. ob später Analyse-Werkzeuge dazukommen
5. Datum des Stands

### Nebenbefund auf der Staging-Seite

Die Seite `/gleichstellung/` trägt dort als Überschrift „Impressum". Ein
Copy-and-paste-Fehler, der vor dem Livegang korrigiert werden sollte.

## Aufbau der Seite

| # | Abschnitt | Baustein aus der Referenz |
|---|-----------|---------------------------|
| 1 | Hero, vollflächiges Foto, transparente Navigation | ✓ |
| 2 | Google-Sterne direkt unter dem CTA | ✓ (4,9 bei 7 Rezensionen, echter Wert) |
| 3 | „Warum Praxen mit Puchmayr arbeiten": 2×2-Icon-Raster + Foto | ✓ |
| 4 | Leistungen als 6 Karten mit Icons | ersetzt die bisherige graue Textwüste |
| 5 | Digitale Fertigung, dunkle Sektion mit schräger Kante | ✓ |
| 6 | Ablauf in 4 nummerierten Schritten | ✓ |
| 7 | Bento-Fotoraster mit Kennzahl-Kachel „60 Jahre" | ✓ |
| 8 | Zitat + Inklusionspreis 2024, dunkle Sektion | ersetzt die Testimonials der Referenz |
| 9 | Service, 4 Punkte mit Icons + Foto | ✓ |
| 10 | FAQ-Akkordeon | ✓ |
| 11 | Kontaktblock mit Formular, Anfahrtskarte, dunkler Footer | ✓ |

## Farben (Puchmayr-CI, aus der Staging-Seite ausgelesen)

- Navy `#243D6F` für Überschriften, Buttons, Icons
- Navy dunkel `#132038` für dunkle Sektionen und Footer
- Coral `#FD6E5D` für Akzent, CTA, Marker-Highlight
- Nebelblau `#E8EEF6` und `#F4F7FB` für den Sektionswechsel

## Schriften

**Plus Jakarta Sans**, fünf Schnitte (400 bis 800), **lokal ausgeliefert** aus `fonts/`.
Es geht keine Anfrage an Google. Das war notwendig, weil die Datenschutzerklärung des
Kunden genau das aussagt, und es ist zugleich schneller: eine fremde Domain, ein
DNS-Lookup und ein TLS-Handshake fallen weg.

Eingebunden über `assets/schrift.css` mit `font-display:swap` und getrennten Dateien für
`latin` und `latin-ext`, sodass der Browser nur lädt, was die Seite wirklich braucht.
Die beiden häufigsten Schnitte (400 und 800) werden per `preload` vorgezogen.
Alle zehn WOFF2-Dateien zusammen: **136 KB**.

Quelle der Dateien ist Fontsource (`@fontsource/plus-jakarta-sans` 5.3.0), die Schrift
steht unter der SIL Open Font License 1.1. Der Lizenztext liegt in
`fonts/LICENSE-Plus-Jakarta-Sans.txt` und muss beim Livegang mitkopiert werden.

Zum CORS-Hinweis beim lokalen Öffnen siehe Abschnitt „Öffnen" oben.

## Favicon

`img/favicon.svg` ist ein Monogramm in der CI: navyfarbenes Quadrat, weißes P,
korallenroter Punkt. Dazu `img/favicon-32.png` als Rückfall für ältere Browser und
`img/apple-touch-icon.png` (180 px) für den Homescreen auf iOS. Alle drei sind in jeder
der zehn Seiten verlinkt.

## Logo

`img/logo-puchmayr.png` ist freigestellt (transparenter Hintergrund) und liegt im Ordner.
Über dem Hero-Foto wird es per CSS-Filter weiß dargestellt, in der weißen Navigation
in Originalfarben.

## Kontaktformular

Name, Praxis, E-Mail, Telefon, Nachricht und Datenschutz-Checkbox. Im Entwurf wird
**nichts verschickt**: Die Eingaben werden geprüft, danach erscheint eine
Danke-Ansicht. Für den Livegang braucht es einen Formular-Handler, in WordPress zum
Beispiel Contact Form 7 oder Fluent Forms.

**Pflichtfelder:** Name, E-Mail, **Telefon**, Nachricht und die Datenschutz-Checkbox.
Nur „Praxis" ist freiwillig. Die Telefonnummer ist Pflicht, damit ein Rückruf ohne
Nachfassen möglich ist.

Das Formular trägt `novalidate`, damit die Browsermeldungen nicht dazwischenreden.
Die Prüfung liegt deshalb vollständig in `skript.js` und umfasst mehr als leere Felder:

| Feld | Prüfung |
|---|---|
| E-Mail | muss `etwas@etwas.endung` sein. „weber@praxis" wird abgelehnt. |
| Telefon | mindestens 6 Ziffern, erlaubt sind Ziffern und `+ ( ) / . -` sowie Leerzeichen. Angenommen werden „030 7963315", „+49 30 796 33 15", „(030) 7963315", „0170/1234567". Abgelehnt werden „abc" und „123". |
| Nachricht, Name | dürfen nicht leer sein |
| Checkbox | muss gesetzt sein |

Jeder Fehler erscheint als **Text unter dem Feld**, nicht nur als roter Rahmen. Farbe
allein darf keine Information tragen (WCAG 1.4.1). Der Text sitzt in einem Element mit
`role="alert"` und ist über `aria-describedby` mit dem Feld verknüpft, das Feld trägt
`aria-invalid`. Der Fokus springt beim Absenden auf das erste fehlerhafte Feld. Der
Kontrast des Fehlertexts liegt bei 5,44:1 und erfüllt damit WCAG AA.

Das Telefonfeld trägt `inputmode="tel"` und `autocomplete="tel"`, damit auf dem Handy
die Zifferntastatur erscheint und die eigene Nummer vorgeschlagen wird.

Zwei Fallen, die dabei zu beheben waren: Ein Fehlertext als Flex-Element setzt eine
Mindestbreite und sprengt das Formularraster auf schmalen Bildschirmen. Deshalb ist er
ein Block, und `.field` sowie `.consent` haben `min-width:0`. In der Checkbox-Zeile
kommt `flex-wrap:wrap` dazu, sonst hängt sich der Fehlertext als drittes Element in
dieselbe Zeile.

## Anfahrtskarte

Eingebunden ist **Google Maps** über den Embed-Aufruf, ohne API-Key, der Marker sitzt auf
Kelchstr. 23. Die eigene Karte mit Adresse und dem Button „Route planen" sitzt rechts,
damit die Infokarte von Google oben links frei bleibt. Der Button öffnet Google Maps mit
der Zieladresse in einem neuen Tab.

**Die Karte lädt erst nach Klick.** Vorher ist ein Platzhalter in der CI zu sehen, mit
Pin, dem Button „Karte laden" und dem Hinweis, dass mit dem Klick eine Verbindung zu
Google aufgebaut wird. Erst dann wird der iframe erzeugt. Solange niemand klickt, geht
keine einzige Anfrage an Google.

Das war nicht bloß Kosmetik: Die Datenschutzerklärung sagt genau das aus, und eine Karte,
die sofort lädt, hätte diese Aussage unwahr gemacht. Dieselbe Mechanik liegt hinter dem
YouTube-Video zum Inklusionspreis.

Die Karte hängt zusätzlich am Einwilligungsbanner: Wer dort „Alles erlauben" wählt,
bekommt sie sofort und muss nicht noch einmal auf „Karte laden" klicken. Wer ablehnt,
sieht weiterhin den Platzhalter. Siehe Abschnitt Einwilligungsbanner.

## Einwilligungsbanner

Eigenes Banner in der Puchmayr-CI, gebaut wie das Barrierefreiheits-Widget: zwei
Dateien einbinden, das HTML bleibt unberührt. Es ist für alle künftigen Seiten von
AO Consulting gedacht und über ein Konfigurationsobjekt anpassbar.

### Was der Nutzer sieht

Beim ersten Aufruf eine Karte über der abgedunkelten Seite, mit einem Farbstreifen in
Coral und Navy oben. Darin zwei Knöpfe:

- **Alles erlauben**, gefüllt in Coral, mit Haken und Leuchtring, darüber die Zeile
  „Unsere Empfehlung". Das ist der optisch hervorgehobene Weg.
- **Nur notwendige**, direkt daneben, **gleich groß, gleiche Zeile, gleich leicht zu
  treffen** (gemessen 282 × 50 px auf dem Desktop, gleiche Breite auf dem Handy).

Darunter „Einzeln auswählen" führt in die Detailansicht mit Schaltern je Kategorie und
einer aufklappbaren Liste aller Dienste, jeweils mit Anbieter, Zweck, Art der
Verarbeitung und Dauer.

### Warum die Schalter nicht vorbelegt sind

Das war die eine Stelle, an der ich vom Wunsch abgewichen bin, und zwar bewusst.

„Alles erlauben" ist **hervorgehoben**, aber die Schalter für nicht notwendige Dienste
stehen auf **aus**. Eine vorbelegte Zustimmung ist nach dem Planet49-Urteil des EuGH
(C-673/17) keine wirksame Einwilligung. Ein Banner mit vorbelegten Schaltern wäre
angreifbar, und zwar genau dann, wenn es darauf ankommt. Der optische Vorzug von
„Alles erlauben" ist dagegen erlaubt, solange die Ablehnung gleichwertig erreichbar
bleibt. Genau so ist es umgesetzt, und genau das prüft der Test mit.

Was wäre unzulässig gewesen: „Nur notwendige" als kleiner grauer Textlink, versteckt
hinter „Einstellungen" oder erst nach einem zweiten Klick. Das ist ein Dark Pattern und
nach der Orientierungshilfe der Datenschutzkonferenz nicht haltbar.

### Was technisch passiert

| Punkt | Umsetzung |
|---|---|
| Vor der Entscheidung | kein iframe, keine einzige Anfrage an Google. Automatisiert geprüft. |
| Speicherung | `localStorage` unter `ao-einwilligung-v1`, **kein Cookie**. Nur Kategorien und Zeitstempel, keine Kennung. |
| Rechtsgrundlage der Speicherung | § 25 Abs. 2 Nr. 2 TDDDG, Nachweispflicht |
| Gültigkeit | 365 Tage, danach wird erneut gefragt. Im Code als `GUELTIG_TAGE` hinterlegt. |
| Widerruf | „Cookie-Einstellungen" in der Fußzeile jeder Seite, gleicher Aufwand wie die Erteilung |
| Nach Widerruf | die Seite lädt neu, damit ein bereits eingebundener iframe verschwindet |
| Karte und Video | laden automatisch nach, sobald die Kategorie erlaubt ist |
| Knopf auf der Einbettung | erteilt die Zustimmung punktuell und speichert sie, der Hinweistext daneben nennt Anbieter und Folge |
| Barrierefreiheit | `role="dialog"`, `aria-modal`, Fokus im Dialog gefangen, Rest der Seite per `inert` stillgelegt, Schalter als `role="switch"`, Bedienung per Tastatur, Escape erst nach der Entscheidung |
| Bewegung | folgt `prefers-reduced-motion` |

### Für die nächste Seite anpassen

Vor dem Einbinden ein Konfigurationsobjekt setzen, dann greift es statt der Vorgabe:

```html
<script>
window.AO_EINWILLIGUNG = {
  datenschutz: '/datenschutz/',
  impressum: '/impressum/',
  kategorien: [
    { id: 'notwendig', name: 'Notwendig', pflicht: true, kurz: '...', dienste: [ ... ] },
    { id: 'statistik', name: 'Statistik', kurz: '...', dienste: [ ... ] }
  ]
};
</script>
<link rel="stylesheet" href="assets/einwilligung.css">
<script src="assets/einwilligung.js" defer></script>
```

Wichtig: **`einwilligung.js` muss vor `skript.js` stehen.** `skript.js` fragt die
Einwilligung ab, bevor es Karte oder Video lädt. Fehlt die Schnittstelle, wird
vorsichtshalber nichts automatisch geladen.

Ein eigener Dienst wird so abgefragt:

```js
if (window.aoEinwilligung && window.aoEinwilligung.erlaubt('statistik')) { /* laden */ }
document.addEventListener('ao:einwilligung', function () { /* erneut prüfen */ });
```

Es werden nur Kategorien angezeigt, die die Seite wirklich nutzt. Eine leere Kategorie
„Marketing" aufzuführen, obwohl nichts davon eingesetzt wird, wäre irreführend.

### Verhältnis zu Borlabs

Die Datenschutzerklärung von puchmayr.de nennt Borlabs Cookie. Wird die Seite in
WordPress gebaut und läuft Borlabs dort weiter, ersetzt es dieses Banner; Abschnitt 6
der Datenschutzerklärung ist dann wieder auf Borlabs umzuschreiben. Der Entwurf
beschreibt, was er tatsächlich tut: eigenes Banner, localStorage, keine Übermittlung.
Für eine Seite ohne WordPress reicht dieses Banner aus.

## Barrierefreiheit

Auf jeder Seite sitzt unten rechts ein rundes Symbol mit dem Zugänglichkeitszeichen.
Ein Klick öffnet ein Panel mit diesen Einstellungen:

| Bereich | Möglichkeiten |
|---|---|
| Farben | hoher Kontrast (Schwarz auf Weiß), Farben umkehren, Graustufen, zurück zu Original |
| Text | Schriftgröße in fünf Stufen bis 160 Prozent, Zeilenabstand und Buchstabenabstand je vier Stufen, gut lesbare Schrift für Legasthenie, Überschriften markieren |
| Orientierung | Links hervorheben, Leselinie, Lesemaske, großer Zeiger |
| Bedienung | Animationen anhalten, Panel auf die linke Seite legen |
| Fuß | alles zurücksetzen |

Die Auswahl liegt im `localStorage` des Besuchers und gilt für alle Unterseiten. Sie
wird nirgendwohin übertragen, es entsteht also kein Datenschutzthema. Das Panel ist
per Tastatur bedienbar und schließt mit Escape.

**Zwei Dateien, sonst nichts.** Für ein anderes Projekt reicht es, diese beiden Zeilen
zu ergänzen und die Dateien mitzunehmen:

```html
<link rel="stylesheet" href="assets/barrierefreiheit.css">
<script src="assets/barrierefreiheit.js" defer></script>
```

Das Widget baut Symbol und Panel selbst, das übrige HTML bleibt unberührt. Die Farben
übernimmt es aus `--navy` und `--coral`, falls vorhanden.

**Für WordPress:** Auf ao-consult.de läuft dafür das Plugin
*Divi Modules Accessibility Bundle*. Dasselbe Plugin ist auf der Puchmayr-Staging-Seite
schon aktiv. Für die WordPress-Umsetzung ist das der einfachere Weg als dieses Widget.

### Wichtig zur Einordnung

**Ein Widget macht eine Website nicht barrierefrei.** Es hilft Besuchern, die es
bedienen können. Konform wird eine Seite erst durch das Markup darunter. Deshalb sind
zusätzlich umgesetzt:

- **Sprunglinks** zu Inhalt und Kontakt, sichtbar sobald sie den Fokus haben
- **Fokusringe** auf allen bedienbaren Elementen, auf dunklem Grund in Weiß, auf hellem
  in Coral. Bei reinem Mausklick erscheinen sie nicht, nur bei Tastaturbedienung.
- **`aria-expanded` und `aria-controls`** am Burger-Menü, das jetzt auch mit Escape schließt
- **`prefers-reduced-motion`** wird respektiert, wer im Betriebssystem weniger Bewegung
  einstellt, bekommt keine Übergänge
- **Semantik**: eine h1 pro Seite, `main`, `nav`, `footer`, jede Sektion mit
  `aria-labelledby` auf ihre Überschrift, Brotkrumen als `nav` mit `aria-current`
- **Alt-Texte** an allen 17 Motiven, dekorative Icons mit `aria-hidden`

Was für eine echte Konformitätsprüfung nach BFSG und EN 301 549 noch fehlt, ist ein
Test mit einem Screenreader und eine Kontrastmessung aller Kombinationen. Das würde ich
vor dem Livegang einmal separat machen.

## Auszeichnung: Berliner Inklusionspreis 2024

Eigene Sektion auf der Startseite, direkt vor dem Zitat. Links das Video als Attrappe,
rechts die Fakten.

Alle Zahlen stammen aus der Pressemitteilung des Landesamts für Gesundheit und Soziales
Berlin vom 20. November 2024:

- Kategorie „Inklusive Beschäftigung, Mittelständische Unternehmen"
- Beschäftigungsquote **13,3 Prozent**, weit über den gesetzlichen Vorgaben
- **30 Beschäftigte**, davon vier gehörlose Fachkräfte
- gegründet **1966** von Harry Puchmayr, heute in zweiter Generation von Oliver Puchmayr
- Zitat von Staatssekretär Bozkurt bei der Preisverleihung

**Damit ist der Zahlenwiderspruch geklärt:** Gründung 1966 bedeutet 2026 genau 60 Jahre.
Die Angabe „über 40 Jahre" bei Google ist falsch und sollte dort korrigiert werden.

**Das Video lädt erst nach Klick.** Vorher liegt nur ein lokales Foto im Rahmen, es geht
keine Anfrage an Google. Nach dem Klick wird `youtube-nocookie.com` eingebettet. Der
Hinweis dazu steht sichtbar im Rahmen. Damit ist die Einbindung auch ohne
Einwilligungsdialog vertretbar.

### Zum Thema Backlink

Ich habe die Pressemitteilung geprüft: Sie **nennt** Puchmayr Dentaltechnik namentlich,
sie **verlinkt** aber nicht auf puchmayr.de. Es ist also kein Backlink im SEO-Sinn, es
fließt keine Linkkraft. Was es ist: eine Nennung auf einer staatlichen Domain mit sehr
hoher Autorität. Das ist für GEO und für E-E-A-T trotzdem wertvoll, weil KI-Systeme und
Google die Aussage über eine unabhängige, amtliche Quelle bestätigt sehen.

**Zwei Dinge lohnen sich:**

1. **Beim LAGeSo nachfragen**, ob sie in der Pressemitteilung einen Link auf die
   Unternehmenswebsite ergänzen. Das kostet nur eine freundliche E-Mail und wäre dann
   ein wirklich starker Backlink von einer `berlin.de`-Adresse.
2. **Die Auszeichnung weiter streuen:** Handwerkskammer Berlin, Zahnärztekammer,
   Fachpresse Zahntechnik, Lokalpresse Steglitz-Zehlendorf. Jede Meldung, die verlinkt,
   zählt mehr als die amtliche Nennung ohne Link.

Im Markup ist die Pressemitteilung als `subjectOf` mit `NewsArticle` hinterlegt, dazu
das Video als `VideoObject` und die Auszeichnung als `award` und `hasCredential`.

## Bilder

Alle 17 Motive liegen doppelt vor: als **WebP** und als **JPG**. Eingebunden sind sie
über `<picture>`, der Browser nimmt WebP, alte Browser das JPG.

**Ersparnis: 48 Prozent.** 2536 KB als JPG gegen 1315 KB als WebP. Das Logo geht von
85 KB als PNG auf 36 KB.

Die Dateinamen sind auf sprechende, keywordhaltige Namen umgestellt, alles klein und mit
Bindestrichen:

| vorher | jetzt |
|---|---|
| `hero-labor.jpg` | `dentallabor-berlin-steglitz-zahntechniker-arbeitsplatz` |
| `fraese-blau.jpg` | `cad-cam-fraesmaschine-5-achs-dentallabor-berlin` |
| `produkt-1.jpg` | `vollkeramik-kronen-bruecken-gipsmodell` |
| `makro-hand.jpg` | `zahntechnikerin-detailarbeit-prothese` |
| `portrait.jpg` | `oliver-puchmayr-geschaeftsfuehrer-dentaltechnik` |
| `kurier.jpg` | `kurierservice-transportbehaelter-dentallabor-berlin` |

Alt-Texte beschreiben jeweils Motiv und Kontext, ohne Keyword-Stopfung. Beispiel:
„Zirkonoxid-Rohling in der CAD/CAM-Fräsmaschine" statt „Fräse".

## SEO und GEO

Ausrichtung: **B2B**. Zielgruppe sind Zahnarztpraxen, die ein Labor suchen, dazu die
Fachbegriffe der einzelnen Leistungen. Patientensuchen wie „Zahnersatz Kosten" sind
bewusst nicht bedient, die brauchen eigene Seiten und eine andere Sprache.

### Was im Code steckt

| Bereich | Umsetzung |
|---|---|
| Title | „Dentallabor Berlin-Steglitz für Zahnarztpraxen \| Puchmayr", 58 Zeichen, Keyword vorn |
| Description | 154 Zeichen, nennt Leistungen und die 60 Jahre, spricht Praxen an |
| h1 | enthält jetzt „Dentallabor in Berlin-Steglitz", der Ortsbezug steckt als Span in der h1 |
| Überschriften | genau eine h1 je Seite, lückenlose Hierarchie ohne Sprünge, automatisch geprüft. Die FAQ-Fragen sind echte h3 |
| Alt-Texte | alle 17 Motive beschreiben Motiv und Kontext, keine Keyword-Stopfung |
| Dateinamen | sprechend, mit Keyword und Ort, klein und mit Bindestrichen |
| Bildformat | WebP mit JPG-Fallback über `<picture>`, 48 Prozent kleiner |
| Open Graph | Title, Description, Bild 1800×1200 mit Maßangaben, Twitter Card als summary_large_image |
| Geo-Meta | Koordinaten 52.450844 / 13.3575369, Region DE-BE |
| Semantik | main-Element, jede Sektion mit aria-labelledby auf ihre Überschrift |
| Core Web Vitals | width und height an jedem Bild gegen Layoutsprünge, lazy loading überall außer Hero, fetchpriority high für das Hero-Bild |

### Strukturierte Daten (Schema.org, JSON-LD)

Ein zusammenhängender `@graph` im Head, nicht mehrere getrennte Blöcke. Enthalten sind:

- **LocalBusiness und Organization** mit Adresse, Koordinaten, Telefon, E-Mail,
  Öffnungszeiten als `openingHoursSpecification`, `areaServed` Berlin und Brandenburg,
  `sameAs` auf Facebook, Instagram und die Karriereseite, der Inklusionspreis als `award`
- **18 Begriffe unter `knowsAbout`**: Zirkonoxid, IPS e.max, Suprakonstruktion,
  NEM-Arbeiten, 5-Achs-Frästechnik, Oralscandaten und so weiter. Genau das lesen
  KI-Systeme aus, wenn sie ein Labor zu einem Fachbegriff nennen sollen.
- **6 Leistungen als `Service`** unter `makesOffer`, jede mit eigener Beschreibung
- **FAQPage mit 11 Fragen** auf der Startseite und 6 bis 8 je Unterseite, Wortlaut
  deckungsgleich mit dem sichtbaren Akkordeon, automatisch abgeglichen
- **Auszeichnung**: `award`, `hasCredential`, `subjectOf` mit der amtlichen Pressemitteilung, `VideoObject`
- **Gründung 1966**, Gründer, 30 Beschäftigte, Geschäftsführung
- **WebSite und WebPage** verknüpft über `@id`, damit die Entität eindeutig ist

**Absichtlich nicht drin: `aggregateRating`.** Die 4,9 Sterne stammen aus
Google-Rezensionen, nicht von dieser Website. Fremdbewertungen als eigene auszuzeichnen
verstößt gegen die Google-Richtlinien und kann eine manuelle Maßnahme auslösen. Die
Sterne stehen weiterhin sichtbar im Hero, nur eben nicht im Markup.

### Überschriften und Fragen

| Seite | h1 | h2 | h3 | Fragen als Überschrift | Wörter |
|---|---|---|---|---|---|
| Startseite | 1 | 9 | 35 | 14 | 1193 |
| Vollkeramik | 1 | 8 | 15 | 10 | 825 |
| Implantatprothetik | 1 | 8 | 14 | 9 | 778 |
| Kronen und Brücken | 1 | 8 | 14 | 10 | 756 |
| Prothetik | 1 | 8 | 16 | 10 | 759 |
| Aufbissschienen | 1 | 8 | 13 | 9 | 695 |
| Digitale Fertigung | 1 | 8 | 14 | 9 | 725 |

Die Hierarchie ist auf allen zehn Seiten lückenlos, es gibt keinen Sprung von h2 auf h4.
Zwei Dinge waren dafür zu ändern: Die FAQ-Fragen standen zwar im `summary` des
Akkordeons, waren aber keine Überschriften. Sie sind jetzt echte `h3` innerhalb des
`summary` und tauchen damit in der Gliederung auf, die Google und Screenreader lesen,
ohne dass sich optisch etwas ändert. Und die Fußzeilen-Überschriften waren `h4`, was auf
den Rechtsseiten direkt auf eine `h2` folgte. Sie sind jetzt `h3`.

Fachbegriffe machen zwischen **16 und 21 Prozent** der Wörter aus. Das ist die Spanne, in
der Fachtexte natürlich liegen; darüber wird es Keyword-Stopfung.

### Was für GEO getan wurde

GEO heißt, in Antworten von ChatGPT, Perplexity und der KI-Übersicht bei Google
aufzutauchen. Diese Systeme zitieren keine Werbetexte, sie zitieren überprüfbare Fakten
und sie greifen bevorzugt auf Frage-Antwort-Paare zu. Deshalb:

- **53 Fragen** über alle Seiten, jede als echte Überschrift und jede zugleich als
  `Question` im FAQPage-Markup. Auf der Startseite 11, auf den Leistungsseiten 6 bis 8.
- Jede Antwort ist ein vollständiger, aus dem Kontext heraus zitierfähiger Absatz. Keine
  Antwort sagt „wir", ohne das Unternehmen zu nennen: „Puchmayr Dentaltechnik fertigt …"
  lässt sich zitieren, „wir fertigen …" nicht.
- Jede Leistungsseite trägt eine Frage mit **Ortsbezug** und eine mit einer echten
  Sachfrage, zum Beispiel „Welches Dentallabor in Berlin fertigt Aufbissschienen?" und
  „Wofür wird eine Aufbissschiene eingesetzt?" Die erste bedient die lokale Suche, die
  zweite die Wissensfrage.
- Adresse, Telefonnummer und Öffnungszeiten stehen im Volltext **innerhalb** von
  FAQ-Antworten, nicht nur im Kontaktblock.
- Fachbegriffe stehen ausgeschrieben im Text, nicht nur in Bildern oder Icons.
- Die Entität ist über `@id` und `sameAs` eindeutig verknüpft, damit Google, Facebook,
  Instagram und die Karriereseite als dasselbe Unternehmen erkannt werden.

**Was hier bewusst fehlt:** Preisfragen („Was kostet eine Vollkeramikkrone?") und
Haltbarkeitsangaben („Wie lange hält Zirkonoxid?"). Beides wird häufig gesucht und beides
zieht Antworten in der KI-Suche. Zu beidem liegen aber keine belegten Zahlen von Puchmayr
vor. Erfundene Angaben wären hier schädlicher als eine fehlende Antwort. Sobald der Kunde
Spannen freigibt, lassen sich diese Fragen nachziehen.

### Vor dem Livegang anpassen

1. **Domain:** Canonical, Open Graph und alle URLs im JSON-LD stehen auf
   `https://www.puchmayr.de/`. Falls eine andere Domain kommt, alle Vorkommen ersetzen.
2. **Bild-URLs im Markup** müssen absolut sein, relative Pfade werden von Crawlern
   und Social-Netzwerken nicht zuverlässig aufgelöst.
3. **Rich Results Test** von Google und der Schema-Validator gegenprüfen.
4. **Google Business Profile** mit den identischen Angaben pflegen. Gleiche Adresse,
   gleiche Öffnungszeiten, gleiche Kategorie. Abweichungen kosten lokale Sichtbarkeit
   und stören GEO.
5. **60 Jahre Erfahrung ist bestätigt.** Die Pressemitteilung des Landes Berlin nennt
   1966 als Gründungsjahr. Die Angabe „über 40 Jahre" im Google-Profil ist falsch und
   sollte dort korrigiert werden.
6. **Sitemap und robots.txt** anlegen, Seite in der Search Console anmelden.

### Offen

- Die Lorem-Ipsum-Demobeiträge aus dem Theme sind auf der Staging-Seite noch live und
  stehen in der Sitemap. Vor dem Livegang löschen.
- Impressum und Datenschutzerklärung sind Entwürfe, siehe Abschnitt Rechtsseiten.
- Screenreader-Test und Kontrastmessung stehen noch aus, auch für das Banner.
- Entscheiden, ob in WordPress Borlabs oder dieses Banner läuft, und Abschnitt 6 der
  Datenschutzerklärung entsprechend festziehen.
- Beim LAGeSo einen Link in der Pressemitteilung anfragen.
- Eine „Über uns"-Unterseite fehlt noch. Auf der Staging-Seite existiert sie mit
  Inklusionspreis und FAQ, hier ist der Inhalt in die Startseite eingearbeitet.

## Was noch offen ist

- Datenschutz: fünf Angaben, siehe Abschnitt Rechtsseiten.
- Screenreader-Test und Kontrastmessung stehen noch aus.
- Beim LAGeSo einen Link in der Pressemitteilung anfragen.
- Eine „Über uns"-Unterseite fehlt noch. Auf der Staging-Seite existiert sie mit
  Inklusionspreis und FAQ, hier ist der Inhalt in die Startseite eingearbeitet.
- Preis- und Haltbarkeitsfragen für die FAQ, sobald belegte Spannen vorliegen.
- `img/portrait-2.jpg` liegt als Alternative für das Geschäftsführer-Portrait bereit.
- Auf der Staging-Seite: die Lorem-Ipsum-Demobeiträge löschen, den Divi-Sticky-Fehler im
  Leistungsblock beheben und die falsche Überschrift „Impressum" auf `/gleichstellung/`
  korrigieren.
- Im Google-Profil „über 40 Jahre" auf 60 Jahre korrigieren. Das Gründungsjahr 1966 ist
  über die Pressemitteilung des Landes Berlin belegt.

---
AO Consulting GmbH
