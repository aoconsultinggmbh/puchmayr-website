import re,os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','website'))
tpl=open('vollkeramik.html').read()
head_end=tpl.index('<script type="application/ld+json">')
ld_end=tpl.index('</script>',head_end)+len('</script>')
hdr_start=tpl.index('<body>')
main_start=tpl.index('<main id="inhalt">')+len('<main id="inhalt">')
band_start=tpl.index('<!-- ============ NOCH FRAGEN?')
tail_start=tpl.index('</main>')
head=tpl[:head_end]; header=tpl[hdr_start:main_start]; band=tpl[band_start:tail_start]; tail=tpl[tail_start:]
old_title='Vollkeramik Berlin: Zirkonoxid und IPS e.max | Puchmayr'
old_desc='Vollkeramik aus dem Dentallabor in Berlin-Steglitz: Kronen und Brücken aus Zirkonoxid und IPS e.max, gefertigt mit eigener CAD/CAM-Technik.'
def mk(slug,title,desc,img,imgalt,crumb,h1,lead,body):
    h=head.replace(old_title,title).replace(old_desc,desc).replace('/vollkeramik/','/'+slug+'/')
    h=h.replace('vollkeramik-kronen-bruecken-gipsmodell.jpg',img+'.jpg').replace('Vollkeramische Kronen und Brücken auf Gipsmodellen',imgalt)
    ld='''<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.puchmayr.de/"},
    {"@type": "ListItem", "position": 2, "name": "%s", "item": "https://www.puchmayr.de/%s/"}
  ]
}
</script>''' % (crumb,slug)
    hero=f'''

<!-- ============ HERO ============ -->
<section class="subhero" aria-labelledby="t-hero">
  <div class="subhero__bg">
    <picture><source srcset="img/{img}.webp" type="image/webp"><img src="img/{img}.jpg" alt="{imgalt}" width="1800" height="1200" fetchpriority="high" decoding="async"></picture>
  </div>
  <div class="wrap">
    <nav class="crumbs" aria-label="Brotkrumennavigation">
      <ol>
        <li><a href="index.html">Startseite</a></li>
        <li><span aria-current="page">{crumb}</span></li>
      </ol>
    </nav>
    <h1 id="t-hero">{h1}</h1>
    <p class="sublead">{lead}</p>
  </div>
</section>

'''
    s=h+ld+tpl[ld_end:hdr_start]+header+hero+body+'\n'+band+tail
    s=s.replace('<li><a href="#faq">FAQ</a></li>','<li><a href="index.html#faq">FAQ</a></li>')
    open(slug+'.html','w').write(s)

pdf='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/><path d="M12 11v6m-3-3 3 3 3-3"/></svg>'
def card(file,title,size):
    return f'''      <li><a class="download" href="downloads/{file}" download>
        <span class="download__ico">{pdf}</span>
        <span><span class="download__titel">{title}</span><span class="download__meta">PDF, {size}</span></span>
      </a></li>'''
groups=[
 ('t-labor','Laborunterlagen','Formulare für Ihre Aufträge an Puchmayr Dentaltechnik.',[
   ('auftragszettel-puchmayr-dentaltechnik.pdf','Auftragszettel Puchmayr Dentaltechnik','524 KB'),
   ('kostenvoranschlag-vorlage-puchmayr-dentaltechnik.pdf','Vorlage für einen Kostenvoranschlag','443 KB')]),
 ('t-zahnarzt','Informationen für die Zahnarztpraxis','Fachinformationen zu Materialien und Verfahren, zum Teil von den Herstellern.',[
   ('abrasionsstudie-vollanatomisches-zirkonoxid.pdf','Abrasionsstudie zu vollanatomischem Zirkonoxid','134 KB'),
   ('prettau-zirkon-vollanatomisch-broschuere.pdf','Vollanatomisches Prettau Zirkon','1,8 MB'),
   ('zirkonoxid-zahnarztinformation.pdf','Zirkonoxid: Zahnarztinformation','703 KB'),
   ('ips-emax-zahnarztinformation.pdf','IPS e.max: Zahnarztinformation','498 KB'),
   ('ivoclar-befestigung-zahnarztinformation.pdf','Ivoclar Befestigungsinformationen','1,2 MB'),
   ('zebris-funktionsdiagnostik-zahnarztinformation.pdf','Zebris Funktionsdiagnostik','457 KB'),
   ('tk1-friktion-teleskope-zahnarztinformation.pdf','Friktionsverbesserung bei Teleskopen mit TK1','457 KB')]),
 ('t-patient','Patienteninformationen','Zum Weitergeben an Ihre Patientinnen und Patienten.',[
   ('vollkeramik-zirkonoxid-patienteninformation.pdf','Vollkeramik aus Zirkonoxid','622 KB'),
   ('vollkeramik-patienteninformation.pdf','Vollkeramik: Patienteninformation','531 KB'),
   ('anfahrtsbeschreibung-puchmayr-dentaltechnik-berlin.pdf','Anfahrtsbeschreibung zum Labor','1,5 MB')]),
]
body='<!-- ============ DOWNLOADS ============ -->\n'
for i,(gid,gt,gp,items) in enumerate(groups):
    body+=f'''<section class="sec{' sec--mist' if i%2 else ''}" aria-labelledby="{gid}">
  <div class="wrap">
    <div class="sec-head">
      <h2 id="{gid}">{gt}</h2>
      <p class="lead">{gp}</p>
    </div>
    <ul class="downloads">
'''+'\n'.join(card(*it) for it in items)+'''
    </ul>
  </div>
</section>
'''
mk('downloads','Downloads für Zahnarztpraxen | Puchmayr Dentaltechnik Berlin',
   'Auftragszettel, Kostenvoranschlag, Zahnarzt- und Patienteninformationen von Puchmayr Dentaltechnik, Dentallabor in Berlin-Steglitz, zum Herunterladen.',
   'zahntechnikerin-detailarbeit-prothese','Zahntechnikerin bei der Detailarbeit an einer Prothese',
   'Downloads','Informationen und Formulare zum Download',
   'Auftragszettel, Vorlagen und Fachinformationen von Puchmayr Dentaltechnik für Ihre Praxis und Ihre Patienten. Alle Dateien sind PDF-Dokumente.',body)

