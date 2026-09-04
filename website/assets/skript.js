/* Puchmayr Dentaltechnik: gemeinsames Skript für alle Seiten.
   Jeder Block prüft, ob sein Element existiert, damit dieselbe Datei
   auf der Startseite und auf den Unterseiten läuft. */

// Header wird beim Scrollen weiß
const hdr = document.getElementById('hdr');
if (hdr) {
  const onScroll = () => hdr.classList.toggle('solid', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Logo: lokale Datei, sonst Staging-URL, sonst Text-Wortmarke
const REMOTE_LOGO = 'https://bw3yoxct.myrdbx.io/wp-content/uploads/2026/05/Logo-Puchmayr.png';
document.querySelectorAll('[data-logo]').forEach(img => {
  img.addEventListener('error', () => {
    if (img.dataset.tried !== '1') { img.dataset.tried = '1'; img.src = REMOTE_LOGO; return; }
    img.hidden = true;
    const wm = img.parentElement.querySelector('.wordmark') || img.nextElementSibling;
    if (wm) wm.hidden = false;
  });
  if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
});

/* ---------------------------------------------------------------------------
   KONTAKTFORMULAR

   Im Entwurf wird nichts verschickt: Pflichtfelder werden geprüft, danach
   erscheint die Danke-Ansicht. Das Formular trägt novalidate, damit die
   Browsermeldungen nicht dazwischenreden. Deshalb muss die Prüfung hier
   vollständig sein, auch die Plausibilität von E-Mail und Telefon.

   Fehler werden als Text unter dem Feld ausgegeben, nicht nur als roter
   Rahmen. Farbe allein darf keine Information tragen (WCAG 1.4.1).
   --------------------------------------------------------------------------- */
const form = document.getElementById('kontaktformular');
if (form) {

  // Fehlertext je Feld einmal anlegen und über aria-describedby verknüpfen
  form.querySelectorAll('[required]').forEach(el => {
    const huelle = el.closest('.field,.consent');
    if (!huelle || huelle.querySelector('.field__fehler')) return;
    const meldung = document.createElement('span');
    meldung.className = 'field__fehler';
    meldung.id = (el.id || el.name) + '-fehler';
    meldung.setAttribute('role', 'alert');
    huelle.appendChild(meldung);
  });

  function pruefe(el) {
    const wert = el.type === 'checkbox' ? '' : el.value.trim();
    if (el.type === 'checkbox') {
      return el.checked ? '' : 'Bitte bestätigen Sie die Datenschutzerklärung.';
    }
    if (!wert) {
      if (el.type === 'email') return 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
      if (el.type === 'tel') return 'Bitte geben Sie eine Telefonnummer für den Rückruf ein.';
      return 'Bitte füllen Sie dieses Feld aus.';
    }
    if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(wert)) {
      return 'Diese E-Mail-Adresse sieht nicht vollständig aus.';
    }
    // Telefon: Ziffern zählen, Schreibweisen wie +49 30 796 33 15 oder (030) 7963315
    if (el.type === 'tel') {
      const ziffern = wert.replace(/\D/g, '');
      if (ziffern.length < 6) return 'Bitte geben Sie eine vollständige Telefonnummer ein.';
      if (!/^[0-9+()/.\-\s]+$/.test(wert)) return 'Bitte nur Ziffern und die Zeichen + ( ) / . und Bindestrich.';
    }
    return '';
  }

  function zeige(el, text) {
    const huelle = el.closest('.field,.consent');
    if (!huelle) return;
    const meldung = huelle.querySelector('.field__fehler');
    huelle.setAttribute('data-fehler', text ? 'true' : 'false');
    if (meldung) meldung.textContent = text;
    if (text) {
      el.setAttribute('aria-invalid', 'true');
      if (meldung) el.setAttribute('aria-describedby', meldung.id);
    } else {
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const pflicht = [...form.querySelectorAll('[required]')];
    let erstesFehlerfeld = null;
    pflicht.forEach(el => {
      const text = pruefe(el);
      zeige(el, text);
      if (text && !erstesFehlerfeld) erstesFehlerfeld = el;
    });
    if (erstesFehlerfeld) {
      erstesFehlerfeld.focus();
      erstesFehlerfeld.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }
    form.classList.add('is-done');
    form.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });

  // Fehler verschwindet, sobald der Eintrag stimmt. Nicht schon beim ersten
  // Tastendruck, das nervt, sondern sobald das Feld gültig ist.
  form.querySelectorAll('[required]').forEach(el => {
    const ereignis = el.type === 'checkbox' ? 'change' : 'input';
    el.addEventListener(ereignis, () => {
      if (el.closest('[data-fehler="true"]') && !pruefe(el)) zeige(el, '');
    });
    el.addEventListener('blur', () => {
      if (el.closest('[data-fehler="true"]')) zeige(el, pruefe(el));
    });
  });
}

// Mobile-Menü, inklusive aria-expanded für Screenreader
const burger = document.querySelector('.nav__burger');
if (burger) {
  const menue = document.querySelector('.nav__links');
  if (menue && !menue.id) menue.id = 'hauptmenue';
  burger.setAttribute('aria-controls', menue ? menue.id : '');
  const setzeZustand = () => {
    const offen = document.body.classList.contains('menu-open');
    burger.setAttribute('aria-expanded', offen ? 'true' : 'false');
    burger.setAttribute('aria-label', offen ? 'Menü schließen' : 'Menü öffnen');
  };
  setzeZustand();
  burger.addEventListener('click', () => { document.body.classList.toggle('menu-open'); setzeZustand(); });
  document.querySelectorAll('.nav__links a').forEach(a =>
    a.addEventListener('click', () => { document.body.classList.remove('menu-open'); setzeZustand(); }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      document.body.classList.remove('menu-open'); setzeZustand(); burger.focus();
    }
  });
}

