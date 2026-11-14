/* Robinleo Atlas */
(()=>{const root=document.documentElement,lang=root.lang,L=(zh,en,ja)=>lang==='ja'?ja:lang==='en'?en:zh;
try{if(localStorage.getItem('atlas-theme')==='light')root.classList.add('light')}catch{}
document.querySelector('#theme')?.addEventListener('click',()=>{const v=root.classList.toggle('light');try{localStorage.setItem('atlas-theme',v?'light':'dark')}catch{}});
const pressed=(bs,k,a)=>bs.forEach(b=>b.setAttribute('aria-pressed',String(b.getAttribute(a)===k)));
const search=document.querySelector('#search'),filters=[...document.querySelectorAll('[data-filter]')],items=[...document.querySelectorAll('[data-category]')];let active='all';
function update(){const q=(search?.value||'').trim().toLocaleLowerCase();let n=0;items.forEach(x=>{const show=(active==='all'||x.dataset.category===active)&&(!q||(x.dataset.search||'').toLocaleLowerCase().includes(q));x.hidden=!show;if(show)n++});const c=document.querySelector('#result-count');if(c)c.textContent=n+' '+L('件作品','works','件');const e=document.querySelector('#empty');if(e)e.hidden=n!==0}
filters.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;pressed(filters,active,'data-filter');update()}));search?.addEventListener('input',update);
const dialog=document.querySelector('#viewer'),anchors=[...document.querySelectorAll('[data-view]')];let index=0,opener;
function showImage(n){if(!dialog||!anchors.length)return;index=(n+anchors.length)%anchors.length;const a=anchors[index],im=dialog.querySelector('img'),caption=a.querySelector('img')?.alt||'';im.src=a.href;im.alt=caption;dialog.querySelector('p').textContent=caption;const c=dialog.querySelector('#viewer-count');if(c)c.textContent=(index+1)+' / '+anchors.length;const ctl=dialog.querySelector('.viewer-controls');if(ctl)ctl.hidden=anchors.length<2}
anchors.forEach((a,i)=>a.addEventListener('click',e=>{if(!dialog?.showModal)return;e.preventDefault();opener=a;showImage(i);if(!dialog.open)dialog.showModal();dialog.querySelector('button')?.focus()}));
dialog?.querySelector('button')?.addEventListener('click',()=>dialog.close());dialog?.querySelectorAll('[data-gallery-step]').forEach(b=>{const n=Number(b.dataset.galleryStep);b.setAttribute('aria-label',n<0?L('上一张','Previous image','前の画像'):L('下一张','Next image','次の画像'));b.addEventListener('click',()=>showImage(index+n))});
dialog?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();showImage(index+(e.key==='ArrowLeft'?-1:1))}});dialog?.addEventListener('close',()=>opener?.focus());
dialog?.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
const qb=[...document.querySelectorAll('[data-quote-filter]')],qi=[...document.querySelectorAll('[data-quote-category]')];
function filterQuotes(q){pressed(qb,q,'data-quote-filter');qi.forEach(x=>x.hidden=q!=='all'&&x.dataset.quoteCategory!==q)}
qb.forEach(b=>b.addEventListener('click',()=>filterQuotes(b.dataset.quoteFilter)));
const feedback=document.querySelector('#quote-feedback');
function report(s){if(feedback)feedback.textContent=s}
document.querySelectorAll('[data-copy-quote]').forEach(b=>b.addEventListener('click',async()=>{const q=b.closest('.quote-card')?.querySelector('blockquote')?.textContent||'';try{await navigator.clipboard.writeText(q);b.textContent=L('已复制','Copied','コピー済み');report(b.textContent)}catch{report(L('无法自动复制，请选中文字。','Copy unavailable; select the text.','自動コピーできません。文字を選択してください。'))}}));
let last=-1;document.querySelector('#random-quote')?.addEventListener('click',()=>{const visible=qi.filter(x=>!x.hidden);if(!visible.length)return;let n=Math.floor(Math.random()*visible.length);if(visible.length>1&&n===last)n=(n+1)%visible.length;last=n;const card=visible[n];card.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});card.classList.add('quote-highlight');setTimeout(()=>card.classList.remove('quote-highlight'),1500);report(card.querySelector('blockquote')?.textContent||'')});
function hash(){if(location.pathname==='/'&&['#home','#principles','#process','#works','#about','#support'].includes(location.hash)){location.replace('/persona-distill/'+location.hash);return}if(location.hash.startsWith('#quote-')){const q=document.getElementById(location.hash.slice(1));if(q?.hidden)filterQuotes('all');q?.scrollIntoView({block:'center'})}}
hash();addEventListener('hashchange',hash);
})();
