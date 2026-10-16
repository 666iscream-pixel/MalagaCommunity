import type { Lang } from '../i18n/ui';

export type ListingType = 'apartment' | 'house' | 'office';

export interface Listing {
  city: 'Málaga' | 'Madrid';
  area: string;
  price: number; // €/мес
  m2: number;
  beds?: number;
  desc: Record<Lang, string>;
}

// Примеры для макета. Цены и описания условные — заменить реальными объектами.
export const photos: Record<ListingType, string> = {
  apartment: '/img/apartment.jpg',
  house: '/img/house.jpg',
  office: '/img/office.jpg',
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
