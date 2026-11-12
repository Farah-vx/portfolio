// EDIT THIS SECTION: paste your real email, GitHub profile and project links.
const profile = { email: 'farahrifad2006@gmail.com', phone: '+971 56 457 6240', linkedin: '', github: 'https://github.com/Farah-vx' };
// Blank links are safely hidden. Replace descriptions with your own accurate wording.
const projects = [
  {
    "title": "Luxe Japan",
    "category": "web",
    "label": "WEB DEVELOPMENT",
    "style": "japan",
    "artwork": "Luxe<br>Japan",
    "description": "A luxury travel website showcasing Japanese destinations and travel packages, with dedicated pages for packages, bookings and enquiries.",
    "role": "",
    "tools": [
      "HTML",
      "CSS"
    ],
    "video": "",
    "code": "https://github.com/Farah-vx/Farah-vx.github.io",
    "live": "https://farah-vx.github.io/",
    "brief": "A luxury travel website for exploring Japanese destinations, comparing packages and planning a trip.",
    "localVideo": "assets/videos/luxe-japan.mp4"
  },
  {
    "title": "K Archive",
    "category": "web",
    "label": "INTERACTIVE DIGITAL EXPERIENCE",
    "style": "archive",
    "artwork": "K<br>ARCHIVE",
    "description": "An editorial-style digital archive exploring Korean culture and contemporary luxury fashion. The experience features a draggable rotating image gallery, editorial and trends sections, and membership sign-up and sign-in screens.",
    "role": "",
    "tools": [],
    "video": "https://youtu.be/N_df2hsktSA",
    "code": "https://github.com/Farah-vx/KArchive",
    "live": "",
    "brief": "An interactive Korean fashion archive with a rotating gallery, editorial stories and membership screens.",
    "localVideo": "assets/videos/karchive.mp4"
  },
  {
    "title": "Knowledge Graph: Driverless Cars & IoT",
    "category": "research",
    "label": "RESEARCH & VISUAL STORYTELLING",
    "style": "bot",
    "artwork": "Connected<br>futures.",
    "description": "A knowledge graph created using Prezi to explore driverless cars and their relationship with the Internet of Things (IoT), presenting connections between concepts in a visual format.",
    "role": "",
    "tools": [
      "Prezi",
      "IoT",
      "Knowledge graph"
    ],
    "video": "https://youtu.be/R5uSEmiRcRY",
    "code": "",
    "live": "",
    "brief": "A visual Prezi knowledge graph connecting driverless cars with IoT, sensors and data."
  },
  {
    "title": "Harry Potter API",
    "category": "api",
    "label": "API PROJECT",
    "style": "potter",
    "artwork": "The wizarding<br>world.",
    "description": "An API-based project that lets users browse information about Harry Potter books, characters and movies.",
    "role": "",
    "tools": [
      "API integration"
    ],
    "video": "https://youtu.be/ABfb-3ItaHs",
    "code": "",
    "live": "",
    "brief": "An API-powered browsing experience for Harry Potter books, characters and films."
  },
  {
    "title": "Creative Coding: Animated Forms",
    "category": "creative",
    "label": "CREATIVE CODING",
    "style": "bot",
    "artwork": "Motion<br>in layers.",
    "description": "A p5.js sketch that draws six layered, animated shapes. Mouse movement changes their distortion, while warm-to-cool colours and fading trails create a flowing visual effect.",
    "role": "",
    "tools": [
      "JavaScript",
      "p5.js"
    ],
    "video": "",
    "code": "https://github.com/Farah-vx/SA-2-Creative-Coding",
    "live": "",
    "brief": "A p5.js experiment with layered forms, colour transitions and motion that responds to the mouse."
  },
  {
    "title": "GemQuest: The Gem Hunt",
    "category": "games",
    "label": "2D GAME DESIGN",
    "style": "potter",
    "artwork": "Grow.<br>Shrink. Explore.",
    "description": "A Unity 2D platformer with three increasingly challenging levels. Collect every gem to unlock the finish flag while managing a character that grows automatically. Shrink to fit through gaps and avoid hazards before time runs out.",
    "role": "",
    "tools": [
      "Unity",
      "2D game design"
    ],
    "video": "https://youtu.be/2ScAxhkA5lI",
    "code": "",
    "live": "https://fvrhx.itch.io/sproutasent",
    "brief": "A Unity platformer built around collecting gems, changing size and navigating obstacles."
  },
  {
    "title": "Sveltra — Fitness App Prototype",
    "category": "design",
    "label": "UI/UX & MOBILE APP DESIGN",
    "style": "vet",
    "artwork": "Move.<br>Feel. Grow.",
    "description": "An interactive fitness app prototype featuring onboarding, a dashboard with activity statistics, workout and yoga browsing, exercise timers, a weekly schedule and a personal profile. The walkthrough demonstrates navigation between the designed screens.",
    "role": "",
    "tools": [
      "UI/UX design",
      "Interactive prototyping"
    ],
    "video": "",
    "localVideo": "assets/videos/sveltra.mp4",
    "code": "",
    "live": "",
    "brief": "A fitness app prototype connecting onboarding, activity tracking, workout browsing and weekly planning.",
    "prototype": "https://www.figma.com/proto/W8utVZnQDwnsG83nELLk9K/SA-2-hi-fi?node-id=1-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
  },
  {
    "title": "Visual Design Explorations",
    "category": "design",
    "label": "GRAPHIC DESIGN / FIGMA",
    "style": "design",
    "artwork": "Colour & form.",
    "brief": "A Figma study exploring gradients, geometric forms and contrasting colour palettes across six compositions.",
    "description": "A collection of visual design exercises created in Figma. The compositions explore gradients, layered geometric shapes, contrast and spacing, with variations in green, blue, purple and burgundy palettes.",
    "role": "",
    "tools": [
      "Figma",
      "Graphic design",
      "Colour & composition"
    ],
    "video": "",
    "code": "",
    "live": "",
    "design": "https://www.figma.com/design/UD64jvySMPk7VIAn1SEDrt/Exercise-5"
  }
];

