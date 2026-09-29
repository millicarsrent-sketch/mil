insert into public.cars (brand_model, price_per_day, tariff, status, image_url)
select seed.brand_model, seed.price_per_day, seed.tariff, 'available',
       'https://millicars.az/img/cars/' || seed.image_file
from (values
  ('Chevrolet Spark', 25, array[90,45,40,35,30,25]::numeric[], 'chevrolet-spark.webp'),
  ('Suzuki Swift', 25, array[90,45,40,35,30,25]::numeric[], 'suzuki-swift.webp'),
  ('Chevrolet Cobalt', 30, array[100,50,45,40,35,30]::numeric[], 'chevrolet-cobalt.webp'),
  ('Chevrolet Aveo', 30, array[100,50,45,40,35,30]::numeric[], 'chevrolet-aveo.webp'),
  ('Kia Rio', 30, array[120,60,50,45,35,30]::numeric[], 'kia-rio.webp'),
  ('Hyundai Accent', 30, array[120,60,50,45,35,30]::numeric[], 'hyundai-accent.webp'),
  ('Skoda Rapid', 30, array[120,60,50,45,35,30]::numeric[], 'skoda-rapid.webp'),
  ('Toyota Corolla', 40, array[150,80,70,60,50,40]::numeric[], 'toyota-corolla.webp'),
  ('Hyundai Elantra', 40, array[150,80,70,60,50,40]::numeric[], 'hyundai-elantra.webp'),
  ('Kia Cerato', 40, array[150,80,70,60,50,40]::numeric[], 'kia-cerato.webp'),
  ('BYD Destroyer', 40, array[150,80,70,60,50,40]::numeric[], 'byd-destroyer.webp'),
  ('Toyota Camry', 80, array[210,120,110,100,90,80]::numeric[], 'toyota-camry.webp'),
  ('Hyundai Sonata', 80, array[210,120,110,100,90,80]::numeric[], 'hyundai-sonata.webp'),
  ('Hyundai Creta', 50, array[200,90,80,65,60,50]::numeric[], 'hyundai-creta.webp'),
  ('Hyundai Venue', 50, array[200,90,80,65,60,50]::numeric[], 'hyundai-venue.webp'),
  ('Kia Sportage', 90, array[260,130,120,110,100,90]::numeric[], 'kia-sportage.webp'),
  ('Hyundai Tucson', 90, array[260,130,120,110,100,90]::numeric[], 'hyundai-tucson.webp'),
  ('Toyota RAV4', 90, array[260,130,120,110,100,90]::numeric[], 'toyota-rav4.webp'),
  ('Mercedes E-Class', 95, array[250,150,130,120,110,95]::numeric[], 'mercedes-e-class.webp'),
  ('Mercedes-Benz Vito', 90, array[320,160,145,130,115,90]::numeric[], 'mercedes-vito.webp'),
  ('Hyundai Staria', 90, array[320,160,145,130,115,90]::numeric[], 'hyundai-staria.webp')
) as seed(brand_model, price_per_day, tariff, image_file)
where not exists (
  select 1 from public.cars as existing where existing.brand_model = seed.brand_model
);

update public.cars as car
set price_per_day = seed.price_per_day,
    tariff = seed.tariff,
    image_url = 'https://millicars.az/img/cars/' || seed.image_file
from (values
  ('Chevrolet Spark', 25, array[90,45,40,35,30,25]::numeric[], 'chevrolet-spark.webp'),
  ('Suzuki Swift', 25, array[90,45,40,35,30,25]::numeric[], 'suzuki-swift.webp'),
  ('Chevrolet Cobalt', 30, array[100,50,45,40,35,30]::numeric[], 'chevrolet-cobalt.webp'),
  ('Chevrolet Aveo', 30, array[100,50,45,40,35,30]::numeric[], 'chevrolet-aveo.webp'),
  ('Kia Rio', 30, array[120,60,50,45,35,30]::numeric[], 'kia-rio.webp'),
  ('Hyundai Accent', 30, array[120,60,50,45,35,30]::numeric[], 'hyundai-accent.webp'),
  ('Skoda Rapid', 30, array[120,60,50,45,35,30]::numeric[], 'skoda-rapid.webp'),
  ('Toyota Corolla', 40, array[150,80,70,60,50,40]::numeric[], 'toyota-corolla.webp'),
  ('Hyundai Elantra', 40, array[150,80,70,60,50,40]::numeric[], 'hyundai-elantra.webp'),
  ('Kia Cerato', 40, array[150,80,70,60,50,40]::numeric[], 'kia-cerato.webp'),
  ('BYD Destroyer', 40, array[150,80,70,60,50,40]::numeric[], 'byd-destroyer.webp'),
  ('Toyota Camry', 80, array[210,120,110,100,90,80]::numeric[], 'toyota-camry.webp'),
  ('Hyundai Sonata', 80, array[210,120,110,100,90,80]::numeric[], 'hyundai-sonata.webp'),
  ('Hyundai Creta', 50, array[200,90,80,65,60,50]::numeric[], 'hyundai-creta.webp'),
  ('Hyundai Venue', 50, array[200,90,80,65,60,50]::numeric[], 'hyundai-venue.webp'),
  ('Kia Sportage', 90, array[260,130,120,110,100,90]::numeric[], 'kia-sportage.webp'),
  ('Hyundai Tucson', 90, array[260,130,120,110,100,90]::numeric[], 'hyundai-tucson.webp'),
  ('Toyota RAV4', 90, array[260,130,120,110,100,90]::numeric[], 'toyota-rav4.webp'),
  ('Mercedes E-Class', 95, array[250,150,130,120,110,95]::numeric[], 'mercedes-e-class.webp'),
  ('Mercedes-Benz Vito', 90, array[320,160,145,130,115,90]::numeric[], 'mercedes-vito.webp'),
  ('Hyundai Staria', 90, array[320,160,145,130,115,90]::numeric[], 'hyundai-staria.webp')
) as seed(brand_model, price_per_day, tariff, image_file)
where car.brand_model = seed.brand_model;