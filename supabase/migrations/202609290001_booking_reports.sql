create extension if not exists pgcrypto;

create table if not exists public.cars (
  id uuid primary key default gen_random_uuid(),
  brand_model text not null,
  plate_number text,
  price_per_day numeric(10, 2) not null check (price_per_day >= 0),
  status text not null default 'available' check (status in ('available', 'rented', 'maintenance')),
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  customer_name text not null,
  customer_phone text not null,
  car_id uuid references public.cars(id) on delete set null,
  date_from date not null,
  date_to date not null,
  pickup_type text not null check (pickup_type in ('airport', 'office', 'other')),
  total_price numeric(10, 2) not null check (total_price >= 0),
  status text not null default 'new' check (status in ('new', 'confirmed', 'completed', 'cancelled')),
  notes text,
  constraint bookings_valid_dates check (date_to > date_from)
);

alter table public.cars enable row level security;
alter table public.bookings enable row level security;

drop policy if exists "Public can submit new bookings" on public.bookings;
create policy "Public can submit new bookings"
  on public.bookings for insert to anon, authenticated
  with check (status = 'new');

drop policy if exists "Owner can read bookings" on public.bookings;
create policy "Owner can read bookings"
  on public.bookings for select to authenticated
  using (lower(coalesce(auth.jwt() ->> 'email', '')) = 'millicarsrent@gmail.com');

drop policy if exists "Owner can update bookings" on public.bookings;
create policy "Owner can update bookings"
  on public.bookings for update to authenticated
  using (lower(coalesce(auth.jwt() ->> 'email', '')) = 'millicarsrent@gmail.com')
  with check (lower(coalesce(auth.jwt() ->> 'email', '')) = 'millicarsrent@gmail.com');

drop policy if exists "Owner can delete bookings" on public.bookings;
create policy "Owner can delete bookings"
  on public.bookings for delete to authenticated
  using (lower(coalesce(auth.jwt() ->> 'email', '')) = 'millicarsrent@gmail.com');

drop policy if exists "Owner can manage cars" on public.cars;
create policy "Owner can manage cars"
  on public.cars for all to authenticated
  using (lower(coalesce(auth.jwt() ->> 'email', '')) = 'millicarsrent@gmail.com')
  with check (lower(coalesce(auth.jwt() ->> 'email', '')) = 'millicarsrent@gmail.com');

create or replace function public.get_available_cars()
returns table (id uuid, brand_model text, price_per_day numeric, image_url text)
language sql
stable
security definer
set search_path = public
as $$
  select c.id, c.brand_model, c.price_per_day, c.image_url
  from public.cars as c
  where c.status = 'available'
  order by c.brand_model;
$$;

revoke all on function public.get_available_cars() from public;
grant execute on function public.get_available_cars() to anon, authenticated;

revoke all on public.cars from anon, authenticated;
revoke all on public.bookings from anon, authenticated;
grant insert on public.bookings to anon, authenticated;
grant select, update, delete on public.bookings to authenticated;
grant select, insert, update, delete on public.cars to authenticated;
