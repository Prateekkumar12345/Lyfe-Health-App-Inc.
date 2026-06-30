// CPA Canada — Dynamic Premium Prototype

const ICONS = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
    tax: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    vote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    grad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/></svg>',
    brief: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
    read: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M12 14h.01M16 14h.01M8 14h.01"/></svg>',
    news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M18 18h-8M18 10h-8M10 6h8v4h-8z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10M12 3v18"/></svg>',
  };
  
  const ROLES = {
    member: {
      eyebrow: 'Your member dashboard',
      title: 'Everything your membership unlocks, in one place',
      sub: 'No more digging through menus. PD hours, handbooks, advocacy updates, and Tax 360™ — surfaced for you the moment you land.',
      actions: [
        { icon: 'book', title: 'Browse PD courses', desc: '16+ complimentary hours', target: 'cpd' },
        { icon: 'card', title: 'My credits', desc: 'Redeem across learning', target: 'membership' },
        { icon: 'doc', title: 'Handbooks', desc: 'Financial reporting standards', target: 'resources' },
        { icon: 'tax', title: 'Tax 360™', desc: 'Practice toolkit', target: 'resources' },
        { icon: 'calendar', title: 'CPA Connects', desc: 'Upcoming live sessions', target: 'cpd' },
        { icon: 'vote', title: 'Governance', desc: 'Voting & national decisions', target: 'membership' },
      ],
      recommendations: [
        { tag: 'pd', tagLabel: 'PD Tracker', title: 'PD hours tracker', html: `<p>14 of 20 hours logged · Deadline Dec 31</p><div class="pd-progress"><div class="pd-progress-meta"><span>Progress</span><span>70%</span></div><div class="pd-bar"><div class="pd-bar-fill" style="--pct:70%"></div></div></div><p style="margin-top:8px;font-size:12px">2 courses pending verification</p>` },
        { tag: 'advocacy', tagLabel: 'Advocacy', title: 'Tax simplification brief', html: '<p>CPA Canada submitted pre-budget recommendations on transparent fiscal reporting. Read the 3-min summary →</p>' },
        { tag: 'course', tagLabel: 'Suggested for you', title: 'AI in audit: a practical course', html: '<p>Matches your interest tags: assurance, technology. 2 CPD hours · On-demand.</p>' },
      ],
    },
    student: {
      eyebrow: 'CPA candidate pathway',
      title: 'Your PEP journey, mapped out clearly',
      sub: 'Modules, exam prep, competency maps, and mentorship — no more hunting through provincial sites.',
      actions: [
        { icon: 'grad', title: 'PEP modules', desc: 'Core & elective courses', target: 'cpd' },
        { icon: 'edit', title: 'CFE exam prep', desc: 'Study resources & guides', target: 'resources' },
        { icon: 'map', title: 'Competency map', desc: 'Skills framework', target: 'resources' },
        { icon: 'brief', title: 'Career paths', desc: 'Explore CPA careers', target: 'news' },
        { icon: 'users', title: 'Find a mentor', desc: 'Connect with CPAs', target: 'cpd' },
        { icon: 'help', title: 'Student FAQs', desc: 'Registration help', target: 'membership' },
      ],
      recommendations: [
        { tag: 'alert', tagLabel: 'Upcoming', title: 'CFE registration opens Aug 1', html: '<p>Early bird deadline: Aug 15. Set a reminder and review the 2026 exam format guide.</p>' },
        { tag: 'course', tagLabel: 'Suggested for you', title: 'Core 1: Financial reporting refresher', html: '<p>Recommended based on your PEP progress. 4 hours · On-demand.</p>' },
        { tag: 'advocacy', tagLabel: 'Career', title: 'Student networking event — July 22', html: '<p>CPA Canada Connects: meet practitioners in government and public practice.</p>' },
      ],
    },
    public: {
      eyebrow: 'For employers & the public',
      title: 'Find a CPA. Understand the profession.',
      sub: 'Verify credentials, access financial literacy resources, and learn how CPAs serve Canadians.',
      actions: [
        { icon: 'search', title: 'Find a CPA', desc: 'Directory search', target: 'resources' },
        { icon: 'read', title: 'Financial literacy', desc: 'Consumer guides', target: 'resources' },
        { icon: 'building', title: 'Hire a CPA', desc: 'For employers', target: 'membership' },
        { icon: 'news', title: 'Economic insights', desc: 'Research & reports', target: 'news' },
        { icon: 'shield', title: 'Fraud awareness', desc: 'Protect yourself', target: 'news' },
        { icon: 'phone', title: 'Contact us', desc: 'Get support', target: 'resources' },
      ],
      recommendations: [
        { tag: 'alert', tagLabel: 'Public resource', title: '4 tools to limit online gambling', html: '<p>New consumer guide with guardrails to stay in control of spending and time.</p>' },
        { tag: 'advocacy', tagLabel: 'Research', title: 'Are we in a recession?', html: '<p>CPA Canada\'s chief economist breaks down what this really means for Canada.</p>' },
        { tag: 'course', tagLabel: 'Find a CPA', title: 'Verify a CPA credential', html: '<p>Search 220,000+ registered professionals by name, firm, or location.</p>' },
      ],
    },
    firm: {
      eyebrow: 'Firm & practitioner tools',
      title: 'Standards, PD, and tax intelligence — firm-ready',
      sub: 'Bulk PD for your team, engagement methodology, Tax 360™ Advantage, and firm licensing — all in one hub.',
      actions: [
        { icon: 'users', title: 'Team PD management', desc: 'Bulk enroll & track hours', target: 'cpd' },
        { icon: 'doc', title: 'Engagement Guide', desc: 'Audit & assurance methodology', target: 'resources' },
        { icon: 'tax', title: 'Tax 360 Advantage', desc: 'CCH™ AnswerConnect integration', target: 'resources' },
        { icon: 'scale', title: 'Handbooks', desc: 'Reporting & assurance standards', target: 'resources' },
        { icon: 'chart', title: 'Firm licensing', desc: 'Manage registrations', target: 'membership' },
        { icon: 'calendar', title: 'In-Depth Tax Program', desc: 'Firm-wide enrollment', target: 'cpd' },
      ],
      recommendations: [
        { tag: 'pd', tagLabel: 'Firm PD', title: 'Team PD summary: Q2 2026', html: `<p>8 of 12 staff on track · 3 approaching deadline</p><div class="pd-progress"><div class="pd-progress-meta"><span>Team avg.</span><span>67%</span></div><div class="pd-bar"><div class="pd-bar-fill" style="--pct:67%"></div></div></div>` },
        { tag: 'course', tagLabel: 'Firm pick', title: 'Professional Engagement Guide — update', html: '<p>New methodology for compilation engagements. Subscribe for your entire assurance team.</p>' },
        { tag: 'advocacy', tagLabel: 'Standards', title: 'IFRS update: Q3 2026 briefing', html: '<p>Summary of changes affecting your audit clients. 1 CPD hour · Live Jul 15.</p>' },
      ],
    },
  };
  
  const PROMOS = [
    { title: 'Become a CPA Canada member', desc: 'Reinvestable credits, complimentary CPD, and Tax 360™.', link: 'Sign up →', action: 'membership' },
    { title: 'CPA Canada Connects — July', desc: 'CPAs in government and independent oversight.', link: 'Save your spot →', action: 'cpd' },
    { title: 'Complimentary CPD library', desc: 'On-demand sessions at your fingertips.', link: 'Explore →', action: 'cpd' },
    { title: 'CUSMA: What CPAs need to know', desc: 'July 1 review deadline insights.', link: 'Read more →', action: 'news' },
  ];
  
  const CPD_ITEMS = [
    { title: 'Complimentary CPD Library', desc: 'On-demand sessions across assurance, tax, and leadership.', tag: 'on-demand', hours: '16+ hrs included', category: 'on-demand' },
    { title: 'CPA Canada Connects — July', desc: 'Independent oversight and CPAs in government.', tag: 'live', hours: 'Jul 22 · Live webinar', category: 'live' },
    { title: 'In-Depth Tax Program 2026', desc: 'Canada\'s most reputed tax training with 200+ experts.', tag: 'tax', hours: 'Registration open', category: 'tax' },
    { title: 'AI in audit: a practical course', desc: 'Technology applications for assurance professionals.', tag: 'on-demand', hours: '2 CPD hrs', category: 'on-demand' },
    { title: 'Professional Engagement Guide', desc: 'Methodology for audit, review, and assurance engagements.', tag: 'assurance', hours: 'Subscribe', category: 'assurance' },
    { title: 'CUSMA Trade Update', desc: 'What CPAs need to know before the July 1 review.', tag: 'on-demand', hours: '45 min', category: 'on-demand' },
  ];
  
  const RESOURCES = [
    { icon: 'doc', title: 'CPA Canada Handbook', desc: 'Financial reporting & assurance standards — complimentary for members.' },
    { icon: 'tax', title: 'Tax 360™', desc: 'Premium tax practice toolkit with curated intelligence.' },
    { icon: 'star', title: 'Tax 360 Advantage', desc: 'CCH™ AnswerConnect integration for firms.' },
    { icon: 'read', title: 'Pivot Magazine', desc: 'Digital + print thought leadership.' },
    { icon: 'map', title: 'Competency Map', desc: 'Framework for CPA skills and career development.' },
    { icon: 'search', title: 'Find a CPA Directory', desc: 'Verify credentials and locate professionals.' },
  ];
  
  const NEWS = [
    { title: 'CPA Canada\'s legacy builders', date: 'Jun 28, 2026', excerpt: 'Trail-blazing leaders who shaped the national organization.' },
    { title: '"We need stronger fiscal anchors."', date: 'Jun 25, 2026', excerpt: 'Chief economist on the debt-to-GDP ratio and federal policy.' },
    { title: 'Why early board experience is crucial', date: 'Jun 20, 2026', excerpt: 'How CPAs use board service as a career accelerator.' },
  ];
  
  const SEARCH_INDEX = [
    { title: 'Membership FAQs', category: 'Membership', keywords: 'member affiliate advantage tier price' },
    { title: 'Complimentary CPD', category: 'PD', keywords: 'cpd pd learning hours on-demand' },
    { title: 'Tax 360', category: 'Resources', keywords: 'tax toolkit wolters kluwer' },
    { title: 'CPA Handbook', category: 'Resources', keywords: 'handbook standards assurance reporting' },
    { title: 'In-Depth Tax Program', category: 'PD', keywords: 'tax training program register' },
    { title: 'Pivot Magazine', category: 'News', keywords: 'magazine pivot thought leadership' },
    { title: 'CPA Connects', category: 'Events', keywords: 'webinar live connects july' },
    { title: 'Find a CPA', category: 'Public', keywords: 'find directory verify credential' },
  ];
  
  const AI_RESPONSES = {
    membership: 'Since April 2026, CPA Canada offers three tiers: **Affiliate (Free)** — select resources, no PD; **Member ($200/yr)** — 16+ PD hours, Tax 360™, Pivot magazine; **Member Advantage ($1,295/yr)** — 20+ PD hours, Tax 360 Advantage with CCH™. Want the 30-second quiz?',
    cpd: 'Members get 16+ complimentary PD hours (Advantage: 20+). You\'ve logged **14 of 20 hours** this cycle. Browse on-demand sessions or join live CPA Connects webinars below.',
    tax: '**Tax 360™** is included with Member tier. **Tax 360 Advantage** adds Wolters Kluwer CCH™ AnswerConnect — ideal for firms. The In-Depth Tax Program registration is open for 2026.',
    pd: 'Your PD tracker shows **14 of 20 hours logged** with a Dec 31 deadline. 2 courses are pending verification. I can suggest sessions to close the gap — try "AI in audit" (2 hrs, on-demand).',
    default: 'I can help with membership tiers, PD hours, Tax 360™, and resources. Try: "How many PD hours do I get?" or "What\'s the difference between Member and Advantage?"',
  };
  
  const QUIZ = [
    { question: 'How many PD hours do you typically need per year?', options: [
      { text: '10–16 hours is enough for me', tier: 'member' },
      { text: 'I want maximum coverage — 20+ hours', tier: 'advantage' },
      { text: 'I don\'t need PD right now', tier: 'affiliate' },
    ]},
    { question: 'Do you need advanced tax intelligence (CCH™ integration)?', options: [
      { text: 'Yes — tax is core to my practice', tier: 'advantage' },
      { text: 'Basic Tax 360™ is sufficient', tier: 'member' },
      { text: 'Tax resources aren\'t a priority', tier: 'affiliate' },
    ]},
    { question: 'What\'s your primary goal?', options: [
      { text: 'Stay connected with minimal cost', tier: 'affiliate' },
      { text: 'Balanced value — PD + tools + community', tier: 'member' },
      { text: 'All-in coverage with no gaps', tier: 'advantage' },
    ]},
  ];
  
  let currentRole = 'member';
  let quizStep = 0;
  let quizScores = { member: 0, advantage: 0, affiliate: 0 };
  
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  
  function renderRole(role) {
    const data = ROLES[role];
    $('#heroEyebrow').textContent = data.eyebrow;
    $('#heroTitle').textContent = data.title;
    $('#heroSub').textContent = data.sub;
  
    $('#actionGrid').innerHTML = data.actions.map((a, i) => `
      <button class="action-card" data-target="${a.target}" type="button" style="animation-delay:${i * 0.06}s">
        <div class="action-icon">${ICONS[a.icon]}</div>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </button>
    `).join('');
  
    $('#actionGrid').querySelectorAll('.action-card').forEach(card => {
      card.addEventListener('click', () => scrollToSection(card.dataset.target));
    });
  
    renderRecommendations(data.recommendations);
  }
  
  function renderRecommendations(items) {
    const panel = $('#recoItems');
    panel.style.opacity = '0';
    panel.style.transform = 'translateX(10px)';
  
    panel.innerHTML = items.map((item, i) => `
      <div class="reco-item" style="animation-delay:${i * 0.1}s">
        <span class="reco-item-tag ${item.tag}">${item.tagLabel}</span>
        <h4>${item.title}</h4>
        ${item.html}
      </div>
    `).join('');
  
    requestAnimationFrame(() => {
      panel.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      panel.style.opacity = '1';
      panel.style.transform = 'translateX(0)';
      animatePdBars();
    });
  }
  
  function animatePdBars() {
    requestAnimationFrame(() => {
      $$('.pd-bar-fill').forEach(bar => {
        bar.classList.add('animated');
      });
    });
  }
  
  function renderPromos() {
    $('#promoTrack').innerHTML = PROMOS.map(p => `
      <article class="promo-card" data-action="${p.action}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="#">${p.link}</a>
      </article>
    `).join('');
    $('#promoTrack').querySelectorAll('.promo-card').forEach(card => {
      card.addEventListener('click', () => scrollToSection(card.dataset.action));
    });
  }
  
  function renderCPD(filter = 'all') {
    const items = filter === 'all' ? CPD_ITEMS : CPD_ITEMS.filter(i => i.category === filter);
    $('#cpdGrid').innerHTML = items.map(item => `
      <article class="cpd-card">
        <div class="cpd-thumb ${item.category}"><span class="cpd-tag">${item.tag}</span></div>
        <div class="cpd-body">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="cpd-meta">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            ${item.hours}
          </div>
        </div>
      </article>
    `).join('');
  }
  
  function renderResources() {
    $('#resourceGrid').innerHTML = RESOURCES.map(r => `
      <a href="#" class="resource-card" onclick="return false">
        <div class="resource-icon">${ICONS[r.icon]}</div>
        <div><h3>${r.title}</h3><p>${r.desc}</p></div>
      </a>
    `).join('');
  }
  
  function renderNews() {
    $('#newsGrid').innerHTML = NEWS.map(n => `
      <article class="news-card">
        <div class="news-img" aria-hidden="true"></div>
        <div class="news-body">
          <time datetime="${n.date}">${n.date}</time>
          <h3>${n.title}</h3>
          <p>${n.excerpt}</p>
          <a href="#">Read more →</a>
        </div>
      </article>
    `).join('');
  }
  
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  function handleSearch(query) {
    const results = $('#searchResults');
    if (!query.trim()) { results.hidden = true; return; }
    const q = query.toLowerCase();
    const matches = SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(q) || item.keywords.includes(q) || item.category.toLowerCase().includes(q)
    );
    results.innerHTML = matches.length
      ? matches.map(m => `<a href="#" class="search-result" onclick="return false"><strong>${m.title}</strong><small>${m.category}</small></a>`).join('')
      : '<div class="search-result"><strong>No results</strong><small>Try "PD", "membership", or "Tax 360"</small></div>';
    results.hidden = false;
  }
  
  function getAIResponse(input) {
    const q = input.toLowerCase();
    if (/pd hour|logged|tracker|deadline/.test(q)) return AI_RESPONSES.pd;
    if (/member|tier|price|affiliate|advantage|200|1295/.test(q)) return AI_RESPONSES.membership;
    if (/cpd|learning|webinar|connects/.test(q)) return AI_RESPONSES.cpd;
    if (/tax|360|cch|wolters/.test(q)) return AI_RESPONSES.tax;
    return AI_RESPONSES.default;
  }
  
  function addAIMessage(text, isUser = false) {
    const msg = document.createElement('div');
    msg.className = `ai-msg ${isUser ? 'user' : 'bot'}`;
    msg.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    $('#aiMessages').appendChild(msg);
    $('#aiMessages').scrollTop = $('#aiMessages').scrollHeight;
  }
  
  function showAISuggestions() {
    const suggestions = ['How many PD hours do I get?', 'Compare membership tiers', 'What is Tax 360?', 'My PD progress'];
    $('#aiSuggestions').innerHTML = suggestions.map(s =>
      `<button class="ai-suggestion" data-q="${s}" type="button">${s}</button>`
    ).join('');
    $('#aiSuggestions').querySelectorAll('.ai-suggestion').forEach(btn => {
      btn.addEventListener('click', () => {
        $('#aiInput').value = btn.dataset.q;
        $('#aiForm').dispatchEvent(new Event('submit'));
      });
    });
  }
  
  function openAI() {
    $('#aiPanel').showModal();
    if (!$('#aiMessages').children.length) {
      addAIMessage('Hi! I\'m your CPA AI Assistant. I can check your PD progress, explain membership tiers, and find resources. What do you need?');
      showAISuggestions();
    }
  }
  
  function renderQuizStep() {
    const body = $('#quizBody');
    if (quizStep >= QUIZ.length) {
      const winner = Object.entries(quizScores).sort((a, b) => b[1] - a[1])[0][0];
      const names = { member: 'Member ($200/yr)', advantage: 'Member Advantage ($1,295/yr)', affiliate: 'Affiliate (Free)' };
      body.innerHTML = `<div class="quiz-result"><div class="quiz-result-icon">✓</div><h3>Recommended: ${names[winner]}</h3><p>Based on your answers, this tier best matches your needs.</p><button class="btn btn-join" id="quizGoMembership" type="button">View membership tiers</button></div>`;
      $('#quizGoMembership').addEventListener('click', () => { $('#quizModal').close(); scrollToSection('membership'); });
      return;
    }
    const step = QUIZ[quizStep];
    body.innerHTML = `
      <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${(quizStep / QUIZ.length) * 100}%"></div></div>
      <p>Question ${quizStep + 1} of ${QUIZ.length}</p>
      <p>${step.question}</p>
      ${step.options.map((o, i) => `<button class="quiz-option" data-idx="${i}" type="button">${o.text}</button>`).join('')}
    `;
    body.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        quizScores[step.options[btn.dataset.idx].tier]++;
        quizStep++;
        renderQuizStep();
      });
    });
  }
  
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach(el => observer.observe(el));
  }
  
  function initNavObserver() {
    const navLinks = $$('[data-nav]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === entry.target.id));
        }
      });
    }, { threshold: 0.3 });
    $$('section[id]').forEach(s => observer.observe(s));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderRole(currentRole);
    renderPromos();
    renderCPD();
    renderResources();
    renderNews();
    initScrollReveal();
    initNavObserver();
    animatePdBars();
  
    $$('.persona-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        $$('.persona-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentRole = chip.dataset.role;
        renderRole(currentRole);
      });
    });
  
    $$('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        $$('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderCPD(chip.dataset.filter);
      });
    });
  
    $('#globalSearch').addEventListener('input', (e) => handleSearch(e.target.value));
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrap')) $('#searchResults').hidden = true;
    });
  
    $('#navToggle').addEventListener('click', () => {
      const menu = $('#navMenu');
      const open = menu.classList.toggle('open');
      $('#navToggle').setAttribute('aria-expanded', open);
    });
  
    $$('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(link.dataset.nav);
        $('#navMenu').classList.remove('open');
      });
    });
  
    $$('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => scrollToSection(btn.dataset.action));
    });
  
    $('#joinBtn').addEventListener('click', () => scrollToSection('membership'));
    $('#aiFab').addEventListener('click', openAI);
    $('#aiClose').addEventListener('click', () => $('#aiPanel').close());
    $('#aiForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('#aiInput').value.trim();
      if (!input) return;
      addAIMessage(input, true);
      $('#aiInput').value = '';
      setTimeout(() => addAIMessage(getAIResponse(input)), 450);
    });
  
    $('#tierQuizBtn').addEventListener('click', () => {
      quizStep = 0;
      quizScores = { member: 0, advantage: 0, affiliate: 0 };
      renderQuizStep();
      $('#quizModal').showModal();
    });
    $('#quizClose').addEventListener('click', () => $('#quizModal').close());
  });
  