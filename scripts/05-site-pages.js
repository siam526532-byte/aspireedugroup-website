/* SEO titles: keep page titles in sync with the static <title> tags */
window.__SEO_TITLES={"scholarship-japan.html": "Scholarships in Japan for Bangladeshi Students | ASPIRE", "study-malaysia.html": "Study in Malaysia from Bangladesh | Student Visa & Admission – ASPIRE", "scholarship-canada.html": "Scholarships in Canada for Bangladeshi Students | ASPIRE", "blog.html": "Study Abroad Blog – Visa, Admission & Budget Tips | ASPIRE", "scholarship-uk.html": "Scholarships in UK for Bangladeshi Students | ASPIRE", "study-ireland.html": "Study in Ireland from Bangladesh | Student Visa & Admission – ASPIRE", "scholarship-australia.html": "Scholarships in Australia for Bangladeshi Students | ASPIRE", "study-finland.html": "Study in Finland from Bangladesh | Student Visa & Admission – ASPIRE", "study-china.html": "Study in China from Bangladesh | Student Visa & Admission – ASPIRE", "study-usa.html": "Study in USA from Bangladesh | Student Visa & Admission – ASPIRE", "scholarship-usa.html": "Scholarships in USA for Bangladeshi Students | ASPIRE", "scholarship-greece.html": "Scholarships in Greece for Bangladeshi Students | ASPIRE", "testimonials.html": "Student Success Stories | ASPIRE Education Group", "study-greece.html": "Study in Greece from Bangladesh | Student Visa & Admission – ASPIRE", "contact.html": "Contact ASPIRE Education Group | Study Abroad Consultancy, Dhaka", "blog-study-abroad-budget.html": "How to Build a Realistic Study Abroad Budget | ASPIRE Blog", "blog-uk-course-selection.html": "How to Find the Right Course in the UK | ASPIRE Blog", "blog-ireland-student-journey.html": "Starting Your Study Plans for Ireland | ASPIRE Blog", "leadership.html": "Our Leadership | ASPIRE Education Group", "study-new-zealand.html": "Study in New Zealand from Bangladesh | Student Visa & Admission – ASPIRE", "scholarship-italy.html": "Scholarships in Italy for Bangladeshi Students | ASPIRE", "index.html": "Study Abroad from Bangladesh | Student Visa Agency in Dhaka – ASPIRE", "study-south-korea.html": "Study in South Korea from Bangladesh | Student Visa & Admission – ASPIRE", "study-malta.html": "Study in Malta from Bangladesh | Student Visa & Admission – ASPIRE", "scholarship-dubai.html": "Scholarships in Dubai for Bangladeshi Students | ASPIRE", "blog-visa-preparation.html": "How to Prepare for a Student Visa Application | ASPIRE Blog", "blog-canada-study-planning.html": "How to Plan Your Studies in Canada from Bangladesh | ASPIRE Blog", "blog-choosing-a-destination.html": "How to Choose Your Study Abroad Destination | ASPIRE Blog", "scholarship-china.html": "Scholarships in China for Bangladeshi Students | ASPIRE", "study-uk.html": "Study in UK from Bangladesh | Student Visa & Admission – ASPIRE", "scholarship-south-korea.html": "Scholarships in South Korea for Bangladeshi Students | ASPIRE", "study-australia.html": "Study in Australia from Bangladesh | Student Visa & Admission – ASPIRE", "study-italy.html": "Study in Italy from Bangladesh | Student Visa & Admission – ASPIRE", "service-visa.html": "Student Visa Processing from Bangladesh | ASPIRE Education Group", "scholarship-finland.html": "Scholarships in Finland for Bangladeshi Students | ASPIRE", "blog-student-health-cover.html": "Understanding Student Health Insurance Abroad | ASPIRE Blog", "scholarship-malta.html": "Scholarships in Malta for Bangladeshi Students | ASPIRE", "study-canada.html": "Study in Canada from Bangladesh | Student Visa & Admission – ASPIRE", "study-europe.html": "Study in Europe from Bangladesh | Student Visa & Admission – ASPIRE", "blog-student-accommodation.html": "How to Compare Student Accommodation Abroad | ASPIRE Blog", "study-dubai.html": "Study in Dubai from Bangladesh | Student Visa & Admission – ASPIRE", "scholarship-europe.html": "Scholarships in Europe for Bangladeshi Students | ASPIRE", "scholarship-new-zealand.html": "Scholarships in New Zealand for Bangladeshi Students | ASPIRE", "awards.html": "Awards & Achievements | ASPIRE Education Group", "service-admission.html": "University Admission Support for Bangladeshi Students | ASPIRE", "events.html": "Study Abroad Events in Bangladesh | ASPIRE Education Group", "service-accommodation.html": "Student Accommodation Abroad | ASPIRE Education Group", "scholarship-ireland.html": "Scholarships in Ireland for Bangladeshi Students | ASPIRE", "scholarship-malaysia.html": "Scholarships in Malaysia for Bangladeshi Students | ASPIRE", "blog-admission-documents.html": "Admission Documents Checklist for Studying Abroad | ASPIRE Blog", "study-japan.html": "Study in Japan from Bangladesh | Student Visa & Admission – ASPIRE", "service-insurance.html": "Student Health Insurance for Studying Abroad | ASPIRE"};
function __seoT(file,fallback){var m=window.__SEO_TITLES;return (m&&m[file])||fallback;}
(() => {
      'use strict';

      const $ = (selector) => document.querySelector(selector);
      const $$ = (selector) => Array.from(document.querySelectorAll(selector));
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const scrollBehavior = reduceMotion ? 'auto' : 'smooth';

      /* Keep the six main menu categories useful now that page sections exist. */
      $$('.dropdown-link, .mobile-sub a').forEach((link) => {
        const label = link.textContent.replace(/\s+/g, ' ').trim();
        if (label === 'Awards and Achievements') {
          link.setAttribute('href', '#awards');
        } else if (label === 'Testimonials') {
          link.setAttribute('href', '#testimonials');
        } else if (label === 'Our Leadership') {
          link.setAttribute('href', '#leadership');
        } else if (label.startsWith('Study in') && !link.closest('#destinationsMenu, #mDestinations')) {
          link.setAttribute('href', '#destinations');
        } else if (label.startsWith('Scholarships in') && !link.closest('#scholarshipMenu, #mScholarship')) {
          link.setAttribute('href', '#courseFinder');
        } else if (['Admission Support', 'Health Insurance', 'Student Accommodation', 'Visa Processing'].includes(label) && !link.closest('#servicesMenu, #mServices')) {
          link.setAttribute('href', '#services');
        }
        if (link.getAttribute('href') === '#') {
          link.addEventListener('click', (event) => event.preventDefault());
        }
      });

      const setSelectValue = (select, value) => {
        if (!select || !value) return false;
        const exists = Array.from(select.options).some((option) => option.value === value);
        if (exists) select.value = value;
        return exists;
      };

      const askConsultation = ({ destination, message }) => {
        const panel = document.getElementById('consultPanel');
        if (panel) panel.classList.remove('sent');
        const destinationSelect = document.getElementById('consultDestination');
        if (destination) setSelectValue(destinationSelect, destination);
        const messageField = document.getElementById('consultMessage');
        if (messageField && message) messageField.value = message;
        const openButton = document.getElementById('consultOpen');
        if (openButton) openButton.click();
      };

      /* ---------- Service cards open a prefilled consultation ---------- */
      $$('.service-card').forEach((card) => {
        card.addEventListener('click', () => {
          const service = card.dataset.service || 'study abroad support';
          askConsultation({ message: `I'd like some guidance with ${service}. Please contact me with the next steps.` });
        });
      });

      /* ---------- Destination cards ---------- */
      $$('.dest-card').forEach((card) => {
        card.addEventListener('click', () => {
          const destination = card.dataset.destination || 'my preferred destination';
          askConsultation({
            destination,
            message: `I'm interested in studying in ${destination}. Please share suitable courses, universities and scholarship options.`
          });
        });
      });

      /* Event registration opens a consultation prefilled with event details. */
      document.querySelectorAll('[data-event-register]').forEach((button) => {
        button.addEventListener('click', () => {
          const title = button.dataset.eventTitle || 'an upcoming ASPIRE event';
          const destination = button.dataset.eventDestination || '';
          const action = /reserve/i.test(button.textContent) ? 'reserve a seat for' : 'register my interest in';
          askConsultation({
            destination,
            message: `I would like to ${action} ${title}. Please share the event details and registration steps.`
          });
        });
      });

      /* The all-events destination is an SPA view inside this single-page app. */
      const homeView = document.getElementById('home');
      const eventsPage = document.getElementById('eventsPage');
      const awardsPage = document.getElementById('awardsPage');
      const leadershipPage = document.getElementById('leadershipPage');
      const testimonialsPage = document.getElementById('testimonialsPage');
      const destinationPage = document.getElementById('destinationPage');
      const servicePage = document.getElementById('servicePage');
      const blogPage = document.getElementById('blogPage');
      const scholarshipPage = document.getElementById('scholarshipPage');
      const contactPage = document.getElementById('contactPage');
      const viewAllEventsLink = document.getElementById('viewAllEvents');
      const eventsBackButton = document.getElementById('eventsBack');
      const awardsBackButton = document.getElementById('awardsBack');
      const originalPageTitle = document.title;

      const showEventsPage = (updateHistory = true) => {
        if (contactPage) contactPage.hidden = true;
        if (scholarshipPage) scholarshipPage.hidden = true;
        if (blogPage) blogPage.hidden = true;
        if (servicePage) servicePage.hidden = true;
        if (destinationPage) destinationPage.hidden = true;
        if (!homeView || !eventsPage || !awardsPage) return;
        homeView.hidden = true;
        awardsPage.hidden = true;
        if (leadershipPage) leadershipPage.hidden = true;
        if (testimonialsPage) testimonialsPage.hidden = true;
        eventsPage.hidden = false;
        document.title = __seoT('events.html','ASPIRE Events | Study Abroad Events in Bangladesh');
        if (updateHistory && window.location.hash !== '#all-events') {
          window.history.pushState({ aspireView: 'events' }, '', '#all-events');
        }
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      };

      const showAwardsPage = (updateHistory = true) => {
        if (contactPage) contactPage.hidden = true;
        if (scholarshipPage) scholarshipPage.hidden = true;
        if (blogPage) blogPage.hidden = true;
        if (servicePage) servicePage.hidden = true;
        if (destinationPage) destinationPage.hidden = true;
        if (!homeView || !eventsPage || !awardsPage) return;
        homeView.hidden = true;
        eventsPage.hidden = true;
        if (leadershipPage) leadershipPage.hidden = true;
        if (testimonialsPage) testimonialsPage.hidden = true;
        awardsPage.hidden = false;
        document.title = __seoT('awards.html','Awards & Achievements | ASPIRE Education Group');
        if (updateHistory && window.location.hash !== '#awards') {
          window.history.pushState({ aspireView: 'awards' }, '', '#awards');
        }
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      };

      const showLeadershipPage = (updateHistory = true) => {
        if (contactPage) contactPage.hidden = true;
        if (scholarshipPage) scholarshipPage.hidden = true;
        if (blogPage) blogPage.hidden = true;
        if (servicePage) servicePage.hidden = true;
        if (destinationPage) destinationPage.hidden = true;
        if (!homeView || !eventsPage || !awardsPage || !leadershipPage) return;
        homeView.hidden = true;
        eventsPage.hidden = true;
        awardsPage.hidden = true;
        leadershipPage.hidden = false;
        if (testimonialsPage) testimonialsPage.hidden = true;
        document.title = __seoT('leadership.html','Our Leadership | ASPIRE Education Group');
        if (updateHistory && window.location.hash !== '#leadership') window.history.pushState({ aspireView: 'leadership' }, '', '#leadership');
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      };

      const showTestimonialsPage = (updateHistory = true) => {
        if (contactPage) contactPage.hidden = true;
        if (scholarshipPage) scholarshipPage.hidden = true;
        if (blogPage) blogPage.hidden = true;
        if (servicePage) servicePage.hidden = true;
        if (destinationPage) destinationPage.hidden = true;
        if (!homeView || !eventsPage || !awardsPage || !leadershipPage || !testimonialsPage) return;
        homeView.hidden = true;
        eventsPage.hidden = true;
        awardsPage.hidden = true;
        leadershipPage.hidden = true;
        testimonialsPage.hidden = false;
        document.title = __seoT('testimonials.html','Testimonials | ASPIRE Education Group');
        if (updateHistory && window.location.hash !== '#testimonials') window.history.pushState({ aspireView: 'testimonials' }, '', '#testimonials');
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      };

      const showHomePage = (targetHash = '#home', updateHistory = true) => {
        if (!/\/(?:index\.html)?$/.test(location.pathname)) { location.href = 'index.html' + (targetHash || '#home'); return; }
        if (contactPage) contactPage.hidden = true;
        if (scholarshipPage) scholarshipPage.hidden = true;
        if (blogPage) blogPage.hidden = true;
        if (servicePage) servicePage.hidden = true;
        if (destinationPage) destinationPage.hidden = true;
        if (!homeView || !eventsPage || !awardsPage) return;
        eventsPage.hidden = true;
        awardsPage.hidden = true;
        if (leadershipPage) leadershipPage.hidden = true;
        if (testimonialsPage) testimonialsPage.hidden = true;
        homeView.hidden = false;
        document.title = __seoT('index.html',originalPageTitle);
        if (updateHistory && window.location.hash !== targetHash) {
          window.history.pushState({ aspireView: 'home' }, '', targetHash);
        }
        const target = document.getElementById(targetHash.slice(1));
        window.setTimeout(() => {
          if (target && homeView.contains(target)) {
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
          }
        }, 30);
      };

      if (viewAllEventsLink) {
        viewAllEventsLink.addEventListener('click', (event) => {
          event.preventDefault();
          showEventsPage(true);
        });
      }
      if (eventsBackButton) {
        eventsBackButton.addEventListener('click', () => {
          if (window.history.state && window.history.state.aspireView === 'events') {
            window.history.back();
          } else {
            showHomePage('#home', true);
          }
        });
      }
      if (awardsBackButton) {
        awardsBackButton.addEventListener('click', () => {
          if (window.history.state && window.history.state.aspireView === 'awards') {
            window.history.back();
          } else {
            showHomePage('#home', true);
          }
        });
      }

      document.querySelectorAll('.dropdown-link, .mobile-sub a').forEach((link) => {
        const label = link.textContent.replace(/\s+/g, ' ').trim();
        if (label !== 'Awards and Achievements') return;
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const menu = document.getElementById('mobileMenu');
          if (menu && menu.classList.contains('show')) {
            const close = document.getElementById('menuClose');
            if (close) close.click();
          }
          showAwardsPage(true);
        });
      });

      document.querySelectorAll('.dropdown-link, .mobile-sub a').forEach((link) => {
        if (link.textContent.replace(/\s+/g, ' ').trim() !== 'Our Leadership') return;
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const menu = document.getElementById('mobileMenu');
          if (menu && menu.classList.contains('show')) document.getElementById('menuClose')?.click();
          showLeadershipPage(true);
        });
      });
      document.getElementById('leadershipConsult')?.addEventListener('click', () => askConsultation({ message: 'I would like to speak with an ASPIRE counsellor about studying abroad.' }));

      document.querySelectorAll('.dropdown-link, .mobile-sub a').forEach((link) => {
        if (link.textContent.replace(/\s+/g, ' ').trim() !== 'Testimonials') return;
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const menu = document.getElementById('mobileMenu');
          if (menu && menu.classList.contains('show')) document.getElementById('menuClose')?.click();
          showTestimonialsPage(true);
        });
      });
      document.getElementById('testimonialsHomeButton')?.addEventListener('click', () => showHomePage('#home', true));
      document.getElementById('testimonialsConsult')?.addEventListener('click', () => askConsultation({ message: 'I would like to speak with an ASPIRE counsellor about studying abroad.' }));

      document.querySelectorAll('#awardsConsultButton, [data-awards-consult]').forEach((button) => {
        button.addEventListener('click', () => {
          askConsultation({ message: 'I would like to learn more about ASPIRE Education Group and discuss my study abroad plans.' });
        });
      });


      const destinationData = {
        'australia': {name:'Australia',accent:'#16789b',soft:'#e5f5f7',tag:'A brighter future down under',intro:'Explore a diverse education landscape, vibrant cities and pathways for international students in Australia.',highlights:['World-class learning','Practical study options','Welcoming communities','Distinctive landscapes'],courses:['Business and management','Information technology','Engineering and built environment','Health and life sciences']},
        'canada': {name:'Canada',accent:'#bd6858',soft:'#fbefeb',tag:'Make your next move north',intro:'Discover study options across Canada, from dynamic cities to close-knit campus communities.',highlights:['Diverse institutions','Applied learning','Multicultural communities','Outstanding natural scenery'],courses:['Business and finance','Computer science and technology','Engineering','Health and social sciences']},
        'usa': {name:'USA',accent:'#3866a7',soft:'#e9f0fb',tag:'Big ideas, boundless possibilities',intro:'Explore the breadth of American higher education and find a study experience that matches your ambitions.',highlights:['Wide course choice','Research opportunities','Campus experiences','Flexible study pathways'],courses:['Business and economics','Computer science','Engineering','Media and creative arts']},
        'uk': {name:'UK',accent:'#7b5c9f',soft:'#f2edf8',tag:'Tradition meets tomorrow',intro:'From historic campuses to innovative cities, discover the many possibilities for studying in the United Kingdom.',highlights:['Historic universities','Diverse programmes','Research and innovation','Global connections'],courses:['Business and management','Law and social sciences','Engineering and technology','Arts and design']},
        'ireland': {name:'Ireland',accent:'#228b70',soft:'#e7f6ef',tag:'Learn, grow and discover',intro:'Explore Ireland’s welcoming cities, vibrant culture and a diverse range of education opportunities.',highlights:['Welcoming communities','Innovative learning','Rich cultural heritage','Beautiful surroundings'],courses:['Business and finance','Computing and technology','Life sciences','Hospitality and tourism']},
        'new-zealand': {name:'New Zealand',accent:'#267f83',soft:'#e6f4f2',tag:'A world of new perspectives',intro:'Discover study choices in New Zealand, where inspiring landscapes meet a supportive learning environment.',highlights:['Student-centred learning','Practical programmes','Friendly communities','Spectacular landscapes'],courses:['Environmental studies','Business and management','Engineering','Information technology']},
        'malaysia': {name:'Malaysia',accent:'#b77b32',soft:'#fbf2e4',tag:'Your gateway to new possibilities',intro:'Explore Malaysia’s diverse higher education options, lively cities and rich mix of cultures.',highlights:['International outlook','Diverse programmes','Connected cities','Cultural variety'],courses:['Business and accounting','Engineering','Computing and IT','Hospitality and tourism']},
        'china': {name:"China",accent:"#b56256",soft:"#fbefeb",tag:"Discover new perspectives",intro:"Explore study opportunities in China, from dynamic cities to historic university communities.",highlights:["Diverse study options", "Rich cultural heritage", "Dynamic cities", "International perspectives"],courses:["Business and economics", "Engineering and technology", "Computer science", "Language studies"]},
        'finland': {name:"Finland",accent:"#387fa2",soft:"#e9f5f9",tag:"Ideas for a brighter future",intro:"Discover study options in Finland and explore its Nordic culture and distinctive learning environments.",highlights:["Nordic study experience", "Innovative learning", "Student communities", "Natural surroundings"],courses:["Technology and engineering", "Business and management", "Design and creative arts", "Environmental studies"]},
        'greece': {name:"Greece",accent:"#3a83a6",soft:"#e8f6fa",tag:"A new chapter in the Mediterranean",intro:"Explore education opportunities in Greece alongside its historic cities and Mediterranean culture.",highlights:["Historic learning environments", "Cultural experiences", "Mediterranean setting", "Diverse study options"],courses:["Business and economics", "Arts and humanities", "Tourism and hospitality", "Engineering"]},
        'italy': {name:"Italy",accent:"#a66d58",soft:"#f9efea",tag:"Where creativity meets tradition",intro:"Discover study opportunities in Italy, from historic university towns to creative and vibrant cities.",highlights:["Historic university towns", "Art and design culture", "International communities", "Rich cultural heritage"],courses:["Design and creative arts", "Business and economics", "Architecture", "Engineering"]},
        'malta': {name:"Malta",accent:"#b8803a",soft:"#faf2e4",tag:"Explore a Mediterranean future",intro:"Explore study opportunities in Malta and discover its Mediterranean setting and diverse community.",highlights:["Mediterranean setting", "International environment", "Cultural heritage", "Diverse study options"],courses:["Business and management", "Hospitality and tourism", "Information technology", "Language studies"]},
        'south-korea': {name:"South Korea",accent:"#635fa6",soft:"#efedfa",tag:"Inspired by ideas and innovation",intro:"Explore study opportunities in South Korea, where dynamic cities and distinctive culture offer new perspectives.",highlights:["Innovation and technology", "Vibrant cities", "Cultural experiences", "International perspectives"],courses:["Engineering and technology", "Business and economics", "Design and creative arts", "Korean language studies"]},
        'japan': {name:'Japan',accent:'#bc6672',soft:'#fbecf0',tag:'Where tradition inspires innovation',intro:'Experience the possibilities of studying in Japan, from its dynamic cities to its distinctive academic culture.',highlights:['Technology and innovation','Rich cultural heritage','Vibrant cities','International perspectives'],courses:['Engineering and technology','Business and economics','Design and creative arts','Japanese language studies']},
        'europe': {name:'Europe',accent:'#8a70a6',soft:'#f1eef8',tag:'Many cultures, one new chapter',intro:'Explore study opportunities across Europe and discover a variety of languages, cultures and academic pathways.',highlights:['Diverse destinations','International communities','Cultural experiences','Range of study pathways'],courses:['Business and economics','Engineering','Design and creative arts','International relations']},
        'dubai': {name:'Dubai',accent:'#ba8c3a',soft:'#faf2e4',tag:'Study in a city of ambition',intro:'Explore international study opportunities in Dubai, a dynamic city connecting people and ideas from around the world.',highlights:['International environment','Modern learning spaces','Global connections','Dynamic city life'],courses:['Business and management','Hospitality and tourism','Information technology','Media and design']}
      };
      const icons=['bi-mortarboard','bi-lightbulb','bi-people','bi-globe2'];
      const destList = items => items.map(item=>`<li><i class="bi bi-check2-circle" aria-hidden="true"></i><span>${item}</span></li>`).join('');
      const showDestinationPage = (slug, updateHistory=true) => {
        if (contactPage) contactPage.hidden = true;
        if (scholarshipPage) scholarshipPage.hidden = true;
        if (blogPage) blogPage.hidden = true;
        if (servicePage) servicePage.hidden = true;
        const d=destinationData[slug]; if(!d || !destinationPage)return;
        homeView.hidden=true;eventsPage.hidden=true;awardsPage.hidden=true;leadershipPage.hidden=true;testimonialsPage.hidden=true;destinationPage.hidden=false;
        destinationPage.style.setProperty('--dest-accent',d.accent);destinationPage.style.setProperty('--dest-soft',d.soft);
        destinationPage.innerHTML=`
          <section class="dst-hero"><div class="shell"><button type="button" class="dst-back" data-dest-home><span aria-hidden="true">←</span> Back to Home</button><div class="dst-hero-grid"><div class="dst-hero-copy"><div class="dst-kicker"><i class="bi bi-stars"></i> ${d.tag}</div><h1>Study in<br><span>${d.name}.</span></h1><p>${d.intro} Let ASPIRE help you explore your next step.</p><div class="dst-actions"><button class="dst-primary" type="button" data-dest-consult>Talk to a counsellor <i class="bi bi-arrow-up-right"></i></button><a class="dst-outline" href="#dst-overview" data-dest-scroll>Explore ${d.name} <i class="bi bi-arrow-down"></i></a></div></div><div class="dst-hero-photo"><img src="images/dest-${slug}.jpg" alt="Illustrative view of ${d.name}"><div class="dst-photo-label"><i class="bi bi-geo-alt-fill"></i> Discover ${d.name}</div></div></div></div></section>
          <section class="dst-section" id="dst-overview"><div class="shell dst-intro"><div><span class="dst-overline">THE DESTINATION</span><h2>Your next chapter in ${d.name}</h2><p>${d.intro} Choosing where to study is a personal decision, and the right course will depend on your academic background, budget and future goals.</p><p>Our team can help you explore suitable institutions, understand the application process and prepare for the journey ahead. Course availability and entry requirements vary by institution.</p></div><aside class="dst-sidebar"><i class="bi bi-chat-dots" style="font-size:24px;color:#9ed8e8"></i><h3>Have questions?</h3><p>Talk with our team about your study plans and the options that fit you.</p><button type="button" class="dst-primary" data-dest-consult>Get personalised guidance <i class="bi bi-arrow-right"></i></button></aside></div></section>
          <section class="dst-section dst-alt"><div class="shell"><div class="dst-section-head"><span class="dst-overline">WHY ${d.name.toUpperCase()}</span><h2>A place to learn, grow and explore.</h2><p>Explore a destination with opportunities to build your own unique study experience.</p></div><div class="dst-benefits">${d.highlights.map((h,i)=>`<article class="dst-benefit"><i class="bi ${icons[i]}"></i><small>0${i+1}</small><h3>${h}</h3><p>Discover opportunities that match your interests and goals.</p></article>`).join('')}</div></div></section>
          <section class="dst-section"><div class="shell"><div class="dst-section-head"><span class="dst-overline">PLAN YOUR STUDIES</span><h2>Find the path that fits you.</h2><p>Explore your options and prepare the essentials with confidence.</p></div><div class="dst-columns"><article class="dst-panel"><h3>Popular subject areas</h3><p>Here are some areas you may want to explore. Available courses depend on the institution.</p><ul class="dst-list">${destList(d.courses)}</ul></article><article class="dst-panel"><h3>Admission essentials</h3><p>Requirements differ by course and institution; check the latest details before applying.</p><ul class="dst-list">${destList(['Academic transcripts and qualifications','Language proficiency evidence, where required','Passport and supporting documents','Course-specific requirements and application deadlines'])}</ul></article><article class="dst-panel"><h3>Budget & living costs</h3><p>Tuition and living expenses vary by location, institution and lifestyle. Plan for tuition, accommodation, food, transport, insurance and visa-related costs.</p><ul class="dst-list">${destList(['Compare published tuition fees','Plan accommodation and everyday expenses','Explore scholarships and funding options'])}</ul></article><article class="dst-panel"><h3>Visas & working rights</h3><p>Visa rules, work permissions and post-study pathways can change and depend on your circumstances. Always check the relevant government and institution guidance before making plans.</p><ul class="dst-list">${destList(['Check eligibility and current visa conditions','Prepare financial and supporting evidence','Confirm any work restrictions directly'])}</ul></article></div></div></section>
          <section class="dst-section dst-alt"><div class="shell"><div class="dst-section-head"><span class="dst-overline">YOUR JOURNEY</span><h2>From first idea to next step.</h2><p>Every application is different. These are useful starting points as you plan.</p></div><div class="dst-steps">${[['01','Explore','Tell us about your goals and preferred subjects.'],['02','Choose','Compare institutions and course options.'],['03','Apply','Prepare the documents required by your chosen institution.'],['04','Prepare','Review visa requirements and plan for your journey.']].map(x=>`<article class="dst-step"><b>${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></div></section>
          <section class="dst-section"><div class="shell"><div class="dst-section-head"><span class="dst-overline">COMMON QUESTIONS</span><h2>Good questions, clear next steps.</h2></div><div class="dst-faq"><details><summary>What qualifications do I need to study in ${d.name}?</summary><p>Entry requirements vary by institution, programme and level of study. Check the course’s official entry criteria or speak with our team.</p></details><details><summary>How much will it cost?</summary><p>Costs depend on your institution, programme and location. Check current tuition fees and budget for living expenses, insurance and visa costs.</p></details><details><summary>Are scholarships available?</summary><p>Some institutions and organisations offer scholarships, each with its own criteria and deadlines. Check the official provider's current information.</p></details><details><summary>Can I work while studying?</summary><p>Work rights depend on your visa, destination and circumstances. Always confirm current conditions with the relevant government authority.</p></details></div><div class="dst-cta"><div><h3>Ready to explore ${d.name}?</h3><p>Start a conversation about your study goals.</p></div><button class="dst-primary" type="button" data-dest-consult>Speak to our team <i class="bi bi-arrow-right"></i></button></div></div></section>`;
        document.title=__seoT(`study-${slug}.html`,`Study in ${d.name} | ASPIRE Education Group`);
        if(updateHistory && window.location.hash!==`#study-${slug}`) history.pushState({aspireView:'destination',slug},'',`#study-${slug}`);
        window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});
      };
      destinationPage.addEventListener('click', e=>{
        if(e.target.closest('[data-dest-home]')) { showHomePage('#home',true); return; }
        if(e.target.closest('[data-dest-consult]')) {const slug=(location.hash || '#'+location.pathname.split('/').pop().replace(/\.html$/, '')).replace('#study-','');const name=destinationData[slug]?.name||'my preferred destination';askConsultation({destination:name,message:`I would like guidance about studying in ${name}.`});return;}
        if(e.target.closest('[data-dest-scroll]')){e.preventDefault();document.getElementById('dst-overview')?.scrollIntoView({behavior:reduceMotion?'auto':'smooth'});}
      });
      document.querySelectorAll('#destinationsMenu a, #mDestinations a').forEach(link=>link.addEventListener('click',e=>{
        const slug=link.getAttribute('href').replace('#study-','');if(!destinationData[slug])return;e.preventDefault();
        document.getElementById('menuClose')?.click();showDestinationPage(slug,true);
      }));


      const serviceData={
        admission:{name:'Admission Support',headline:'A clearer path to',highlight:'your admission.',accent:'#157f9f',soft:'#e6f5f8',tag:'YOUR APPLICATION, MADE PERSONAL',intro:'From exploring courses to preparing your application, get guidance for the next step in your study abroad journey.',about:'Choosing a course and institution is an important decision. We can help you explore options aligned with your goals and understand the steps required by your chosen institution.',features:[['bi-compass','Course exploration','Compare study options based on your interests and goals.'],['bi-file-earmark-check','Application preparation','Understand the documents and steps your institution requires.'],['bi-chat-dots','Personal guidance','Talk through your questions and prepare for what comes next.']],lists:[['Explore your options',['Study goals and preferred destinations','Course content and entry requirements','Institution application deadlines']],['Prepare your application',['Academic transcripts and certificates','English-language evidence, if required','Personal statement and references, where requested']]],steps:[['Explore','Discuss your goals and preferences.'],['Shortlist','Review courses and entry criteria.'],['Prepare','Gather documents and complete application steps.'],['Follow up','Respond to requests from the institution.']],faqs:[['Can you help me choose a course?','We can discuss your interests and help you explore suitable options. The final choice is yours.'],['What documents will I need?','Requirements vary by institution and course. Academic records, identification and language evidence may be requested.'],['Can you guarantee admission?','No. Admission decisions are made by the institution and depend on its criteria.']]},
        insurance:{name:'Health Insurance',headline:'Care for your journey,',highlight:'wherever you go.',accent:'#359189',soft:'#e7f7f2',tag:'STUDENT HEALTH COVER',intro:'Understand health cover options and the questions to ask as you prepare to study abroad.',about:'Health insurance rules and healthcare systems vary by destination. Understanding what a policy covers—and what it does not—is an important part of planning.',features:[['bi-shield-check','Understand requirements','Check destination and institution requirements before choosing a plan.'],['bi-heart-pulse','Compare coverage','Review benefits, exclusions, waiting periods and limits.'],['bi-file-earmark-text','Review the details','Check the policy wording and claims process directly with the provider.']],lists:[['What to review',['Hospital and medical coverage','Policy limits, excess and exclusions','Eligibility and waiting periods']],['Before choosing',['Visa or institution insurance requirements','Coverage dates and cancellation terms','Claims procedures and emergency contacts']]],steps:[['Check','Understand your destination requirements.'],['Compare','Review suitable policy options.'],['Confirm','Verify terms with the insurer.'],['Keep records','Save your policy and emergency details.']],faqs:[['Is health insurance required?','Requirements depend on the destination, visa and institution. Check the applicable official guidance.'],['Does every plan cover the same services?','No. Benefits, limits, exclusions and waiting periods vary by policy. Read the policy wording carefully.'],['Who makes insurance decisions?','The insurer determines eligibility and coverage. We do not guarantee benefits or claim outcomes.']]},
        accommodation:{name:'Student Accommodation',headline:'Find a place that',highlight:'feels like home.',accent:'#b77d37',soft:'#fbf3e5',tag:'A PLACE FOR YOUR NEXT CHAPTER',intro:'Explore the practical details that can help you choose student accommodation with confidence.',about:'The right place to live depends on your budget, study location and personal preferences. Start early and compare the options carefully before committing.',features:[['bi-geo-alt','Location matters','Consider the commute, transport and access to essentials.'],['bi-wallet2','Plan your budget','Compare rent, deposits, bills and other possible costs.'],['bi-house-heart','Choose your space','Review facilities, safety and the type of living arrangement.']],lists:[['Compare your options',['University accommodation and private rentals','Shared rooms, studios and other living arrangements','Transport links and local amenities']],['Before you book',['Total costs, deposits and included bills','Contract dates, cancellation and notice terms','Property details, safety and provider legitimacy']]],steps:[['Plan','Identify your needs and budget.'],['Explore','Compare available accommodation types.'],['Check','Verify the property and review the contract.'],['Prepare','Plan your move and keep booking records.']],faqs:[['What types of housing can I consider?','Options may include university residences, shared housing and private rentals, depending on the destination.'],['Are utilities included in the rent?','This varies. Check the listing and written agreement for bills, deposits and other charges.'],['Can you guarantee availability?','No. Availability, prices and booking terms are set by the accommodation provider.']]},
        visa:{name:'Visa Processing',headline:'Your visa journey,',highlight:'with a clear plan.',accent:'#626fa7',soft:'#edf0fa',tag:'STUDENT VISA GUIDANCE',intro:'Understand the application journey and prepare to navigate the next steps in your study abroad plans.',about:'Student visa requirements differ by destination and can change. We can help you understand the process, organise your documents and locate the relevant official guidance.',features:[['bi-compass','Understand the process','Review the official requirements for your destination.'],['bi-folder-check','Prepare documents','Create a checklist based on your circumstances and current rules.'],['bi-chat-square-text','Guidance along the way','Know where to find official information and application updates.']],lists:[['Common documents to check',['Passport and application information','Evidence of admission, where required','Financial, language and other supporting evidence']],['Before you apply',['Current government requirements and deadlines','Application fees and appointment steps','Conditions attached to your visa']]],steps:[['Review','Check the current official requirements.'],['Gather','Organise the required evidence.'],['Apply','Follow the relevant application process.'],['Prepare','Respond to official requests and plan your journey.']],faqs:[['Can you guarantee my visa will be approved?','No. Visa decisions are made by the relevant government authority.'],['Are visa rules the same for every country?','No. Requirements and conditions vary by destination and individual circumstances. Always check official sources.'],['What if additional documents are requested?','Follow the instructions and deadlines provided by the relevant visa authority.']]} 
      };
      const svcIcons = items => items.map(x=>`<li><i class="bi bi-check2-circle" aria-hidden="true"></i><span>${x}</span></li>`).join('');
      const showServicePage=(slug,updateHistory=true)=>{
        if (contactPage) contactPage.hidden = true;
        if (scholarshipPage) scholarshipPage.hidden = true;
        if (blogPage) blogPage.hidden = true;
        const d=serviceData[slug];if(!d||!servicePage)return;
        homeView.hidden=true;eventsPage.hidden=true;awardsPage.hidden=true;leadershipPage.hidden=true;testimonialsPage.hidden=true;destinationPage.hidden=true;servicePage.hidden=false;
        servicePage.style.setProperty('--dest-accent',d.accent);servicePage.style.setProperty('--dest-soft',d.soft);
        servicePage.innerHTML=`<section class="svc-hero"><div class="shell"><button type="button" class="dst-back" data-service-home><span aria-hidden="true">←</span> Back to Home</button><div class="svc-grid"><div class="svc-hero-copy"><div class="dst-kicker"><i class="bi bi-stars"></i> ${d.tag}</div><h1>${d.headline}<br><span>${d.highlight}</span></h1><p>${d.intro}</p><div class="dst-actions"><button type="button" class="dst-primary" data-service-consult>Talk to an ASPIRE counsellor <i class="bi bi-arrow-up-right"></i></button><a class="dst-outline" href="#service-overview" data-service-scroll>Explore this service <i class="bi bi-arrow-down"></i></a></div></div><div class="svc-image"><img src="images/service-${slug}.jpg" alt="Illustrative image for ${d.name}"><div class="svc-image-tag"><i class="bi bi-stars"></i> Guidance for your next step</div></div></div></div></section>
        <section class="dst-section" id="service-overview"><div class="shell svc-intro"><div><span class="dst-overline">HOW WE CAN HELP</span><h2>${d.name}, with you in mind.</h2><p>${d.about}</p><p>Every student’s situation is different. Speak to our team about the details that matter to you and verify the latest requirements with the relevant institution, provider or authority.</p></div><aside class="dst-sidebar"><i class="bi bi-chat-dots" style="font-size:24px;color:#9ed8e8"></i><h3>Let’s talk about your goals.</h3><p>Not sure where to start? Have a conversation with our team.</p><button type="button" class="dst-primary" data-service-consult>Get in touch <i class="bi bi-arrow-right"></i></button></aside></div></section>
        <section class="dst-section dst-alt"><div class="shell"><div class="dst-section-head"><span class="dst-overline">THOUGHTFUL SUPPORT</span><h2>Guidance for the details that matter.</h2><p>Start with the essentials, then make an informed decision that fits your circumstances.</p></div><div class="svc-feature-grid">${d.features.map(f=>`<article class="svc-feature"><i class="bi ${f[0]}"></i><h3>${f[1]}</h3><p>${f[2]}</p></article>`).join('')}</div></div></section>
        <section class="dst-section"><div class="shell"><div class="dst-section-head"><span class="dst-overline">BEFORE YOU BEGIN</span><h2>What to consider.</h2><p>Use these points as a starting place for your own research and planning.</p></div><div class="svc-checklist">${d.lists.map(l=>`<article class="dst-panel"><h3>${l[0]}</h3><ul class="dst-list">${svcIcons(l[1])}</ul></article>`).join('')}</div><div class="svc-note"><i class="bi bi-info-circle"></i> Requirements, availability, fees and terms can change. Confirm current details directly with the relevant institution, provider or government authority.</div></div></section>
        <section class="dst-section dst-alt"><div class="shell"><div class="dst-section-head"><span class="dst-overline">YOUR NEXT STEPS</span><h2>One step at a time.</h2><p>A simple starting point for planning your journey.</p></div><div class="svc-steps">${d.steps.map((x,i)=>`<article class="dst-step"><b>0${i+1}</b><h3>${x[0]}</h3><p>${x[1]}</p><button class="svc-step-message" type="button" data-service-step="${i}">Ask about this step <span aria-hidden="true">↗</span></button></article>`).join('')}</div></div></section>
        <section class="dst-section"><div class="shell"><div class="dst-section-head"><span class="dst-overline">COMMON QUESTIONS</span><h2>Answers to help you move forward.</h2></div><div class="dst-faq">${d.faqs.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</div><div class="dst-cta"><div><h3>Ready to take your next step?</h3><p>Talk with our team about ${d.name.toLowerCase()}.</p></div><button class="dst-primary" type="button" data-service-consult>Speak to our team <i class="bi bi-arrow-right"></i></button></div><p class="svc-disclaimer">Images are AI-generated illustrations. Information is general guidance and is not a guarantee of admission, insurance coverage, housing availability or a visa outcome.</p></div></section>`;
        document.title=__seoT(`service-${slug}.html`,`${d.name} | ASPIRE Education Group`);
        if(updateHistory&&location.hash!==`#service-${slug}`)history.pushState({aspireView:'service',slug},'',`#service-${slug}`);
        window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});
      };
      servicePage.addEventListener('click',e=>{
        const stepButton=e.target.closest('[data-service-step]');
        if(stepButton){const slug=(location.hash || '#'+location.pathname.split('/').pop().replace(/\.html$/, '')).replace('#service-','');const service=serviceData[slug];const step=service?.steps[Number(stepButton.dataset.serviceStep)];if(!service||!step)return;const dlg=document.getElementById('serviceMessageDialog');dlg.dataset.service=service.name;dlg.dataset.step=step[0];document.getElementById('serviceMessageTitle').textContent='Ask about '+step[0];document.getElementById('serviceMessageContext').textContent=service.name+' · '+step[0];document.getElementById('serviceMessageText').value='';dlg.showModal();return;}
        if(e.target.closest('[data-service-home]')){showHomePage('#home',true);return;}
        if(e.target.closest('[data-service-consult]')){let d=serviceData[(location.hash || '#'+location.pathname.split('/').pop().replace(/\.html$/, '')).replace('#service-','')];askConsultation({message:`I would like guidance with ${d?.name || 'study abroad services'}.`});return;}
        if(e.target.closest('[data-service-scroll]')){e.preventDefault();document.getElementById('service-overview')?.scrollIntoView({behavior:reduceMotion?'auto':'smooth'});}
      });
      document.querySelectorAll('#servicesMenu a, #mServices a').forEach(link=>link.addEventListener('click',e=>{
        let slug=link.getAttribute('href').replace('#service-','');if(!serviceData[slug])return;e.preventDefault();document.getElementById('menuClose')?.click();showServicePage(slug,true);
      }));


      const blogArticles=[
        {slug:'choosing-a-destination',category:'Planning',title:'How to choose your study abroad destination',image:'images/dest-australia.jpg',summary:'Compare your options and find a destination that fits your goals.',intro:'Choosing where to study is about more than a single ranking. Think about the course, your budget, the experience you want and the opportunities that matter to you.',sections:[['Start with your goals','List your preferred subjects, desired qualification and career interests. Then look for programmes that match those priorities.'],['Compare the full picture','Review tuition, living costs, language requirements and location. Check each institution’s official information and consider how you prefer to live and study.'],['Ask practical questions','Look at application deadlines, student support, accommodation and current visa conditions before narrowing your list.']]},
        {slug:'canada-study-planning',category:'Destinations',title:'Planning your study journey in Canada',image:'images/dest-canada.jpg',summary:'A practical starting point for exploring Canadian programmes.',intro:'Canada offers a range of institutions, locations and programmes. A thoughtful comparison can help you identify options that suit your plans.',sections:[['Explore programmes','Compare course content, entry requirements, application deadlines and the qualification awarded by each institution.'],['Build your budget','Review published tuition and estimate housing, food, transport, insurance and other costs for the city you are considering.'],['Check official requirements','Visa and work rules can change. Consult the Canadian government and your institution for the latest information.']]},
        {slug:'uk-course-selection',category:'Destinations',title:'Finding the right course in the UK',image:'images/dest-uk.jpg',summary:'What to consider when comparing UK courses and institutions.',intro:'The right course depends on what you want to learn and where you hope your qualification will take you.',sections:[['Look beyond the title','Read the course modules, teaching methods and assessment details. Similar course titles can lead to very different experiences.'],['Check entry criteria','Review academic and English-language requirements, deadlines and any subject-specific criteria directly with the institution.'],['Plan your finances','Consider tuition and living expenses, and check scholarship eligibility and deadlines with the official provider.']]},
        {slug:'admission-documents',category:'Admissions',title:'A simple guide to admission documents',image:'images/service-admission.jpg',summary:'Get organised before you start your university application.',intro:'Requirements differ by course and institution, but starting your document preparation early can make the process easier to manage.',sections:[['Gather academic records','Locate transcripts and certificates and check whether the institution needs certified copies or translations.'],['Prepare supporting materials','Some courses request a personal statement, references, portfolio or proof of English-language ability. Check the specific requirements.'],['Review before submitting','Confirm the application deadline, file formats and all information with the institution before submission.']]},
        {slug:'student-accommodation',category:'Student life',title:'How to compare student accommodation',image:'images/service-accommodation.jpg',summary:'Think about location, safety and the full cost before you book.',intro:'A comfortable place to live can make a big difference to your student experience. Compare options carefully before signing an agreement.',sections:[['Location and travel','Consider travel time to campus, public transport, nearby shops and the surrounding neighbourhood.'],['Understand the costs','Check rent, deposit, utilities and any extra charges. Ask what is included and read the agreement carefully.'],['Review the terms','Verify the provider and property, and check the contract length, cancellation terms and notice requirements before paying.']]},
        {slug:'visa-preparation',category:'Visa',title:'Getting organised for a student visa application',image:'images/service-visa.jpg',summary:'Plan your next steps and check the latest official requirements.',intro:'Student visa requirements differ by destination and individual circumstances. Good preparation starts with the official guidance.',sections:[['Check the official process','Visit the relevant government website for current eligibility criteria, forms, fees and processing information.'],['Organise your evidence','Depending on your circumstances, you may need identity, admission, financial or other supporting documents. Follow official instructions.'],['Keep track of deadlines','Save copies of your documents, note important dates and respond promptly to requests from the relevant authority. A visa outcome cannot be guaranteed.']]},
        {slug:'student-health-cover',category:'Student life',title:'Understanding student health insurance',image:'images/service-insurance.jpg',summary:'Questions to ask when comparing health cover for your studies.',intro:'Healthcare and insurance requirements vary by destination. Take time to understand the cover that applies to your circumstances.',sections:[['Check your requirements','Review your visa and institution requirements, including any rules about the type and duration of cover.'],['Compare policy details','Read the benefits, limits, excess, exclusions and waiting periods. Confirm anything unclear directly with the insurer.'],['Keep the essentials handy','Save your policy documents, claims information and emergency contact details where you can access them easily.']]},
        {slug:'ireland-student-journey',category:'Destinations',title:'Starting your study plans for Ireland',image:'images/dest-ireland.jpg',summary:'Explore courses, costs and next steps for your Ireland journey.',intro:'Ireland offers a variety of education opportunities. Begin by finding a programme that supports your goals and fits your circumstances.',sections:[['Explore courses','Compare programme content, entry requirements and institution locations using official sources.'],['Estimate your budget','Consider tuition, accommodation and everyday expenses, which can vary considerably by location.'],['Prepare your application','Check deadlines and visa requirements with your chosen institution and the relevant official authorities.']]},
        {slug:'study-abroad-budget',category:'Planning',title:'Building a realistic study abroad budget',image:'images/dest-new-zealand.jpg',summary:'A helpful checklist for the costs to consider beyond tuition.',intro:'Planning your finances early helps you understand the full cost of studying abroad and compare your choices realistically.',sections:[['Start with tuition','Check the latest published fees for your specific programme and whether additional course costs apply.'],['Include living expenses','Estimate accommodation, food, transport, insurance, utilities and personal expenses for your chosen location.'],['Plan for the unexpected','Consider visa fees, travel, deposits and a contingency fund. Check scholarship terms and deadlines directly with the provider.']]}
      ];
      const showBlogPage=(slug='',updateHistory=true)=>{
        if (contactPage) contactPage.hidden = true;
        if (scholarshipPage) scholarshipPage.hidden = true;
        const article=slug?blogArticles.find(a=>a.slug===slug):null;if(slug&&!article)return;
        homeView.hidden=true;eventsPage.hidden=true;awardsPage.hidden=true;leadershipPage.hidden=true;testimonialsPage.hidden=true;destinationPage.hidden=true;servicePage.hidden=true;blogPage.hidden=false;
        if(!article){blogPage.innerHTML=`<section class="blog-hero"><div class="shell"><button class="dst-back" type="button" data-blog-home><span aria-hidden="true">←</span> Back to Home</button><div class="blog-hero-grid"><div><span class="blog-eyebrow"><i class="bi bi-stars"></i> ASPIRE INSIGHTS</span><h1>Ideas for your<br><span>next chapter.</span></h1><p>Explore practical guides, fresh perspectives and helpful starting points for your study abroad journey.</p></div><div class="blog-hero-photo"><img src="images/service-admission.jpg" alt="Illustrative image of a student discussing study plans"><div class="blog-hero-label"><i class="bi bi-journal-richtext"></i> Stories to guide your journey</div></div></div></div></section><section class="blog-section"><div class="shell"><div class="blog-topline"><div><span class="blog-eyebrow">THE ASPIRE JOURNAL</span><h2>Explore our latest guides.</h2><p>Find useful ideas for every step of your journey.</p></div><label class="blog-search"><i class="bi bi-search" aria-hidden="true"></i><span class="visually-hidden">Search blog articles</span><input id="blogSearch" type="search" placeholder="Search articles by topic..." autocomplete="off"></label></div><div class="blog-filters" aria-label="Filter blog posts">${['All','Planning','Destinations','Admissions','Student life','Visa'].map(x=>`<button type="button" class="blog-filter" data-blog-filter="${x}" aria-pressed="${x==='All'}">${x}</button>`).join('')}</div><div class="blog-grid" id="blogGrid"></div><div class="blog-empty" id="blogEmpty" hidden>No articles match your search. Try a different keyword or category.</div><p class="blog-note">Images are AI-generated illustrations. Guides are general information; confirm current details with official sources.</p></div></section>`;
          let filter='All';const search=blogPage.querySelector('#blogSearch');const grid=blogPage.querySelector('#blogGrid');const empty=blogPage.querySelector('#blogEmpty');
          const render=()=>{const term=search.value.trim().toLowerCase();const visible=blogArticles.filter(a=>(filter==='All'||a.category===filter)&&`${a.title} ${a.summary} ${a.category}`.toLowerCase().includes(term));grid.innerHTML=visible.map(a=>`<article class="blog-card"><div class="blog-card-image"><img src="${a.image}" alt="" loading="lazy"><span class="blog-card-tag">${a.category}</span></div><div class="blog-card-content"><h3>${a.title}</h3><p>${a.summary}</p><div class="blog-card-footer"><span>ASPIRE Guide</span><a class="blog-read" href="#blog-${a.slug}" data-blog-article="${a.slug}">Read article <i class="bi bi-arrow-right"></i></a></div></div></article>`).join('');empty.hidden=visible.length>0;};
          search.addEventListener('input',render);blogPage.querySelectorAll('[data-blog-filter]').forEach(btn=>btn.addEventListener('click',()=>{filter=btn.dataset.blogFilter;blogPage.querySelectorAll('[data-blog-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));render()}));render();
        }else{blogPage.innerHTML=`<section class="blog-article-hero"><div class="shell"><button class="dst-back" type="button" data-blog-list><span aria-hidden="true">←</span> Back to Blog</button><div class="blog-article-header"><span class="blog-eyebrow">${article.category} · ASPIRE GUIDE</span><h1>${article.title}</h1><p>${article.summary}</p></div><img class="blog-article-image" src="${article.image}" alt="Illustrative image for ${article.title}"></div></section><article class="blog-article-body"><p>${article.intro}</p>${article.sections.map(x=>`<h2>${x[0]}</h2><p>${x[1]}</p>`).join('')}<div class="blog-article-advice"><i class="bi bi-info-circle"></i> This article provides general information. Always check current requirements and details with official institutions, providers and relevant government authorities.</div><div class="blog-actions"><button type="button" class="dst-primary" data-blog-consult>Talk to an ASPIRE counsellor <i class="bi bi-arrow-right"></i></button><button type="button" class="dst-outline" data-blog-list>Explore more articles</button></div></article>`;}
        document.title=article?__seoT(`blog-${slug}.html`,`${article.title} | ASPIRE Blog`):__seoT('blog.html','Blog | ASPIRE Education Group');const hash=article?`#blog-${slug}`:'#blog';if(updateHistory&&location.hash!==hash)history.pushState({aspireView:'blog',slug},'',hash);window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});
      };
      blogPage.addEventListener('click',e=>{let item=e.target.closest('[data-blog-article]');if(item){e.preventDefault();showBlogPage(item.dataset.blogArticle,true);return}if(e.target.closest('[data-blog-home]')){showHomePage('#home',true);return}if(e.target.closest('[data-blog-list]')){showBlogPage('',true);return}if(e.target.closest('[data-blog-consult]')){askConsultation({message:'I would like advice about studying abroad.'});}});
      document.querySelectorAll('#resourcesMenu a, #mResources a').forEach(link=>{if(link.textContent.trim()==='Blog')link.addEventListener('click',e=>{e.preventDefault();document.getElementById('menuClose')?.click();showBlogPage('',true);});});


      const scholarshipSources={
        australia:{title:'Australia Awards',url:'https://www.dfat.gov.au/people-to-people/australia-awards'},
        canada:{title:'EduCanada international scholarships',url:'https://www.educanada.ca/scholarships-bourses/index.aspx?lang=eng'},
        usa:{title:'Fulbright Foreign Student Program',url:'https://foreign.fulbrightonline.org/'},
        uk:{title:'Chevening Scholarships',url:'https://www.chevening.org/'},
        japan:{title:'Study in Japan',url:'https://www.studyinjapan.go.jp/en/'},
        'new-zealand':{title:'Study with New Zealand scholarships',url:'https://www.studywithnewzealand.govt.nz/scholarships'},
        europe:{title:'Erasmus Mundus catalogue',url:'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en'}
      };
      const showScholarshipPage=(slug,updateHistory=true)=>{
        if (contactPage) contactPage.hidden = true;
        const d=destinationData[slug];if(!d||!scholarshipPage)return;const source=scholarshipSources[slug];
        homeView.hidden=true;eventsPage.hidden=true;awardsPage.hidden=true;leadershipPage.hidden=true;testimonialsPage.hidden=true;destinationPage.hidden=true;servicePage.hidden=true;blogPage.hidden=true;scholarshipPage.hidden=false;
        scholarshipPage.style.setProperty('--dest-accent',d.accent);scholarshipPage.style.setProperty('--dest-soft',d.soft);
        scholarshipPage.innerHTML=`<section class="sch-hero"><div class="shell"><button type="button" class="dst-back" data-sch-home><span aria-hidden="true">←</span> Back to Home</button><div class="sch-grid"><div class="sch-hero-copy"><span class="dst-kicker"><i class="bi bi-stars"></i> FIND YOUR NEXT OPPORTUNITY</span><h1>Scholarships in<br><span>${d.name}.</span></h1><p>Explore funding possibilities and prepare for your study journey with a clearer plan.</p><div class="dst-actions"><button class="dst-primary" type="button" data-sch-consult>Talk to a counsellor <i class="bi bi-arrow-up-right"></i></button><a class="dst-outline" href="#sch-overview" data-sch-scroll>Explore scholarships <i class="bi bi-arrow-down"></i></a></div></div><div class="sch-photo"><img src="images/dest-${slug}.jpg" alt="Illustrative view of ${d.name}"><div class="sch-photo-label"><i class="bi bi-stars"></i> Opportunity starts with a plan</div></div></div></div></section>
          <section class="dst-section" id="sch-overview"><div class="shell sch-intro"><div><span class="dst-overline">START YOUR SEARCH</span><h2>Explore funding for ${d.name}.</h2><p>Scholarships can help with the cost of studying abroad, but the value, eligibility and application process vary widely. Start by checking the institutions and programmes that match your goals.</p><p>Some awards consider academic achievement, financial need, research interests or other criteria. Always check the provider’s current information for eligibility, deadlines and coverage.</p></div><aside class="dst-sidebar"><i class="bi bi-mortarboard" style="font-size:24px;color:#9ed8e8"></i><h3>Not sure where to start?</h3><p>Talk with our team about your destination, study goals and scholarship search.</p><button class="dst-primary" type="button" data-sch-consult>Speak to our team <i class="bi bi-arrow-right"></i></button></aside></div></section>
          <section class="dst-section dst-alt"><div class="shell"><div class="dst-section-head"><span class="dst-overline">FUNDING OPTIONS</span><h2>Different paths to support.</h2><p>Availability depends on the provider, institution and individual eligibility.</p></div><div class="sch-types"><article class="sch-card sch-detail-trigger" role="button" tabindex="0" data-sch-type="institution" aria-label="View details about Institution awards"><i class="bi bi-bank"></i><h3>Institution awards</h3><p>Explore scholarships and tuition support listed by your chosen institution.</p><span class="sch-card-more">View details <span aria-hidden="true">↗</span></span></article><article class="sch-card sch-detail-trigger" role="button" tabindex="0" data-sch-type="government" aria-label="View details about Government programmes"><i class="bi bi-award"></i><h3>Government programmes</h3><p>Check official programme websites for current eligibility and application details.</p><span class="sch-card-more">View details <span aria-hidden="true">↗</span></span></article><article class="sch-card sch-detail-trigger" role="button" tabindex="0" data-sch-type="other" aria-label="View details about Other funding sources"><i class="bi bi-people"></i><h3>Other funding sources</h3><p>Research grants and awards from independent organisations and foundations.</p><span class="sch-card-more">View details <span aria-hidden="true">↗</span></span></article></div></div></section>
          <section class="dst-section"><div class="shell"><div class="dst-section-head"><span class="dst-overline">EXPLORE RESPONSIBLY</span><h2>Find reliable information.</h2><p>Use official sources to confirm details before you apply.</p></div>${source?`<div class="sch-resource"><div><h3>${source.title}</h3><p>Explore this official resource and check current eligibility, deadlines and application instructions.</p></div><a class="dst-outline" href="${source.url}" target="_blank" rel="noopener noreferrer">Visit official website <i class="bi bi-arrow-up-right"></i></a></div>`:`<div class="sch-resource"><div><h3>Check your chosen institution</h3><p>Search the official scholarship and financial aid pages of institutions in ${d.name}. Verify each award’s terms directly with the provider.</p></div></div>`}<div class="sch-alert"><i class="bi bi-info-circle"></i> This page does not list specific award amounts or deadlines. Scholarships, eligibility and application periods change; consult the official provider for the latest details. A scholarship is not guaranteed.</div></div></section>
          <section class="dst-section dst-alt"><div class="shell"><div class="dst-section-head"><span class="dst-overline">YOUR APPLICATION</span><h2>Turn your search into a plan.</h2><p>Start early and follow the provider’s instructions for each opportunity.</p></div><div class="sch-steps">${[['01','Research','Explore institutions and available funding.'],['02','Check eligibility','Review nationality, course and academic criteria.'],['03','Prepare','Gather the documents requested by the provider.'],['04','Apply','Follow official instructions and submit before the deadline.']].map((x,i)=>`<article class="dst-step sch-step-message" role="button" tabindex="0" data-sch-step="${x[1]}" aria-label="Send a message about ${x[1]}"><b class="sch-step-icon"><i class="bi ${['bi-search','bi-patch-check','bi-folder-check','bi-send'][i]}" aria-hidden="true"></i></b><h3>${x[1]}</h3><p>${x[2]}</p><span class="sch-step-link">Ask about this step <span aria-hidden="true">↗</span></span></article>`).join('')}</div></div></section>
          <section class="dst-section"><div class="shell"><div class="dst-section-head"><span class="dst-overline">COMMON QUESTIONS</span><h2>Helpful answers for your next step.</h2></div><div class="dst-faq"><details><summary>Who can apply for a scholarship in ${d.name}?</summary><p>Eligibility differs by award and may depend on nationality, level of study, course, academic record or other criteria. Check the provider’s current rules.</p></details><details><summary>Do scholarships cover all study costs?</summary><p>Some awards may cover part of the costs and others may provide broader support. Read the exact terms, exclusions and conditions of each award.</p></details><details><summary>What documents are usually required?</summary><p>Depending on the award, providers may request transcripts, references, a personal statement or other documents. Follow the specific application instructions.</p></details><details><summary>Can I apply for more than one scholarship?</summary><p>Rules differ. Check each provider’s conditions, including whether awards can be combined and how to apply.</p></details></div><div class="dst-cta"><div><h3>Ready to explore your options?</h3><p>Let’s talk about your scholarship search for ${d.name}.</p></div><button class="dst-primary" type="button" data-sch-consult>Speak to our team <i class="bi bi-arrow-right"></i></button></div><p class="sch-note">Destination images are AI-generated illustrations. Information is general guidance and does not guarantee funding.</p></div></section>`;
        document.title=__seoT(`scholarship-${slug}.html`,`Scholarships in ${d.name} | ASPIRE Education Group`);if(updateHistory&&location.hash!==`#scholarship-${slug}`)history.pushState({aspireView:'scholarship',slug},'',`#scholarship-${slug}`);window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});
      };
      const schDetailContent={
        institution:{title:'Institution awards',description:'Universities and colleges may offer their own funding for eligible students. Each institution sets its own terms and application process.',points:['Check the official scholarship or financial aid page of your chosen institution.','Compare eligibility, programme level, deadlines and coverage.','Some awards require a separate application; others may have different procedures.']},
        government:{title:'Government programmes',description:'Government-funded scholarships can have specific nationality, study-level and application requirements. Details vary by programme.',points:['Read the programme’s official eligibility and application guidance.','Check the application dates and required documents for your circumstances.','Apply through the official channel and confirm any conditions directly with the provider.']},
        other:{title:'Other funding sources',description:'Independent foundations, organisations and research funders may offer awards or grants for eligible applicants.',points:['Research the organisation and verify its official website before applying.','Check whether the award applies to your course, destination and nationality.','Review coverage, selection criteria, deadlines and any restrictions.']}
      };
      const schDialog=document.getElementById('scholarshipDetailDialog');let schLastTrigger=null;
      const openScholarshipDetail=(card)=>{const details=schDetailContent[card.dataset.schType];const slug=(location.hash || '#'+location.pathname.split('/').pop().replace(/\.html$/, '')).replace('#scholarship-','');const country=destinationData[slug];if(!details||!country)return;schLastTrigger=card;document.getElementById('schDetailTag').textContent=country.name+' · FUNDING GUIDE';document.getElementById('schDetailTitle').textContent=details.title;document.getElementById('schDetailDescription').textContent=details.description;document.getElementById('schDetailList').innerHTML=details.points.map(point=>`<li><span aria-hidden="true">✓</span>${point}</li>`).join('');const resource=document.getElementById('schDetailResource');const source=scholarshipSources[slug];if(card.dataset.schType==='government'&&source){resource.href=source.url;resource.textContent='Visit '+source.title+' ↗';resource.hidden=false}else{resource.hidden=true;resource.removeAttribute('href')}schDialog.showModal();};
      scholarshipPage.addEventListener('keydown',e=>{const card=e.target.closest('.sch-detail-trigger');if(card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openScholarshipDetail(card)}});
      schDialog.querySelector('[data-sch-detail-close]').addEventListener('click',()=>schDialog.close());schDialog.addEventListener('click',e=>{if(e.target===schDialog)schDialog.close()});schDialog.addEventListener('close',()=>{if(schLastTrigger)schLastTrigger.focus()});
      const openScholarshipMessage=(card)=>{const slug=(location.hash || '#'+location.pathname.split('/').pop().replace(/\.html$/, '')).replace('#scholarship-','');const destination=destinationData[slug];if(!destination)return;const dialog=document.getElementById('serviceMessageDialog');const step=card.dataset.schStep;dialog.dataset.service='Scholarships in '+destination.name;dialog.dataset.step=step;document.getElementById('serviceMessageTitle').textContent='Ask about '+step;document.getElementById('serviceMessageContext').textContent='Scholarships in '+destination.name+' · '+step;document.getElementById('serviceMessageText').value='';dialog.showModal();};
      scholarshipPage.addEventListener('keydown',e=>{const card=e.target.closest('.sch-step-message');if(card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openScholarshipMessage(card)}});
      scholarshipPage.addEventListener('click',e=>{const stepCard=e.target.closest('.sch-step-message');if(stepCard){openScholarshipMessage(stepCard);return}const card=e.target.closest('.sch-detail-trigger');if(card){openScholarshipDetail(card);return}if(e.target.closest('[data-sch-home]')){showHomePage('#home',true);return}if(e.target.closest('[data-sch-consult]')){const slug=(location.hash || '#'+location.pathname.split('/').pop().replace(/\.html$/, '')).replace('#scholarship-','');const name=destinationData[slug]?.name||'my preferred destination';askConsultation({destination:name,message:`I would like guidance on scholarships for studying in ${name}.`});return}if(e.target.closest('[data-sch-scroll]')){e.preventDefault();document.getElementById('sch-overview')?.scrollIntoView({behavior:reduceMotion?'auto':'smooth'});}});
      document.querySelectorAll('#scholarshipMenu a, #mScholarship a').forEach(link=>link.addEventListener('click',e=>{const slug=link.getAttribute('href').replace('#scholarship-','');if(!destinationData[slug])return;e.preventDefault();document.getElementById('menuClose')?.click();showScholarshipPage(slug,true)}));


      const showContactPage=(updateHistory=true)=>{
        homeView.hidden=true;eventsPage.hidden=true;awardsPage.hidden=true;leadershipPage.hidden=true;testimonialsPage.hidden=true;destinationPage.hidden=true;servicePage.hidden=true;blogPage.hidden=true;scholarshipPage.hidden=true;contactPage.hidden=false;
        contactPage.innerHTML=`<section class="contact-hero"><div class="shell"><button type="button" class="dst-back" data-contact-home><span aria-hidden="true">←</span> Back to Home</button><div class="contact-hero-content"><span class="contact-kicker"><i class="bi bi-stars"></i> WE’RE HERE TO HELP</span><h1>Let’s start a<br><span>conversation.</span></h1><p>Have questions about your study abroad journey? Reach out to ASPIRE Education Group—we’d love to hear from you.</p></div></div></section>
        <section class="contact-section"><div class="shell contact-layout"><div class="contact-info"><span class="contact-kicker">GET IN TOUCH</span><h2>We’re ready when you are.</h2><p>Visit our office or connect with us directly.</p><div class="contact-method"><span class="contact-method-icon"><i class="bi bi-geo-alt"></i></span><div><h3>Visit our office</h3><address>Mohammadia Super Market, 3rd Floor,<br>4 Sobhanbag, Mirpur Road, Dhanmondi,<br>Dhaka 1207</address><a href="https://maps.app.goo.gl/KfdFd1BxhYjJymGF7" target="_blank" rel="noopener noreferrer">Get directions ↗</a></div></div><div class="contact-method"><span class="contact-method-icon"><i class="bi bi-telephone"></i></span><div><h3>Give us a call</h3><p>Speak with the ASPIRE team.</p><a href="tel:+8801805840450">01805-840450</a></div></div><div class="contact-method"><span class="contact-method-icon"><i class="bi bi-whatsapp"></i></span><div><h3>Chat on WhatsApp</h3><p>Send us your questions directly.</p><a href="https://wa.me/8801805840449" target="_blank" rel="noopener noreferrer">01805-840449 ↗</a></div></div></div><div class="contact-form-card"><span class="contact-kicker">SAY HELLO</span><h2>Tell us what’s on your mind.</h2><p>Share a few details and continue to WhatsApp to send your message.</p><form id="contactWhatsAppForm"><div class="contact-fields"><div class="contact-field"><label for="contactName">Your name</label><input id="contactName" name="name" autocomplete="name" required maxlength="100" placeholder="Enter your name"></div><div class="contact-field"><label for="contactTopic">Topic <span style="font-weight:400">(optional)</span></label><input id="contactTopic" name="topic" maxlength="100" placeholder="How can we help?"></div><div class="contact-field contact-field-wide"><label for="contactMessage">Your message</label><textarea id="contactMessage" name="message" required maxlength="1500" placeholder="Write your message here..."></textarea></div></div><button class="contact-send" type="submit"><i class="bi bi-whatsapp"></i> Send Message <i class="bi bi-arrow-right"></i></button><p class="contact-form-note">WhatsApp will open with your message ready for you to review and send.</p></form></div></div></section>
        <section class="contact-map-section"><div class="shell"><div class="contact-map-header"><div><span class="contact-kicker">FIND US IN DHAKA</span><h2>Come say hello.</h2><p>Find our office in Dhanmondi, Dhaka.</p></div></div><div class="contact-map-box"><iframe title="Google Map of Aspire Education Group office in Dhanmondi, Dhaka" src="https://maps.google.com/maps?q=Mohammadia%20Super%20Market%2C%204%20Sobhanbag%2C%20Mirpur%20Road%2C%20Dhanmondi%2C%20Dhaka%201207&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><div class="contact-map-footer"><p>Mohammadia Super Market, 3rd Floor, 4 Sobhanbag,<br>Mirpur Road, Dhanmondi, Dhaka 1207</p><a class="contact-map-link" href="https://maps.app.goo.gl/KfdFd1BxhYjJymGF7" target="_blank" rel="noopener noreferrer"><i class="bi bi-geo-alt"></i> Open in Google Maps ↗</a></div></div></div></section>`;
        contactPage.querySelector('#contactWhatsAppForm').addEventListener('submit',e=>{e.preventDefault();const name=contactPage.querySelector('#contactName').value.trim(),topic=contactPage.querySelector('#contactTopic').value.trim(),message=contactPage.querySelector('#contactMessage').value.trim();if(!name||!message)return;const text=`Hello ASPIRE, my name is ${name}.${topic?'\nTopic: '+topic:''}\n\n${message}`;window.open('https://wa.me/8801805840449?text='+encodeURIComponent(text),'_blank','noopener,noreferrer')});
        document.title=__seoT('contact.html','Contact Us | ASPIRE Education Group');if(updateHistory&&location.hash!=='#contact')history.pushState({aspireView:'contact'},'','#contact');window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});
      };
      contactPage.addEventListener('click',e=>{if(e.target.closest('[data-contact-home]'))showHomePage('#home',true)});
      document.querySelectorAll('a[href="contact.html"]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();document.getElementById('menuClose')?.click();showContactPage(true)}));

      const syncEventsRoute = () => {
        if (window.location.hash === '#contact') {
          showContactPage(false);
        } else if (window.location.hash.startsWith('#scholarship-') && destinationData[window.location.hash.slice(13)]) {
          showScholarshipPage(window.location.hash.slice(13),false);
        } else if (window.location.hash === '#blog') {
          showBlogPage('',false);
        } else if (window.location.hash.startsWith('#blog-') && blogArticles.some(a=>a.slug===window.location.hash.slice(6))) {
          showBlogPage(window.location.hash.slice(6),false);
        } else if (window.location.hash.startsWith('#service-') && serviceData[window.location.hash.slice(9)]) {
          showServicePage(window.location.hash.slice(9),false);
        } else if (window.location.hash.startsWith('#study-') && destinationData[window.location.hash.slice(7)]) {
          showDestinationPage(window.location.hash.slice(7), false);
        } else if (window.location.hash === '#all-events') {
          showEventsPage(false);
        } else if (window.location.hash === '#awards') {
          showAwardsPage(false);
        } else if (window.location.hash === '#leadership') {
          showLeadershipPage(false);
        } else if (window.location.hash === '#testimonials') {
          showTestimonialsPage(false);
        } else if ((eventsPage && !eventsPage.hidden) || (awardsPage && !awardsPage.hidden) || (leadershipPage && !leadershipPage.hidden) || (testimonialsPage && !testimonialsPage.hidden) || (destinationPage && !destinationPage.hidden) || (servicePage && !servicePage.hidden) || (blogPage && !blogPage.hidden) || (scholarshipPage && !scholarshipPage.hidden) || (contactPage && !contactPage.hidden)) {
          showHomePage(window.location.hash || '#home', false);
        }
      };
      window.addEventListener('popstate', syncEventsRoute);
      if (window.location.hash === '#all-events') showEventsPage(false);
      if (window.location.hash === '#awards') showAwardsPage(false);
      if (window.location.hash === '#leadership') showLeadershipPage(false);
      if (window.location.hash === '#testimonials') showTestimonialsPage(false);
      if (window.location.hash.startsWith('#study-') && destinationData[window.location.hash.slice(7)]) showDestinationPage(window.location.hash.slice(7), false);
      if (window.location.hash.startsWith('#service-') && serviceData[window.location.hash.slice(9)]) showServicePage(window.location.hash.slice(9), false);
      if (window.location.hash === '#blog') showBlogPage('',false);
      if (window.location.hash === '#contact') showContactPage(false);
      if (window.location.hash.startsWith('#scholarship-') && destinationData[window.location.hash.slice(13)]) showScholarshipPage(window.location.hash.slice(13),false);
      if (window.location.hash.startsWith('#blog-') && blogArticles.some(a=>a.slug===window.location.hash.slice(6))) showBlogPage(window.location.hash.slice(6),false);
      if (!window.location.hash) {
        const file=decodeURIComponent(location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'');
        if(file==='awards')showAwardsPage(false);else if(file==='leadership')showLeadershipPage(false);else if(file==='testimonials')showTestimonialsPage(false);else if(file==='events')showEventsPage(false);else if(file==='contact')showContactPage(false);else if(file==='blog')showBlogPage('',false);else if(file.startsWith('blog-')&&blogArticles.some(a=>a.slug===file.slice(5)))showBlogPage(file.slice(5),false);else if(file.startsWith('study-')&&destinationData[file.slice(6)])showDestinationPage(file.slice(6),false);else if(file.startsWith('scholarship-')&&destinationData[file.slice(12)])showScholarshipPage(file.slice(12),false);else if(file.startsWith('service-')&&serviceData[file.slice(8)])showServicePage(file.slice(8),false);
      }


      /* Header links still navigate to landing-page sections from secondary views. */
      document.addEventListener('click', (event) => {
        if ((!eventsPage || eventsPage.hidden) && (!awardsPage || awardsPage.hidden) && (!leadershipPage || leadershipPage.hidden) && (!testimonialsPage || testimonialsPage.hidden) && (!destinationPage || destinationPage.hidden) && (!servicePage || servicePage.hidden) && (!blogPage || blogPage.hidden) && (!scholarshipPage || scholarshipPage.hidden) && (!contactPage || contactPage.hidden)) return;
        const link = event.target.closest('a[href^="#"]');
        if (!link || link === viewAllEventsLink) return;
        const hash = link.getAttribute('href');
        if (!hash || hash === '#all-events' || hash.startsWith('#study-') || hash.startsWith('#service-') || hash === '#blog' || hash.startsWith('#blog-') || hash.startsWith('#scholarship-') || hash === '#contact' || link.hasAttribute('data-sch-scroll') || link.hasAttribute('data-dest-scroll') || link.hasAttribute('data-service-scroll')) return;
        if (hash === '#awards' || hash === '#leadership' || hash === '#testimonials') return;
        const target = document.getElementById(hash.slice(1));
        if (!target || !homeView || !homeView.contains(target)) return;
        event.preventDefault();
        showHomePage(hash, true);
      });

      /* Search and category filters on the all-events view. */
      const eventSearchInput = document.getElementById('eventSearch');
      const eventCards = Array.from(document.querySelectorAll('#eventsArchiveGrid .archive-event'));
      const eventEmpty = document.getElementById('eventsEmpty');
      let activeEventFilter = 'all';

      const filterEventCards = () => {
        const query = eventSearchInput ? eventSearchInput.value.trim().toLowerCase() : '';
        let visibleCount = 0;
        eventCards.forEach((card) => {
          const formatMatch = activeEventFilter === 'all' || card.dataset.format === activeEventFilter;
          const searchable = (card.dataset.search || '') + ' ' + card.textContent.toLowerCase();
          const queryMatch = !query || query.split(/\s+/).filter(Boolean).every((part) => searchable.includes(part));
          const visible = formatMatch && queryMatch;
          card.hidden = !visible;
          if (visible) visibleCount += 1;
        });
        if (eventEmpty) eventEmpty.classList.toggle('show', visibleCount === 0);
      };

      document.querySelectorAll('[data-event-filter]').forEach((button) => {
        button.addEventListener('click', () => {
          activeEventFilter = button.dataset.eventFilter || 'all';
          document.querySelectorAll('[data-event-filter]').forEach((filter) => {
            const active = filter === button;
            filter.classList.toggle('active', active);
            filter.setAttribute('aria-pressed', String(active));
          });
          filterEventCards();
        });
      });
      if (eventSearchInput) eventSearchInput.addEventListener('input', filterEventCards);

      /* Expand student stories inline so the rest of the page never blurs. */
      const storyPreview = document.getElementById('communityStoryPreview');
      const previewImage = document.getElementById('communityPreviewImage');
      const previewTitle = document.getElementById('communityPreviewTitle');
      const previewKicker = document.getElementById('communityPreviewKicker');
      const previewText = document.getElementById('communityPreviewText');
      const previewClose = document.getElementById('communityPreviewClose');
      const storyTiles = Array.from(document.querySelectorAll('.story-tile'));

      const closeCommunityStory = () => {
        if (!storyPreview) return;
        storyPreview.classList.remove('is-open');
        storyTiles.forEach((tile) => {
          tile.classList.remove('is-selected');
          tile.setAttribute('aria-expanded', 'false');
        });
        window.setTimeout(() => {
          if (!storyPreview.classList.contains('is-open')) storyPreview.hidden = true;
        }, 300);
      };

      storyTiles.forEach((tile) => {
        tile.addEventListener('click', () => {
          const alreadySelected = tile.classList.contains('is-selected');
          if (alreadySelected) {
            closeCommunityStory();
            return;
          }

          storyTiles.forEach((other) => {
            other.classList.remove('is-selected');
            other.setAttribute('aria-expanded', 'false');
          });

          const title = tile.dataset.storyTitle || 'A student story';
          if (previewTitle) previewTitle.textContent = title;
          if (previewKicker) previewKicker.textContent = tile.dataset.storyKicker || 'Student community';
          if (previewText) previewText.textContent = tile.dataset.storyCopy || '';
          if (previewImage) {
            previewImage.src = tile.dataset.storyImage || '';
            previewImage.alt = title;
          }
          if (storyPreview) {
            storyPreview.hidden = false;
            window.requestAnimationFrame(() => storyPreview.classList.add('is-open'));
          }
          tile.classList.add('is-selected');
          tile.setAttribute('aria-expanded', 'true');
        });
      });

      if (previewClose) previewClose.addEventListener('click', closeCommunityStory);

      /* ---------- Course finder ---------- */
      const finderForm = document.getElementById('cfForm');
      const areaSelect = document.getElementById('cfArea');
      const destinationSelect = document.getElementById('cfDestination');
      const resultsWrap = document.getElementById('cfResults');
      const resultsTitle = document.getElementById('cfResultsTitle');
      const resultsGrid = document.getElementById('cfResultGrid');

      const syncSelectState = (select) => {
        if (select) select.classList.toggle('active', Boolean(select.value));
      };

      /* University data used by the Course Finder results */
      const institutions = {
        Australia: [
          { name: 'University of Melbourne', field: 'Business & Management', rating: '4.8', note: 'Ranked #1 in Australia' },
          { name: 'Monash University', field: 'Engineering', rating: '4.6', note: 'Largest university in Australia' },
          { name: 'University of Sydney', field: 'Medicine & Health', rating: '4.7', note: 'Group of Eight' }
        ],
        Canada: [
          { name: 'University of Toronto', field: 'Computer Science & IT', rating: '4.8', note: 'Largest in Canada' },
          { name: 'University of British Columbia', field: 'Business & Management', rating: '4.7', note: 'Public research university' },
          { name: 'McGill University', field: 'Law & Social Sciences', rating: '4.6', note: 'Oldest university in Canada' }
        ],
        UK: [
          { name: 'University of Manchester', field: 'Engineering', rating: '4.6', note: 'Largest in the UK' },
          { name: "King's College London", field: 'Medicine & Health', rating: '4.7', note: 'Russell Group' },
          { name: 'Kingston University', field: 'Business & Management', rating: '4.3', note: 'London campus' }
        ],
        USA: [
          { name: 'University of California, Los Angeles', field: 'Arts & Design', rating: '4.8', note: 'Top public university' },
          { name: 'New York University', field: 'Business & Management', rating: '4.6', note: 'Largest private university' },
          { name: 'Arizona State University', field: 'Computer Science & IT', rating: '4.4', note: 'Innovation leader' }
        ],
        Ireland: [
          { name: 'University College Dublin', field: 'Business & Management', rating: '4.6', note: 'Largest in Ireland' },
          { name: 'Trinity College Dublin', field: 'Law & Social Sciences', rating: '4.7', note: 'Oldest in Ireland' },
          { name: 'University of Limerick', field: 'Engineering', rating: '4.4', note: 'Co-op placements' }
        ],
        'New Zealand': [
          { name: 'University of Auckland', field: 'Business & Management', rating: '4.7', note: 'Largest in New Zealand' },
          { name: 'Victoria University of Wellington', field: 'Law & Social Sciences', rating: '4.4', note: 'Capital city campus' },
          { name: 'University of Otago', field: 'Medicine & Health', rating: '4.5', note: 'Oldest university' }
        ],
        Malaysia: [
          { name: 'Universiti Malaya', field: 'Medicine & Health', rating: '4.6', note: 'Oldest in Malaysia' },
          { name: "Taylor's University", field: 'Hospitality & Tourism', rating: '4.4', note: 'Largest private university' },
          { name: 'Universiti Teknologi Malaysia', field: 'Engineering', rating: '4.3', note: 'Public research university' }
        ],
        Japan: [
          { name: 'University of Tokyo', field: 'Computer Science & IT', rating: '4.9', note: "Japan's top university" },
          { name: 'Kyoto University', field: 'Arts & Design', rating: '4.7', note: 'Research excellence' },
          { name: 'Waseda University', field: 'Business & Management', rating: '4.4', note: 'Largest private university' }
        ],
        Europe: [
          { name: 'University of Amsterdam', field: 'Law & Social Sciences', rating: '4.6', note: 'Netherlands' },
          { name: 'Technical University of Munich', field: 'Engineering', rating: '4.8', note: 'Germany' },
          { name: 'Bocconi University', field: 'Business & Management', rating: '4.5', note: 'Italy' }
        ],
        Dubai: [
          { name: 'University of Dubai', field: 'Business & Management', rating: '4.3', note: 'Largest in Dubai' },
          { name: 'American University in Dubai', field: 'Arts & Design', rating: '4.4', note: 'US-accredited' },
          { name: 'Heriot-Watt University Dubai', field: 'Engineering', rating: '4.2', note: 'UK campus' }
        ],
        Cyprus: [
          { name: 'University of Nicosia', field: 'Business & Management', rating: '4.1', note: 'Largest in Cyprus' },
          { name: 'University of Cyprus', field: 'Education & Teaching', rating: '4.2', note: 'Public university' }
        ],
        Germany: [
          { name: 'Technical University of Munich', field: 'Engineering', rating: '4.8', note: 'Public research university' },
          { name: 'Heidelberg University', field: 'Medicine & Health', rating: '4.7', note: 'Oldest in Germany' }
        ],
        Netherlands: [
          { name: 'University of Amsterdam', field: 'Law & Social Sciences', rating: '4.6', note: 'Public university' },
          { name: 'Delft University of Technology', field: 'Engineering', rating: '4.8', note: 'Largest technical university' }
        ]
      };

      const featuredInstitutions = [
        'University of Toronto',
        'University of Melbourne',
        'University of Manchester',
        'University College Dublin',
        'University of Auckland',
        'University of Nicosia'
      ];

      const flattenInstitutions = () => Object.keys(institutions).reduce((all, country) => {
        return all.concat(institutions[country].map((item) => Object.assign({ country }, item)));
      }, []);

      const renderInstitutions = (area, destination) => {
        if (!resultsWrap || !resultsGrid) return;

        const fieldAliases = {
          'Computer Science / IT': 'Computer Science & IT',
          'Data Science & AI': 'Computer Science & IT',
          'MBA / Business Administration': 'Business & Management',
          'Medicine (MBBS / MD)': 'Medicine & Health',
          'Cybersecurity': 'Computer Science & IT',
          'Finance & FinTech': 'Business & Management',
          'Business Analytics & Management': 'Business & Management',
          'Renewable Energy & Sustainability': 'Engineering',
          'Healthcare & Public Health': 'Medicine & Health'
        };
        const institutionField = fieldAliases[area] || area;
        const displayArea = (areaSelect && areaSelect.dataset.courseLabel) || area;

        let list = destination && institutions[destination]
          ? institutions[destination].map((item) => Object.assign({ country: destination }, item))
          : (destination ? [] : flattenInstitutions());

        if (area) list = list.filter((item) => item.field === institutionField);
        if (!destination && !area) list = list.filter((item) => featuredInstitutions.includes(item.name));

        const count = list.length;
        if (resultsTitle) {
          if (!destination && !area) {
            resultsTitle.innerHTML = `Showing <strong>${count}</strong> featured institutions across 13 destinations`;
          } else {
            let title = `Showing <strong>${count}</strong> ${count === 1 ? 'institution' : 'institutions'}`;
            if (destination) title += ` in <strong>${destination}</strong>`;
            if (area) title += ` for <strong>${displayArea}</strong>`;
            resultsTitle.innerHTML = title;
          }
        }

        resultsGrid.innerHTML = '';
        if (!count) {
          const empty = document.createElement('p');
          empty.className = 'cf-empty';
          empty.textContent = `No institutions match this combination yet. Try another study area or destination, or ask our counsellors for a personal shortlist.`;
          resultsGrid.appendChild(empty);
        }

        list.forEach((item) => {
          const card = document.createElement('button');
          card.type = 'button';
          card.className = 'inst-card';
          card.innerHTML =
            '<span class="inst-logo"><i class="bi bi-mortarboard-fill" aria-hidden="true"></i></span>' +
            '<span class="inst-body">' +
              '<span class="inst-name"></span>' +
              '<span class="inst-meta"></span>' +
              '<span class="inst-rating"><i class="bi bi-star-fill" aria-hidden="true"></i><span class="rating-value"></span><span>·</span><span class="rating-note"></span></span>' +
            '</span>' +
            '<i class="bi bi-chevron-right inst-arrow" aria-hidden="true"></i>';

          const nameEl = card.querySelector('.inst-name');
          if (nameEl) nameEl.textContent = item.name;
          const metaEl = card.querySelector('.inst-meta');
          if (metaEl) {
            metaEl.textContent = item.country + ' · ' + item.field;
          }
          const ratingValue = card.querySelector('.rating-value');
          if (ratingValue) ratingValue.textContent = item.rating;
          const ratingNote = card.querySelector('.rating-note');
          if (ratingNote) ratingNote.textContent = item.note;

          card.addEventListener('click', () => {
            askConsultation({
              destination: item.country,
              message: `I'm interested in ${item.name} in ${item.country} (${item.field}). Please share admission requirements, tuition and scholarship options.`
            });
          });
          resultsGrid.appendChild(card);
        });

        resultsWrap.hidden = false;
      };

      const runCourseSearch = () => {
        const area = areaSelect ? areaSelect.value : '';
        const destination = destinationSelect ? destinationSelect.value : '';
        syncSelectState(areaSelect);
        syncSelectState(destinationSelect);
        renderInstitutions(area, destination);
      };

      if (finderForm) {
        finderForm.addEventListener('submit', (event) => {
          event.preventDefault();
          runCourseSearch();
        });
      }
      [areaSelect, destinationSelect].forEach((select) => {
        if (select) select.addEventListener('change', () => {
          if (select === areaSelect) delete select.dataset.courseLabel;
          syncSelectState(select);
        });
      });

      const resetFinderButton = document.getElementById('cfReset');
      if (resetFinderButton) {
        resetFinderButton.addEventListener('click', () => {
          [areaSelect, destinationSelect].forEach((select) => {
            if (!select) return;
            select.value = '';
            select.classList.remove('active');
          });
          if (areaSelect) delete areaSelect.dataset.courseLabel;
          if (resultsTitle) resultsTitle.innerHTML = '';
          if (resultsGrid) resultsGrid.innerHTML = '';
          if (resultsWrap) resultsWrap.hidden = true;
          const finder = document.getElementById('courseFinder');
          if (finder) finder.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
          if (areaSelect) window.setTimeout(() => areaSelect.focus({ preventScroll: true }), 420);
        });
      }

      const finderHelpLink = document.getElementById('cfHelpLink');
      if (finderHelpLink) {
        finderHelpLink.addEventListener('click', (event) => {
          event.preventDefault();
          askConsultation({ message: 'I need help shortlisting universities. Could a certified Aspire counsellor guide me?' });
        });
      }

      /* Popular subjects prefill and run the Course Finder. */
      document.querySelectorAll('.subject-link[data-course-area]').forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const selectedArea = link.dataset.courseArea;
          const selectedLabel = link.dataset.courseLabel || selectedArea;
          if (!areaSelect || !finderForm) return;

          const optionExists = Array.from(areaSelect.options).some((option) => option.value === selectedArea);
          if (!optionExists) return;

          areaSelect.value = selectedArea;
          areaSelect.dataset.courseLabel = selectedLabel;
          syncSelectState(areaSelect);
          if (resultsWrap) resultsWrap.hidden = true;

          const finder = document.getElementById('courseFinder');
          if (finder) finder.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
          window.setTimeout(() => finderForm.requestSubmit(), reduceMotion ? 0 : 380);
        });
      });

      /* Study journey steps open a consultation about the selected phase. */
      const journeyMessages = {
        consultation: 'I would like to book a free study abroad consultation. Please help me review my goals, budget and academic background.',
        shortlist: 'I would like help building a personalised shortlist of courses and universities that fit my profile.',
        application: 'I would like support with my university application, documents and admission requirements.',
        departure: 'I would like help with my student visa and pre-departure preparation.'
      };

      document.querySelectorAll('.journey-step[data-journey-step]').forEach((step) => {
        step.addEventListener('click', () => {
          const phase = step.dataset.journeyStep;
          askConsultation({ message: journeyMessages[phase] || journeyMessages.consultation });
        });
      });

      /* Keep timeline controls available when the steps need horizontal scrolling. */
      const journeySection = document.getElementById('journey');
      const journeyTrack = document.getElementById('journeyTrack');
      const journeyControls = document.querySelector('.journey-controls');
      const journeyPrev = document.getElementById('journeyPrev');
      const journeyNext = document.getElementById('journeyNext');

      if (journeySection && !reduceMotion && 'IntersectionObserver' in window) {
        journeySection.classList.add('motion-ready');
        const journeyReveal = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            journeySection.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        }, { threshold: .22, rootMargin: '0px 0px -35px 0px' });
        journeyReveal.observe(journeySection);
      }

      const tiltJourney = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion;
      if (tiltJourney) {
        document.querySelectorAll('.journey-step').forEach((step) => {
          let rafPending = false;
          let pointerX = 0;
          let pointerY = 0;

          step.addEventListener('pointermove', (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            if (rafPending) return;
            rafPending = true;
            window.requestAnimationFrame(() => {
              const rect = step.getBoundingClientRect();
              const x = pointerX - rect.left;
              const y = pointerY - rect.top;
              const xRatio = Math.max(0, Math.min(1, x / rect.width));
              const yRatio = Math.max(0, Math.min(1, y / rect.height));
              step.style.setProperty('--journey-rx', ((.5 - yRatio) * 5).toFixed(2) + 'deg');
              step.style.setProperty('--journey-ry', ((xRatio - .5) * 7).toFixed(2) + 'deg');
              step.style.setProperty('--journey-x', x.toFixed(0) + 'px');
              step.style.setProperty('--journey-y', y.toFixed(0) + 'px');
              rafPending = false;
            });
          });

          step.addEventListener('pointerleave', () => {
            step.style.setProperty('--journey-rx', '0deg');
            step.style.setProperty('--journey-ry', '0deg');
            step.style.setProperty('--journey-x', '50%');
            step.style.setProperty('--journey-y', '50%');
          });
        });
      }

      if (journeyTrack) {
        const maxJourneyScroll = () => Math.max(0, journeyTrack.scrollWidth - journeyTrack.clientWidth);
        const updateJourneyControls = () => {
          const hasOverflow = maxJourneyScroll() > 2;
          if (journeyControls) journeyControls.hidden = !hasOverflow;
          if (journeyPrev) journeyPrev.disabled = journeyTrack.scrollLeft <= 2;
          if (journeyNext) journeyNext.disabled = journeyTrack.scrollLeft >= maxJourneyScroll() - 2;
        };
        const scrollJourney = (direction) => {
          const firstStep = journeyTrack.querySelector('.journey-step');
          if (!firstStep) return;
          const style = window.getComputedStyle(journeyTrack);
          const gap = parseFloat(style.columnGap || style.gap) || 0;
          journeyTrack.scrollBy({ left: direction * (firstStep.getBoundingClientRect().width + gap), behavior: scrollBehavior });
        };

        if (journeyPrev) journeyPrev.addEventListener('click', () => scrollJourney(-1));
        if (journeyNext) journeyNext.addEventListener('click', () => scrollJourney(1));
        journeyTrack.addEventListener('scroll', updateJourneyControls, { passive: true });
        window.addEventListener('resize', updateJourneyControls);
        if ('ResizeObserver' in window) new ResizeObserver(updateJourneyControls).observe(journeyTrack);
        updateJourneyControls();
      }

      const faqConsultButton = document.getElementById('faqConsultOpen');
      if (faqConsultButton) {
        faqConsultButton.addEventListener('click', () => {
          askConsultation({ message: 'I have a question about studying abroad from Bangladesh. Please connect me with an ASPIRE counsellor.' });
        });
      }
      document.querySelectorAll('#aspireFaq .accordion-collapse').forEach((collapse) => {
        const item = collapse.closest('.faq-item');
        collapse.addEventListener('show.bs.collapse', () => {
          document.querySelectorAll('#aspireFaq .faq-item').forEach((faqItem) => faqItem.classList.remove('is-open'));
          if (item) item.classList.add('is-open');
        });
        collapse.addEventListener('hidden.bs.collapse', () => {
          if (item) item.classList.remove('is-open');
        });
      });

      /* ---------- Hero search ---------- */
      const heroForm = document.getElementById('heroSearchForm');
      const heroInput = document.getElementById('heroSearchInput');

      const matchOption = (select, query) => {
        if (!select || !query) return '';
        const normalized = query.toLowerCase();
        const options = Array.from(select.options).filter((option) => option.value);
        for (const option of options) {
          const value = option.value.toLowerCase();
          const words = value.split(/[^a-z]+/).filter((word) => word.length > 1);
          if (normalized.includes(value) || words.some((word) => normalized.includes(word))) return option.value;
        }
        return '';
      };

      if (heroForm) {
        heroForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const query = heroInput ? heroInput.value.trim() : '';
          const finder = document.getElementById('courseFinder');

          if (!query) {
            if (finder) finder.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
            if (areaSelect) window.setTimeout(() => areaSelect.focus({ preventScroll: true }), 420);
            return;
          }

          const areaMatch = matchOption(areaSelect, query);
          const destinationMatch = matchOption(destinationSelect, query);

          if (areaMatch || destinationMatch) {
            if (areaMatch && areaSelect) {
              areaSelect.value = areaMatch;
              delete areaSelect.dataset.courseLabel;
            }
            if (destinationMatch && destinationSelect) destinationSelect.value = destinationMatch;
            if (finder) finder.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
            runCourseSearch();
            return;
          }

          /* No course filter match — use the full site search. */
          const openSearch = document.getElementById('searchOpen');
          if (openSearch) openSearch.click();
          const siteSearch = document.getElementById('searchInput');
          if (siteSearch) {
            siteSearch.value = query;
            siteSearch.dispatchEvent(new Event('input', { bubbles: true }));
          }
        });
      }

      /* ---------- Destination carousel ---------- */
      const track = document.getElementById('destTrack');
      const prevButton = document.getElementById('destPrev');
      const nextButton = document.getElementById('destNext');
      const dotsWrap = document.getElementById('destDots');

      if (track) {
        let pageCount = 1;

        const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);
        const setArrowState = () => {
          if (prevButton) prevButton.disabled = track.scrollLeft <= 4;
          if (nextButton) nextButton.disabled = track.scrollLeft >= maxScroll() - 4;
        };

        const setActiveDot = () => {
          if (!dotsWrap) return;
          const ratio = maxScroll() ? track.scrollLeft / maxScroll() : 0;
          const active = Math.round(ratio * (pageCount - 1));
          Array.from(dotsWrap.children).forEach((dot, index) => {
            dot.classList.toggle('active', index === active);
            dot.setAttribute('aria-current', index === active ? 'true' : 'false');
          });
        };

        const goToPage = (page) => {
          const left = ((maxScroll()) / Math.max(1, pageCount - 1)) * page;
          track.scrollTo({ left, behavior: scrollBehavior });
        };

        const buildDots = () => {
          if (!dotsWrap) return;
          pageCount = Math.max(1, Math.ceil(track.scrollWidth / Math.max(1, track.clientWidth)));
          dotsWrap.innerHTML = '';
          if (pageCount < 2) return;
          for (let i = 0; i < pageCount; i += 1) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'dest-dot';
            dot.setAttribute('aria-label', `Show destination page ${i + 1} of ${pageCount}`);
            dot.addEventListener('click', () => goToPage(i));
            dotsWrap.appendChild(dot);
          }
          setActiveDot();
        };

        const scrollCards = (direction) => {
          const card = track.querySelector('.dest-card');
          const cardWidth = card ? card.getBoundingClientRect().width + 12 : track.clientWidth;
          const visible = Math.max(1, Math.round(track.clientWidth / cardWidth));
          track.scrollBy({ left: direction * cardWidth * visible, behavior: scrollBehavior });
        };

        if (prevButton) prevButton.addEventListener('click', () => scrollCards(-1));
        if (nextButton) nextButton.addEventListener('click', () => scrollCards(1));

        track.addEventListener('scroll', () => {
          setArrowState();
          setActiveDot();
        }, { passive: true });

        track.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowRight') { event.preventDefault(); scrollCards(1); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); scrollCards(-1); }
        });

        window.addEventListener('resize', () => {
          buildDots();
          setArrowState();
        });

        if ('ResizeObserver' in window) {
          const observer = new ResizeObserver(() => buildDots());
          observer.observe(track);
        }

        buildDots();
        setArrowState();
      }

      /* ---------- Menu Contact opens the consultation form ---------- */
      $$('.nav-btn, .mobile-direct').forEach((link) => {
        if (link.textContent.replace(/\s+/g, ' ').trim() !== 'Contact') return;
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const drawer = document.getElementById('mobileMenu');
          if (drawer && drawer.classList.contains('show')) {
            const closeButton = document.getElementById('menuClose');
            if (closeButton) closeButton.click();
          }
          window.setTimeout(() => askConsultation({ message: 'I would like to speak with an Aspire adviser about studying abroad.' }), 300);
        });
      });
    })();
