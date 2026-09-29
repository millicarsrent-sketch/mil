(function () {
  'use strict';

  const form = document.getElementById('login-form');
  const message = document.getElementById('login-message');
  const ownerEmail = 'millicarsrent@gmail.com';
  const params = new URLSearchParams(window.location.search);
  const nextPath = params.get('next') === '/admin/reports/' ? '/admin/reports/' : '/admin/reports/';

  if (!window.mcSupabase) {
    message.textContent = 'Supabase не настроен. Проверьте секреты GitHub Actions.';
    form.querySelector('button').disabled = true;
    return;
  }

  window.mcSupabase.auth.getSession().then(function (result) {
    const session = result.data.session;
    if (session && session.user.email.toLowerCase() === ownerEmail) window.location.replace(nextPath);
    else if (session) window.mcSupabase.auth.signOut();
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    message.textContent = '';
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const result = await window.mcSupabase.auth.signInWithPassword({email: email, password: password});
    if (result.error || !result.data.user || result.data.user.email.toLowerCase() !== ownerEmail) {
      if (!result.error) await window.mcSupabase.auth.signOut();
      message.textContent = 'Не удалось войти. Проверьте email и пароль администратора.';
      return;
    }
    window.location.replace(nextPath);
  });
})();