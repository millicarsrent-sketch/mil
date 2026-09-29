(function () {
  'use strict';

  window.addEventListener('scroll', function () {
    const nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('sc', window.scrollY > 60);
  }, { passive: true });

  function toggleMob() {
    const m = document.getElementById('mm');
    const h = document.getElementById('hb');
    if (!m || !h) return;
    m.classList.toggle('open');
    h.classList.toggle('open');
    const isOpen = m.classList.contains('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    h.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  const hb = document.getElementById('hb');
  if (hb) hb.addEventListener('click', toggleMob);

  const mm = document.getElementById('mm');
  if (mm) {
    mm.addEventListener('click', function (e) {
      const a = e.target.closest('a');
      if (a && !a.closest('.mm-btns')) toggleMob();
    });
  }

  // Accordion: .ahd button → toggle 'open' on parent .acc
  // Also: .faq-item direct toggle (how-it-works, index FAQ)
  document.addEventListener('click', function (e) {
    const ahd = e.target.closest('.ahd');
    if (ahd) {
      const acc = ahd.closest('.acc');
      if (acc) acc.classList.toggle('open');
      return;
    }
    const faqItem = e.target.closest('.faq-item');
    if (faqItem && !e.target.closest('.faq-a')) faqItem.classList.toggle('open');
  });
})();
