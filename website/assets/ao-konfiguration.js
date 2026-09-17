/* ============================================================================
   KONFIGURATION fuer Einwilligungsbanner und Messung.
   DIESE DATEI IST DIE EINZIGE, DIE PRO KUNDE ANGEPASST WIRD.

   VOR DEM LIVEGANG EINTRAGEN:
     ga4        Messkennung aus dem Google-Analytics-Konto DES KUNDEN ('G-...')
     metaPixel  Pixel-ID aus dem Meta-Werbekonto DES KUNDEN (nur Ziffern)

   Solange beide leer sind, wird nichts geladen und nichts gemessen.
   Genau so bleibt es auf der Vorschau.

   NICHT VERGESSEN (liegt beim Kunden, nicht bei uns):
     - eigenes Google-Konto und Auftragsverarbeitung mit Google
     - Datenschutzerklaerung muss zu dem passen, was hier eingeschaltet wird
   ============================================================================ */

window.AO_MESSUNG = {
  ga4: '',
  metaPixel: ''
};

window.AO_EINWILLIGUNG = {
  datenschutz: '/datenschutz.html',
  impressum: '/impressum.html',
  kategorien: [
    {
      id: 'notwendig',
      name: 'Notwendig',
      kurz: 'Haelt die Website funktionsfaehig und speichert Ihre Entscheidung aus diesem Fenster. Ohne diese Funktionen laesst sich die Seite nicht sinnvoll anzeigen.',
      pflicht: true,
      dienste: [{
        name: 'Einwilligungsspeicher',
        anbieter: 'Puchmayr Dentaltechnik GmbH, Kelchstr. 23, 12169 Berlin',
        zweck: 'Speichert, welchen Diensten Sie zugestimmt haben, damit Sie nicht bei jedem Aufruf erneut gefragt werden.',
        art: 'Lokaler Speicher im Browser, kein Cookie',
        dauer: '12 Monate'
      }]
    },
    {
      id: 'medien',
      name: 'Karten und Videos',
      kurz: 'Laedt die Anfahrtskarte von Google Maps und das Video zum Berliner Inklusionspreis von YouTube. Erst dann wird Ihre IP-Adresse an Google uebertragen.',
      dienste: [
        {
          name: 'Google Maps',
          anbieter: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland',
          zweck: 'Zeigt die Anfahrt zum Labor auf einer interaktiven Karte.',
          art: 'Einbettung ueber iframe, Uebertragung der IP-Adresse, Verarbeitung auch in den USA moeglich',
          dauer: 'Siehe Datenschutzerklaerung von Google'
        },
        {
          name: 'YouTube',
          anbieter: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland',
          zweck: 'Spielt das Video zur Verleihung des Berliner Inklusionspreises ab.',
          art: 'Einbettung im Modus mit erweitertem Datenschutz ueber youtube-nocookie.com',
          dauer: 'Siehe Datenschutzerklaerung von Google'
        }
      ]
    },
  ]
};

/* Die Kategorien Statistik und Marketing erscheinen im Fenster nur dann, wenn oben
   auch wirklich eine Kennung eingetragen ist. Eine leere Kategorie anzubieten waere
   irrefuehrend — und solange nichts eingetragen ist, erscheint gar kein Banner.
   nurWennEingetragen */
(function () {
  var m = window.AO_MESSUNG || {};
  var k = window.AO_EINWILLIGUNG.kategorien;
  if (String(m.ga4 || '').trim()) {
    k.push({
      id: 'statistik',
      name: 'Statistik',
      kurz: 'Hilft uns zu verstehen, welche Seiten gelesen werden und wo Besucher nicht weiterkommen. Erst mit Ihrer Zustimmung wird dafuer Google Analytics geladen.',
      dienste: [{
        name: 'Google Analytics 4',
        anbieter: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland',
        zweck: 'Zaehlt Besuche und Seitenaufrufe, zeigt Herkunft, Geraet und ungefaehre Region.',
        art: 'Cookies und Kennungen im Browser. Ihre IP-Adresse wird gekuerzt. Eine Verarbeitung in den USA ist moeglich; Google beruft sich dafuer auf das EU-US Data Privacy Framework.',
        dauer: 'Bis zu 14 Monate'
      }]
    });
  }
  if (String(m.metaPixel || '').trim()) {
    k.push({
      id: 'marketing',
      name: 'Marketing',
      kurz: 'Misst, ob eine Anzeige zu einer Anfrage gefuehrt hat, und erlaubt passendere Werbung. Erst mit Ihrer Zustimmung werden dafuer Dienste von Meta und Google geladen.',
      dienste: [
        {
          name: 'Meta-Pixel (Facebook, Instagram)',
          anbieter: 'Meta Platforms Ireland Ltd., Merrion Road, Dublin 4, Irland',
          zweck: 'Erkennt, ob ein Besuch aus einer Anzeige kam, und misst Anfragen als Erfolg.',
          art: 'Cookies und Kennungen im Browser, Uebermittlung an Meta, Verarbeitung auch in den USA moeglich',
          dauer: 'Bis zu 24 Monate'
        },
        {
          name: 'Google Ads (Conversion)',
          anbieter: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland',
          zweck: 'Misst, welche Anzeige zu einer Anfrage gefuehrt hat.',
          art: 'Cookies und Kennungen im Browser, Verarbeitung auch in den USA moeglich',
          dauer: 'Bis zu 24 Monate'
        }
      ]
    });
  }
})();
