/* ============================================================
   Millicars — lang-switch.js  v2.0
   Context-preserving language switcher.

   Strategy:
   - Every page is listed in PAGES as a 3-tuple [ru, en, az]
   - On load, look up the current pathname → get equivalents
   - Patch href on every [data-lang] link in nav + mobile menu
   - Unknown pages fall back to the target language homepage
   - Supersedes the old 5-entry urlMap inline script
   ============================================================ */

(function () {

  var LANGS = ['ru', 'en', 'az'];
  var HOME  = { ru: '/ru/', en: '/en/', az: '/az/' };

  /* ── Complete page equivalence table ──────────────────────────
     Each row: [ru_path, en_path, az_path]
     Empty string = page does not exist in that language → HOME  */
  var PAGES = [

    // ── Homepages ────────────────────────────────────────────
    ['/ru/',  '/en/',  '/az/'],

    // ── Catalog / Cars ───────────────────────────────────────
    ['/ru/cars.html',    '/en/cars.html',  '/az/cars.html'],

    // ── Booking ──────────────────────────────────────────────
    ['/ru/booking.html', '/en/booking.html',  '/az/booking.html'],
    ['/ru/thank-you.html', '/en/thank-you.html', '/az/thank-you.html'],

    // ── Info pages ───────────────────────────────────────────
    ['/ru/contacts.html',              '/en/contacts.html',              '/az/contacts.html'],
    ['/ru/about.html',                 '/en/about.html',                 '/az/about.html'],
    ['/ru/faq.html',                   '/en/faq.html',                   '/az/faq.html'],
    ['/ru/how-it-works.html',          '/en/how-it-works.html',          '/az/how-it-works.html'],
    ['/ru/reviews.html',               '/en/reviews.html',               '/az/reviews.html'],
    ['/ru/terms.html',                 '/en/terms.html',                 '/az/terms.html'],
    ['/ru/privacy.html',               '/en/privacy.html',               '/az/privacy.html'],
    ['/ru/corporate.html',             '/en/corporate.html',             '/az/corporate.html'],
    ['/ru/routes.html',                 '/en/routes.html',                '/az/routes.html'],

    // ── Landing pages ─────────────────────────────────────────
    ['/ru/airport-car-rental-baku.html',      '/en/airport-car-rental-baku.html',      '/az/airport-car-rental-baku.html'],
    ['/ru/long-term-car-rental-baku.html',    '/en/long-term-car-rental-baku.html',    '/az/long-term-car-rental-baku.html'],
    ['/ru/suv-rental-baku.html',              '/en/suv-rental-baku.html',              '/az/suv-rental-baku.html'],

    // ── Landing pages (all 3 languages) ──────────────────────
    ['/ru/car-rental-with-driver-baku.html',     '/en/car-rental-with-driver-baku.html',     '/az/car-rental-with-driver-baku.html'],
    ['/ru/car-rental-without-deposit-baku.html', '/en/car-rental-without-deposit-baku.html', '/az/car-rental-without-deposit-baku.html'],
    ['/ru/economy-car-rental-baku.html',         '/en/economy-car-rental-baku.html',         '/az/economy-car-rental-baku.html'],
    ['/ru/luxury-car-rental-baku.html',          '/en/luxury-car-rental-baku.html',          '/az/luxury-car-rental-baku.html'],
    ['/ru/monthly-car-rental-baku.html',         '/en/monthly-car-rental-baku.html',         '/az/monthly-car-rental-baku.html'],

    // ── Blog index ────────────────────────────────────────────
    ['/ru/blog/',            '/en/blog/',            '/az/blog/'],
    ['/ru/blog/index.html',  '/en/blog/index.html',  '/az/blog/index.html'],

    // ── Blog articles (5 topics, different slugs per language) ─
    ['/ru/blog/arenda-avto-v-aeroportu-baku.html',       '/en/blog/car-rental-at-baku-airport.html',           '/az/blog/baki-hava-limaninda-icare.html'],
    ['/ru/blog/kak-arendovat-avto-v-baku.html',          '/en/blog/how-to-rent-a-car-in-baku.html',            '/az/blog/baki-avto-icaresi-rehber.html'],
    ['/ru/blog/poezdki-po-azerbajdzhanu.html',            '/en/blog/road-trips-in-azerbaijan.html',             '/az/blog/azerbaycanda-seyahet.html'],
    ['/ru/blog/pravila-vozhdeniya-v-azerbajdzhane.html',  '/en/blog/driving-rules-in-azerbaijan.html',          '/az/blog/azerbaycanda-suruculuk-qaydalari.html'],
    ['/ru/blog/sovety-turistam-baku.html',                '/en/blog/travel-tips-baku.html',                     '/az/blog/baki-turistler-ucun-meslehetler.html'],
    ['/ru/blog/kakoe-avto-vybrat-baku.html',              '/en/blog/best-car-for-baku.html',                    '/az/blog/baki-ucun-en-yaxsi-avto.html'],
    ['/ru/blog/mezhdunarodnye-prava-azerbajdzhan.html',   '/en/blog/international-driving-permit-azerbaijan.html','/az/blog/beynelxalq-suruculuk-vesiqesi.html'],
    ['/ru/blog/strahovka-avto-azerbajdzhan.html',         '/en/blog/car-insurance-azerbaijan.html',              '/az/blog/azerbaycan-avto-sigortasi.html'],
    ['/ru/blog/toplivo-azerbajdzhan.html',                '/en/blog/fuel-guide-azerbaijan.html',                 '/az/blog/azerbaycan-yanacaq-rehberi.html'],

    // ── Car detail pages (21 cars) ───────────────────────────
    ['/ru/cars/chevrolet-spark.html',    '/en/cars/chevrolet-spark.html',    '/az/cars/chevrolet-spark.html'],
    ['/ru/cars/suzuki-swift.html',       '/en/cars/suzuki-swift.html',       '/az/cars/suzuki-swift.html'],
    ['/ru/cars/chevrolet-cobalt.html',   '/en/cars/chevrolet-cobalt.html',   '/az/cars/chevrolet-cobalt.html'],
    ['/ru/cars/chevrolet-aveo.html',     '/en/cars/chevrolet-aveo.html',     '/az/cars/chevrolet-aveo.html'],
    ['/ru/cars/kia-rio.html',            '/en/cars/kia-rio.html',            '/az/cars/kia-rio.html'],
    ['/ru/cars/hyundai-accent.html',     '/en/cars/hyundai-accent.html',     '/az/cars/hyundai-accent.html'],
    ['/ru/cars/skoda-rapid.html',        '/en/cars/skoda-rapid.html',        '/az/cars/skoda-rapid.html'],
    ['/ru/cars/toyota-corolla.html',     '/en/cars/toyota-corolla.html',     '/az/cars/toyota-corolla.html'],
    ['/ru/cars/hyundai-elantra.html',    '/en/cars/hyundai-elantra.html',    '/az/cars/hyundai-elantra.html'],
    ['/ru/cars/kia-cerato.html',         '/en/cars/kia-cerato.html',         '/az/cars/kia-cerato.html'],
    ['/ru/cars/byd-destroyer.html',      '/en/cars/byd-destroyer.html',      '/az/cars/byd-destroyer.html'],
    ['/ru/cars/toyota-camry.html',       '/en/cars/toyota-camry.html',       '/az/cars/toyota-camry.html'],
    ['/ru/cars/hyundai-sonata.html',     '/en/cars/hyundai-sonata.html',     '/az/cars/hyundai-sonata.html'],
    ['/ru/cars/hyundai-creta.html',      '/en/cars/hyundai-creta.html',      '/az/cars/hyundai-creta.html'],
    ['/ru/cars/hyundai-venue.html',      '/en/cars/hyundai-venue.html',      '/az/cars/hyundai-venue.html'],
    ['/ru/cars/kia-sportage.html',       '/en/cars/kia-sportage.html',       '/az/cars/kia-sportage.html'],
    ['/ru/cars/hyundai-tucson.html',     '/en/cars/hyundai-tucson.html',     '/az/cars/hyundai-tucson.html'],
    ['/ru/cars/toyota-rav4.html',        '/en/cars/toyota-rav4.html',        '/az/cars/toyota-rav4.html'],
    ['/ru/cars/mercedes-e-class.html',   '/en/cars/mercedes-e-class.html',   '/az/cars/mercedes-e-class.html'],
    ['/ru/cars/mercedes-vito.html',      '/en/cars/mercedes-vito.html',      '/az/cars/mercedes-vito.html'],
    ['/ru/cars/hyundai-staria.html',     '/en/cars/hyundai-staria.html',     '/az/cars/hyundai-staria.html'],
  ];

  /* ── Build lookup index: path → { ru, en, az } ─────────────── */
  var idx = {};
  PAGES.forEach(function (row) {
    var map = {};
    LANGS.forEach(function (l, i) { if (row[i]) map[l] = row[i]; });
    // Index every non-empty path in the row
    LANGS.forEach(function (l, i) { if (row[i]) idx[row[i]] = map; });
  });

  /* ── Detect current language from URL prefix ────────────────── */
  var p   = window.location.pathname;
  var cur = p.startsWith('/en/') ? 'en' : p.startsWith('/az/') ? 'az' : 'ru';

  // Equivalents for this page (empty object = unmapped → will use HOME)
  var equiv = idx[p] || {};

  /* ── Patch one switcher container ───────────────────────────── */
  function patchSwitcher(container, activeClass) {
    if (!container) return;
    container.querySelectorAll('a[data-lang]').forEach(function (a) {
      var lang = a.getAttribute('data-lang');
      a.classList.remove(activeClass);
      if (lang === cur) {
        // Active language: mark it, don't change href (stays as lang homepage — safe fallback)
        a.classList.add(activeClass);
        a.setAttribute('aria-current', 'true');
      } else {
        // Other languages: point to exact equivalent or fall back to homepage
        a.href = equiv[lang] || HOME[lang];
        a.removeAttribute('aria-current');
      }
    });
  }

  function applySwitch() {
    patchSwitcher(document.getElementById('lang-sw'),   'lsa-act');
    patchSwitcher(document.querySelector('.mm-lang'),   'mm-la-act');
  }

  // Run now if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySwitch);
  } else {
    applySwitch();
  }

  /* ── Persist choice + track clicks ─────────────────────────── */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-lang]');
    if (!a) return;
    var toLang = a.getAttribute('data-lang');
    if (toLang === cur) return;

    // Save so the root redirect honours the user's manual choice
    try { localStorage.setItem('mc_lang', toLang); } catch (ignore) {}

    if (typeof window.mcTrack === 'function') {
      window.mcTrack('language_switch', {
        from_lang: cur,
        to_lang:   toLang,
        from_page: p,
        to_page:   a.getAttribute('href') || ''
      });
    }
  });

}());
