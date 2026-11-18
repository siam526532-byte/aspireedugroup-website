(() => {
      'use strict';

      const panel = document.getElementById('chatPanel');
      const toggle = document.getElementById('chatToggle');
      const closeBtn = document.getElementById('chatClose');
      const minimiseBtn = document.getElementById('chatMinimise');
      const body = document.getElementById('chatBody');
      const quickWrap = document.getElementById('chatQuick');
      const form = document.getElementById('chatForm');
      const input = document.getElementById('chatInput');
      const emojiBtn = document.getElementById('chatEmojiBtn');
      const emojiRow = document.getElementById('chatEmojiRow');
      const attachBtn = document.getElementById('chatAttachBtn');
      const fileInput = document.getElementById('chatFile');
      const unread = document.getElementById('chatUnread');
      const sendBtn = document.getElementById('chatSend');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let isOpen = false;
      let busy = false;
      let hasInteracted = false;
      let lastFocused = null;
      const floatActions = document.querySelector('.float-actions');

      const now = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

      const scrollToEnd = () => {
        if (!body) return;
        body.scrollTo({ top: body.scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' });
      };

      const makeTime = () => {
        const time = document.createElement('div');
        time.className = 'chat-time';
        const stamp = document.createElement('span');
        stamp.textContent = now();
        time.append(stamp);
        const tick = document.createElement('i');
        tick.className = 'bi bi-check2-all';
        tick.setAttribute('aria-hidden', 'true');
        time.append(tick);
        return time;
      };

      const appendMessage = (role, text, actions = []) => {
        if (!body) return;
        const row = document.createElement('div');
        row.className = `chat-row ${role}`;

        if (role === 'bot') {
          const avatar = document.createElement('span');
          avatar.className = 'chat-bot-avatar';
          avatar.setAttribute('aria-hidden', 'true');
          avatar.innerHTML = '<i class="bi bi-stars"></i>';
          row.appendChild(avatar);
        }

        const stack = document.createElement('div');
        stack.className = 'chat-stack';
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.textContent = text;
        stack.appendChild(bubble);

        if (actions.length) {
          const actionWrap = document.createElement('div');
          actionWrap.className = 'chat-actions';
          actions.forEach((action) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'chat-action';
            button.dataset.chatAction = action.id;
            button.innerHTML = `<i class="bi ${action.icon}" aria-hidden="true"></i> ${action.label}`;
            actionWrap.appendChild(button);
          });
          stack.appendChild(actionWrap);
        }

        stack.appendChild(makeTime());
        row.appendChild(stack);
        body.appendChild(row);
        scrollToEnd();
      };

      const showTyping = () => {
        if (!body || document.getElementById('chatTypingRow')) return;
        const row = document.createElement('div');
        row.className = 'chat-row bot';
        row.id = 'chatTypingRow';
        row.innerHTML = '<span class="chat-bot-avatar" aria-hidden="true"><i class="bi bi-stars"></i></span><div class="chat-stack"><div class="chat-bubble chat-typing" role="status" aria-label="Assistant is typing"><span></span><span></span><span></span></div></div>';
        body.appendChild(row);
        scrollToEnd();
      };

      const hideTyping = () => {
        const row = document.getElementById('chatTypingRow');
        if (row) row.remove();
      };

      // Conversation is held in this page only and sent to the site's server for AI responses.
      const conversation = [];
      const botReply = async (message) => {
        if (!body || busy) return;
        busy = true;
        if (sendBtn) sendBtn.disabled = true;
        showTyping();
        try {
          if (window.location.protocol === 'file:') throw new Error('SERVER_REQUIRED');
          const messages = [...conversation, { role: 'user', content: message }].slice(-12);
          const response = await fetch('/api/chat', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages }), signal: AbortSignal.timeout(45000)
          });
          const result = await response.json().catch(() => ({}));
          if (!response.ok || !result.reply) throw new Error(result.error || 'UNAVAILABLE');
          conversation.push({ role: 'user', content: message }, { role: 'assistant', content: result.reply });
          if (conversation.length > 12) conversation.splice(0, conversation.length - 12);
          appendMessage('bot', result.reply);
        } catch (error) {
          const unavailable = error.message === 'NOT_CONFIGURED' || error.message === 'SERVER_REQUIRED';
          appendMessage('bot', unavailable
            ? 'AI chat is not configured yet. Please contact our team on WhatsApp while the site owner completes setup.'
            : 'Sorry, I could not get an answer right now. Please try again or contact our team on WhatsApp.',
            [{ id: 'whatsapp', label: 'Chat on WhatsApp', icon: 'bi-whatsapp' }]);
        } finally {
          hideTyping(); busy = false; if (sendBtn) sendBtn.disabled = false;
        }
      };

      const openChat = () => {
        if (!panel || isOpen) return;
        lastFocused = document.activeElement;
        isOpen = true;
        hasInteracted = true;
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        panel.inert = false;
        if (floatActions) floatActions.classList.add('chat-open');
        if (toggle) {
          toggle.classList.add('is-open');
          toggle.setAttribute('aria-expanded', 'true');
          toggle.setAttribute('aria-label', 'Close the Aspire virtual assistant');
        }
        if (unread) unread.classList.remove('show');
        window.setTimeout(() => input && input.focus({ preventScroll: true }), reduceMotion ? 0 : 220);
        scrollToEnd();
      };

      const closeChat = (restore = true) => {
        if (!panel || !isOpen) return;
        isOpen = false;
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        panel.inert = true;
        if (floatActions) floatActions.classList.remove('chat-open');
        if (toggle) {
          toggle.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Open the Aspire virtual assistant');
        }
        if (emojiRow) emojiRow.classList.remove('open');
        if (emojiBtn) emojiBtn.setAttribute('aria-expanded', 'false');
        if (restore && lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
      };

      if (toggle) toggle.addEventListener('click', () => (isOpen ? closeChat() : openChat()));
      if (closeBtn) closeBtn.addEventListener('click', () => closeChat());
      if (minimiseBtn) minimiseBtn.addEventListener('click', () => closeChat());

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isOpen) closeChat();
      });

      if (quickWrap) {
        quickWrap.addEventListener('click', (event) => {
          const button = event.target.closest('[data-topic]');
          if (!button || busy) return;
          const topic = button.dataset.topic;
          appendMessage('user', button.textContent.trim());
          botReply(button.textContent.trim());
        });
      }

      if (form) {
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          const message = input ? input.value.trim() : '';
          if (!message || busy) return;
          appendMessage('user', message);
          if (input) input.value = '';
          botReply(message);
          window.setTimeout(() => input && input.focus({ preventScroll: true }), 30);
        });
      }

      if (body) {
        body.addEventListener('click', (event) => {
          const action = event.target.closest('[data-chat-action]');
          if (!action) return;
          const id = action.dataset.chatAction;
          const courseFinder = document.getElementById('courseFinder');
          const destinations = document.getElementById('destinations');
          const services = document.getElementById('services');
          const consultButton = document.getElementById('consultOpen');

          if (id === 'consult') {
            closeChat(false);
            if (consultButton) window.setTimeout(() => consultButton.click(), 260);
          } else if (id === 'whatsapp') {
            window.open('https://wa.me/8801805840449?text=Hello%20ASPIRE%2C%20I%20would%20like%20help%20with%20studying%20abroad.', '_blank', 'noopener');
          } else if (id === 'courses' || id === 'scholarships') {
            closeChat(false);
            if (courseFinder) courseFinder.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
          } else if (id === 'destinations' && destinations) {
            closeChat(false);
            destinations.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
          } else if (id === 'services' && services) {
            closeChat(false);
            services.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
          }
        });
      }

      if (emojiBtn) {
        emojiBtn.addEventListener('click', () => {
          if (!emojiRow) return;
          const willOpen = !emojiRow.classList.contains('open');
          emojiRow.classList.toggle('open', willOpen);
          emojiBtn.setAttribute('aria-expanded', String(willOpen));
        });
      }

      if (emojiRow) {
        emojiRow.addEventListener('click', (event) => {
          const emoji = event.target.closest('[data-emoji]');
          if (!emoji || !input) return;
          input.value += emoji.dataset.emoji;
          input.focus({ preventScroll: true });
        });
      }

      if (attachBtn && fileInput) {
        attachBtn.addEventListener('click', () => {
          appendMessage('bot', 'File uploads are not supported in this chat. Please do not share sensitive documents here. Contact our team to ask about secure document sharing.', [{ id: 'whatsapp', label: 'Chat on WhatsApp', icon: 'bi-whatsapp' }]);
        });
      }

      const initialTimes = document.querySelectorAll('[data-chat-time]');
      initialTimes.forEach((time) => {
        time.textContent = now();
      });

      /* Gentle unread nudge if the visitor has not opened the assistant */
      window.setTimeout(() => {
        if (unread && !hasInteracted && !isOpen) unread.classList.add('show');
      }, 9000);
    })();
