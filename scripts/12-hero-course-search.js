(() => {
  'use strict';
  const form=document.getElementById('heroSearchForm'), input=document.getElementById('heroSearchInput'), box=document.getElementById('heroSearchResults');
  if(!form||!input||!box)return;
  // These are subjects to explore, not verified courses or availability.
  const subjects=[
    {name:'Computer Science / IT',tags:'computer computing software technology programming it'},
    {name:'Data Science & AI',tags:'data analytics artificial intelligence machine learning ai'},
    {name:'Engineering',tags:'engineering civil electrical mechanical engineering'},
    {name:'MBA / Business Administration',tags:'business management mba administration'},
    {name:'Medicine (MBBS / MD)',tags:'medicine medical doctor mbbs md'},
    {name:'Cybersecurity',tags:'cyber security computer technology'},
    {name:'Finance & FinTech',tags:'finance accounting fintech banking'},
    {name:'Business Analytics & Management',tags:'business management analytics'},
    {name:'Renewable Energy & Sustainability',tags:'renewable energy sustainability environment'},
    {name:'Healthcare & Public Health',tags:'health healthcare public nursing'},
    {name:'Law & Social Sciences',tags:'law legal social science'},
    {name:'Arts & Design',tags:'arts design creative'},
    {name:'Hospitality & Tourism',tags:'hospitality tourism hotel'},
    {name:'Education & Teaching',tags:'education teaching teacher'}
  ];
  const universities=[
    ['University of Melbourne','Australia'],['Monash University','Australia'],['University of Sydney','Australia'],
    ['University of Toronto','Canada'],['University of British Columbia','Canada'],['McGill University','Canada'],
    ['University of Manchester','UK'],["King's College London",'UK'],['Kingston University','UK'],
    ['University of California, Los Angeles','USA'],['New York University','USA'],['Arizona State University','USA'],
    ['University College Dublin','Ireland'],['Trinity College Dublin','Ireland'],['University of Limerick','Ireland'],
    ['University of Auckland','New Zealand'],['Victoria University of Wellington','New Zealand'],['University of Otago','New Zealand'],
    ['Universiti Malaya','Malaysia'],["Taylor's University",'Malaysia'],['Universiti Teknologi Malaysia','Malaysia'],
    ['University of Tokyo','Japan'],['Kyoto University','Japan'],['Waseda University','Japan'],
    ['University of Amsterdam','Europe'],['Technical University of Munich','Europe'],['Bocconi University','Europe'],
    ['University of Dubai','Dubai'],['American University in Dubai','Dubai'],['Heriot-Watt University Dubai','Dubai']
  ];
  const places=['Australia','Canada','USA','UK','Ireland','New Zealand','Malaysia','Japan','Europe','Dubai','China','Finland','Greece','Italy','Malta','South Korea'];
  const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const options=[...subjects.map(x=>({type:'Study area',name:x.name,tags:x.tags})),...universities.map(([name,place])=>({type:'University example',name,tags:place,place})),...places.map(name=>({type:'Destination',name,tags:'study abroad destination '+name,place:name}))];
  const tokens=s=>normalize(s).split(/\s+/).filter(Boolean);
  const detail=(type,name,place)=>type==='Study area'?'Subject to explore · specific courses and availability must be confirmed':type==='University example'?place+' · example, not a confirmed partner or course':'Explore study information for '+name;
  const dashboard=document.getElementById('heroSearchDashboard'), dashTitle=document.getElementById('heroDashTitle'), dashCount=document.getElementById('heroDashCount'), dashGrid=document.getElementById('heroDashGrid'), dashEmpty=document.getElementById('heroDashEmpty'), dashInput=document.getElementById('heroDashInput');
  function getMatches(query){const terms=tokens(query);return terms.length?options.filter(item=>{const hay=normalize(item.name+' '+item.tags+' '+item.type);return terms.every(term=>hay.includes(term));}):options.filter(x=>x.type==='Study area');}
  function showDashboard(query){
    const clean=query.trim(), matched=getMatches(clean);input.value=clean;dashInput.value=clean;box.hidden=true;input.setAttribute('aria-expanded','false');dashboard.hidden=false;
    dashTitle.textContent=clean?'Results for “'+clean+'”':'Explore study areas';dashCount.textContent=matched.length+' '+(matched.length===1?'result':'results');dashGrid.replaceChildren();dashEmpty.hidden=matched.length>0;
    matched.forEach(item=>{
      const card=document.createElement('article');card.className='hero-dash-card';
      const label=document.createElement('span');label.className='hero-dash-label';label.textContent=item.type;
      const icon=document.createElement('span');icon.className='hero-dash-icon';icon.innerHTML=item.type==='Study area'?'<i class="bi bi-journal-bookmark" aria-hidden="true"></i>':item.type==='Destination'?'<i class="bi bi-geo-alt" aria-hidden="true"></i>':'<i class="bi bi-building" aria-hidden="true"></i>';
      const title=document.createElement('h3');title.textContent=item.name;
      const description=document.createElement('p');description.textContent=detail(item.type,item.name,item.place);
      const link=document.createElement('a');link.className='hero-dash-link';
      if(item.type==='Destination'){link.href='study-'+item.name.toLowerCase().replace(/\s+/g,'-')+'.html';link.textContent='Explore destination →';}
      else{const msg='Hello ASPIRE, I would like to know about '+item.name+(item.place?' in '+item.place:'')+'. Please share available courses and entry requirements.';link.href='https://wa.me/8801805840449?text='+encodeURIComponent(msg);link.target='_blank';link.rel='noopener noreferrer';link.textContent='Ask about this '+(item.type==='Study area'?'subject':'university')+' ↗';}
      card.append(icon,label,title,description,link);dashGrid.append(card);
    });
    dashboard.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  }
  function renderSuggestions(){
    const query=input.value.trim();if(!query){box.hidden=true;box.replaceChildren();input.setAttribute('aria-expanded','false');return}
    const matched=getMatches(query);box.replaceChildren();box.hidden=false;input.setAttribute('aria-expanded','true');
    const head=document.createElement('div');head.className='hero-search-head';head.textContent=matched.length?'Suggestions — press Enter to view all results':'No suggestions — press Enter to see results';box.append(head);
    const list=document.createElement('div');list.className='hero-search-list';
    matched.slice(0,6).forEach(item=>{
      const row=document.createElement('button');row.type='button';row.className='hero-search-result';
      const icon=document.createElement('span');icon.className='hero-result-icon';icon.innerHTML=item.type==='Study area'?'<i class="bi bi-journal-bookmark" aria-hidden="true"></i>':item.type==='Destination'?'<i class="bi bi-geo-alt" aria-hidden="true"></i>':'<i class="bi bi-building" aria-hidden="true"></i>';
      const body=document.createElement('span');body.className='hero-result-text';const title=document.createElement('strong');title.textContent=item.name;const desc=document.createElement('small');desc.textContent=item.type+(item.place?' · '+item.place:'');body.append(title,desc);
      const arrow=document.createElement('span');arrow.className='hero-result-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';row.append(icon,body,arrow);
      row.addEventListener('click',()=>showDashboard(item.name));list.append(row);
    });box.append(list);
  }
  input.addEventListener('input',renderSuggestions);
  input.addEventListener('keydown',e=>{if(e.key==='Escape'){box.hidden=true;input.setAttribute('aria-expanded','false');}});
  form.addEventListener('submit',e=>{e.preventDefault();e.stopImmediatePropagation();showDashboard(input.value);},true);
  document.getElementById('heroDashForm').addEventListener('submit',e=>{e.preventDefault();showDashboard(dashInput.value)});
  document.getElementById('heroDashClose').addEventListener('click',()=>{dashboard.hidden=true;input.focus({preventScroll:true});form.scrollIntoView({behavior:'smooth',block:'center'});});
})();
