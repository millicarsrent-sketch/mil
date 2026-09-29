(function () {
  'use strict';

  const ownerEmail = 'millicarsrent@gmail.com';
  const client = window.mcSupabase;
  const bookingBody = document.getElementById('booking-rows');
  const carBody = document.getElementById('car-rows');
  const message = document.getElementById('report-message');
  let bookings = [];
  let cars = [];

  function showMessage(text, isError) {
    message.textContent = text || '';
    message.style.color = isError ? '#a4362b' : '#176b3c';
  }

  function redirectToLogin() {
    const next = encodeURIComponent('/admin/reports/');
    window.location.replace('/admin/login/?next=' + next);
  }

  function cell(text, className) {
    const element = document.createElement('td');
    element.textContent = text || '—';
    if (className) element.className = className;
    return element;
  }

  function formatDate(value, includeTime) {
    if (!value) return '—';
    const date = new Date(value);
    return new Intl.DateTimeFormat('ru-RU', includeTime
      ? {dateStyle: 'short', timeStyle: 'short'}
      : {dateStyle: 'short'}).format(date);
  }

  function filteredBookings() {
    const status = document.getElementById('status-filter').value;
    const from = document.getElementById('date-from-filter').value;
    const to = document.getElementById('date-to-filter').value;
    return bookings.filter(function (booking) {
      return (status === 'all' || booking.status === status)
        && (!from || booking.date_to >= from)
        && (!to || booking.date_from <= to);
    });
  }

  function renderBookings() {
    const rows = filteredBookings();
    document.getElementById('booking-count').textContent = rows.length + ' / ' + bookings.length;
    bookingBody.replaceChildren();
    if (!rows.length) {
      const emptyRow = document.createElement('tr');
      const emptyCell = cell('Заявок по выбранным фильтрам нет.');
      emptyCell.colSpan = 9;
      emptyRow.appendChild(emptyCell);
      bookingBody.appendChild(emptyRow);
      return;
    }

    rows.forEach(function (booking) {
      const row = document.createElement('tr');
      row.append(
        cell(formatDate(booking.created_at, true)),
        cell(booking.customer_name),
        cell(booking.customer_phone),
        cell(booking.car ? booking.car.brand_model : ''),
        cell(formatDate(booking.date_from, false) + ' – ' + formatDate(booking.date_to, false)),
        cell(booking.pickup_type),
        cell(Number(booking.total_price).toLocaleString('ru-RU') + ' AZN')
      );

      const statusCell = document.createElement('td');
      const statusSelect = document.createElement('select');
      [['new', 'Новая'], ['confirmed', 'Подтверждена'], ['completed', 'Завершена'], ['cancelled', 'Отменена']].forEach(function (optionData) {
        const option = document.createElement('option');
        option.value = optionData[0];
        option.textContent = optionData[1];
        statusSelect.appendChild(option);
      });
      statusSelect.value = booking.status;
      statusSelect.addEventListener('change', function () { updateBookingStatus(booking.id, statusSelect, booking.status); });
      statusCell.appendChild(statusSelect);
      row.appendChild(statusCell);

      let notes = booking.notes || '';
      try {
        const details = JSON.parse(notes);
        notes = [details.customer_email, details.pickup_time && 'Получение: ' + details.pickup_time,
          details.return_time && 'Возврат: ' + details.return_time,
          details.pickup_location, details.return_location, details.insurance,
          details.extras, details.license_type, details.comment].filter(Boolean).join(' · ');
      } catch (error) {}
      row.appendChild(cell(notes, 'admin-notes'));
      bookingBody.appendChild(row);
    });
  }

  async function updateBookingStatus(id, select, previousStatus) {
    select.disabled = true;
    const result = await client.from('bookings').update({status: select.value}).eq('id', id);
    select.disabled = false;
    if (result.error) {
      select.value = previousStatus;
      showMessage('Не удалось изменить статус заявки.', true);
      return;
    }
    const booking = bookings.find(function (item) { return item.id === id; });
    if (booking) booking.status = select.value;
    renderBookings();
    showMessage('Статус заявки обновлён.', false);
  }

  function renderCars() {
    document.getElementById('car-count').textContent = cars.length + ' авто';
    carBody.replaceChildren();
    cars.forEach(function (car) {
      const row = document.createElement('tr');
      row.append(cell(car.brand_model), cell(car.plate_number));
      row.appendChild(cell(Number(car.price_per_day).toLocaleString('ru-RU') + ' AZN'));
      const statusCell = document.createElement('td');
      const select = document.createElement('select');
      [['available', 'Доступен'], ['rented', 'Арендован'], ['maintenance', 'Обслуживание']].forEach(function (item) {
        const option = document.createElement('option');
        option.value = item[0];
        option.textContent = item[1];
        select.appendChild(option);
      });
      select.value = car.status;
      select.addEventListener('change', async function () {
        const previous = car.status;
        select.disabled = true;
        const result = await client.from('cars').update({status: select.value}).eq('id', car.id);
        select.disabled = false;
        if (result.error) {
          select.value = previous;
          showMessage('Не удалось изменить статус автомобиля.', true);
        } else {
          car.status = select.value;
          showMessage('Статус автомобиля обновлён.', false);
        }
      });
      statusCell.appendChild(select);
      row.appendChild(statusCell);
      carBody.appendChild(row);
    });
  }

  async function loadBookings() {
    bookings = [];
    const pageSize = 500;
    for (let offset = 0; ; offset += pageSize) {
      const result = await client.from('bookings')
        .select('id,created_at,customer_name,customer_phone,car_id,date_from,date_to,pickup_type,total_price,status,notes,car:cars(brand_model)')
        .order('created_at', {ascending: false})
        .range(offset, offset + pageSize - 1);
      if (result.error) throw result.error;
      bookings.push.apply(bookings, result.data || []);
      if (!result.data || result.data.length < pageSize) break;
    }
    renderBookings();
  }

  async function loadCars() {
    const result = await client.from('cars').select('id,brand_model,plate_number,price_per_day,status').order('brand_model');
    if (result.error) throw result.error;
    cars = result.data || [];
    renderCars();
  }

  function exportCsv() {
    const columns = ['created_at', 'customer_name', 'customer_phone', 'car', 'date_from', 'date_to', 'pickup_type', 'total_price', 'status', 'notes'];
    function csvValue(value) {
      let text = String(value == null ? '' : value);
      if (/^[\s\u0000-\u001f]*[=+@-]/.test(text)) text = "'" + text;
      return '"' + text.replace(/"/g, '""') + '"';
    }
    const lines = [columns].concat(filteredBookings().map(function (booking) {
      return [booking.created_at, booking.customer_name, booking.customer_phone,
        booking.car ? booking.car.brand_model : '', booking.date_from, booking.date_to,
        booking.pickup_type, booking.total_price, booking.status, booking.notes || ''];
    }));
    const csv = '\ufeff' + lines.map(function (line) {
      return line.map(csvValue).join(',');
    }).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], {type: 'text/csv;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'millicars-bookings-' + new Date().toISOString().slice(0, 10) + '.csv';
    link.click();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  async function initialize() {
    if (!client) {
      redirectToLogin();
      return;
    }
    const sessionResult = await client.auth.getSession();
    const session = sessionResult.data.session;
    if (!session || !session.user.email || session.user.email.toLowerCase() !== ownerEmail) {
      redirectToLogin();
      return;
    }
    document.getElementById('admin-email').textContent = session.user.email;
    try {
      await Promise.all([loadBookings(), loadCars()]);
    } catch (error) {
      console.error('Supabase reports error:', error);
      showMessage('Не удалось загрузить отчёты. Проверьте миграцию и доступ администратора.', true);
    }
  }

  document.getElementById('status-filter').addEventListener('change', renderBookings);
  document.getElementById('date-from-filter').addEventListener('change', renderBookings);
  document.getElementById('date-to-filter').addEventListener('change', renderBookings);
  document.getElementById('clear-filters').addEventListener('click', function () {
    document.getElementById('status-filter').value = 'all';
    document.getElementById('date-from-filter').value = '';
    document.getElementById('date-to-filter').value = '';
    renderBookings();
  });
  document.getElementById('export-button').addEventListener('click', exportCsv);
  document.getElementById('signout-button').addEventListener('click', async function () {
    await client.auth.signOut();
    window.location.replace('/admin/login/');
  });
  document.getElementById('password-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const password = document.getElementById('new-password').value;
    const output = document.getElementById('password-message');
    const result = await client.auth.updateUser({password: password});
    output.textContent = result.error ? 'Не удалось изменить пароль.' : 'Пароль изменён.';
    output.style.color = result.error ? '#a4362b' : '#176b3c';
    if (!result.error) event.target.reset();
  });

  initialize();
})();