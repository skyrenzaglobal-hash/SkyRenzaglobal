(function(){
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const menu=document.querySelector('.menu-btn'); const nav=document.querySelector('.navlinks');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';});}
  const form=document.getElementById('contactForm');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();const d=new FormData(form);const subject='SKYRENZA website inquiry — '+d.get('service');const body=[`Name: ${d.get('name')}`,`Company: ${d.get('company')||'Not provided'}`,`Email: ${d.get('email')}`,`Country / time zone: ${d.get('country')||'Not provided'}`,`Service: ${d.get('service')}`,'',`Requirements: ${d.get('message')}`].join('\n');const status=document.getElementById('formStatus');if(status)status.textContent='Opening your email app. Review the message and press Send to submit your inquiry.';window.location.href='mailto:Skyrenzaglobal@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);});}
})();
