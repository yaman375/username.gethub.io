
const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')===current) a.classList.add('active');
});

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
   if(e.isIntersecting){
     e.target.classList.add('show');
     if(e.target.classList.contains('bar')) e.target.querySelector('i').style.width=e.target.dataset.width+'%';
   }
 });
},{threshold:.12});
document.querySelectorAll('.reveal,.bar').forEach(el=>observer.observe(el));

const typed=document.querySelector('[data-typing]');
if(typed){
 const words=['Web Developer','Frontend Developer','UI Builder','Freelancer'];
 let wi=0,ci=0,del=false;
 function type(){
   const word=words[wi];
   typed.textContent=word.slice(0,ci);
   if(!del){ci++;if(ci>word.length){del=true;setTimeout(type,1000);return}}
   else{ci--;if(ci<0){del=false;wi=(wi+1)%words.length}}
   setTimeout(type,del?55:95);
 }
 type();
}

document.querySelectorAll('.year').forEach(x=>x.textContent=new Date().getFullYear());

const form=document.querySelector('#contactForm');
if(form) form.addEventListener('submit',e=>{
 e.preventDefault();
 const note=document.querySelector('#formNote');
 if(note){note.textContent='Thanks! Your message is ready to be sent. Connect this form to your backend/email service for real submissions.';note.style.color='var(--accent)'}
 form.reset();
});
