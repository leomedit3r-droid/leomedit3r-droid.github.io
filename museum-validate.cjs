const fs=require('fs'),path=require('path');
const d=JSON.parse(fs.readFileSync('data/museum.json','utf8'));
const sections=d.nav.map(x=>x[0]);const slugs=d.projects.filter(x=>x[0]!=='art/persona').map(x=>x[0]);
const routes=['','en','ja'].flatMap(lang=>[...sections,...slugs].map(s=>'/'+[lang,s].filter(Boolean).join('/')+([lang,s].filter(Boolean).length?'/':'')));
routes.push('/persona-distill/');
const failures=[];let links=0;for(const r of routes){const f=path.join('.','.'+r,'index.html');if(!fs.existsSync(f)){failures.push('Missing route '+r);continue}const html=fs.readFileSync(f,'utf8');for(const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)){const url=m[1].split('#')[0].split('?')[0];if(!url)continue;const p='.'+url+(url.endsWith('/')?'index.html':'');if(!fs.existsSync(p))failures.push(r+' -> '+url);links++}}
const old=fs.readFileSync('persona-distill/index.html','utf8');for(const share of ['wrhd0bd8jqmj3z5mjm','c2l21x4nznauhoktkh','IFpaIqlL','NFpnIqT4','3FpWIqnX','0FpNIrvZ','6FpDIrgS'])if(!old.includes(share))failures.push('Missing legacy share '+share);
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
const site='https://leomedit3r-droid.github.io';fs.writeFileSync('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(r=>'<url><loc>'+site+r+'</loc></url>').join('')+'</urlset>\n');fs.writeFileSync('robots.txt','User-agent: *\nAllow: /\nSitemap: '+site+'/sitemap.xml\n');
console.log('PASS '+routes.length+' routes, '+links+' internal links and assets, seven legacy shares');