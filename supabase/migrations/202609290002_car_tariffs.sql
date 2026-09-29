alter table public.cars
  add column if not exists tariff numeric(10, 2)[];

alter table public.cars
  drop constraint if exists cars_tariff_cardinality;

alter table public.cars
  add constraint cars_tariff_cardinality
  check (tariff is null or cardinality(tariff) = 6);

drop function if exists public.get_available_cars();

create function public.get_available_cars()
returns table (id uuid, brand_model text, price_per_day numeric, tariff numeric[], image_url text)
language sql
stable
security definer
set search_path = public
as $$
  select c.id, c.brand_model, c.price_per_day, c.tariff, c.image_url
  from public.cars as c
  where c.status = 'available'
  order by c.brand_model;
$$;

revoke all on function public.get_available_cars() from public;
grant execute on function public.get_available_cars() to anon, authenticated;