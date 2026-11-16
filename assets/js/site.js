(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const b=$('#burger'),l=$('#links');const set=o=>{l.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.style.overflow=o?'hidden':''};
b.onclick=()=>set(!l.classList.contains('open'));$$('a',l).forEach(a=>a.onclick=()=>set(false));addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});addEventListener('resize',()=>{});
$('#year').textContent=new Date().getFullYear();
if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;io.unobserve(t);
if(t.classList.contains('bars')||t.classList.contains('rings'))t.classList.add('go');else if(!rm){const n=+t.dataset.count,s=performance.now(),k=now=>{const p=Math.min((now-s)/1200,1);t.firstChild.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(k)};requestAnimationFrame(k)}}),{threshold:.5});
$$('.bars,.rings,[data-count]').forEach(e=>io.observe(e))}else $$('.bars,.rings').forEach(e=>e.classList.add('go'));
const xs=$$('.xi');xs.forEach(x=>{const on=()=>{xs.forEach(y=>y.classList.toggle('on',y===x))};x.addEventListener('mouseenter',()=>{if(innerWidth>960)on()});x.addEventListener('focus',on);x.addEventListener('click',on)});
const c=$('[data-car]');if(c){const rs=$$('.rq',c),ds=$$('.dots button',c);let i=0,t;const show=n=>{i=(n+rs.length)%rs.length;rs.forEach((r,k)=>r.classList.toggle('on',k===i));ds.forEach((d,k)=>d.classList.toggle('on',k===i))};
const run=()=>{clearInterval(t);if(!rm)t=setInterval(()=>show(i+1),6500)};$('[data-prev]',c).onclick=()=>{show(i-1);run()};$('[data-next]',c).onclick=()=>{show(i+1);run()};ds.forEach((d,k)=>d.onclick=()=>{show(k);run()});run()}
const f=$('#contactForm');if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);window.open('https://wa.me/919819451919?text='+encodeURIComponent('Hi Fitness Milestones!\nName: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nEmail: '+(d.get('email')||'Not provided')+'\nGoals: '+(d.get('message')||'Not specified')),'_blank','noopener')});
})();