/* ---------------------------------------------------------------------------
   EXTERNE EINBETTUNGEN: KARTE UND VIDEO

   Beides gehört zur Kategorie "medien" im Einwilligungsbanner. Solange dafür
   keine Zustimmung vorliegt, wird kein iframe erzeugt und es geht keine Anfrage
   an Google. Zwei Wege führen zur Zustimmung:

   1. "Alles erlauben" oder der Schalter im Banner. Dann laden beide Einbettungen
      automatisch, auch ohne weiteren Klick.
   2. Der Knopf direkt auf der Karte oder dem Video. Das ist eine punktuelle
      Einwilligung für diese Kategorie: Der Hinweistext daneben nennt Anbieter
      und Folge, damit ist sie informiert im Sinne des Art. 4 Nr. 11 DSGVO.
      Sie wird über dieselbe Schnittstelle gespeichert wie die aus dem Banner.
   --------------------------------------------------------------------------- */

const MEDIEN = 'medien';
// Bewusst streng: Fehlt das Einwilligungsskript, wird NICHTS automatisch
// geladen. Der Knopf auf der Einbettung funktioniert weiterhin.
// einwilligung.js muss vor dieser Datei eingebunden sein.
const darfMedien = () =>
  !!(window.aoEinwilligung && window.aoEinwilligung.erlaubt(MEDIEN));

function ladeKarte(box) {
  if (box.dataset.geladen === '1') return;
  box.dataset.geladen = '1';
  const rahmen = document.createElement('iframe');
  rahmen.src = box.dataset.karte;
  rahmen.title = 'Google Maps: Kelchstr. 23, 12169 Berlin-Steglitz';
  rahmen.setAttribute('allowfullscreen', '');
  rahmen.referrerPolicy = 'no-referrer-when-downgrade';
  rahmen.loading = 'lazy';
  box.innerHTML = '';
  box.appendChild(rahmen);
}

/* YouTube verlangt für die Wiedergabe im iframe einen gültigen HTTP-Referrer.
   Öffnet man die Dateien lokal per Doppelklick, ist das Protokoll file: und es
   gibt keinen Referrer. YouTube antwortet dann mit "Fehler 153". Das ist keine
   Eigenart dieser Seite, das passiert bei jeder eingebetteten YouTube-Wiedergabe
   aus einer lokalen Datei. Auf einer echten Domain tritt es nicht auf.
   Damit die Vorschau trotzdem funktioniert, öffnen wir das Video in dem Fall
   direkt bei YouTube, statt einen iframe zu erzeugen, der nur einen Fehler zeigt. */
const LOKALE_DATEI = window.location.protocol === 'file:';

function ladeVideo(box, autoplay) {
  if (box.dataset.geladen === '1') return;
  if (LOKALE_DATEI) {
    if (autoplay) window.open('https://www.youtube.com/watch?v=' + box.dataset.video,
                              '_blank', 'noopener');
    return;
  }
  box.dataset.geladen = '1';
  const rahmen = document.createElement('iframe');
  rahmen.src = 'https://www.youtube-nocookie.com/embed/' + box.dataset.video +
               '?rel=0&hl=de' + (autoplay ? '&autoplay=1' : '');
  rahmen.title = 'Berliner Inklusionspreis 2024, Puchmayr Dentaltechnik GmbH';
  rahmen.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture';
  rahmen.setAttribute('allowfullscreen', '');
  rahmen.loading = 'lazy';
  box.innerHTML = '';
  box.appendChild(rahmen);
}

// Knopf auf der Einbettung: Zustimmung erteilen, dann laden
document.querySelectorAll('.karte[data-karte]').forEach(box => {
  const start = box.querySelector('.karte__start');
  if (start) start.addEventListener('click', () => {
    if (window.aoEinwilligung) window.aoEinwilligung.setze(MEDIEN, true);
    ladeKarte(box);
  });
});
document.querySelectorAll('.video[data-video]').forEach(box => {
  const start = box.querySelector('.video__start');
  if (!start) return;
  start.addEventListener('click', () => {
    if (window.aoEinwilligung) window.aoEinwilligung.setze(MEDIEN, true);
    ladeVideo(box, true);
  });
  // Beim lokalen Öffnen den Hinweis anpassen, damit klar ist, was passiert
  if (LOKALE_DATEI) {
    const hinweis = box.querySelector('.video__hinweis');
    if (hinweis) hinweis.textContent =
      'Video bei YouTube ansehen. Die Wiedergabe direkt auf der Seite funktioniert ' +
      'erst auf dem Server, nicht beim lokalen Öffnen der Datei.';
    start.setAttribute('aria-label',
      'Video zum Berliner Inklusionspreis 2024 bei YouTube ansehen, öffnet einen neuen Tab');
  }
});

// Liegt die Zustimmung vor oder kommt sie später aus dem Banner: nachladen.
// Kein autoplay, weil der Nutzer hier nicht auf "abspielen" geklickt hat.
function pruefeMedien() {
  if (!darfMedien()) return;
  document.querySelectorAll('.karte[data-karte]').forEach(b => ladeKarte(b));
  document.querySelectorAll('.video[data-video]').forEach(b => ladeVideo(b, false));
}
document.addEventListener('ao:einwilligung', pruefeMedien);
pruefeMedien();