const $ = selector => document.querySelector(selector);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const coverTypes = ['japan','archive','graph','potter','creative','game','fitness','visual'];
let filter='all',query='';
function matchingProjects(){return projects.map((p,index)=>({p,index})).filter(({p,index})=>{
 const category=filter==='all'||(filter==='featured'&&index<4)||(filter==='web'&&p.category==='web')||(filter==='code'&&['api','creative','python'].includes(p.category))||(filter==='design'&&['research','design'].includes(p.category))||(filter==='games'&&p.category==='games');
 return category&&`${p.title} ${p.description} ${p.tools.join(' ')}`.toLowerCase().includes(query.toLowerCase());
});}
function addLink(container,label,url,className='project-link'){
 if(!url)return;try{if(!['https:','mailto:'].includes(new URL(url).protocol))return;}catch{return;}
 const a=document.createElement('a');a.textContent=label;a.href=url;a.className=className;if(url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer';}container.append(a);
}
function coverHTML(index){const posters={0:'luxe-japan',1:'karchive',6:'sveltra'};if(posters[index])return `<div class="project-poster"><img src="assets/${posters[index]}-poster.jpg" alt="" loading="lazy"></div>`;return [
 '<div class="japan-art"><span class="art-word">Luxe<br><i>Japan.</i></span><span class="art-caption">A DIFFERENT PERSPECTIVE</span></div>',
 '<div class="archive-art"><img src="assets/karchive.jpg" alt="" loading="lazy"><span class="archive-word">K / ARCHIVE</span><span class="art-caption">PROJECT WALKTHROUGH</span></div>',
 '<div class="graph-art"><img src="assets/IOT.png" alt="Knowledge graph about driverless cars and the Internet of Things" loading="lazy"></div>',
 '<div class="creative-art"><canvas class="creative-canvas"></canvas><span class="art-caption">MOVE YOUR CURSOR / LIVE VISUAL</span></div>',
 '<div class="game-art"><span class="game-gem">◆</span><span class="game-player"></span><span class="platform p1"></span><span class="platform p2"></span><span class="platform p3"></span><span class="art-caption">GEMQUEST / CONCEPT COVER</span></div>',
 '<div class="fitness-art"><img src="assets/fitness.jpg" alt="" loading="lazy"><span class="art-caption">PROTOTYPE WALKTHROUGH</span></div>',
 '<div class="visual-design-art"><img src="assets/figma-explorations.png" alt="" loading="lazy"></div>'
][index];}
const grid=$('#project-grid');
let motionPaused=reducedMotion.matches;
let revealObserver;
if('IntersectionObserver' in window)revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');revealObserver.unobserve(e.target);}}),{threshold:.08});
function reveal(element){if(revealObserver&&!motionPaused){element.classList.add('reveal-ready');revealObserver.observe(element);}}
function renderGallery(){
 const matches=matchingProjects();for(const child of grid.children)revealObserver?.unobserve(child);grid.replaceChildren();grid.classList.toggle('filtered',filter!=='all'||!!query);
 $('#project-status').textContent=`${String(matches.length).padStart(2,'0')} project${matches.length===1?'':'s'} in this collection`;
 $('#reset-search').hidden=filter==='all'&&!query;
 if(!matches.length){grid.innerHTML='<div class="empty-state"><h3>No matches this time.</h3><p>Try another search or reset the collection.</p></div>';syncCanvases();return;}
 matches.forEach(({p,index},position)=>{
  const card=document.createElement('article');card.className=`project-card card-${coverTypes[index]} ${index<4?'featured':'experiment'}`;card.dataset.index=index;card.style.setProperty('--order',position%4);
  const media=document.createElement('div');media.className='card-media';media.setAttribute('aria-hidden','true');media.innerHTML=coverHTML(index);
  const head=document.createElement('div');head.className='card-top';head.innerHTML=`<span>${String(index+1).padStart(2,'0')} / ${index<4?'SELECTED WORK':'EXPERIMENT'}</span><span class="card-category"></span>`;head.querySelector('.card-category').textContent=p.label;
  const copy=document.createElement('div');copy.className='card-copy';const title=document.createElement('h3');title.textContent=p.title;const desc=document.createElement('p');desc.textContent=p.brief;const tools=document.createElement('span');tools.className='card-tools';tools.textContent=p.tools.length?p.tools.join(' / '):'EDITORIAL / INTERACTIVE EXPERIENCE';copy.append(tools,title,desc);
  const button=document.createElement('button');button.className='card-open';button.setAttribute('aria-label',`Explore ${p.title}`);button.innerHTML='<span class="open-label">Inside the project</span><span class="open-arrow" aria-hidden="true">↗</span>';button.addEventListener('click',()=>openProject(p,index));
  const body=document.createElement('div');body.className='card-body';const links=document.createElement('div');links.className='card-links';addLink(links,'Demo ↗',p.video,'inline-link');addLink(links,'Code ↗',p.code,'inline-link');addLink(links,'Live project ↗',p.live,'inline-link');body.append(head,copy,button,links);const artButton=document.createElement('button');artButton.className='art-open';artButton.setAttribute('aria-label',`Open ${p.title} details`);artButton.innerHTML='<span>Explore ↗</span>';artButton.addEventListener('click',()=>openProject(p,index));media.removeAttribute('aria-hidden');const artwork=document.createElement('div');artwork.className='artwork';artwork.setAttribute('aria-hidden','true');while(media.firstChild)artwork.append(media.firstChild);media.append(artwork,artButton);card.append(media,body);grid.append(card);attachTilt(media);
 });syncCanvases();prepareProjectEntrance();
}
function syncFilters(){document.querySelectorAll('[data-filter]').forEach(b=>{const on=b.dataset.filter===filter;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;syncFilters();renderGallery();}));
$('#project-search').addEventListener('input',e=>{query=e.target.value.trim();renderGallery();});
$('#reset-search').addEventListener('click',()=>{filter='all';query='';$('#project-search').value='';syncFilters();renderGallery();});
const dialog=$('#detail');
function openProject(p,index){
 $('#detail-number').textContent=`NO. ${String(index+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`;
 $('#detail-title').textContent=p.title;$('#detail-category').textContent=p.label;$('#detail-description').textContent=p.description;
 $('#detail-role').textContent=p.role;$('#detail-role').hidden=$('#role-heading').hidden=!p.role;
 const visual=$('#detail-visual');visual.className=`modal-art card-${coverTypes[index]}`;visual.removeAttribute('aria-hidden');visual.innerHTML=coverHTML(index);
 if(p.localVideo){visual.classList.add('has-video');visual.replaceChildren();const video=document.createElement('video');video.controls=true;video.playsInline=true;video.preload='none';video.src=p.localVideo;video.setAttribute('aria-label',p.title+' project walkthrough');visual.append(video);}

 const tags=$('#detail-tags');tags.replaceChildren();p.tools.forEach(t=>{const span=document.createElement('span');span.textContent=t;tags.append(span);});
 const links=$('#detail-links');links.replaceChildren();addLink(links,'Watch on YouTube ↗',p.video);addLink(links,'View code ↗',p.code);addLink(links,'Visit project ↗',p.live);addLink(links,'Try Figma prototype ↗',p.prototype);addLink(links,'View Figma design ↗',p.design);
 dialog.showModal();syncCanvases();if(!motionPaused&&dialog.animate)dialog.animate([{opacity:0,transform:'translateY(25px) scale(.97)'},{opacity:1,transform:'none'}],{duration:380,easing:'cubic-bezier(.22,1,.36,1)'});
}
$('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{const video=$('#detail-visual video');if(video){video.pause();video.removeAttribute('src');video.load();}$('#detail-visual').replaceChildren();syncCanvases();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const nav=$('#nav'),menu=$('#menu');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close −':'Menu +';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu +';}));
const systemTheme=window.matchMedia('(prefers-color-scheme: dark)');
let storedTheme;
try{storedTheme=localStorage.getItem('farah-theme');}catch{}
function setTheme(dark){document.body.classList.toggle('dark',dark);$('#theme').textContent=dark?'☀ Light mode':'◐ Dark mode';$('#theme').setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');$('#theme').setAttribute('aria-pressed',String(dark));}
setTheme(storedTheme ? storedTheme === 'dark' : true);
$('#theme').addEventListener('click',()=>{storedTheme=document.body.classList.contains('dark')?'light':'dark';setTheme(storedTheme==='dark');try{localStorage.setItem('farah-theme',storedTheme);}catch{}});

$('#year').textContent=new Date().getFullYear();
const configuredEmail=typeof profile.email==='string'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email);
addLink($('#contact-links'),'LinkedIn ↗',profile.linkedin,'contact-link');
addLink($('#contact-links'),'GitHub ↗',profile.github,'contact-link');
function contactDetail(label,value,url){const item=document.createElement('div');item.className='contact-detail';const heading=document.createElement('span');heading.textContent=label;const link=document.createElement('a');link.href=url;link.textContent=value;item.append(heading,link);$('#contact-details').append(item);}
if(configuredEmail)contactDetail('EMAIL',profile.email,`mailto:${profile.email}`);
const phoneDial=String(profile.phone||'').replace(/[^+0-9]/g,'');
if(/^[+]?[0-9]{7,15}$/.test(phoneDial))contactDetail('PHONE',profile.phone,`tel:${phoneDial}`);
$('#copy-email').hidden=!configuredEmail;
$('#contact').classList.toggle('email-ready',configuredEmail);
if(configuredEmail){
 $('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(profile.email);$('#copy-status').textContent='Email address copied.';}catch{$('#copy-status').textContent='Please select and copy the email address above.';}});
}
// A single visibility-aware animation loop drives the decorative canvases.
// Continuous, draggable project ribbon. The same cards retain their original detail dialogs.
let ribbonPosition=0,ribbonTarget=0,ribbonRaf=0,ribbonLast=0,ribbonVisible=false,ribbonHover=false,ribbonDrag=null,ribbonMoved=false,ribbonActive=-1,ribbonHold=0;
function ribbonCards(){return [...grid.querySelectorAll('.project-card')];}
function layoutRibbon(){const cards=ribbonCards(),n=cards.length;if(!n)return;const w=Math.min(innerWidth<761?innerWidth*.69:innerWidth*.32,430),gap=w*.99;let active=0,nearest=Infinity;
 cards.forEach((card,i)=>{let d=((i-ribbonPosition+n/2)%n+n)%n-n/2;if(Math.abs(d)<nearest){nearest=Math.abs(d);active=i;}const x=d*gap,y=Math.sin(d*.82)*52,z=-Math.abs(d)*38,angle=-Math.sin(d*.7)*19;
 card.style.width=w+'px';card.style.setProperty('transform',`translate(-50%,-50%) translate3d(${x}px,${y}px,${z}px) rotateY(${angle}deg) rotateZ(${Math.cos(d*.8)*-4}deg)`,'important');card.style.opacity=Math.abs(d)>2.9?'0':'1';card.style.zIndex=String(20-Math.round(Math.abs(d)*4));card.style.pointerEvents=Math.abs(d)>2.9?'none':'auto';card.querySelector('.art-open').tabIndex=Math.abs(d)>1.5?-1:0;
 });if(active!==ribbonActive){ribbonActive=active;const index=Number(cards[active].dataset.index),p=projects[index];$('#ribbon-title').textContent=p.title;$('#ribbon-brief').textContent=p.brief;$('#ribbon-index').textContent=String(active+1).padStart(2,'0')+' / '+String(n).padStart(2,'0');}}
function ribbonTick(now){const dt=Math.min((now-ribbonLast)||16,40);ribbonLast=now;if(ribbonVisible&&!document.hidden){if(!motionPaused&&!ribbonHover&&!ribbonDrag&&!dialog.open&&now>ribbonHold)ribbonTarget+=dt*.00007;ribbonPosition+=(ribbonTarget-ribbonPosition)*.11;layoutRibbon();}ribbonRaf=requestAnimationFrame(ribbonTick);}
function prepareProjectEntrance(){ribbonPosition=0;ribbonTarget=0;ribbonActive=-1;layoutRibbon();const any=ribbonCards().length>0;$('.ribbon-footer').hidden=!any;for(const id of ['ribbon-prev','ribbon-next','ribbon-open'])$('#'+id).disabled=!any;if(!ribbonRaf)ribbonRaf=requestAnimationFrame(ribbonTick);}
function settleProjects(){layoutRibbon();}
function stepRibbon(step){ribbonTarget=Math.round(ribbonTarget)+step;ribbonHold=performance.now()+6000;if(motionPaused){ribbonPosition=ribbonTarget;layoutRibbon();}}
$('#ribbon-prev').addEventListener('click',()=>stepRibbon(-1));$('#ribbon-next').addEventListener('click',()=>stepRibbon(1));$('#ribbon-open').addEventListener('click',()=>{const c=ribbonCards()[ribbonActive];if(c)openProject(projects[Number(c.dataset.index)],Number(c.dataset.index));});
$('#replay-projects').addEventListener('click',()=>{ribbonTarget=0;ribbonHold=performance.now()+4000;});
grid.addEventListener('pointerenter',()=>ribbonHover=true);grid.addEventListener('pointerleave',()=>ribbonHover=false);
grid.addEventListener('pointerdown',e=>{if(e.button!==0)return;ribbonDrag={x:e.clientX,target:ribbonTarget,id:e.pointerId};ribbonMoved=false;});
grid.addEventListener('pointermove',e=>{if(!ribbonDrag)return;const delta=e.clientX-ribbonDrag.x;if(Math.abs(delta)>5){ribbonMoved=true;grid.setPointerCapture(e.pointerId);grid.classList.add('dragging');}ribbonTarget=ribbonDrag.target-delta/Math.min(innerWidth*.32,430);ribbonHold=performance.now()+5000;if(motionPaused){ribbonPosition=ribbonTarget;layoutRibbon();}});
const endRibbonDrag=()=>{ribbonDrag=null;grid.classList.remove('dragging');};grid.addEventListener('pointerup',endRibbonDrag);grid.addEventListener('pointercancel',endRibbonDrag);
grid.addEventListener('click',e=>{if(ribbonMoved){e.preventDefault();e.stopImmediatePropagation();ribbonMoved=false;}},true);
grid.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();stepRibbon(e.key==='ArrowRight'?1:-1);}});
grid.addEventListener('focusin',()=>{ribbonHover=true;});grid.addEventListener('focusout',()=>{ribbonHover=false;});
window.addEventListener('resize',layoutRibbon);
new IntersectionObserver(entries=>{ribbonVisible=entries[0].isIntersecting;},{threshold:0}).observe(grid);
let surfaces=[],frame=0,lastPaint=0;

