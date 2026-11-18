(() => {
  const modal = document.getElementById('leaderModal');
  if (!modal) return;
  const cards = document.querySelectorAll('#leadershipPage .leader-card');
  const title = document.getElementById('leaderDialogTitle');
  const role = document.getElementById('leaderDialogRole');
  const description = document.getElementById('leaderDialogDescription');
  const note = document.getElementById('leaderDialogNote');
  const image = document.getElementById('leaderDialogImage');
  let lastCard;
  function openProfile(card, index) {
    lastCard = card;
    const name = card.querySelector('.leader-role-overlay strong')?.textContent.trim() || 'Leadership profile';
    const job = card.querySelector('.leader-role-overlay span')?.textContent.trim() || 'Leadership team';
    const text = card.querySelector('.leader-content p')?.textContent.trim() || '';
    title.textContent = name; role.textContent = job; description.textContent = text;
    image.src = card.querySelector('.leader-photo img')?.getAttribute('src') || 'images/ceo.jpg';
    image.alt = card.querySelector('.leader-photo img')?.getAttribute('alt') || name;
    note.replaceChildren();
    if (card.dataset.leaderPhone && card.dataset.leaderEmail) {
      const contact = document.createElement('div'); contact.className = 'leader-profile-contacts';
      const phone = document.createElement('a'); phone.href = 'tel:+88' + card.dataset.leaderPhone.replace(/[^0-9]/g, ''); phone.textContent = 'Call: ' + card.dataset.leaderPhone;
      const email = document.createElement('a'); email.href = 'mailto:' + card.dataset.leaderEmail; email.textContent = card.dataset.leaderEmail;
      contact.append(phone, email);
      if (card.querySelector('.leader-photo-placeholder')) { const hint = document.createElement('span'); hint.textContent = 'Photo is a temporary placeholder, not an actual portrait.'; contact.append(hint); }
      note.append(contact);
    } else { note.textContent = 'More information about our CEO can be added here.'; }
    if (!modal.open) modal.showModal();
  }
  cards.forEach((card, index) => {
    card.setAttribute('role', 'button'); card.tabIndex = 0; card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', 'View ' + (card.dataset.leaderName || 'ASPIRE CEO') + ' profile');
    const content = card.querySelector('.leader-content');
    if (content && !content.querySelector('.leader-view')) content.insertAdjacentHTML('beforeend','<span class="leader-view">View profile <i class="bi bi-arrow-right" aria-hidden="true"></i></span>');
    card.addEventListener('click', () => openProfile(card,index));
    card.addEventListener('keydown', e => {if(e.key === 'Enter' || e.key === ' '){e.preventDefault();openProfile(card,index)}});
  });
  document.getElementById('leaderDialogClose').addEventListener('click', () => modal.close());
  modal.addEventListener('click', e => {if(e.target === modal) modal.close()});
  modal.addEventListener('close', () => { if(lastCard) lastCard.focus({preventScroll:true}); });
})();
