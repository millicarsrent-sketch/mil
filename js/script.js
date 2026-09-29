(function () {
  'use strict';

  const CARS = [
    {id:'chevrolet-spark',  badge:'A', cat:'A', name:'Chevrolet Spark',    year:2022, clsRu:'Эконом',    clsEn:'Economy',   clsAz:'Ekonom',   price:25,  tariff:[90,45,40,35,30,25],      deposit:500,  seats:5, trans:'M', fuel:'⛽', img:'chevrolet-spark.webp',  franchise:[1500,500]},
    {id:'suzuki-swift',     badge:'A', cat:'A', name:'Suzuki Swift',       year:2023, clsRu:'Эконом',    clsEn:'Economy',   clsAz:'Ekonom',   price:25,  tariff:[90,45,40,35,30,25],      deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'suzuki-swift.webp',     franchise:[1500,500]},
    {id:'chevrolet-cobalt', badge:'B', cat:'B', name:'Chevrolet Cobalt',   year:2022, clsRu:'Базовый',   clsEn:'Basic',     clsAz:'Əsas',     price:30,  tariff:[100,50,45,40,35,30],     deposit:500,  seats:5, trans:'M', fuel:'⛽', img:'chevrolet-cobalt.webp', franchise:[2000,500], popular:true},
    {id:'chevrolet-aveo',   badge:'B', cat:'B', name:'Chevrolet Aveo',     year:2022, clsRu:'Базовый',   clsEn:'Basic',     clsAz:'Əsas',     price:30,  tariff:[100,50,45,40,35,30],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'chevrolet-aveo.webp',   franchise:[2000,500]},
    {id:'kia-rio',          badge:'C', cat:'C', name:'Kia Rio',            year:2022, clsRu:'Комфорт',   clsEn:'Comfort',   clsAz:'Komfort',  price:30,  tariff:[120,60,50,45,35,30],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'kia-rio.webp',          franchise:[2000,500]},
    {id:'hyundai-accent',   badge:'C', cat:'C', name:'Hyundai Accent',     year:2022, clsRu:'Комфорт',   clsEn:'Comfort',   clsAz:'Komfort',  price:30,  tariff:[120,60,50,45,35,30],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'hyundai-accent.webp',   franchise:[2000,500]},
    {id:'skoda-rapid',      badge:'C', cat:'C', name:'Skoda Rapid',        year:2023, clsRu:'Комфорт',   clsEn:'Comfort',   clsAz:'Komfort',  price:30,  tariff:[120,60,50,45,35,30],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'skoda-rapid.webp',      franchise:[2000,500]},
    {id:'toyota-corolla',   badge:'D', cat:'D', name:'Toyota Corolla',     year:2023, clsRu:'Стандарт',  clsEn:'Standard',  clsAz:'Standart', price:40,  tariff:[150,80,70,60,50,40],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'toyota-corolla.webp',   franchise:[3000,500]},
    {id:'hyundai-elantra',  badge:'D', cat:'D', name:'Hyundai Elantra',    year:2022, clsRu:'Стандарт',  clsEn:'Standard',  clsAz:'Standart', price:40,  tariff:[150,80,70,60,50,40],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'hyundai-elantra.webp',  franchise:[3000,500]},
    {id:'kia-cerato',       badge:'D', cat:'D', name:'Kia Cerato',         year:2022, clsRu:'Стандарт',  clsEn:'Standard',  clsAz:'Standart', price:40,  tariff:[150,80,70,60,50,40],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'kia-cerato.webp',       franchise:[3000,500]},
    {id:'byd-destroyer',    badge:'D', cat:'D', name:'BYD Destroyer',      year:2024, clsRu:'Стандарт',  clsEn:'Standard',  clsAz:'Standart', price:40,  tariff:[150,80,70,60,50,40],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'byd-destroyer.webp',    franchise:[3000,500], popular:true},
    {id:'toyota-camry',     badge:'E', cat:'E', name:'Toyota Camry',       year:2023, clsRu:'Бизнес',    clsEn:'Business',  clsAz:'Biznes',   price:80,  tariff:[210,120,110,100,90,80],  deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'toyota-camry.webp',     franchise:[10000,500]},
    {id:'hyundai-sonata',   badge:'E', cat:'E', name:'Hyundai Sonata',     year:2022, clsRu:'Бизнес',    clsEn:'Business',  clsAz:'Biznes',   price:80,  tariff:[210,120,110,100,90,80],  deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'hyundai-sonata.webp',   franchise:[10000,500]},
    {id:'hyundai-creta',    badge:'F', cat:'F', name:'Hyundai Creta',      year:2023, clsRu:'Кроссовер', clsEn:'Crossover', clsAz:'Krossover',price:50,  tariff:[200,90,80,65,60,50],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'hyundai-creta.webp',    franchise:[10000,500]},
    {id:'hyundai-venue',    badge:'F', cat:'F', name:'Hyundai Venue',      year:2023, clsRu:'Кроссовер', clsEn:'Crossover', clsAz:'Krossover',price:50,  tariff:[200,90,80,65,60,50],     deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'hyundai-venue.webp',    franchise:[10000,500]},
    {id:'kia-sportage',     badge:'G', cat:'G', name:'Kia Sportage',       year:2023, clsRu:'SUV',       clsEn:'SUV',       clsAz:'SUV',      price:90,  tariff:[260,130,120,110,100,90], deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'kia-sportage.webp',     franchise:[10000,500]},
    {id:'hyundai-tucson',   badge:'G', cat:'G', name:'Hyundai Tucson',     year:2023, clsRu:'SUV',       clsEn:'SUV',       clsAz:'SUV',      price:90,  tariff:[260,130,120,110,100,90], deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'hyundai-tucson.webp',   franchise:[10000,500], popular:true},
    {id:'toyota-rav4',      badge:'G', cat:'G', name:'Toyota RAV4',        year:2023, clsRu:'SUV',       clsEn:'SUV',       clsAz:'SUV',      price:90,  tariff:[260,130,120,110,100,90], deposit:500,  seats:5, trans:'A', fuel:'⛽', img:'toyota-rav4.webp',      franchise:[10000,500]},
    {id:'mercedes-e-class', badge:'H', cat:'H', name:'Mercedes E-Class',   year:2023, clsRu:'Люкс',      clsEn:'Luxury',    clsAz:'Lüks',     price:95,  tariff:[250,150,130,120,110,95],  deposit:1000, seats:5, trans:'A', fuel:'⛽', img:'mercedes-e-class.webp', franchise:[20000,1000], gold:true},
    {id:'mercedes-vito',    badge:'I', cat:'I', name:'Mercedes-Benz Vito', year:2022, clsRu:'Минивэн',   clsEn:'Minivan',   clsAz:'Miniven',  price:90,  tariff:[320,160,145,130,115,90],  deposit:1000, seats:8, trans:'A', fuel:'⛽', img:'mercedes-vito.webp',    franchise:[20000,1000]},
    {id:'hyundai-staria',   badge:'I', cat:'I', name:'Hyundai Staria',     year:2023, clsRu:'Минивэн',   clsEn:'Minivan',   clsAz:'Miniven',  price:90,  tariff:[320,160,145,130,115,90],  deposit:1000, seats:7, trans:'A', fuel:'⛽', img:'hyundai-staria.webp',   franchise:[20000,1000]}
  ];

  window.MC_PC_T = (function () {
    const r = {};
    CARS.forEach(function (c) { if (!r[c.cat]) r[c.cat] = c.tariff.slice(); });
    return r;
  })();

  window.MC_INS = { medium: 15, full: 40 };

  const L = {
    ru:{
      bookBtn:'Забронировать', fromWord:'от', dayWord:'день',
      selectCar:'Выбрать авто', errorCar:'Выберите автомобиль',
      successTitle:'Заявка принята!', successMsg:'Ваша заявка на бронирование отправлена.',
      th1:'2–3 дн.', th2:'4–7 дн.', th3:'8–15 дн.', th4:'15–30 дн.', th5:'31+ дн.',
      depLabel:'Залог', transA:'Автомат', transM:'Механика',
      insIncl:'Страховка', acIncl:'Кондиционер', popLabel:'Хит',
      insLabel:'Страховка', extrasLabel:'Доп. услуги', totalLabel:'Итого',
      loadingBtn:'Отправляем...', deliveryLabel:'Доставка',
      carLabel:'Автомобиль', rentalLabel:'Аренда', pickupLabel:'Получение',
      returnLabel:'Возврат', daysLabel:'Срок', costLabel:'Стоимость', dayShort:'дн.',
      urgencyHtml:'🔥 В автопарке <strong>{N} авто</strong> — успейте забронировать!',
      francLabel:'Франшиза', otherAddrLbl:'Другой адрес', addrEmpty:'адрес не указан',
      savingsLabel:'Экономия', returnLaterMsg:'Дата возврата должна быть позже даты получения',
      waBookTitle:'Бронирование', waCarLbl:'Авто', waClientLbl:'Клиент',
      waPhoneLbl:'Телефон', waEmailLbl:'Email', emailCommentLbl:'Комментарий',
      waEnquiry:'Хочу забронировать {name} ({cls}). Уточните наличие и условия.',
      altRentPrefix:'Аренда', altRentCity:'в Баку — от', altRentSuffix:'AZN/день',
      selectorAlt:'аренда в Баку', waQuickBtn:'💬 Забронировать через WhatsApp',
      waQuickGreeting:'Здравствуйте! Хочу забронировать автомобиль:',
      waQuickEst:'Ориентировочная стоимость', payAccept:'Принимаем к оплате',
      stickyEmpty:'Выберите даты и авто, чтобы увидеть стоимость',
      deliveryReturn:'Доставка/возврат', stickySelectCar:'← Выберите автомобиль на шаге 2',
      insIncludedLabel:'включена',
      licTypeLabel:'Тип прав', licAz:'Азербайджанское ВУ', licIntl:'Иностранное ВУ (МВУ)',
      depReturnNote:'Блокируется при получении, возвращается при чистом возврате'
    },
    en:{
      bookBtn:'Book Now', fromWord:'from', dayWord:'day',
      selectCar:'Book Now', errorCar:'Please select a car',
      successTitle:'Request received!', successMsg:'Your booking request has been sent.',
      th1:'2–3 d.', th2:'4–7 d.', th3:'8–15 d.', th4:'15–30 d.', th5:'31+ d.',
      depLabel:'Deposit', transA:'Automatic', transM:'Manual',
      insIncl:'Insurance', acIncl:'A/C', popLabel:'Popular',
      insLabel:'Insurance', extrasLabel:'Extras', totalLabel:'Total',
      loadingBtn:'Sending...', deliveryLabel:'Delivery',
      carLabel:'Car', rentalLabel:'Rental', pickupLabel:'Pickup',
      returnLabel:'Return', daysLabel:'Duration', costLabel:'Cost', dayShort:'d.',
      urgencyHtml:'🔥 <strong>{N} cars</strong> available — book yours now!',
      francLabel:'Excess', otherAddrLbl:'Other address', addrEmpty:'address not specified',
      savingsLabel:'You save', returnLaterMsg:'Return date must be later than pick-up date',
      waBookTitle:'Booking', waCarLbl:'Car', waClientLbl:'Client',
      waPhoneLbl:'Phone', waEmailLbl:'Email', emailCommentLbl:'Comment',
      waEnquiry:'I would like to book {name} ({cls}). Please confirm availability and terms.',
      altRentPrefix:'Rent', altRentCity:'in Baku — from', altRentSuffix:'AZN/day',
      selectorAlt:'rental in Baku', waQuickBtn:'💬 Book via WhatsApp',
      waQuickGreeting:'Hello! I would like to book a car:',
      waQuickEst:'Estimated cost', payAccept:'Accepted payment',
      stickyEmpty:'Select dates and a car to see the total',
      deliveryReturn:'Delivery/Return', stickySelectCar:'← Select a car in step 2',
      insIncludedLabel:'included',
      licTypeLabel:'Licence type', licAz:'Azerbaijani licence', licIntl:'Foreign licence (IDP required)',
      depReturnNote:'Blocked at pickup, returned upon clean return'
    },
    az:{
      bookBtn:'Sifariş et', fromWord:'dən', dayWord:'gün',
      selectCar:'Sifariş et', errorCar:'Avtomobil seçin',
      successTitle:'Müraciətiniz qəbul edildi!', successMsg:'Sifariş müraciətiniz göndərildi.',
      th1:'2–3 gün', th2:'4–7 gün', th3:'8–15 gün', th4:'15–30 gün', th5:'31+ gün',
      depLabel:'Depozit', transA:'Avtomat', transM:'Mexaniki',
      insIncl:'Sığorta', acIncl:'Kondisioner', popLabel:'Populyar',
      insLabel:'Sığorta', extrasLabel:'Əlavə xidmətlər', totalLabel:'Cəmi',
      loadingBtn:'Göndərilir...', deliveryLabel:'Çatdırılma',
      carLabel:'Avtomobil', rentalLabel:'İcarə', pickupLabel:'Götürmə',
      returnLabel:'Qaytarma', daysLabel:'Müddət', costLabel:'Xərclər', dayShort:'gün',
      urgencyHtml:'🔥 Parkda <strong>{N} avto</strong> — tez sifariş edin!',
      francLabel:'Franşiza', otherAddrLbl:'Başqa ünvan', addrEmpty:'ünvan göstərilməyib',
      savingsLabel:'Qənaət', returnLaterMsg:'Qaytarma tarixi götürmə tarixindən sonra olmalıdır',
      waBookTitle:'Sifariş', waCarLbl:'Avtomobil', waClientLbl:'Müştəri',
      waPhoneLbl:'Telefon', waEmailLbl:'E-mail', emailCommentLbl:'Şərh',
      waEnquiry:'{name} ({cls}) avtomobilini icarə etmək istəyirəm. Mövcudluğu və şərtləri bildirin.',
      altRentPrefix:'', altRentCity:'icarəsi Bakıda —', altRentSuffix:'AZN/gündən',
      selectorAlt:'Bakıda icarə', waQuickBtn:'💬 WhatsApp ilə sifariş et',
      waQuickGreeting:'Salam! Avtomobil icarə etmək istəyirəm:',
      waQuickEst:'Təxmini qiymət', payAccept:'Ödəniş üsulları',
      stickyEmpty:'Qiyməti görmək üçün tarix və avtomobil seçin',
      deliveryReturn:'Çatdırılma/Qaytarma', stickySelectCar:'← Addım 2-də avtomobil seçin',
      insIncludedLabel:'daxildir',
      licTypeLabel:'Vəsiqə növü', licAz:'Az. vəsiqəsi', licIntl:'Xarici vəsiqə (MVU)',
      depReturnNote:'Götürmədə tutulur, təmiz qaytarmada geri qaytarılır'
    }
  };

  const p0 = window.location.pathname;
  const lang = p0.startsWith('/en/') ? 'en' : p0.startsWith('/az/') ? 'az' : 'ru';
  const t = L[lang] || L['ru'];

  const _formLoadTime = Date.now();

  let _bkTotal = 0;
  let _bkRaf = null;
  function _bkAnim(from, to, cb) {
    if (_bkRaf) { cancelAnimationFrame(_bkRaf); _bkRaf = null; }
    if (from === to) { cb(to); return; }
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 300, 1);
      const e = 1 - Math.pow(1 - p, 3);
      cb(Math.round(from + (to - from) * e));
      if (p < 1) { _bkRaf = requestAnimationFrame(step); }
      else { _bkRaf = null; cb(to); }
    }
    _bkRaf = requestAnimationFrame(step);
  }

  function carClass(c) {
    return c['cls' + lang.charAt(0).toUpperCase() + lang.slice(1)] || c.clsRu;
  }
  function priceLabel(c) {
    if (lang === 'az') return '<span>' + c.price + ' AZN/' + t.dayWord + t.fromWord + '</span>';
    return t.fromWord + ' <span>' + c.price + ' AZN/' + t.dayWord + '</span>';
  }
  function getEffectiveRate(car, days) {
    if (!car) return 0;
    const tr = car.tariff;
    if (!tr || tr.length < 6) return car.price;
    if (days <= 3)  return tr[1];
    if (days <= 7)  return tr[2];
    if (days <= 15) return tr[3];
    if (days <= 30) return tr[4];
    return tr[5];
  }

  function renderCars() {
    const cg = document.getElementById('cg');
    if (!cg) return;
    let html = '';
    CARS.forEach(function (c) {
      const tr = c.tariff;
      let tableHtml = '';
      if (tr && tr.length === 6) {
        tableHtml = '<table class="pt">'
          + '<thead><tr>'
          + '<th>' + t.th1 + '</th><th>' + t.th2 + '</th><th>' + t.th3 + '</th><th>' + t.th4 + '</th><th>' + t.th5 + '</th>'
          + '</tr></thead>'
          + '<tbody><tr>'
          + '<td class="hi">' + tr[1] + ' ₼</td>'
          + '<td>' + tr[2] + ' ₼</td>'
          + '<td>' + tr[3] + ' ₼</td>'
          + '<td>' + tr[4] + ' ₼</td>'
          + '<td>' + tr[5] + ' ₼</td>'
          + '</tr></tbody>'
          + '</table>';
      }
      const meta = '<div class="car-meta">'
        + '<span>👤 ' + c.seats + '</span>'
        + '<span>⚙️ ' + (c.trans === 'A' ? t.transA : t.transM) + '</span>'
        + '<span>' + c.fuel + '</span>'
        + '<span>❄️ ' + t.acIncl + '</span>'
        + '<span>🛡️ ' + t.insIncl + '</span>'
        + '</div>';
      const dep = c.deposit ? '<div class="dep">' + t.depLabel + ': <span>' + c.deposit + ' ₼</span></div>' : '';
      const popBadge = c.popular ? '<div class="pop-badge">🔥 ' + t.popLabel + '</div>' : '';
      const altText = lang === 'az'
        ? c.name + ' ' + t.altRentCity + ' ' + c.price + ' ' + t.altRentSuffix
        : t.altRentPrefix + ' ' + c.name + ' ' + t.altRentCity + ' ' + c.price + ' ' + t.altRentSuffix;
      const waText = encodeURIComponent(
        t.waEnquiry.replace('{name}', c.name).replace('{cls}', carClass(c))
      );
      const detailHref = lang === 'ru' ? '/ru/cars/' + c.id + '.html'
        : lang === 'en' ? '/en/cars/' + c.id + '.html'
        : '/az/cars/' + c.id + '.html';
      const detailLabel = lang === 'ru' ? 'Подробнее →'
        : lang === 'en' ? 'View Details →'
        : '&#399;trafl&#305; →';
      html += '<div class="cc vis' + (c.popular ? ' pop-card' : '') + '" data-cat="' + c.cat + '" data-id="' + c.id + '" data-name="' + c.name + '" data-price="' + c.price + '">'
        + '<div class="cv">'
        + popBadge
        + '<div class="cbadge' + (c.gold ? ' gd' : '') + '">' + (c.cat === 'H' ? 'Luxury' : c.badge) + '</div>'
        + '<img loading="lazy" src="../img/cars/' + c.img + '" alt="' + altText + '" width="400" height="190">'
        + '</div>'
        + '<div class="ci">'
        + '<div class="ccls">' + carClass(c) + ' · ' + c.year + '</div>'
        + '<div class="cnm">' + c.name + '</div>'
        + meta
        + tableHtml
        + dep
        + '<button type="button" class="cc-book">' + t.bookBtn + '</button>'
        + '<a href="https://wa.me/994103115001?text=' + waText + '" target="_blank" rel="noopener" class="cc-wa-btn">💬 WhatsApp</a>'
        + '<a href="' + detailHref + '" class="cc-more">' + detailLabel + '</a>'
        + '</div>'
        + '</div>';
    });
    cg.innerHTML = html;
  }

  function filterBookingCars(cat, btn) {
    if (typeof window.mcTrack === 'function') window.mcTrack('car_filter_changed', {category: cat, page: 'booking'});
    document.querySelectorAll('.car-sel-card').forEach(function (card) {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
    document.querySelectorAll('.bk-filter-tabs .gtab').forEach(function (b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
  }

  function filterCars(cat, btn) {
    if (typeof window.mcTrack === 'function') window.mcTrack('car_filter_changed', {category: cat, page: 'catalog'});
    const cards = document.querySelectorAll('#cg .cc');
    cards.forEach(function (el) {
      if (cat === 'all' || el.dataset.cat === cat) { el.classList.add('vis'); }
      else { el.classList.remove('vis'); }
    });
    document.querySelectorAll('.gtab').forEach(function (b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
  }

  function scrollToBooking(carId) {
    if (typeof window.mcTrack === 'function') window.mcTrack('car_gallery_book_click', {car_id: carId});
    const booking = document.getElementById('booking');
    if (!booking) return;
    booking.scrollIntoView({behavior: 'smooth', block: 'start'});
    setTimeout(function () { selectCarById(carId); }, 600);
  }

  let selectedCar = null;
  let bookingCarIds = new Set();

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
      return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character];
    });
  }

  async function loadBookingCars() {
    const grid = document.getElementById('car-selector-grid');
    if (!grid) return;
    if (!window.mcSupabase) {
      grid.textContent = lang === 'en' ? 'Car list is temporarily unavailable.' : lang === 'az' ? 'Avtomobillər hazırda əlçatan deyil.' : 'Список автомобилей временно недоступен.';
      return;
    }

    grid.textContent = lang === 'en' ? 'Loading cars...' : lang === 'az' ? 'Avtomobillər yüklənir...' : 'Загружаем автомобили...';
    let result;
    try {
      result = await window.mcSupabase.rpc('get_available_cars');
    } catch (error) {
      console.error('Supabase car catalog request failed:', error);
      grid.textContent = lang === 'en' ? 'Car list is temporarily unavailable.' : lang === 'az' ? 'Avtomobillər hazırda əlçatan deyil.' : 'Список автомобилей временно недоступен.';
      return;
    }
    if (result.error) {
      console.error('Supabase car catalog error:', result.error);
      grid.textContent = lang === 'en' ? 'Car list is temporarily unavailable.' : lang === 'az' ? 'Avtomobillər hazırda əlçatan deyil.' : 'Список автомобилей временно недоступен.';
      return;
    }

    bookingCarIds = new Set();
    (result.data || []).forEach(function (record) {
      let car = CARS.find(function (item) { return item.name.toLowerCase() === record.brand_model.toLowerCase(); });
      if (!car) {
        car = {
          id: 'db-' + record.id, badge: 'D', cat: 'D', name: record.brand_model,
          year: '', clsRu: 'Автомобиль', clsEn: 'Car', clsAz: 'Avtomobil',
          price: Number(record.price_per_day), tariff: null, deposit: 500,
          seats: 5, trans: 'A', fuel: '', img: '', franchise: null
        };
        CARS.push(car);
      }
      car.databaseId = record.id;
      car.databasePrice = Number(record.price_per_day);
      car.price = car.databasePrice;
      car.tariff = Array.isArray(record.tariff) && record.tariff.length === 6
        ? record.tariff.map(Number)
        : null;
      car.databaseImage = record.image_url || '';
      bookingCarIds.add(car.id);
    });
    renderCarSelector();
  }

  function renderCarSelector() {
    const grid = document.getElementById('car-selector-grid');
    if (!grid) return;
    let html = '';
    CARS.filter(function (c) { return bookingCarIds.has(c.id); }).forEach(function (c) {
      const fr = c.franchise
        ? '<div class="car-sel-franchise">Basic: ' + c.franchise[0].toLocaleString('ru') + ' · Med: ' + c.franchise[1].toLocaleString('ru') + ' AZN</div>'
        : '';
      const sAlt = escapeHtml(c.name + ' — ' + t.selectorAlt);
      const image = c.databaseImage || '../img/cars/' + c.img;
      const price = c.databasePrice || c.price;
      html += '<div class="car-sel-card" role="radio" aria-checked="false" tabindex="0" data-id="' + escapeHtml(c.id) + '" data-db-id="' + escapeHtml(c.databaseId) + '" data-cat="' + escapeHtml(c.cat) + '" data-price="' + price + '">'
        + '<div class="car-sel-img"><img loading="lazy" src="' + escapeHtml(image) + '" alt="' + sAlt + '" width="200" height="120"></div>'
        + '<div class="car-sel-cls">' + escapeHtml(carClass(c)) + '</div>'
        + '<div class="car-sel-name">' + escapeHtml(c.name) + '</div>'
        + '<div class="car-sel-price">' + price + ' AZN/' + t.dayWord + '</div>'
        + fr
        + '</div>';
    });
    grid.innerHTML = html || (lang === 'en' ? 'No available cars.' : lang === 'az' ? 'Əlçatan avtomobil yoxdur.' : 'Нет доступных автомобилей.');
  }

  function selectCarCard(el) {
    document.querySelectorAll('.car-sel-card').forEach(function (c) {
      c.classList.remove('selected');
      c.setAttribute('aria-checked', 'false');
    });
    el.classList.add('selected');
    el.setAttribute('aria-checked', 'true');
    selectedCar = {id: el.dataset.id, databaseId: el.dataset.dbId, price: parseInt(el.dataset.price)};
    const car = CARS.find(function (c) { return c.id === el.dataset.id; });
    if (typeof window.mcTrack === 'function' && car) {
      window.mcTrack('car_selected', {car_id: car.id, car_name: car.name, car_class: car.cat, price_azn: parseInt(el.dataset.price)});
    }
    if (car && car.franchise) {
      const basicDesc = document.querySelector('#ins-basic .ins-desc');
      const medDesc   = document.querySelector('#ins-full .ins-desc');
      if (basicDesc) basicDesc.textContent = t.francLabel + ' ' + car.franchise[0].toLocaleString('ru') + ' AZN';
      if (medDesc)   medDesc.textContent   = t.francLabel + ' ' + car.franchise[1].toLocaleString('ru') + ' AZN';
    }
    if (car) {
      const depAmountEl = document.getElementById('dep-confirm-amount');
      if (depAmountEl) depAmountEl.textContent = car.deposit + ' AZN';
    }
    updateStep3Summary();
    updateWaQuickBtn();
    syncStickySummary();
  }

  function selectCarById(carId) {
    const card = document.querySelector('.car-sel-card[data-id="' + carId + '"]');
    if (card) selectCarCard(card);
  }

  let insExtra = 0;
  function selectIns(type) {
    document.querySelectorAll('.ins-card').forEach(function (c) { c.classList.remove('checked'); });
    const map = {basic: 'ins-basic', full: 'ins-full', zero: 'ins-zero'};
    const card = document.getElementById(map[type]);
    if (card) card.classList.add('checked');
    if (type === 'basic')      insExtra = 0;
    else if (type === 'full')  insExtra = window.MC_INS.medium;
    else if (type === 'zero')  insExtra = window.MC_INS.full;
    updateStep3Summary();
    updateWaQuickBtn();
    syncStickySummary();
  }

  let extrasExtra = 0;
  const extras = {};
  function toggleExtra(name, price, el) {
    const card = el.closest('.extra-card');
    card.classList.toggle('checked');
    if (card.classList.contains('checked')) { extras[name] = price; }
    else { delete extras[name]; }
    extrasExtra = Object.values(extras).reduce(function (a, b) { return a + b; }, 0);
    updateStep3Summary();
    updateWaQuickBtn();
    syncStickySummary();
  }

  function updateStep3Summary() {
    const s = document.getElementById('step3-summary');
    if (!s || !selectedCar) return;
    const days = daysCount || 2;
    const car = CARS.find(function (c) { return c.id === selectedCar.id; });
    const base = car ? getEffectiveRate(car, days) : selectedCar.price;
    let pickFee = 0, dropFee = 0;
    const pickSel = document.getElementById('f_pickup_loc');
    const dropSel = document.getElementById('f_dropoff_loc');
    if (pickSel) { const po = pickSel.selectedOptions[0]; if (po) pickFee = parseInt(po.dataset.fee || 0); }
    if (dropSel) { const dop = dropSel.selectedOptions[0]; if (dop) dropFee = parseInt(dop.dataset.fee || 0); }
    const newTotal = (base + insExtra + extrasExtra) * days + pickFee + dropFee;
    const saving = (days >= 4 && car && car.tariff) ? (car.tariff[1] - base) * days : 0;
    s.style.display = 'block';
    s.innerHTML = '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">'
      + '<span style="color:var(--muted)">' + (car ? car.name : '') + '</span>'
      + '<span>' + days + ' ' + t.dayShort + ' · ' + base + ' AZN/' + t.dayWord + '</span></div>'
      + (insExtra ? '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span style="color:var(--muted)">' + t.insLabel + '</span><span>+' + insExtra + ' AZN/' + t.dayWord + '</span></div>' : '')
      + (extrasExtra ? '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span style="color:var(--muted)">' + t.extrasLabel + '</span><span>+' + extrasExtra + ' AZN/' + t.dayWord + '</span></div>' : '')
      + ((pickFee + dropFee) ? '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span style="color:var(--muted)">' + t.deliveryLabel + '</span><span>+' + (pickFee + dropFee) + ' AZN</span></div>' : '')
      + (saving > 0 ? '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:10px"><span style="color:#f5a623">🎉 ' + t.savingsLabel + '</span><span style="color:#f5a623;font-weight:600">' + saving + ' AZN</span></div>' : '')
      + '<div style="display:flex;justify-content:space-between;font-size:18px;padding-top:10px;border-top:1px solid rgba(46,204,113,.25);font-family:\'Playfair Display\',serif">'
      + '<span>' + t.totalLabel + '</span>'
      + '<span style="color:var(--accent)" id="bk-live-total">' + _bkTotal + ' AZN</span></div>';
    _bkAnim(_bkTotal, newTotal, function (n) {
      const el = document.getElementById('bk-live-total');
      if (el) el.textContent = n + ' AZN';
    });
    _bkTotal = newTotal;
  }

  function updateWaQuickBtn() {
    const wrap = document.getElementById('bk-wa-wrap');
    if (!wrap) return;
    if (!selectedCar) { wrap.style.display = 'none'; return; }
    const car = CARS.find(function (c) { return c.id === selectedCar.id; });
    if (!car) { wrap.style.display = 'none'; return; }
    const pickup = (document.getElementById('f_pickup_date') || {}).value || '—';
    const ret    = (document.getElementById('f_return_date') || {}).value || '—';
    const days   = daysCount || 1;
    const base   = getEffectiveRate(car, days);
    const total  = (base + insExtra + extrasExtra) * days;
    const insCard  = document.querySelector('.ins-card.checked');
    const insName  = insCard ? insCard.querySelector('.ins-name').textContent : 'Basic';
    const extKeys  = Object.keys(extras);
    const lines = [
      t.waQuickGreeting,
      '🚗 ' + t.waCarLbl + ': ' + car.name + ' (' + carClass(car) + ')',
      '📅 ' + t.pickupLabel + ': ' + pickup,
      '📅 ' + t.returnLabel + ': ' + ret,
      '🛡️ ' + t.insLabel + ': ' + insName
    ];
    if (extKeys.length) lines.push('➕ ' + t.extrasLabel + ': ' + extKeys.join(', '));
    lines.push('💰 ' + t.waQuickEst + ': ' + total + ' AZN');
    const btn = document.getElementById('bk-wa-quick');
    if (btn) btn.href = 'https://wa.me/994103115001?text=' + encodeURIComponent(lines.join('\n'));
    wrap.style.display = 'block';
  }

  function syncStickySummary() {
    const content = document.getElementById('bk-sticky-content');
    if (!content) return;
    const days = daysCount || 2;
    const pickupVal = (document.getElementById('f_pickup_date') || {}).value;
    const returnVal = (document.getElementById('f_return_date') || {}).value;
    if (!pickupVal && !selectedCar) {
      content.innerHTML = '<div class="bk-sp-empty">' + t.stickyEmpty + '</div>';
      return;
    }
    let html = '';
    if (pickupVal && returnVal) {
      html += '<div class="bk-sp-section"><div class="bk-sp-lbl">' + t.rentalLabel + '</div>'
        + '<div class="bk-sp-row"><span>' + pickupVal + ' — ' + returnVal + '</span></div>'
        + '<div class="bk-sp-row"><span style="color:var(--accent);font-weight:500">' + daysStr(days) + '</span></div>'
        + '</div>';
    }
    if (selectedCar) {
      const car = CARS.find(function (c) { return c.id === selectedCar.id; });
      const base = car ? getEffectiveRate(car, days) : selectedCar.price;
      html += '<div class="bk-sp-section"><div class="bk-sp-lbl">' + t.carLabel + '</div>'
        + '<div class="bk-sp-row"><span>' + (car ? car.name : '') + '</span><span>' + (base * days) + ' AZN</span></div>'
        + '<div style="font-size:11px;color:var(--muted);margin-top:2px">' + base + ' AZN × ' + days + ' ' + t.dayShort + '</div>'
        + '</div>';
      if (insExtra > 0) {
        const insCard = document.querySelector('.ins-card.checked');
        const insName = insCard ? insCard.querySelector('.ins-name').textContent : '';
        html += '<div class="bk-sp-section"><div class="bk-sp-lbl">' + t.insLabel + ' ' + insName + '</div>'
          + '<div class="bk-sp-row"><span>+' + insExtra + ' × ' + days + ' ' + t.dayShort + '</span><span>+' + (insExtra * days) + ' AZN</span></div>'
          + '</div>';
      }
      if (extrasExtra > 0) {
        html += '<div class="bk-sp-section"><div class="bk-sp-lbl">' + t.extrasLabel + '</div>'
          + '<div class="bk-sp-row"><span>+' + extrasExtra + ' × ' + days + ' ' + t.dayShort + '</span><span>+' + (extrasExtra * days) + ' AZN</span></div>'
          + '</div>';
      }
      let pickFee = 0, dropFee = 0;
      const pickSel = document.getElementById('f_pickup_loc');
      const dropSel = document.getElementById('f_dropoff_loc');
      if (pickSel) { const po = pickSel.selectedOptions[0]; if (po) pickFee = parseInt(po.dataset.fee || 0); }
      if (dropSel) { const dop = dropSel.selectedOptions[0]; if (dop) dropFee = parseInt(dop.dataset.fee || 0); }
      if (pickFee + dropFee > 0) {
        html += '<div class="bk-sp-section"><div class="bk-sp-lbl">' + t.deliveryLabel + '</div>'
          + '<div class="bk-sp-row"><span>' + t.deliveryReturn + '</span><span>+' + (pickFee + dropFee) + ' AZN</span></div>'
          + '</div>';
      }
      const total = (base + insExtra + extrasExtra) * days + pickFee + dropFee;
      const saving = (days >= 4 && car && car.tariff) ? (car.tariff[1] - base) * days : 0;
      html += '<div class="bk-sp-total"><span>' + t.totalLabel + '</span><span class="bk-sp-total-num">' + total + ' AZN</span></div>';
      if (saving > 0) html += '<div class="bk-sp-saving">🎉 ' + t.savingsLabel + ': ' + saving + ' AZN</div>';
    } else if (pickupVal) {
      html += '<div class="bk-sp-hint">' + t.stickySelectCar + '</div>';
    }
    content.innerHTML = html;
  }

  let phoneIti = null;
  let daysCount = 2;
  function calcDays() {
    const pd = document.getElementById('f_pickup_date');
    const rd = document.getElementById('f_return_date');
    const pt = document.getElementById('f_pickup_time');
    const rt = document.getElementById('f_return_time');
    const badge   = document.getElementById('days-badge');
    const nextBtn = document.querySelector('#bk-panel-1 .btn-p');
    if (!pd || !rd) return 2;
    if (!pd.value || !rd.value) {
      if (badge) badge.textContent = '';
      return 2;
    }
    const d1   = new Date(pd.value + 'T' + (pt && pt.value ? pt.value : '10:00'));
    const d2   = new Date(rd.value + 'T' + (rt && rt.value ? rt.value : '10:00'));
    const diff = (d2 - d1) / (1000 * 3600 * 24);
    if (diff <= 0) {
      if (badge) badge.innerHTML = '<span style="color:#e05c5c">⚠ ' + t.returnLaterMsg + '</span>';
      if (rd) rd.style.borderColor = '#e74c3c';
      if (nextBtn) nextBtn.disabled = true;
      return 2;
    }
    if (rd) rd.style.borderColor = '';
    if (nextBtn) nextBtn.disabled = false;
    daysCount = Math.ceil(diff);
    if (badge) {
      const dStr = daysStr(daysCount);
      if (selectedCar) {
        const car  = CARS.find(function (c) { return c.id === selectedCar.id; });
        const rate = car ? getEffectiveRate(car, daysCount) : 0;
        badge.textContent = dStr + (rate ? ' · ' + rate + ' ₼/' + t.dayWord : '');
      } else {
        badge.textContent = dStr;
      }
    }
    updateStep3Summary();
    updateWaQuickBtn();
    syncStickySummary();
    return daysCount;
  }

  function plural(n, forms) {
    let v = n % 100;
    if (v >= 11 && v <= 14) return forms[2];
    v = n % 10;
    if (v === 1) return forms[0];
    if (v >= 2 && v <= 4) return forms[1];
    return forms[2];
  }

  function daysStr(n) {
    if (lang === 'ru') return n + ' ' + plural(n, ['день', 'дня', 'дней']);
    if (lang === 'az') return n + ' gün';
    return n + ' day' + (n === 1 ? '' : 's');
  }

  function toggleCustomAddr(type) {
    const selId = type === 'pickup' ? 'f_pickup_loc' : 'f_dropoff_loc';
    const inpId = type === 'pickup' ? 'f_pickup_custom' : 'f_dropoff_custom';
    const sel = document.getElementById(selId);
    const inp = document.getElementById(inpId);
    if (!sel || !inp) return;
    inp.style.display = sel.value === 'custom' ? 'block' : 'none';
    if (sel.value === 'custom') inp.focus();
  }

  function enforcePickupMin() {
    const pd = document.getElementById('f_pickup_date');
    if (!pd) return;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const chosen = new Date(pd.value + 'T00:00:00');
    if (chosen < today) { pd.value = today.toISOString().split('T')[0]; }
    updateReturnMin();
  }

  function updateReturnMin() {
    const pd = document.getElementById('f_pickup_date');
    const rd = document.getElementById('f_return_date');
    if (!pd || !rd || !pd.value) return;
    const min = new Date(pd.value); min.setDate(min.getDate() + 2);
    rd.min = min.toISOString().split('T')[0];
    if (rd.value && rd.value < rd.min) { rd.value = rd.min; }
  }

  function bkNext(step) {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 4 && !validateStep4()) return;
    goToStep(step + 1);
    if (step === 4) buildSummary();
    syncStickySummary();
  }

  function bkBack(step) { goToStep(step - 1); }

  function updateCarSelectorPrices() {
    const days = daysCount || 2;
    document.querySelectorAll('.car-sel-card').forEach(function (card) {
      const car = CARS.find(function (c) { return c.id === card.dataset.id; });
      if (!car) return;
      const rate = getEffectiveRate(car, days);
      card.dataset.price = rate;
      const priceEl = card.querySelector('.car-sel-price');
      if (priceEl) priceEl.textContent = rate + ' AZN/' + t.dayWord;
    });
    if (selectedCar) {
      const car = CARS.find(function (c) { return c.id === selectedCar.id; });
      if (car) selectedCar.price = getEffectiveRate(car, daysCount || 1);
    }
  }

  function goToStep(n) {
    document.querySelectorAll('.bk-panel').forEach(function (p) { p.classList.remove('active'); });
    document.querySelectorAll('.bk-step').forEach(function (s, i) {
      s.classList.remove('active', 'done');
      s.setAttribute('aria-selected', i + 1 === n ? 'true' : 'false');
      if (i + 1 < n) s.classList.add('done');
      if (i + 1 === n) s.classList.add('active');
    });
    const panel = document.getElementById('bk-panel-' + n);
    if (panel) panel.classList.add('active');
    if (n === 2) { updateCarSelectorPrices(); }
    if (n === 3) { updateStep3Summary(); updateWaQuickBtn(); }
    syncStickySummary();
    setTimeout(function () {
      const bSteps = document.querySelector('.bk-steps');
      if (bSteps) { bSteps.scrollIntoView({behavior: 'smooth', block: 'start'}); }
      else { window.scrollTo({top: 0, behavior: 'smooth'}); }
    }, 50);
    if (typeof window.mcTrack === 'function') window.mcTrack('booking_step_viewed', {step: n});
  }

  function showErr(id, show) {
    const el = document.getElementById(id);
    if (el) el.style.display = show ? 'block' : 'none';
    const inp = document.getElementById(id.replace('err_', 'f_'));
    if (inp) {
      inp.style.borderColor = show ? '#e74c3c' : '';
      inp.setAttribute('aria-invalid', show ? 'true' : 'false');
    }
  }

  function validateStep1() {
    let ok = true;
    const pdEl = document.getElementById('f_pickup_date');
    const rdEl = document.getElementById('f_return_date');
    if (!pdEl || !pdEl.value) { showErr('err_pickup_date', true); ok = false; } else showErr('err_pickup_date', false);
    const pd = pdEl ? pdEl.value : '';
    const rd = rdEl ? rdEl.value : '';
    const pdPlusOne = pd ? (function(){ var d = new Date(pd + 'T00:00:00'); d.setDate(d.getDate() + 1); return d.toISOString().split('T')[0]; })() : '';
    if (!rd || rd <= pdPlusOne) { showErr('err_return_date', true); ok = false; } else showErr('err_return_date', false);
    const pickEl = document.getElementById('f_pickup_loc');
    if (!pickEl || !pickEl.value) { showErr('err_pickup_loc', true); ok = false; } else showErr('err_pickup_loc', false);
    const dropEl = document.getElementById('f_dropoff_loc');
    if (!dropEl || !dropEl.value) { showErr('err_dropoff_loc', true); ok = false; } else showErr('err_dropoff_loc', false);
    return ok;
  }

  function validateStep4() {
    let ok = true;
    const fnEl = document.getElementById('f_firstname');
    if (!fnEl || !fnEl.value.trim()) { showErr('err_firstname', true); ok = false; } else showErr('err_firstname', false);
    const phone = document.getElementById('f_phone_intl');
    const phoneValid = phone && phone.value.trim() && (phoneIti ? phoneIti.isValidNumber() : true);
    if (!phoneValid) { showErr('err_phone', true); ok = false; } else showErr('err_phone', false);
    const emailEl = document.getElementById('f_email');
    const email   = emailEl ? emailEl.value.trim() : '';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { showErr('err_email', true); ok = false; } else showErr('err_email', false);
    const licenseGrid = document.getElementById('license-grid');
    if (licenseGrid) {
      const licenseEl = document.querySelector('input[name="license_type"]:checked');
      if (!licenseEl) { showErr('err_license', true); ok = false; } else showErr('err_license', false);
    }
    const ageEl = document.getElementById('f_age_confirm');
    if (ageEl && !ageEl.checked) { showErr('err_age', true); ok = false; } else if (ageEl) showErr('err_age', false);
    return ok;
  }

  function validateStep2() {
    const err = document.getElementById('err_car');
    if (!selectedCar) {
      if (err) err.style.display = 'block';
      return false;
    }
    if (err) err.style.display = 'none';
    return true;
  }

  function buildSummary() {
    const b = document.getElementById('bk-summary-block');
    if (!b) return;
    const car     = selectedCar ? CARS.find(function (c) { return c.id === selectedCar.id; }) : null;
    const carName = car ? car.name : '—';
    const days    = daysCount || 1;
    const base    = car ? getEffectiveRate(car, days) : 0;

    const pickLocSel = document.getElementById('f_pickup_loc');
    const dropLocSel = document.getElementById('f_dropoff_loc');
    let pickLoc = pickLocSel ? (pickLocSel.value || '—') : '—';
    if (pickLoc === 'custom') {
      const pci = document.getElementById('f_pickup_custom');
      pickLoc = '📍 ' + (pci && pci.value ? pci.value : t.addrEmpty);
    }
    let dropLoc = dropLocSel ? (dropLocSel.value || '—') : '—';
    if (dropLoc === 'custom') {
      const dci = document.getElementById('f_dropoff_custom');
      dropLoc = '📍 ' + (dci && dci.value ? dci.value : t.addrEmpty);
    }
    const pickDate   = (document.getElementById('f_pickup_date') || {}).value || '—';
    const returnDate = (document.getElementById('f_return_date') || {}).value || '—';
    const pickTime   = (document.getElementById('f_pickup_time') || {}).value || '10:00';
    const returnTime = (document.getElementById('f_return_time') || {}).value || '10:00';

    let pickFee = 0, dropFee = 0;
    if (pickLocSel) { const po = pickLocSel.selectedOptions[0]; if (po) pickFee = parseInt(po.dataset.fee || 0); }
    if (dropLocSel) { const dop = dropLocSel.selectedOptions[0]; if (dop) dropFee = parseInt(dop.dataset.fee || 0); }

    const insCard   = document.querySelector('.ins-card.checked');
    const insName   = insCard ? insCard.querySelector('.ins-name').textContent : 'Basic';
    const rentalCost = base * days;
    const insCost    = insExtra * days;
    const extrasCost = extrasExtra * days;
    const total      = rentalCost + insCost + extrasCost + pickFee + dropFee;

    const depAmountEl = document.getElementById('dep-confirm-amount');
    if (depAmountEl && car) depAmountEl.textContent = car.deposit + ' AZN';

    b.innerHTML = '<div class="conf-section">'
      + '<div class="conf-sec-title">' + t.carLabel + '</div>'
      + '<div class="conf-row"><span>' + carName + '</span><span class="conf-tag">' + base + ' AZN/' + t.dayWord + '</span></div>'
      + '</div>'
      + '<div class="conf-section">'
      + '<div class="conf-sec-title">' + t.rentalLabel + '</div>'
      + '<div class="conf-row"><span style="color:var(--muted)">' + t.pickupLabel + '</span><span>' + pickDate + ' ' + pickTime + '</span></div>'
      + '<div class="conf-row"><span style="color:var(--muted)">' + t.returnLabel + '</span><span>' + returnDate + ' ' + returnTime + '</span></div>'
      + '<div class="conf-row"><span style="color:var(--muted)">' + t.daysLabel + '</span><span>' + daysStr(days) + '</span></div>'
      + '<div class="conf-row conf-muted"><span>' + pickLoc + '</span><span class="conf-arrow">→</span><span>' + dropLoc + '</span></div>'
      + '</div>'
      + '<div class="conf-section conf-costs">'
      + '<div class="conf-sec-title">' + t.costLabel + '</div>'
      + '<div class="conf-cost-row"><span>' + carName + ' × ' + days + ' ' + t.dayShort + '</span><span>' + rentalCost + ' AZN</span></div>'
      + (insCost ? '<div class="conf-cost-row"><span>' + t.insLabel + ' ' + insName + ' × ' + days + ' ' + t.dayShort + '</span><span>+' + insCost + ' AZN</span></div>' : '')
      + (extrasCost ? '<div class="conf-cost-row"><span>' + t.extrasLabel + ' × ' + days + ' ' + t.dayShort + '</span><span>+' + extrasCost + ' AZN</span></div>' : '')
      + (pickFee ? '<div class="conf-cost-row"><span>' + t.deliveryLabel + ' (' + t.pickupLabel.toLowerCase() + ')</span><span>+' + pickFee + ' AZN</span></div>' : '')
      + (dropFee ? '<div class="conf-cost-row"><span>' + t.deliveryLabel + ' (' + t.returnLabel.toLowerCase() + ')</span><span>+' + dropFee + ' AZN</span></div>' : '')
      + '<div class="conf-total-row"><span>' + t.totalLabel + '</span><span class="conf-total-amt">' + total + ' AZN</span></div>'
      + '</div>'
      + '<div class="conf-section">'
      + '<div class="conf-sec-title">' + t.depLabel + '</div>'
      + '<div class="conf-row"><span style="color:var(--muted)">' + (lang === 'en' ? 'Amount' : lang === 'az' ? 'Məbləğ' : 'Сумма') + '</span><span style="color:var(--accent);font-weight:500">' + (car ? car.deposit : 500) + ' AZN</span></div>'
      + '<div style="font-size:11px;color:var(--muted);margin-top:4px">' + t.depReturnNote + '</div>'
      + '</div>';
  }

  async function submitBooking() {
    const hp = document.getElementById('f_website');
    if (hp && hp.value) { showSuccess(0, 'MC-BOT'); return; }
    if (Date.now() - _formLoadTime < 3000) { showSuccess(0, 'MC-BOT'); return; }

    const depositAgreeEl = document.getElementById('f_deposit_agree');
    if (depositAgreeEl && !depositAgreeEl.checked) {
      showErr('err_deposit_agree', true);
      const depWrap = document.getElementById('dep-confirm-wrap');
      if (depWrap) depWrap.scrollIntoView({behavior: 'smooth', block: 'center'});
      return;
    }
    if (depositAgreeEl) showErr('err_deposit_agree', false);

    const btn = document.getElementById('btn-book');
    if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); btn.textContent = t.loadingBtn; }

    const car = selectedCar ? CARS.find(function (c) { return c.id === selectedCar.id; }) : null;
    const days = daysCount || 2;
    let pickFee = 0, dropFee = 0;
    const pickSel = document.getElementById('f_pickup_loc');
    const dropSel = document.getElementById('f_dropoff_loc');
    if (pickSel) { const po = pickSel.selectedOptions[0]; if (po) pickFee = parseInt(po.dataset.fee || 0); }
    if (dropSel) { const dop = dropSel.selectedOptions[0]; if (dop) dropFee = parseInt(dop.dataset.fee || 0); }
    const base  = car ? getEffectiveRate(car, days) : 0;
    const total = (base + insExtra + extrasExtra) * days + pickFee + dropFee;

    const insCard    = document.querySelector('.ins-card.checked');
    const insName    = insCard ? insCard.querySelector('.ins-name').textContent : 'Basic';
    const extrasList = Object.keys(extras).join(', ') || '—';

    const licenseEl   = document.querySelector('input[name="license_type"]:checked');
    const licenseTypeVal = licenseEl ? (licenseEl.value === 'az' ? t.licAz : t.licIntl) : '—';
    const depositAmount  = car ? car.deposit : 500;

    const bookingNum  = 'MC-' + Date.now().toString().slice(-6);
    const clientName  = (((document.getElementById('f_firstname') || {}).value || '') + ' ' + ((document.getElementById('f_lastname') || {}).value || '')).trim();
    const clientEmail = (document.getElementById('f_email') || {}).value || '';
    const _phoneRaw = (document.getElementById('f_phone_intl') || {}).value || '';
    let clientPhone;
    if (phoneIti) {
      const _itiNum = phoneIti.getNumber() || '';
      if (_itiNum.startsWith('+') && _itiNum.length > 4) {
        clientPhone = _itiNum;
      } else {
        const _cd = phoneIti.getSelectedCountryData();
        const _dialCode = (_cd && _cd.dialCode) ? '+' + _cd.dialCode : '';
        clientPhone = _dialCode + _phoneRaw.replace(/^0+/, '');
      }
    } else {
      clientPhone = _phoneRaw;
    }
    const pickupDate  = (document.getElementById('f_pickup_date') || {}).value || '';
    const returnDate  = (document.getElementById('f_return_date') || {}).value || '';
    const pickupTime  = (document.getElementById('f_pickup_time') || {}).value || '';
    const returnTime  = (document.getElementById('f_return_time') || {}).value || '';
    const insCost     = insExtra * days;

    let pickupLoc = pickSel ? pickSel.value : '';
    if (pickupLoc === 'custom') {
      const pc = document.getElementById('f_pickup_custom');
      pickupLoc = t.otherAddrLbl + ': ' + (pc ? pc.value : '—');
    }
    let dropoffLoc = dropSel ? dropSel.value : '';
    if (dropoffLoc === 'custom') {
      const dc = document.getElementById('f_dropoff_custom');
      dropoffLoc = t.otherAddrLbl + ': ' + (dc ? dc.value : '—');
    }
    const commentVal = (document.getElementById('f_comment') || {}).value || '';

    const rentalCost = base * days;

    const td1 = 'padding:10px 12px';
    const td2 = 'padding:10px 12px;color:#666;width:40%';

    function _fd(d, ti) {
      if (!d) return '—';
      var p = d.split('-');
      return (p.length === 3 ? p[2] + '.' + p[1] + '.' + p[0] : d) + (ti ? ' ' + ti : '');
    }

    var _extNm = {
      childseat: {ru: 'Детское кресло', en: 'Child seat', az: 'Uşaq oturacağı'},
      driver2:   {ru: 'Доп. водитель (1)', en: 'Extra driver (1)', az: 'Əlavə sürücü (1)'}
    };
    var _freeTxt = lang === 'en' ? 'Free' : lang === 'az' ? 'Pulsuz' : 'Бесплатно';
    var _carLbl  = lang === 'en' ? 'Car rental' : lang === 'az' ? 'Avtomobil icarəsi' : 'Аренда авто';
    var _depNote = lang === 'en' ? 'blocked at pickup, returned on clean return'
      : lang === 'az' ? 'götürmədə tutulur, qaytarmada geri verilir'
      : 'блокируется при получении, возвращается при сдаче';
    var _costHdr = lang === 'en' ? 'Cost breakdown' : lang === 'az' ? 'Xərc hesablaması' : 'Расчёт стоимости';

    var _extRows = '';
    Object.keys(extras).forEach(function (key) {
      var price = extras[key];
      var nm = _extNm[key];
      var dispName = nm ? (nm[lang] || nm.ru) : key;
      if (price > 0) {
        _extRows += '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + dispName + '</td>'
          + '<td style="' + td1 + '">+' + price + ' AZN × ' + days + ' ' + t.dayShort + ' = <strong>+' + (price * days) + ' AZN</strong></td></tr>';
      } else {
        _extRows += '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + dispName + '</td>'
          + '<td style="' + td1 + '">' + _freeTxt + '</td></tr>';
      }
    });

    var _dlvRows = '';
    if (pickFee) _dlvRows += '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + t.deliveryLabel + ' (' + t.pickupLabel + ')</td><td style="' + td1 + '"><strong>+' + pickFee + ' AZN</strong></td></tr>';
    if (dropFee) _dlvRows += '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + t.deliveryLabel + ' (' + t.returnLabel + ')</td><td style="' + td1 + '"><strong>+' + dropFee + ' AZN</strong></td></tr>';

    const htmlMessage = '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#222">'
      + '<h2 style="background:#0a2a1e;color:#fff;padding:16px 20px;margin:0;border-radius:6px 6px 0 0">' + t.waBookTitle + ' ' + bookingNum + '</h2>'
      + '<div style="border:1px solid #ddd;border-top:none;border-radius:0 0 6px 6px;padding:20px">'
      + '<table style="width:100%;border-collapse:collapse;font-size:14px">'
      + '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + t.waClientLbl + '</td><td style="' + td1 + '"><strong>' + clientName + '</strong></td></tr>'
      + '<tr><td style="' + td2 + '">' + t.waPhoneLbl + '</td><td style="' + td1 + '"><a href="tel:' + clientPhone + '" style="color:#0a2a1e;font-weight:bold">' + clientPhone + '</a> &nbsp;<a href="https://wa.me/' + clientPhone.replace(/\D/g,'') + '" style="color:#25D366;font-size:12px">WhatsApp →</a></td></tr>'
      + '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + t.waEmailLbl + '</td><td style="' + td1 + '">' + clientEmail + '</td></tr>'
      + '<tr><td style="' + td2 + '">' + t.carLabel + '</td><td style="' + td1 + '"><strong>' + (car ? car.name : '—') + '</strong> (' + (car ? carClass(car) : '—') + ')</td></tr>'
      + '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + t.pickupLabel + '</td><td style="' + td1 + '">' + _fd(pickupDate, pickupTime) + ' — ' + pickupLoc + '</td></tr>'
      + '<tr><td style="' + td2 + '">' + t.returnLabel + '</td><td style="' + td1 + '">' + _fd(returnDate, returnTime) + ' — ' + dropoffLoc + '</td></tr>'
      + '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + t.daysLabel + '</td><td style="' + td1 + '">' + daysStr(days) + '</td></tr>'
      + '<tr><td style="' + td2 + '">' + t.licTypeLabel + '</td><td style="' + td1 + '">' + licenseTypeVal + '</td></tr>'
      + (commentVal ? '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + t.emailCommentLbl + '</td><td style="' + td1 + '">' + commentVal + '</td></tr>' : '')
      + '<tr><td colspan="2" style="padding:10px 12px 4px;font-weight:600;color:#0a2a1e;font-size:12px;text-transform:uppercase;letter-spacing:.5px;border-top:2px solid #eee">' + _costHdr + '</td></tr>'
      + '<tr style="background:#f7f7f7"><td style="' + td2 + '">' + _carLbl + '</td><td style="' + td1 + '">' + base + ' AZN × ' + days + ' ' + t.dayShort + ' = <strong>' + rentalCost + ' AZN</strong></td></tr>'
      + '<tr><td style="' + td2 + '">' + t.insLabel + '</td><td style="' + td1 + '">' + insName + (insCost ? ': +' + insExtra + ' AZN × ' + days + ' ' + t.dayShort + ' = <strong>+' + insCost + ' AZN</strong>' : ' (<em>' + t.insIncludedLabel + '</em>)') + '</td></tr>'
      + _extRows
      + _dlvRows
      + '<tr style="background:#0a2a1e;color:#fff"><td style="' + td1 + ';font-weight:bold;font-size:16px">' + t.totalLabel.toUpperCase() + '</td><td style="' + td1 + ';font-weight:bold;font-size:16px">' + total + ' AZN</td></tr>'
      + '<tr style="background:rgba(46,204,113,.1)"><td style="' + td2 + ';color:#1a5c38">' + t.depLabel + '</td><td style="' + td1 + ';color:#1a5c38"><strong>' + depositAmount + ' AZN</strong> &nbsp;— <span style="font-weight:normal;font-size:12px;opacity:.85">' + _depNote + '</span></td></tr>'
      + '</table></div></div>';

    const params = {
      to_name: 'Millicars', to_email: 'reservation@millicars.az',
      client_email: clientEmail, client_name: clientName,
      booking_num: bookingNum, from_name: clientName,
      from_email: clientEmail, reply_to: clientEmail,
      phone: clientPhone, car: car ? car.name : '—',
      car_class: car ? carClass(car) : '—',
      pickup_date: pickupDate, pickup_time: pickupTime,
      return_date: returnDate, return_time: returnTime,
      pickup_loc: pickupLoc, dropoff_loc: dropoffLoc,
      days: days, insurance: insName, insurance_cost: insCost ? insCost + ' AZN' : t.insIncludedLabel,
      extras: extrasList, license_type: licenseTypeVal, deposit: depositAmount + ' AZN',
      total: total + ' AZN', comment: commentVal, lang: lang,
      html_message: htmlMessage
    };

    const bookingError = document.getElementById('booking-error');
    if (bookingError) bookingError.textContent = '';
    const pickupType = pickSel && pickSel.value === 'GYD Airport Baku'
      ? 'airport'
      : pickSel && (pickSel.value === 'Millicars Office' || pickSel.value === 'Офис Millicars' || pickSel.value === 'Millicars Ofisi')
        ? 'office'
        : 'other';
    const bookingRow = {
      customer_name: clientName,
      customer_phone: clientPhone,
      car_id: car && car.databaseId,
      date_from: pickupDate,
      date_to: returnDate,
      pickup_type: pickupType,
      total_price: total,
      notes: JSON.stringify({
        booking_ref: bookingNum,
        customer_email: clientEmail,
        pickup_time: pickupTime,
        return_time: returnTime,
        pickup_location: pickupLoc,
        return_location: dropoffLoc,
        insurance: insName,
        extras: extrasList,
        license_type: licenseTypeVal,
        comment: commentVal
      })
    };
    if (!window.mcSupabase || !bookingRow.car_id) {
      if (bookingError) bookingError.textContent = lang === 'en' ? 'We could not submit your request. Please try again or contact us on WhatsApp.' : lang === 'az' ? 'Müraciəti göndərmək mümkün olmadı. Yenidən cəhd edin və ya WhatsApp ilə əlaqə saxlayın.' : 'Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в WhatsApp.';
      if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); btn.textContent = lang === 'en' ? '✓ Book Now' : lang === 'az' ? '✓ Sifariş Et' : '✓ Забронировать'; }
      return;
    }
    let bookingResult;
    try {
      bookingResult = await window.mcSupabase.from('bookings').insert(bookingRow);
    } catch (error) {
      console.error('Supabase booking request failed:', error);
      bookingResult = {error: error};
    }
    if (bookingResult.error) {
      console.error('Supabase booking insert error:', bookingResult.error);
      if (bookingError) bookingError.textContent = lang === 'en' ? 'We could not submit your request. Please try again or contact us on WhatsApp.' : lang === 'az' ? 'Müraciəti göndərmək mümkün olmadı. Yenidən cəhd edin və ya WhatsApp ilə əlaqə saxlayın.' : 'Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в WhatsApp.';
      if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); btn.textContent = lang === 'en' ? '✓ Book Now' : lang === 'az' ? '✓ Sifariş Et' : '✓ Забронировать'; }
      return;
    }

    if (typeof window.mcTrack === 'function') {
      window.mcTrack('booking_submitted', {car_id: car ? car.id : '', car_name: params.car, car_class: car ? car.cat : '', days: days, insurance: insName, total_azn: total, booking_num: bookingNum, lang: lang});
    }

    function sendWhatsAppFallback() {
      if (typeof window.mcTrack === 'function') window.mcTrack('booking_whatsapp_fallback', {car: params.car, total_azn: total, booking_num: bookingNum});
      var lines = [
        t.waBookTitle + ' ' + bookingNum,
        t.waCarLbl + ': ' + params.car,
        t.waClientLbl + ': ' + clientName,
        t.waPhoneLbl + ': ' + clientPhone,
        t.waEmailLbl + ': ' + clientEmail,
        t.pickupLabel + ': ' + pickupDate + ' ' + pickupLoc,
        t.returnLabel + ': ' + returnDate + ' ' + dropoffLoc,
        t.daysLabel + ': ' + days,
        t.insLabel + ': ' + insName,
        t.totalLabel + ': ' + total + ' AZN'
      ];
      window.open('https://wa.me/994103115001?text=' + encodeURIComponent(lines.join('\n')), '_blank');
    }

    const SERVICE_ID      = 'service_pezhtb9';
    const TEMPLATE_OWNER  = 'template_k1amlvp';
    const TEMPLATE_CLIENT = 'template_7ndabyk';
    const PUBLIC_KEY      = 'BKgJHsncI3KYNK1jd';

    if (typeof emailjs !== 'undefined') {
      emailjs.init(PUBLIC_KEY);
      emailjs.send(SERVICE_ID, TEMPLATE_OWNER, params)
        .then(function (ownerResp) {
          console.log('EmailJS owner OK:', ownerResp);
          if (params.from_email) {
            var clientParams = Object.assign({}, params, { to_email: clientEmail, to_name: clientName, reply_to: 'reservation@millicars.az' });
            emailjs.send(SERVICE_ID, TEMPLATE_CLIENT, clientParams)
              .then(function (clientResp) { console.log('EmailJS client OK:', clientResp); })
              .catch(function (err) { console.error('EmailJS client error:', err); })
              .finally(function () { showSuccess(total, bookingNum); });
          } else {
            showSuccess(total, bookingNum);
          }
        })
        .catch(function (err) {
          console.error('EmailJS error:', err);
          sendWhatsAppFallback();
          showSuccess(total, bookingNum);
        });
    } else {
      sendWhatsAppFallback();
      showSuccess(total, bookingNum);
    }
  }

  function showSuccess(total, bookingNum) {
    window._mcFormCompleted = true;
    if (typeof window.mcTrack === 'function') window.mcTrack('booking_success', {booking_num: bookingNum, total_azn: total});
    if (typeof window.mcTrack === 'function') window.mcTrack('booking_completed', {booking_num: bookingNum, total_azn: total});
    const prefix = lang === 'en' ? '/en' : lang === 'az' ? '/az' : '/ru';
    window.location.href = prefix + '/thank-you.html?num=' + encodeURIComponent(bookingNum) + '&total=' + encodeURIComponent(total);
    const form = document.getElementById('bform');
    const succ = document.getElementById('fsucc');
    const num  = document.getElementById('succ_num');
    if (form) form.style.display = 'none';
    if (succ) succ.style.display = 'block';
    if (num)  num.textContent = '№ ' + bookingNum + ' · ' + t.totalLabel + ': ' + total + ' AZN';
    if (succ) setTimeout(function () { succ.scrollIntoView({behavior: 'smooth', block: 'center'}); }, 80);
  }

  function initPhone() {
    const phoneInput = document.getElementById('f_phone_intl');
    if (!phoneInput) return;
    if (typeof window.intlTelInput === 'undefined') {
      phoneInput.placeholder = '+994 50 123 45 67';
      return;
    }
    const iti = window.intlTelInput(phoneInput, {
      initialCountry: 'az',
      preferredCountries: ['az', 'ru', 'tr', 'gb', 'us'],
      separateDialCode: true,
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js'
    });
    phoneIti = iti;
    var phoneTouched = false;
    function updatePhoneState() {
      var valid = iti.isValidNumber();
      var empty = !phoneInput.value.trim();
      if (valid) {
        showErr('err_phone', false);
        phoneInput.style.borderColor = 'var(--accent)';
      } else if (phoneTouched && !empty) {
        showErr('err_phone', true);
        phoneInput.style.borderColor = '#e74c3c';
      } else {
        showErr('err_phone', false);
        phoneInput.style.borderColor = '';
      }
    }
    phoneInput.addEventListener('input', function () {
      var pos = this.selectionStart;
      var cleaned = this.value.replace(/\D/g, '');
      if (this.value !== cleaned) { this.value = cleaned; this.setSelectionRange(pos - 1, pos - 1); }
      if (this.value.length >= 4) updatePhoneState();
      else if (phoneTouched) { showErr('err_phone', false); this.style.borderColor = ''; }
    });
    phoneInput.addEventListener('keydown', function (e) {
      if (e.key.length === 1 && !/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault();
    });
    phoneInput.addEventListener('blur', function () {
      phoneTouched = true;
      updatePhoneState();
    });
    phoneInput.addEventListener('countrychange', function () {
      if (phoneTouched) updatePhoneState();
    });
  }

  function initNameFields() {
    ['f_firstname', 'f_lastname'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', function () {
        var pos = this.selectionStart;
        var cleaned = this.value.replace(/\d/g, '');
        if (this.value !== cleaned) { this.value = cleaned; this.setSelectionRange(pos - 1, pos - 1); }
      });
      el.addEventListener('keydown', function (e) {
        if (/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault();
      });
    });
  }

  document.addEventListener('click', function (e) {
    const bookBtn = e.target.closest('.cc-book');
    if (bookBtn) {
      const card = bookBtn.closest('[data-id]');
      if (card) scrollToBooking(card.dataset.id);
      return;
    }
    const carCard = e.target.closest('.car-sel-card');
    if (carCard) { selectCarCard(carCard); return; }
    const backBtn = e.target.closest('[data-bk-back]');
    if (backBtn) { bkBack(parseInt(backBtn.dataset.bkBack)); return; }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const carCard = e.target.closest('.car-sel-card');
      if (carCard) { selectCarCard(carCard); e.preventDefault(); }
    }
  });

