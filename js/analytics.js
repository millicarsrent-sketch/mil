/* ============================================================
   Millicars — analytics.js  v2.2
   GTM-TDD3DT6H manages GA4 (G-RVLB8GVHPH) and Google Ads (AW-18074522238).
   This file: dataLayer init + mcTrack helper + Yandex Metrika (optional).
   GTM snippet is in every HTML <head>/<body> — do NOT load GA4/GAds here.
   ============================================================ */

var MC_CONFIG = {
  GADS_ID:            'AW-18074522238',
  GADS_CONV_LABEL:    null,
  YM_ID:              109397846
};

window.dataLayer = window.dataLayer || [];

// ── Direct GA4 load (fallback if GTM tag is not configured) ──
// Safe to keep even if GTM also fires GA4 — GA4 deduplicates by client_id.
(function() {
  if (typeof window.gtag === 'function') return; // already loaded by GTM
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-RVLB8GVHPH';
  document.head.appendChild(s);
  window.gtag = function() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-RVLB8GVHPH', { send_page_view: true });
})();

// ── Optional: Yandex Metrika ─────────────────────────────────
if (typeof MC_CONFIG.YM_ID === 'number' && MC_CONFIG.YM_ID > 0) {
  window.MC_YM_ID = MC_CONFIG.YM_ID;
  (function(m, e, t, r, i, k, a) {
    m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < e.scripts.length; j++) { if (e.scripts[j].src === r) return; }
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.webvisor.org/metrika/tag_ww.js?id=' + MC_CONFIG.YM_ID, 'ym');
  window.ym(window.MC_YM_ID, 'init', {
    ssr:                true,
    webvisor:           true,
    trackHash:          true,
    clickmap:           true,
    ecommerce:          'dataLayer',
    referrer:           document.referrer,
    url:                location.href,
    accurateTrackBounce: true,
    trackLinks:         true
  });
}

// ── Core tracking helper ─────────────────────────────────────
// Pushes events to dataLayer — GTM picks them up and forwards to GA4 / Google Ads.
window.mcTrack = function(name, params) {
  var p = params || {};
  // Primary: GTM dataLayer (always active)
  window.dataLayer.push(Object.assign({ event: name }, p));
  // Optional: Yandex Metrika
  if (typeof window.ym === 'function' && window.MC_YM_ID) {
    window.ym(window.MC_YM_ID, 'reachGoal', name, p);
  }
};

// ── Link location helper ─────────────────────────────────────
function _mcLinkLoc(el) {
  if (el.closest('#mm'))      return 'mobile_menu';
  if (el.closest('#nav'))     return 'nav';
  if (el.closest('.flbtns'))  return 'float_bar';
  if (el.closest('#hero'))    return 'hero';
  if (el.closest('footer'))   return 'footer';
  return 'page';
}

// ── Auto-tracking (runs on every page) ──────────────────────
document.addEventListener('DOMContentLoaded', function() {

  // booking_started — fires once on first keystroke/selection inside the booking form
  var bform = document.getElementById('bform');
  if (bform) {
    bform.addEventListener('input', function() {
      window.mcTrack('booking_started', { lang: window.lang || 'ru' });
    }, { once: true });
  }

  // All link-click events
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var loc = _mcLinkLoc(a);

    if (href.indexOf('tel:') === 0) {
      // phone_click (new canonical name) + legacy contact_phone_click
      var phone = href.slice(4);
      window.mcTrack('phone_click', { phone: phone, link_location: loc });
      window.mcTrack('contact_phone_click', { phone: phone, link_location: loc });

    } else if (href.indexOf('wa.me/994103115001') !== -1 && !a.closest('#bform')) {
      // whatsapp_click (new canonical name) + legacy contact_whatsapp_click
      // Excludes the programmatic WA fallback sent from inside the booking form
      window.mcTrack('whatsapp_click', { link_location: loc });
      window.mcTrack('contact_whatsapp_click', { link_location: loc });

    } else if (href.indexOf('t.me/millicars') !== -1) {
      window.mcTrack('contact_telegram_click', { link_location: loc });

    } else if (
      (href.indexOf('/booking.html') !== -1 || href.indexOf('/cars.html') !== -1) &&
      (a.classList.contains('btn-p') || a.classList.contains('btn-nb') || a.classList.contains('btn-bk'))
    ) {
      // Primary booking CTA buttons (nav "Забронировать", hero button, etc.)
      window.mcTrack('booking_cta_click', {
        button_text: (a.textContent || '').trim().slice(0, 40),
        link_location: loc
      });
    }
  });

});
