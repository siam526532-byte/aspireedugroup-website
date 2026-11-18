(() => {
      'use strict';

      const section = document.querySelector('.community-section');
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (section && !reducedMotion && 'IntersectionObserver' in window) {
        section.classList.add('motion-ready');
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            section.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        }, { threshold: .14, rootMargin: '0px 0px -35px 0px' });
        revealObserver.observe(section);
      }

      const supportsTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reducedMotion;
      if (supportsTilt) {
        document.querySelectorAll('.ambassador-card, .story-tile').forEach((card) => {
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
              const x = Math.max(0, Math.min(1, (pointerX - rect.left) / rect.width));
              const y = Math.max(0, Math.min(1, (pointerY - rect.top) / rect.height));
              card.style.setProperty('--community-rx', ((.5 - y) * 4).toFixed(2) + 'deg');
              card.style.setProperty('--community-ry', ((x - .5) * 6).toFixed(2) + 'deg');
              queued = false;
            });
          });

          card.addEventListener('pointerleave', () => {
            card.style.setProperty('--community-rx', '0deg');
            card.style.setProperty('--community-ry', '0deg');
          });
        });
      }
    })();
