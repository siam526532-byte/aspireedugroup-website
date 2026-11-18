(() => {
      'use strict';

      const loader = document.getElementById('brandLoader');
      const body = document.body;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const startedAt = performance.now();
      const minimumShowTime = reduceMotion ? 100 : 920;
      let isLeaving = false;

      const dismissLoader = () => {
        if (!loader || isLeaving) return;
        isLeaving = true;
        const remaining = Math.max(0, minimumShowTime - (performance.now() - startedAt));

        window.setTimeout(() => {
          loader.classList.add('is-leaving');
          loader.setAttribute('aria-hidden', 'true');
          if (body) body.classList.remove('page-loading');
          window.setTimeout(() => loader.remove(), reduceMotion ? 40 : 650);
        }, remaining);
      };

      if (document.readyState === 'complete') dismissLoader();
      else window.addEventListener('load', dismissLoader, { once: true });

      /* Do not leave the branded intro blocking the page if a remote asset stalls. */
      window.setTimeout(dismissLoader, 1800);
    })();