function _mcInit() {
    const pd = document.getElementById('f_pickup_date');
    if (pd) pd.min = new Date().toISOString().split('T')[0];

    renderCars();
    loadBookingCars();
    initPhone();
    initNameFields();

    const waLbl = document.getElementById('bk-wa-lbl');
    if (waLbl) waLbl.textContent = t.waQuickBtn;
    const payLbl = document.getElementById('bk-pay-lbl');
    if (payLbl) payLbl.textContent = t.payAccept;

    const elMedPrice  = document.querySelector('#ins-full .ins-price');
    const elFullPrice = document.querySelector('#ins-zero .ins-price');
    if (elMedPrice)  elMedPrice.textContent  = '+' + window.MC_INS.medium + ' AZN/' + t.dayWord;
    if (elFullPrice) elFullPrice.textContent = '+' + window.MC_INS.full   + ' AZN/' + t.dayWord;

    const us = document.getElementById('urgency-strip');
    if (us) us.innerHTML = t.urgencyHtml.replace('{N}', CARS.length);

    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
      } else {
        const revealObs = new IntersectionObserver(function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
          });
        }, {threshold: 0.12, rootMargin: '0px 0px -40px 0px'});
        revealEls.forEach(function (el) { revealObs.observe(el); });
      }
    }

    const pickupDate = document.getElementById('f_pickup_date');
    const pickupTime = document.getElementById('f_pickup_time');
    const returnDate = document.getElementById('f_return_date');
    const returnTime = document.getElementById('f_return_time');
    if (pickupDate) pickupDate.addEventListener('change', function () { enforcePickupMin(); updateReturnMin(); calcDays(); });
    if (pickupTime) pickupTime.addEventListener('change', enforcePickupMin);
    if (returnDate) returnDate.addEventListener('change', calcDays);
    if (returnTime) returnTime.addEventListener('change', calcDays);

    const pickupLoc = document.getElementById('f_pickup_loc');
    const dropoffLoc = document.getElementById('f_dropoff_loc');
    if (pickupLoc)  pickupLoc.addEventListener('change',  function () { calcDays(); toggleCustomAddr('pickup'); });
    if (dropoffLoc) dropoffLoc.addEventListener('change', function () { calcDays(); toggleCustomAddr('dropoff'); });

    const gtabs = document.getElementById('gtabs');
    if (gtabs) gtabs.addEventListener('click', function (e) {
      const btn = e.target.closest('.gtab');
      if (btn) filterCars(btn.dataset.cat || 'all', btn);
    });

    const bkFilterTabs = document.getElementById('bk-filter-tabs');
    if (bkFilterTabs) bkFilterTabs.addEventListener('click', function (e) {
      const btn = e.target.closest('.gtab');
      if (btn) filterBookingCars(btn.dataset.cat || 'all', btn);
    });

    const insGrid = document.querySelector('.ins-grid');
    if (insGrid) {
      insGrid.addEventListener('change', function (e) {
        if (e.target.name === 'insurance') selectIns(e.target.value);
      });
      insGrid.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          const card = e.target.closest('.ins-card');
          if (card) {
            const radio = card.querySelector('input[type="radio"]');
            if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change', {bubbles: true})); }
            e.preventDefault();
          }
        }
      });
    }

    const extrasGrid = document.querySelector('.extras-grid');
    if (extrasGrid) {
      extrasGrid.addEventListener('change', function (e) {
        const inp = e.target;
        if (inp.type === 'checkbox' && inp.name === 'extra') {
          const card  = inp.closest('.extra-card');
          const price = parseInt((card && card.dataset.extraPrice) || 0);
          toggleExtra(inp.value, price, inp);
        }
      });
      extrasGrid.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          const card = e.target.closest('.extra-card');
          if (card) { card.querySelector('input').click(); e.preventDefault(); }
        }
      });
    }

    const licenseGrid = document.getElementById('license-grid');
    if (licenseGrid) {
      licenseGrid.addEventListener('change', function (e) {
        if (e.target.name === 'license_type') {
          document.querySelectorAll('#license-grid .ins-card').forEach(function (c) { c.classList.remove('checked'); });
          const card = e.target.closest('.ins-card');
          if (card) card.classList.add('checked');
        }
      });
      licenseGrid.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          const card = e.target.closest('.ins-card');
          if (card) {
            const radio = card.querySelector('input[type="radio"]');
            if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change', {bubbles: true})); }
            e.preventDefault();
          }
        }
      });
    }

    const ageCb = document.getElementById('f_age_confirm');
    if (ageCb) {
      ageCb.addEventListener('change', function () {
        const card = document.getElementById('age-confirm-card');
        if (card) card.classList.toggle('checked', this.checked);
      });
    }

    const pcFrom = document.getElementById('pc_from');
    const pcTo   = document.getElementById('pc_to');
    const pcCls  = document.getElementById('pc_cls');
    if (pcFrom) pcFrom.addEventListener('input', function () {
      if (typeof window.enforceCalcDates === 'function') window.enforceCalcDates();
      if (typeof window.calcPrice === 'function') window.calcPrice();
    });
    if (pcTo)  pcTo.addEventListener('input',   function () { if (typeof window.calcPrice === 'function') window.calcPrice(); });
    if (pcCls) pcCls.addEventListener('change', function () { if (typeof window.calcPrice === 'function') window.calcPrice(); });

    const sbBookBtn = document.getElementById('sb-book-btn');
    if (sbBookBtn) sbBookBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const booking = document.getElementById('booking');
      if (booking) booking.scrollIntoView({behavior: 'smooth'});
    });

    const bform = document.getElementById('bform');
    if (bform) {
      bform.addEventListener('submit', function (e) {
        e.preventDefault();
        const active = document.querySelector('.bk-panel.active');
        if (!active) return;
        if (active.id === 'bk-panel-1')      bkNext(1);
        else if (active.id === 'bk-panel-2') bkNext(2);
        else if (active.id === 'bk-panel-3') bkNext(3);
        else if (active.id === 'bk-panel-4') bkNext(4);
        else if (active.id === 'bk-panel-5') submitBooking();
      });

      let _formTouched = false;
      bform.addEventListener('input', function () { _formTouched = true; }, {once: true});
      window.addEventListener('pagehide', function () {
        if (_formTouched && !window._mcFormCompleted && typeof window.mcTrack === 'function') {
          window.mcTrack('booking_form_abandoned', {});
        }
      });
    }
}
document.addEventListener('DOMContentLoaded', _mcInit);
window.addEventListener('booking-form-loaded', _mcInit);

})();