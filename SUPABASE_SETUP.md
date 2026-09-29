# Supabase и отчёты Millicars

## Первоначальная настройка

1. Создайте Supabase project.
2. В **SQL Editor** выполните миграции `supabase/migrations/202609290001_booking_reports.sql` и `supabase/migrations/202609290002_car_tariffs.sql`, затем `supabase/seed.sql`. Начальный каталог содержит 21 автомобиль со статусом `available`; проверьте наличие и цены перед публикацией. Госномера намеренно не заполнены.
3. В **Authentication → Users** проверьте наличие `millicarsrent@gmail.com` (сейчас пользователь уже создан). Если для него ещё не задан пароль, отправьте password reset или задайте пароль через Supabase Auth. В **Authentication → Providers → Email** отключите публичную регистрацию пользователей. RLS дополнительно разрешает чтение и изменение таблиц только этому email.
4. В **Project Settings → API** возьмите Project URL и anon/publishable key. Не используйте `service_role` key.
5. В GitHub repository откройте **Settings → Secrets and variables → Actions** и добавьте repository secrets `MC_SUPABASE_URL` и `MC_SUPABASE_ANON_KEY`.
6. В **Settings → Pages** выберите публикацию через **GitHub Actions**. Workflow публикует ветки `main` и `master`; если проект использует другую default branch, добавьте её в `.github/workflows/pages.yml`.
7. В **Supabase → Authentication → URL Configuration** укажите адрес сайта как Site URL и добавьте `https://millicars.az/**` в Redirect URLs. Если используется другой домен, добавьте его вместо этого адреса.
8. Запустите workflow **Deploy Millicars to GitHub Pages** через вкладку **Actions** после добавления secrets.

Anon key будет виден в опубликованном клиентском JavaScript: это ожидаемо для статического сайта. Безопасность обеспечивается RLS. Никогда не публикуйте `service_role` key.

## Вход и управление

- Отчёты: `https://millicars.az/admin/reports/`. Без сессии откроется форма входа `/admin/login/`.
- Новую машину добавляйте в **Supabase → Table Editor → cars → Insert row**. Заполните `brand_model`, `price_per_day`, `status` и при необходимости `plate_number`, `image_url`. Для показа в форме бронирования статус должен быть `available`.
- Статус существующей машины можно менять и на странице отчётов.
- Чтобы изменить пароль, войдите в отчёты, откройте **Изменить пароль** внизу страницы и задайте новый пароль (не менее 8 символов). Для восстановления доступа используйте приглашение/сброс пользователя в Supabase Auth.

Таблица `cars` не читается публично. Публичная форма получает только id, модель, цену, ступенчатый тариф и изображение доступных машин через `get_available_cars()`; заявка вставляется с ролью anon, но анонимное чтение заявок запрещено.