(function(){const dlg=document.getElementById('serviceMessageDialog'),form=document.getElementById('serviceMessageForm'),text=document.getElementById('serviceMessageText');let previous;
 dlg.addEventListener('cancel',()=>{});dlg.querySelector('.svc-msg-close').addEventListener('click',()=>dlg.close());dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
 form.addEventListener('submit',e=>{e.preventDefault();if(!text.value.trim()){text.focus();return}const message='Hello ASPIRE, I have a question about '+dlg.dataset.service+' — '+dlg.dataset.step+':\n\n'+text.value.trim();window.open('https://wa.me/8801805840449?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');dlg.close()});
})();
