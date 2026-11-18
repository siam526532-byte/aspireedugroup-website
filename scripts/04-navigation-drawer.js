(() => {
      'use strict';

      const desktopMedia = window.matchMedia('(min-width: 1200px)');
      const header = document.getElementById('siteHeader');
      const items = Array.from(document.querySelectorAll('.has-dropdown'));
      let closeTimer;

      /* Harden against any leftover dimming layer from cached versions */
      document.querySelectorAll('.mobile-scrim, #mobileScrim').forEach((el) => el.remove());

      /* ---------- Sticky header shadow ---------- */
      const updateHeader = () => {
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
      };
      window.addEventListener('scroll', updateHeader, { passive: true });
      updateHeader();

      /* ---------- Desktop dropdowns ---------- */
      const closeItem = (item) => {
        item.classList.remove('open');
        const button = item.querySelector('[data-dropdown-toggle]');
        if (button) button.setAttribute('aria-expanded', 'false');
      };

      const closeAll = (except = null) => {
        window.clearTimeout(closeTimer);
        items.forEach((item) => {
          if (item !== except) closeItem(item);
        });
      };

      const openItem = (item) => {
        closeAll(item);
        item.classList.add('open');
        const button = item.querySelector('[data-dropdown-toggle]');
        if (button) button.setAttribute('aria-expanded', 'true');
      };

      items.forEach((item) => {
        const button = item.querySelector('[data-dropdown-toggle]');
        if (!button) return;

        button.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (item.classList.contains('open')) {
            closeItem(item);
          } else {
            openItem(item);
          }
        });

        item.addEventListener('pointerenter', (event) => {
          if (!desktopMedia.matches || (event.pointerType && event.pointerType !== 'mouse')) return;
          window.clearTimeout(closeTimer);
          openItem(item);
        });

        item.addEventListener('pointerleave', (event) => {
          if (!desktopMedia.matches || (event.pointerType && event.pointerType !== 'mouse')) return;
          window.clearTimeout(closeTimer);
          closeTimer = window.setTimeout(() => closeItem(item), 140);
        });

        item.addEventListener('focusout', (event) => {
          if (!desktopMedia.matches) return;
          if (!item.contains(event.relatedTarget)) closeItem(item);
        });

        item.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            closeItem(item);
            button.focus();
          }
          if (event.key === 'ArrowDown' && document.activeElement === button) {
            event.preventDefault();
            openItem(item);
            const firstLink = item.querySelector('.dropdown-link');
            if (firstLink) firstLink.focus();
          }
        });

        item.querySelectorAll('.dropdown-link').forEach((link) => {
          link.addEventListener('click', () => {
            closeItem(item);
            /* Placeholder: replace href="#" with the real page URL later. */
          });
        });
      });

      document.addEventListener('pointerdown', (event) => {
        if (!event.target.closest('.has-dropdown')) closeAll();
      });

      desktopMedia.addEventListener('change', () => closeAll());

      /* ---------- Search overlay ---------- */
      const searchOverlay = document.getElementById('searchOverlay');
      const searchOpenBtn = document.getElementById('searchOpen');
      const searchCloseBtn = document.getElementById('searchClose');
      const searchInput = document.getElementById('searchInput');
      const searchResults = document.getElementById('searchResults');
      const searchResultsLabel = document.getElementById('searchResultsLabel');
      let searchLastFocus = null;

      const searchItems = [
        { type: 'Destination', name: 'Study in Australia' },
        { type: 'Destination', name: 'Study in Canada' },
        { type: 'Destination', name: 'Study in USA' },
        { type: 'Destination', name: 'Study in UK' },
        { type: 'Destination', name: 'Study in Ireland' },
        { type: 'Destination', name: 'Study in New Zealand' },
        { type: 'Destination', name: 'Study in Malaysia' },
        { type: 'Destination', name: 'Study in Japan' },
        { type: "Destination", name: "Study in China" },
        { type: "Destination", name: "Study in Finland" },
        { type: "Destination", name: "Study in Greece" },
        { type: "Destination", name: "Study in Italy" },
        { type: "Destination", name: "Study in Malta" },
        { type: "Destination", name: "Study in South Korea" },
        { type: 'Destination', name: 'Study in Europe' },
        { type: 'Destination', name: 'Study in Dubai' },
        { type: 'Destination', name: 'Study in Cyprus' },
        { type: 'Destination', name: 'Study in Germany' },
        { type: 'Destination', name: 'Study in Netherlands' },
        { type: 'Service', name: 'Admission Support' },
        { type: 'Service', name: 'Health Insurance' },
        { type: 'Service', name: 'Student Accommodation' },
        { type: 'Service', name: 'Visa Processing' },
        { type: 'About Aspire', name: 'Awards and Achievements' },
        { type: 'About Aspire', name: 'Our Leadership' },
        { type: 'About Aspire', name: 'Testimonials' },
        { type: 'Resource', name: 'Blog' },
        { type: 'Scholarship', name: 'Scholarships in Australia' },
        { type: 'Scholarship', name: 'Scholarships in Canada' },
        { type: 'Scholarship', name: 'Scholarships in USA' },
        { type: 'Scholarship', name: 'Scholarships in UK' },
        { type: 'Scholarship', name: 'Scholarships in Ireland' },
        { type: 'Scholarship', name: 'Scholarships in New Zealand' },
        { type: 'Scholarship', name: 'Scholarships in Malaysia' },
        { type: 'Scholarship', name: 'Scholarships in Japan' },
        { type: "Scholarship", name: "Scholarships in China" },
        { type: "Scholarship", name: "Scholarships in Finland" },
        { type: "Scholarship", name: "Scholarships in Greece" },
        { type: "Scholarship", name: "Scholarships in Italy" },
        { type: "Scholarship", name: "Scholarships in Malta" },
        { type: "Scholarship", name: "Scholarships in South Korea" },
        { type: 'Scholarship', name: 'Scholarships in Europe' },
        { type: 'Scholarship', name: 'Scholarships in Dubai' },
        { type: 'Support', name: 'Contact Aspire' }
      ];

      const renderSearch = (query = '') => {
        if (!searchResults) return;
        const term = query.toLowerCase().trim();
        const parts = term.split(/\s+/).filter(Boolean);
        const matches = searchItems.filter((item) => {
          const full = (item.name + ' ' + item.type).toLowerCase();
          return parts.every((part) => full.includes(part));
        });
        const list = term ? matches : searchItems.slice(0, 6);
        if (searchResultsLabel) {
          searchResultsLabel.textContent = term
            ? (list.length ? list.length + (list.length === 1 ? ' match found' : ' matches found') : 'No matches found')
            : 'Start exploring';
        }
        searchResults.innerHTML = '';
        if (!list.length) {
          const empty = document.createElement('div');
          empty.className = 'search-empty';
          empty.textContent = 'No matching item yet. Try "Canada", "visa" or "scholarship".';
          searchResults.appendChild(empty);
          return;
        }
        list.slice(0, 8).forEach((item) => {
          const link = document.createElement('a');
          link.className = 'search-result';
          link.href = '#';
          const small = document.createElement('small');
          small.textContent = item.type;
          const strong = document.createElement('strong');
          strong.textContent = item.name;
          link.append(small, strong);
          link.addEventListener('click', (event) => event.preventDefault());
          searchResults.appendChild(link);
        });
      };

      const closeSearch = (restoreFocus = true) => {
        if (!searchOverlay || !searchOverlay.classList.contains('open')) return;
        searchOverlay.classList.remove('open');
        searchOverlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        if (restoreFocus && searchLastFocus) searchLastFocus.focus();
      };

      const openSearch = () => {
        if (!searchOverlay) return;
        closeAll();
        searchLastFocus = document.activeElement;
        searchOverlay.classList.add('open');
        searchOverlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        renderSearch('');
        window.setTimeout(() => searchInput && searchInput.focus(), 160);
      };

      if (searchOpenBtn) searchOpenBtn.addEventListener('click', openSearch);
      if (searchCloseBtn) searchCloseBtn.addEventListener('click', () => closeSearch());
      if (searchOverlay) {
        searchOverlay.addEventListener('pointerdown', (event) => {
          if (event.target === searchOverlay) closeSearch();
        });
      }
      if (searchInput) searchInput.addEventListener('input', () => renderSearch(searchInput.value));
      document.querySelectorAll('.search-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          if (!searchInput) return;
          searchInput.value = chip.dataset.query || '';
          renderSearch(searchInput.value);
          searchInput.focus();
        });
      });
      const searchForm = document.getElementById('searchForm');
      if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
          event.preventDefault();
          renderSearch(searchInput ? searchInput.value : '');
        });
      }
      renderSearch('');

      /* ---------- Consultation modal (Bootstrap Modal) ---------- */
      const consultModalElement = document.getElementById('consultModal');
      const consultPanel = document.getElementById('consultPanel');
      const consultForm = document.getElementById('consultForm');
      const consultOpenBtn = document.getElementById('consultOpen');
      const consultOpenMobile = document.getElementById('consultOpenMobile');
      let consultModalInstance = null;

      if (consultModalElement && window.bootstrap) {
        consultModalInstance = bootstrap.Modal.getOrCreateInstance(consultModalElement);
      }

      const closeConsult = () => {
        if (consultModalInstance) consultModalInstance.hide();
      };

      const openConsult = () => {
        if (!consultModalElement) return;
        const openedFromDrawer = drawer && drawer.classList.contains('show');
        closeAll();
        closeSearch(false);
        closeDrawer(false);

        const showModal = () => {
          if (consultModalInstance) {
            consultModalInstance.show();
          } else {
            consultModalElement.classList.add('show');
            consultModalElement.style.display = 'block';
            consultModalElement.removeAttribute('aria-hidden');
          }
        };

        if (openedFromDrawer) {
          window.setTimeout(showModal, 320);
        } else {
          showModal();
        }
      };

      if (consultOpenBtn) consultOpenBtn.addEventListener('click', openConsult);
      if (consultOpenMobile) consultOpenMobile.addEventListener('click', openConsult);

      if (consultModalElement) {
        consultModalElement.addEventListener('hidden.bs.modal', () => {
          window.setTimeout(() => {
            if (consultPanel) consultPanel.classList.remove('sent');
          }, 200);
        });
        consultModalElement.addEventListener('shown.bs.modal', () => {
          const firstField = document.getElementById('consultName');
          if (firstField && !consultPanel.classList.contains('sent')) firstField.focus();
        });
      }
      if (consultForm) {
        consultForm.addEventListener('submit', (event) => {
          event.preventDefault();
          if (!consultForm.checkValidity()) {
            consultForm.reportValidity();
            return;
          }
          const values = new FormData(consultForm);
          const fullName = String(values.get('name') || '').trim();
          const firstName = fullName ? fullName.split(/\s+/)[0] : 'there';
          const email = String(values.get('email') || '').trim();
          const phone = String(values.get('phone') || '').trim() || 'Not provided';
          const destination = String(values.get('destination') || '').trim() || 'Not selected';
          const message = String(values.get('message') || '').trim() || 'No additional message';
          const whatsappText = [
            'ASPIRE EDUCATION GROUP - Consultation Request',
            '',
            `Full name: ${fullName}`,
            `Email: ${email}`,
            `Phone / WhatsApp: ${phone}`,
            `Preferred destination: ${destination}`,
            `Message: ${message}`,
            'Consent to be contacted: Yes'
          ].join('\n');
          const whatsappUrl = 'https://wa.me/8801990948704?text=' + encodeURIComponent(whatsappText);
          const whatsappLink = document.getElementById('consultWhatsAppLink');
          if (whatsappLink) whatsappLink.href = whatsappUrl;

          /* WhatsApp requires the visitor to confirm by pressing Send. */
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

          const successText = document.getElementById('consultSuccessText');
          if (successText) {
            successText.textContent = 'Thank you, ' + firstName + '. Your details are ready in WhatsApp. Press Send there to deliver your enquiry to ASPIRE.';
          }
          if (consultPanel) consultPanel.classList.add('sent');
          consultForm.reset();
        });
      }

      document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        closeSearch(false);
      });

      /* ---------- Mobile drawer (Bootstrap Offcanvas, no backdrop) ---------- */
      const drawer = document.getElementById('mobileMenu');
      const toggle = document.getElementById('menuToggle');
      let drawerInstance = null;

      if (drawer && window.bootstrap) {
        drawerInstance = bootstrap.Offcanvas.getOrCreateInstance(drawer, { backdrop: true, scroll: true });
      }

      const openDrawer = () => {
        if (!drawer) return;
        closeAll();
        if (drawerInstance) {
          drawerInstance.show();
        } else {
          drawer.classList.add('show');
        }
      };

      const closeDrawer = () => {
        if (drawerInstance) {
          drawerInstance.hide();
        } else if (drawer) {
          drawer.classList.remove('show');
        }
      };

      if (drawer) {
        drawer.addEventListener('show.bs.offcanvas', () => {
          if (toggle) toggle.setAttribute('aria-label', 'Close navigation menu');
        });
        drawer.addEventListener('hidden.bs.offcanvas', () => {
          if (toggle) toggle.setAttribute('aria-label', 'Open navigation menu');
        });
      }

      document.addEventListener('pointerdown', (event) => {
        if (!drawer || !drawer.classList.contains('show')) return;
        if (drawer.contains(event.target)) return;
        if (toggle && toggle.contains(event.target)) return;
        closeDrawer();
      });

      desktopMedia.addEventListener('change', () => {
        if (desktopMedia.matches) closeDrawer();
      });

      /* ---------- Mobile accordions ---------- */
      document.querySelectorAll('.mobile-parent').forEach((button) => {
        button.addEventListener('click', () => {
          const target = document.getElementById(button.getAttribute('aria-controls'));
          if (!target) return;
          const isOpen = button.getAttribute('aria-expanded') === 'true';

          document.querySelectorAll('.mobile-parent').forEach((other) => {
            if (other === button) return;
            other.setAttribute('aria-expanded', 'false');
            const otherTarget = document.getElementById(other.getAttribute('aria-controls'));
            if (otherTarget) otherTarget.hidden = true;
          });

          button.setAttribute('aria-expanded', String(!isOpen));
          target.hidden = isOpen;
        });
      });

      /* Keep these as placeholders until real page links are added. */
      document.querySelectorAll('.mobile-sub a, .mobile-direct').forEach((link) => {
        link.addEventListener('click', (event) => {
          if (link.getAttribute('href') === '#') event.preventDefault();
          closeDrawer(false);
        });
      });

      document.querySelectorAll('a[href="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
          if (!link.classList.contains('mobile-direct') && !link.closest('.mobile-sub')) {
            event.preventDefault();
          }
        });
      });
    })();
