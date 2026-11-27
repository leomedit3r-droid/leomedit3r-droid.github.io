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
let lastQuote;
document.querySelector('#random-quote')?.addEventListener('click',()=>{
  const visible=qi.filter(x=>!x.hidden);
  if(!visible.length)return;
  const candidates=visible.length>1?visible.filter(card=>card!==lastQuote):visible;
  const card=candidates[Math.floor(Math.random()*candidates.length)];
  lastQuote=card;
  card.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  card.classList.add('quote-highlight');
  setTimeout(()=>card.classList.remove('quote-highlight'),1500);
  report(card.querySelector('blockquote')?.textContent||'');
});
function hash(){if(location.pathname==='/'&&['#home','#principles','#process','#works','#about','#support'].includes(location.hash)){location.replace('/persona-distill/'+location.hash);return}if(location.hash.startsWith('#quote-')){const q=document.getElementById(location.hash.slice(1));if(q?.hidden)filterQuotes('all');q?.scrollIntoView({block:'center'})}}
hash();addEventListener('hashchange',hash);
})();

/* Qingming: one active video, explicit user playback, no game runtime. */
(()=>{
const p=document.querySelector('[data-qm-player]');if(!p)return;
const $=s=>p.querySelector(s),$$=s=>[...p.querySelectorAll(s)],v=$('[data-qm-video]'),stage=$('[data-qm-stage]'),lang=document.documentElement.lang,L=(zh,en,ja)=>lang==='ja'?ja:lang==='en'?en:zh;
const root='/assets/museum/qingming/',state={mode:'bridge',season:'spring',weather:'clear',light:'day',film:'river'};
const buttonText=(a,k)=>p.querySelector('['+a+'="'+k+'"]')?.textContent.trim()||k;
const press=(a,k)=>$$('['+a+']').forEach(b=>b.setAttribute('aria-pressed',String(b.getAttribute(a)===k)));
const show=(a,on)=>{$('['+a+']').hidden=!on};
const status=t=>{$('[data-qm-status]').textContent=t};
const id=()=>state.mode==='film'?'film-'+state.film:state.mode+'-'+state.season+'-'+(state.mode==='wide'?state.light:state.weather);
function sync(){
for(const k of ['mode','season','weather','light','film'])press('data-qm-'+k,state[k]);
const scroll=state.mode==='scroll',film=state.mode==='film',wide=state.mode==='wide';
show('data-qm-season-row',!film);show('data-qm-weather-row',!film&&!wide);show('data-qm-light-row',wide);show('data-qm-film-row',film);show('data-qm-pan-row',scroll);
stage.classList.toggle('is-scroll',scroll);stage.classList.remove('is-overview');stage.scrollLeft=0;$('[data-qm-pan]').value=0;$('[data-qm-pan]').disabled=false;$('[data-qm-overview]').setAttribute('aria-pressed','false');
v.controls=!scroll;v.pause();v.src=root+id()+'.mp4';v.poster=root+id()+'.webp';v.load();
$('[data-qm-direct]').href=root+id()+'.mp4';
$('[data-qm-title]').textContent=film?buttonText('data-qm-film',state.film):[buttonText('data-qm-mode',state.mode),buttonText('data-qm-season',state.season),buttonText(wide?'data-qm-light':'data-qm-weather',wide?state.light:state.weather)].join(' · ');
$('[data-qm-seek]').value=0;status('');
}
for(const k of ['mode','season','weather','light','film'])$$('[data-qm-'+k+']').forEach(b=>b.addEventListener('click',()=>{state[k]=b.getAttribute('data-qm-'+k);sync()}));
function choose(clip){const a=clip.split('-');state.mode=a[0];if(a[0]==='film')state.film=a[1];else {state.season=a[1];state[a[0]==='wide'?'light':'weather']=a[2]}sync()}
$$('[data-qm-clip]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();choose(a.dataset.qmClip);stage.scrollIntoView({block:'center'})}));
document.querySelectorAll('[data-qm-pick]').forEach(a=>a.addEventListener('click',()=>choose('film-'+a.dataset.qmPick)));
$('[data-qm-play]').addEventListener('click',()=>{if(v.paused)v.play().catch(()=>status(L('播放未成功，請使用「開啟影片」。','Playback could not start. Use Open video.','再生できない場合は動画を開いてください。')));else v.pause()});
const playLabel=()=>{$('[data-qm-play]').textContent=v.paused?L('播放','Play','再生'):L('暫停','Pause','一時停止')};
v.addEventListener('play',playLabel);v.addEventListener('pause',playLabel);v.addEventListener('ended',playLabel);
$('[data-qm-full]').addEventListener('click',async()=>{try{if(v.requestFullscreen)await v.requestFullscreen();else if(v.webkitEnterFullscreen)v.webkitEnterFullscreen();else status(L('此瀏覽器不支援全螢幕，請開啟影片。','Fullscreen unavailable. Open the video instead.','全画面非対応。動画を開いてください。'))}catch{status(L('無法全螢幕，請開啟影片。','Fullscreen unavailable. Open the video instead.','全画面非対応。動画を開いてください。'))}});
const pan=$('[data-qm-pan]');pan.addEventListener('input',()=>{stage.scrollLeft=(stage.scrollWidth-stage.clientWidth)*Number(pan.value)/100});stage.addEventListener('scroll',()=>{const max=stage.scrollWidth-stage.clientWidth;pan.value=max>0?100*stage.scrollLeft/max:0});
$('[data-qm-overview]').addEventListener('click',e=>{const on=stage.classList.toggle('is-overview');e.currentTarget.setAttribute('aria-pressed',String(on));stage.scrollLeft=0;pan.value=0;pan.disabled=on});
const seek=$('[data-qm-seek]');seek.addEventListener('input',()=>{if(Number.isFinite(v.duration))v.currentTime=Number(seek.value)/100*v.duration});v.addEventListener('timeupdate',()=>{if(Number.isFinite(v.duration)&&v.duration>0)seek.value=100*v.currentTime/v.duration});
v.addEventListener('error',()=>{if(v.error)status(L('影片載入失敗，請重新選片或開啟影片。','Video unavailable. Try another clip or open it directly.','動画の読み込みに失敗しました。別の映像を選択してください。'))});
})();
