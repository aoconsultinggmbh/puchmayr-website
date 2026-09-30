import glob,re,os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','website'))
for f in glob.glob('*.html'):
    s=open(f).read(); o=s
    if 'href="downloads.html">Downloads</a></li>\n      <li><a href="https://puchmayr-karriere' not in s:
        s=re.sub(r'(<li><a href="[^"]*#service">Service</a></li>)', r'\1\n      <li><a href="downloads.html">Downloads</a></li>', s, count=1)
    if '<h3>Informationen</h3>' not in s:
        s=s.replace('<h3>Rechtliches</h3>\n        <ul>','<h3>Informationen</h3>\n        <ul>\n          <li><a href="downloads.html">Downloads</a></li>\n          <li><a href="partner.html">Unsere Partner</a></li>',1)
    if s!=o: open(f,'w').write(s)
p='sitemap.xml'; s=open(p).read()
if '/downloads/' not in s:
    s=s.replace('</urlset>','''  <url>
    <loc>https://www.puchmayr.de/downloads/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.puchmayr.de/partner/</loc>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>''')
    open(p,'w').write(s)
print('ok')
