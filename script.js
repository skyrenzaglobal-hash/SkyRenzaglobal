const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuToggle.textContent=open?'×':'☰';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');if(menuToggle)menuToggle.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
const launcher=document.querySelector('.assistant-launcher'),panel=document.querySelector('.assistant-panel'),closeBtn=document.querySelector('.assistant-close'),messages=document.querySelector('.assistant-messages'),form=document.querySelector('.assistant-form'),input=form.querySelector('input');
function toggleAssistant(show){panel.hidden=!show;launcher.setAttribute('aria-expanded',String(show));if(show)input.focus();}
launcher.addEventListener('click',()=>toggleAssistant(panel.hidden));closeBtn.addEventListener('click',()=>toggleAssistant(false));
const answers={
 services:'SKYRENZA focuses on customer care and voice support, email and chat support, back-office operations, lead generation support, data processing and customer experience operations. The right scope depends on your business requirements.',
 ai:'We are technology-ready and interested in responsible AI-assisted workflows such as knowledge retrieval, request organization and drafting support. Specific tools and integrations need to be agreed with each client. A human remains responsible for sensitive or complex cases.',
 contact:'You can email skyrenzaglobal@gmail.com or call +91 62394 96472. Share the service you need, channels, expected volumes and preferred start date so the team can understand your requirements.',
 founder:'SKYRENZA was founded by Abhijit Kale. The company vision is to build a people-first business process and customer experience partner with a long-term focus on client relationships.',
 pricing:'Pricing depends on the service, operating hours, languages, expected volume, tools and quality requirements. Please contact skyrenzaglobal@gmail.com to discuss a scope and proposal.',
 default:'Thanks for your question. This website assistant is a demo and does not connect to a live AI service or company inbox. For a confirmed answer, email skyrenzaglobal@gmail.com or call +91 62394 96472.'
};
function addMessage(text,who='assistant'){const el=document.createElement('div');el.className='assistant-bubble'+(who==='user'?' user':'');el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight;}
function answerFor(q){q=q.toLowerCase();if(/service|offer|support|bpo/.test(q))return answers.services;if(/ai|artificial|technology|automation/.test(q))return answers.ai;if(/contact|email|phone|call|number/.test(q))return answers.contact;if(/founder|abhijit|vision|about/.test(q))return answers.founder;if(/price|cost|rate|pricing|quote/.test(q))return answers.pricing;return answers.default;}
function sendQuestion(q){q=q.trim();if(!q)return;addMessage(q,'user');input.value='';setTimeout(()=>addMessage(answerFor(q)),180);}
document.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>sendQuestion(({services:'What services do you offer?',ai:'Do you offer AI support?',contact:'How can I contact SKYRENZA?'})[b.dataset.question])));
form.addEventListener('submit',e=>{e.preventDefault();sendQuestion(input.value);});