const visibilityObserver='IntersectionObserver'in window?new IntersectionObserver(entries=>{entries.forEach(e=>{const surface=surfaces.find(s=>s.canvas===e.target);if(surface)surface.visible=e.isIntersecting;});startMotion();},{threshold:0}):null;
function resizeSurface(s){const r=s.canvas.getBoundingClientRect();s.width=Math.max(1,r.width);s.height=Math.max(1,r.height);const dpr=Math.min(window.devicePixelRatio||1,1.5);s.canvas.width=Math.round(s.width*dpr);s.canvas.height=Math.round(s.height*dpr);s.ctx.setTransform(dpr,0,0,dpr,0,0);}
function syncCanvases(){
 visibilityObserver?.disconnect();surfaces=[...document.querySelectorAll('#hero-canvas,.creative-canvas')].map(canvas=>{const ctx=canvas.getContext('2d');if(!ctx)return null;const s={canvas,ctx,width:1,height:1,visible:true,x:.5,y:.5,tx:.5,ty:.5,hero:canvas.id==='hero-canvas'};resizeSurface(s);visibilityObserver?.observe(canvas);return s;}).filter(Boolean);
 surfaces.forEach(s=>paintSurface(s,0));startMotion();
}
function paintSurface(s,time){
 const {ctx:c,width:w,height:h}=s;c.clearRect(0,0,w,h);s.x+=(s.tx-s.x)*.045;s.y+=(s.ty-s.y)*.045;
 if(s.hero){
  const dark=document.body.classList.contains('dark');c.strokeStyle=dark?'rgba(249,211,192,.24)':'rgba(113,44,37,.16)';c.lineWidth=.8;
  const x=w*(.64+(s.x-.5)*.08),y=h*(.46+(s.y-.5)*.06);
  for(let ring=0;ring<14;ring++){c.beginPath();for(let i=0;i<=150;i++){const a=i/150*Math.PI*2;const ripple=Math.sin(a*3+time*.3+ring*.14)*14+Math.cos(a*5-time*.2)*8;const rx=w*.14+ring*12+ripple,ry=h*.24+ring*7+ripple;const px=x+Math.cos(a)*rx,py=y+Math.sin(a)*ry;i?c.lineTo(px,py):c.moveTo(px,py);}c.closePath();c.stroke();}
 }else{
  const x=w*(.5+(s.x-.5)*.12),y=h*(.48+(s.y-.5)*.1),radius=Math.min(w,h)*.23;
  for(let ring=0;ring<9;ring++){c.strokeStyle=`hsla(${28+ring*3},${40-ring*2}%,${68+ring*2}%,${.85-ring*.055})`;c.lineWidth=1.1;c.beginPath();for(let i=0;i<=120;i++){const a=i/120*Math.PI*2;const r=radius+ring*5+Math.sin(a*4+time+ring*.18)*(9+s.x*18);const px=x+Math.cos(a+time*.12)*r,py=y+Math.sin(a+time*.12)*r*.85;i?c.lineTo(px,py):c.moveTo(px,py);}c.closePath();c.stroke();}
 }
}
function tick(time){frame=0;if(motionPaused||document.hidden)return;if(time-lastPaint>=32){surfaces.filter(s=>s.visible).forEach(s=>paintSurface(s,time/1000));lastPaint=time;}if(surfaces.some(s=>s.visible))frame=requestAnimationFrame(tick);}
function startMotion(){if(!motionPaused&&!document.hidden&&!frame&&surfaces.some(s=>s.visible))frame=requestAnimationFrame(tick);}
function updateMotion(){$('#replay-projects').disabled=motionPaused;document.body.classList.toggle('motion-paused',motionPaused);$('#motion-toggle').textContent=motionPaused?'Play motion ▷':'Pause motion Ⅱ';$('#motion-toggle').setAttribute('aria-pressed',String(motionPaused));if(motionPaused){cancelAnimationFrame(frame);frame=0;document.querySelectorAll('.reveal-ready').forEach(e=>e.classList.add('in-view'));settleProjects();}else startMotion();}
$('#motion-toggle').addEventListener('click',()=>{if(reducedMotion.matches){$('#motion-toggle').textContent='Reduced motion enabled';return;}motionPaused=!motionPaused;updateMotion();});
reducedMotion.addEventListener('change',()=>{motionPaused=reducedMotion.matches;updateMotion();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else startMotion();});
window.addEventListener('resize',()=>{surfaces.forEach(s=>{resizeSurface(s);paintSurface(s,0);});});
document.addEventListener('pointermove',e=>{if(!finePointer.matches||motionPaused)return;surfaces.filter(s=>s.visible).forEach(s=>{const r=s.canvas.getBoundingClientRect();if(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom){s.tx=(e.clientX-r.left)/r.width;s.ty=(e.clientY-r.top)/r.height;}});},{passive:true});
function attachTilt(card){
 let pending=0;card.addEventListener('pointermove',e=>{if(!finePointer.matches||motionPaused)return;cancelAnimationFrame(pending);pending=requestAnimationFrame(()=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;card.style.setProperty('--rx',`${(y-.5)*-5}deg`);card.style.setProperty('--ry',`${(x-.5)*5}deg`);card.style.setProperty('--sx',`${x*100}%`);card.style.setProperty('--sy',`${y*100}%`);});});
 card.addEventListener('pointerleave',()=>{cancelAnimationFrame(pending);card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg');card.style.setProperty('--sx','50%');card.style.setProperty('--sy','50%');});
}
// Gentle magnetic movement on primary calls to action; native cursor stays visible.
document.querySelectorAll('.primary').forEach(a=>{a.addEventListener('pointermove',e=>{if(!finePointer.matches||motionPaused)return;const r=a.getBoundingClientRect();a.style.setProperty('--mx',`${(e.clientX-r.left-r.width/2)*.08}px`);a.style.setProperty('--my',`${(e.clientY-r.top-r.height/2)*.12}px`);});a.addEventListener('pointerleave',()=>{a.style.setProperty('--mx','0px');a.style.setProperty('--my','0px');});});
const stage=$('.portrait-stage');stage?.addEventListener('pointermove',e=>{if(!finePointer.matches||motionPaused)return;const r=stage.getBoundingClientRect();stage.style.setProperty('--px',`${((e.clientX-r.left)/r.width-.5)*14}px`);stage.style.setProperty('--py',`${((e.clientY-r.top)/r.height-.5)*8}px`);});stage?.addEventListener('pointerleave',()=>{stage.style.setProperty('--px','0px');stage.style.setProperty('--py','0px');});
document.querySelectorAll('[data-sticker]').forEach(sticker=>{
 let drag;const move=(x,y)=>{x=Math.max(-50,Math.min(50,x));y=Math.max(-60,Math.min(60,y));sticker.dataset.x=x;sticker.dataset.y=y;sticker.style.setProperty('--dx',`${x}px`);sticker.style.setProperty('--dy',`${y}px`);};
 sticker.addEventListener('pointerdown',e=>{if(motionPaused||e.button!==0)return;drag={x:e.clientX,y:e.clientY,ox:Number(sticker.dataset.x||0),oy:Number(sticker.dataset.y||0)};sticker.setPointerCapture(e.pointerId);sticker.classList.add('dragging');});
 sticker.addEventListener('pointermove',e=>{if(drag)move(drag.ox+e.clientX-drag.x,drag.oy+e.clientY-drag.y);});
 const end=()=>{drag=null;sticker.classList.remove('dragging');};['pointerup','pointercancel','lostpointercapture'].forEach(type=>sticker.addEventListener(type,end));
 sticker.addEventListener('keydown',e=>{if(motionPaused||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();let x=Number(sticker.dataset.x||0),y=Number(sticker.dataset.y||0);move(x+(e.key==='ArrowRight'?10:e.key==='ArrowLeft'?-10:0),y+(e.key==='ArrowDown'?10:e.key==='ArrowUp'?-10:0));});
});
document.querySelectorAll('.reveal').forEach(reveal);
let scrollPending=false;function progress(){const max=document.documentElement.scrollHeight-innerHeight;$('.reading-progress').style.width=`${max>0?scrollY/max*100:0}%`;scrollPending=false;}
window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(progress);}},{passive:true});window.addEventListener('resize',progress);
updateMotion();renderGallery();progress();
