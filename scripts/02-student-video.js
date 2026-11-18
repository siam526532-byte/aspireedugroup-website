(function(){
 const dialog=document.getElementById('studentVideoDialog'),video=document.getElementById('studentVideoPlayer'),title=document.getElementById('studentVideoTitle');let lastTrigger;
 function open(card){let n=card.dataset.student;lastTrigger=card;video.src='videos/student-story-'+n+'.mp4';title.textContent='Student story '+n.padStart(2,'0')+' · Sample';dialog.showModal();video.play().catch(()=>{});}
 document.querySelectorAll('.video-story-trigger').forEach(card=>{card.addEventListener('click',()=>open(card));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(card)}})});
 dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener('close',()=>{video.pause();video.removeAttribute('src');video.load();if(lastTrigger)lastTrigger.focus()});
})();