ext='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'
partner=[
 ('Dr. Michael Petschler','Oralchirurgie','Für Dr. Petschler fertigt Puchmayr Dentaltechnik seit Jahren Bohrschablonen. So ist das Labor von Anfang an in die Planung von Implantaten eingebunden.','https://www.oralchirurgen.berlin/','oralchirurgen.berlin'),
 ('Zirkonzahn','CAD/CAM-Frässystem','Das 5-Achs-CAD/CAM-Frässystem bringt moderne Fertigungstechnik und neue Materialien ins Labor. Neue Anwendungen in der Prothetik stehen damit auch Ihnen als Behandler zur Verfügung, und wir beraten Sie gern beim Einsatz.','https://www.zirkonzahn.de/','zirkonzahn.de'),
 ('Proxi','Management und Datenschutz','Partner für zertifizierte Managementsysteme, Organisations- und Prozessberatung, Innovationsberatung 4.0 und Datenschutz.','https://www.proxi.de/','proxi.de'),
 ('GC Europe','Dentalmaterialien','Puchmayr Dentaltechnik verwendet Produkte der Firma GC Europe.','https://www.gc.dental/','gc.dental'),
 ('Shera','3D-Druck','Partner für den 3D-Druckprozess im Labor.','https://www.shera.de/','shera.de'),
]
body='''<!-- ============ PARTNER (Texte von der bisherigen Seite) ============ -->
<section class="sec" aria-labelledby="t-partner">
  <div class="wrap">
    <div class="sec-head">
      <h2 id="t-partner">Zusammenarbeit für beste Ergebnisse</h2>
      <p class="lead">Auf dem Weg zu den besten Lösungen, Materialien und Erkenntnissen für Sie und Ihre Patienten ist Puchmayr Dentaltechnik eine stabile und vertrauensvolle Zusammenarbeit sehr wichtig. Mit diesen Partnern arbeitet das Labor seit Jahren zusammen.</p>
    </div>
    <ul class="partnerliste">
'''+'\n'.join(f'''      <li class="partner">
        <span class="matcard__tag">{rolle}</span>
        <h3>{name}</h3>
        <p>{txt}</p>
        <a class="partner__link" href="{url}" target="_blank" rel="noopener">{label} {ext}<span class="sr-only"> (öffnet in einem neuen Fenster)</span></a>
      </li>''' for name,rolle,txt,url,label in partner)+'''
    </ul>
  </div>
</section>
'''
mk('partner','Unsere Partner | Puchmayr Dentaltechnik, Dentallabor Berlin',
   'Mit diesen Partnern arbeitet Puchmayr Dentaltechnik, Dentallabor in Berlin-Steglitz, seit Jahren zusammen: Oralchirurgie, CAD/CAM, 3D-Druck und Dentalmaterialien.',
   'kennenlerngespraech-zahnarztpraxis-dentallabor-berlin','Gespräch zwischen Zahnarztpraxis und Dentallabor am Besprechungstisch',
   'Unsere Partner','Unsere Partner',
   'Puchmayr Dentaltechnik arbeitet mit Oralchirurgen, Herstellern und Beratern zusammen, die das Labor fachlich und technisch voranbringen.',body)
print('ok')
