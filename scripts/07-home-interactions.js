(() => {
      'use strict';

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      /* ---------- Animated impact numbers ---------- */
      const statValues = document.querySelectorAll('[data-stat]');

      const renderStat = (element, value, decimals, suffix) => {
        element.textContent = '';
        const valueSpan = document.createElement('span');
        valueSpan.textContent = decimals
          ? value.toFixed(decimals)
          : Math.round(value).toLocaleString('en-US');
        element.appendChild(valueSpan);
        if (suffix.trim() === '+') {
          const plus = document.createElement('span');
          plus.className = 'plus';
          plus.textContent = '+';
          element.appendChild(plus);
        } else if (suffix) {
          const unit = document.createElement('span');
          unit.className = 'impact-unit';
          unit.textContent = suffix.trim();
          element.appendChild(unit);
        }
      };

      const animateStat = (element) => {
        if (element.dataset.animated === 'true') return;
        element.dataset.animated = 'true';
        const target = Number(element.dataset.stat);
        const decimals = Number(element.dataset.decimals || 0);
        const suffix = element.dataset.suffix || '';
        if (!Number.isFinite(target)) return;

        if (reduceMotion) {
          renderStat(element, target, decimals, suffix);
          return;
        }

        const start = performance.now();
        const duration = 1500;
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          renderStat(element, target * eased, decimals, suffix);
          if (progress < 1) window.requestAnimationFrame(tick);
        };
        window.requestAnimationFrame(tick);
      };

      if ('IntersectionObserver' in window && statValues.length) {
        const observer = new IntersectionObserver((entries, instance) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateStat(entry.target);
            instance.unobserve(entry.target);
          });
        }, { threshold: 0.45 });
        statValues.forEach((stat) => observer.observe(stat));
      } else {
        statValues.forEach(animateStat);
      }

      /* ---------- 3D tilt + cursor spotlight on impact cards ---------- */
      const tiltCards = Array.from(document.querySelectorAll('.impact-card'));
      const supportsTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

      if (tiltCards.length && supportsTilt && !reduceMotion) {
        const resetTilt = (card) => {
          card.style.setProperty('--rx', '0deg');
          card.style.setProperty('--ry', '0deg');
          card.style.setProperty('--mx', '50%');
          card.style.setProperty('--my', '50%');
        };

        tiltCards.forEach((card) => {
          let queued = false;
          let pointerX = 0;
          let pointerY = 0;

          card.addEventListener('pointermove', (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            if (queued) return;
            queued = true;
            window.requestAnimationFrame(() => {
              const rect = card.getBoundingClientRect();
              const x = pointerX - rect.left;
              const y = pointerY - rect.top;
              const rotateX = ((y / rect.height) - 0.5) * -7;
              const rotateY = ((x / rect.width) - 0.5) * 9;
              card.style.setProperty('--rx', rotateX.toFixed(2) + 'deg');
              card.style.setProperty('--ry', rotateY.toFixed(2) + 'deg');
              card.style.setProperty('--mx', x.toFixed(0) + 'px');
              card.style.setProperty('--my', y.toFixed(0) + 'px');
              queued = false;
            });
          });

          card.addEventListener('pointerleave', () => resetTilt(card));
          card.addEventListener('blur', () => resetTilt(card));
        });
      }

      /* ---------- Enquiry form ---------- */
      const form = document.getElementById('enquiryForm');
      const formArea = document.getElementById('enqFormArea');
      const success = document.getElementById('enquirySuccess');
      const successText = document.getElementById('enquirySuccessText');
      const errorBox = document.getElementById('enqError');
      const errorText = document.getElementById('enqErrorText');
      const againButton = document.getElementById('enquiryAgain');

      const errorFor = (field) => {
        if (!field) return '';
        switch (field.id) {
          case 'enqFirst': return 'Please enter your first name.';
          case 'enqLast': return 'Please enter your last name.';
          case 'enqEmail': return 'Please enter a valid email address.';
          case 'enqPhone': return 'Please enter your mobile number.';
          case 'enqDestination': return 'Please select your preferred destination.';
          case 'enqIntake': return 'Please choose when you would like to start.';
          case 'enqMode': return 'Please choose a counselling mode.';
          case 'enqLevel': return 'Please select your study level.';
          case 'enqTerms': return 'Please accept the terms and privacy policy.';
          default: return 'Please complete this field.';
        }
      };

      const clearInvalid = (field) => {
        if (field) field.classList.remove('invalid');
        if (errorBox) errorBox.classList.remove('show');
      };

      if (form) {
        const fields = Array.from(form.querySelectorAll('input[required], select[required]'));
        fields.forEach((field) => {
          const eventName = field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'input';
          field.addEventListener(eventName, () => {
            if (field.checkValidity()) field.classList.remove('invalid');
          });
        });

        form.addEventListener('submit', (event) => {
          event.preventDefault();
          fields.forEach((field) => field.classList.remove('invalid'));

          const invalidField = fields.find((field) => !field.checkValidity());
          if (invalidField) {
            invalidField.classList.add('invalid');
            if (errorBox && errorText) {
              errorText.textContent = errorFor(invalidField);
              errorBox.classList.add('show');
            }
            invalidField.focus({ preventScroll: false });
            invalidField.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
            return;
          }

          const formData = new FormData(form);
          const firstName = String(formData.get('firstName') || '').trim();
          const lastName = String(formData.get('lastName') || '').trim();
          const fullName = [firstName, lastName].filter(Boolean).join(' ');
          const countryCode = String(formData.get('countryCode') || '+880').trim();
          const mobile = String(formData.get('phone') || '').trim();
          const phoneNumber = mobile ? `${countryCode} ${mobile}` : 'Not provided';
          const destination = String(formData.get('destination') || '').trim() || 'Not selected';
          const intake = String(formData.get('intake') || '').trim() || 'Not selected';
          const counsellingMode = String(formData.get('mode') || '').trim() || 'Not selected';
          const funding = String(formData.get('funding') || '').trim() || 'Not provided';
          const studyLevel = String(formData.get('level') || '').trim() || 'Not selected';
          const nearestOffice = String(formData.get('office') || '').trim() || 'Not selected';
          const contactConsent = document.getElementById('enqContact').checked ? 'Yes' : 'No';
          const updatesConsent = document.getElementById('enqUpdates').checked ? 'Yes' : 'No';
          const whatsappText = [
            'ASPIRE EDUCATION GROUP - Enquiry Form',
            '',
            `Full name: ${fullName}`,
            `Email: ${String(formData.get('email') || '').trim()}`,
            `Mobile: ${phoneNumber}`,
            `Preferred destination: ${destination}`,
            `Preferred intake: ${intake}`,
            `Counselling mode: ${counsellingMode}`,
            `Education funding: ${funding}`,
            `Preferred study level: ${studyLevel}`,
            `Nearest ASPIRE office: ${nearestOffice}`,
            'Terms and privacy policy accepted: Yes',
            `Consent to be contacted: ${contactConsent}`,
            `Consent to receive updates: ${updatesConsent}`
          ].join('\n');
          const whatsappUrl = 'https://wa.me/8801990948704?text=' + encodeURIComponent(whatsappText);
          const whatsappLink = document.getElementById('enquiryWhatsAppLink');
          if (whatsappLink) whatsappLink.href = whatsappUrl;

          /* Open the prefilled WhatsApp message directly from the submit gesture. */
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

          if (successText) {
            const name = firstName || 'there';
            successText.textContent = `Thank you, ${name}. Your details are ready in WhatsApp. Press Send there to deliver your enquiry to ASPIRE.`;
          }
          if (formArea) formArea.style.display = 'none';
          if (success) success.classList.add('show');
          form.reset();
          const contact = document.getElementById('enqContact');
          if (contact) contact.checked = true;
          form.querySelectorAll('.invalid').forEach((field) => field.classList.remove('invalid'));
          if (errorBox) errorBox.classList.remove('show');
          if (success) success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        });
      }

      if (againButton) {
        againButton.addEventListener('click', () => {
          if (success) success.classList.remove('show');
          if (formArea) formArea.style.display = '';
          const firstField = document.getElementById('enqFirst');
          if (firstField) {
            window.setTimeout(() => firstField.focus({ preventScroll: true }), 100);
          }
        });
      }

      /* Clear highlighting as soon as a visitor starts correcting a field */
      if (form) {
        form.addEventListener('input', (event) => {
          if (event.target.classList.contains('enq-control')) clearInvalid(event.target);
        });
        form.addEventListener('change', (event) => {
          if (event.target.classList.contains('enq-control')) clearInvalid(event.target);
        });
      }
    })();
