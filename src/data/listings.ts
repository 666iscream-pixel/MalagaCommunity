import type { Lang } from '../i18n/ui';

export type ListingType = 'apartment' | 'house' | 'office';

export interface Listing {
  city: 'Málaga' | 'Madrid';
  area: string;
  price: number; // €/мес
  m2: number;
  beds?: number;
  desc: Record<Lang, string>;
  photos?: string[]; // до 10 фото; если нет — берётся общая галерея типа
}

// Примеры для макета. Цены и описания условные — заменить реальными объектами (до 10 фото в каждом).
export const gallery: Record<ListingType, string[]> = {
  apartment: ['/img/apartment.jpg', '/img/hero.jpg', '/img/house.jpg'],
  house: ['/img/house.jpg', '/img/hero.jpg', '/img/apartment.jpg'],
  office: ['/img/office.jpg', '/img/apartment.jpg', '/img/hero.jpg'],
};

export const listings: Record<ListingType, Listing[]> = {
  apartment: [
    {
      city: 'Málaga', area: 'Centro Histórico', price: 1400, m2: 75, beds: 2,
      desc: {
        ru: 'Светлая квартира после ремонта в пяти минутах от порта.',
        es: 'Piso luminoso reformado a cinco minutos del puerto.',
        uk: 'Світла квартира після ремонту за п’ять хвилин від порту.',
        en: 'Bright renovated flat five minutes from the port.',
      },
    },
    {
      city: 'Málaga', area: 'La Malagueta', price: 1300, m2: 55, beds: 1,
      desc: {
        ru: 'Студия с террасой, до пляжа пешком две минуты.',
        es: 'Estudio con terraza a dos minutos a pie de la playa.',
        uk: 'Студія з терасою, до пляжу дві хвилини пішки.',
        en: 'Studio with a terrace, two minutes’ walk to the beach.',
      },
    },
    {
      city: 'Málaga', area: 'Teatinos', price: 1500, m2: 95, beds: 3,
      desc: {
        ru: 'Семейная квартира с паркингом и бассейном в комплексе.',
        es: 'Piso familiar con garaje y piscina en la urbanización.',
        uk: 'Сімейна квартира з паркінгом і басейном у комплексі.',
        en: 'Family flat with parking and a pool in the complex.',
      },
    },
    {
      city: 'Madrid', area: 'Chamberí', price: 2100, m2: 80, beds: 2,
      desc: {
        ru: 'Квартира в классическом доме с высокими потолками.',
        es: 'Piso en finca clásica con techos altos.',
        uk: 'Квартира в класичному будинку з високими стелями.',
        en: 'Flat in a classic building with high ceilings.',
      },
    },
    {
      city: 'Madrid', area: 'Salamanca', price: 3400, m2: 120, beds: 3,
      desc: {
        ru: 'Просторная квартира с консьержем в престижном районе.',
        es: 'Piso amplio con conserje en una zona exclusiva.',
        uk: 'Простора квартира з консьєржем у престижному районі.',
        en: 'Spacious flat with a concierge in a prime district.',
      },
    },
    {
      city: 'Málaga', area: 'Soho', price: 1250, m2: 60, beds: 1,
      desc: {
        ru: 'Квартира в арт-квартале рядом с центром и вокзалом.',
        es: 'Piso en el barrio de arte, junto al centro y la estación.',
        uk: 'Квартира в арт-кварталі поруч із центром і вокзалом.',
        en: 'Flat in the arts district, close to the centre and the station.',
      },
    },
    {
      city: 'Madrid', area: 'Retiro', price: 2300, m2: 85, beds: 2,
      desc: {
        ru: 'Квартира с балконом в пяти минутах от парка Ретиро.',
        es: 'Piso con balcón a cinco minutos del parque del Retiro.',
        uk: 'Квартира з балконом за п’ять хвилин від парку Ретіро.',
        en: 'Flat with a balcony five minutes from Retiro Park.',
      },
    },
    {
      city: 'Madrid', area: 'Lavapiés', price: 1500, m2: 50, beds: 1,
      desc: {
        ru: 'Уютная квартира в живом районе рядом с метро.',
        es: 'Piso acogedor en un barrio con vida, junto al metro.',
        uk: 'Затишна квартира в жвавому районі поруч із метро.',
        en: 'Cosy flat in a lively area next to the metro.',
      },
    },
  ],
  house: [
    {
      city: 'Málaga', area: 'El Limonar', price: 3800, m2: 220, beds: 4,
      desc: {
        ru: 'Дом с садом и бассейном в тихом зелёном районе.',
        es: 'Casa con jardín y piscina en una zona tranquila y verde.',
        uk: 'Будинок із садом і басейном у тихому зеленому районі.',
        en: 'House with a garden and pool in a quiet green area.',
      },
    },
    {
      city: 'Málaga', area: 'Pedregalejo', price: 2900, m2: 150, beds: 3,
      desc: {
        ru: 'Таунхаус у моря с террасой на крыше.',
        es: 'Adosado junto al mar con azotea.',
        uk: 'Таунхаус біля моря з терасою на даху.',
        en: 'Townhouse by the sea with a roof terrace.',
      },
    },
    {
      city: 'Málaga', area: 'Cerrado de Calderón', price: 4500, m2: 260, beds: 4,
      desc: {
        ru: 'Вилла с панорамным видом на залив и гаражом на две машины.',
        es: 'Villa con vistas panorámicas a la bahía y garaje para dos coches.',
        uk: 'Вілла з панорамним видом на затоку і гаражем на дві машини.',
        en: 'Villa with panoramic bay views and a two-car garage.',
      },
    },
    {
      city: 'Madrid', area: 'Pozuelo de Alarcón', price: 4800, m2: 280, beds: 4,
      desc: {
        ru: 'Дом в закрытом посёлке рядом с международными школами.',
        es: 'Casa en urbanización cerrada cerca de colegios internacionales.',
        uk: 'Будинок у закритому містечку поруч із міжнародними школами.',
        en: 'House in a gated community near international schools.',
      },
    },
    {
      city: 'Madrid', area: 'La Moraleja', price: 7500, m2: 400, beds: 5,
      desc: {
        ru: 'Резиденция с большим участком, бассейном и охраной.',
        es: 'Residencia con amplia parcela, piscina y seguridad.',
        uk: 'Резиденція з великою ділянкою, басейном та охороною.',
        en: 'Residence with a large plot, pool and security.',
      },
    },
    {
      city: 'Málaga', area: 'Churriana', price: 2600, m2: 140, beds: 3,
      desc: {
        ru: 'Дом с патио и барбекю в спокойном районе у аэропорта.',
        es: 'Casa con patio y barbacoa en una zona tranquila cerca del aeropuerto.',
        uk: 'Будинок із патіо та барбекю в спокійному районі біля аеропорту.',
        en: 'House with a patio and barbecue in a quiet area near the airport.',
      },
    },
    {
      city: 'Madrid', area: 'Las Rozas', price: 4200, m2: 240, beds: 4,
      desc: {
        ru: 'Семейный дом с садом в пригороде, рядом школы и торговые центры.',
        es: 'Casa familiar con jardín en las afueras, cerca de colegios y centros comerciales.',
        uk: 'Сімейний будинок із садом у передмісті, поруч школи й торгові центри.',
        en: 'Family house with a garden in the suburbs, near schools and shopping centres.',
      },
    },
  ],
  office: [
    {
      city: 'Málaga', area: 'Centro', price: 900, m2: 60,
      desc: {
        ru: 'Офис на четыре рабочих места с переговорной.',
        es: 'Oficina para cuatro puestos con sala de reuniones.',
        uk: 'Офіс на чотири робочі місця з переговорною.',
        en: 'Office for four desks with a meeting room.',
      },
    },
    {
      city: 'Málaga', area: 'Soho', price: 1600, m2: 110,
      desc: {
        ru: 'Открытое пространство в лофт-стиле рядом с вокзалом.',
        es: 'Espacio diáfano tipo loft cerca de la estación.',
        uk: 'Відкритий простір у лофт-стилі поруч із вокзалом.',
        en: 'Open-plan loft-style space near the station.',
      },
    },
    {
      city: 'Málaga', area: 'Teatinos', price: 2300, m2: 180,
      desc: {
        ru: 'Офис в бизнес-центре с парковкой для сотрудников.',
        es: 'Oficina en centro de negocios con aparcamiento para empleados.',
        uk: 'Офіс у бізнес-центрі з паркінгом для співробітників.',
        en: 'Office in a business centre with staff parking.',
      },
    },
    {
      city: 'Madrid', area: 'Chamartín', price: 3200, m2: 150,
      desc: {
        ru: 'Представительский офис рядом с деловым кварталом.',
        es: 'Oficina representativa junto al distrito financiero.',
        uk: 'Представницький офіс поруч із діловим кварталом.',
        en: 'Executive office next to the business district.',
      },
    },
    {
      city: 'Madrid', area: 'Salamanca', price: 2600, m2: 90,
      desc: {
        ru: 'Кабинетный офис в историческом здании.',
        es: 'Oficina con despachos en un edificio histórico.',
        uk: 'Кабінетний офіс в історичній будівлі.',
        en: 'Cellular office in a historic building.',
      },
    },
  ],
};
