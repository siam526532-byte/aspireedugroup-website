(function(){
 const dialog=document.getElementById('studentStoryDialog'); if(!dialog)return;
 const img=document.getElementById('studentStoryImage'),tag=document.getElementById('studentStoryTag');
 let lastTrigger=null;
 function open(card){const n=card.dataset.student;lastTrigger=card;img.src='images/student-'+n+'.jpg';img.alt='Illustrative student portrait '+n;tag.textContent='STUDENT STORY '+n.padStart(2,'0');dialog.showModal();}
 document.querySelectorAll('.student-story-trigger').forEach(card=>{card.addEventListener('click',()=>open(card));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(card)}})});
 dialog.querySelector('.student-dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 dialog.addEventListener('close',()=>{if(lastTrigger)lastTrigger.focus()});
})();
