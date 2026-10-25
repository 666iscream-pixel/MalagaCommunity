import type { Lang } from '../i18n/ui';

export interface Review {
  author: Record<Lang, string>;
  avatar?: string;
  // id сторис в хайлайте «Отзывы» — ссылка ведёт прямо на неё
  story: string;
  quote: Record<Lang, string>;
}

// Настоящие отзывы клиентов из хайлайта «Отзывы» в Instagram; аватары вырезаны из этих же сторис.
// Оригиналы на русском, остальные языки — перевод.
export const reviews: Review[] = [
  {
    author: { ru: 'Дмитрий и Полина', es: 'Dmitri y Polina', uk: 'Дмитро і Поліна', en: 'Dmitry and Polina' },
    story: '3854784239657319873',
    avatar: '/img/review-1-avatar.jpg',
    quote: {
      ru: 'Выражаем с мужем огромную благодарность компании Malaga Community! Несмотря на то, что мы проживали в другом городе, нам смогли быстро подобрать подходящие варианты и организовать просмотры. Весь процесс от и до занял 2–3 недели. Мы ни о чём не переживали: люди в компании очень ответственны, доброжелательны и готовы поддержать на каждом этапе.',
      es: 'Mi marido y yo queremos dar las gracias de corazón a Malaga Community. Aunque vivíamos en otra ciudad, nos encontraron opciones adecuadas muy rápido y organizaron las visitas. Todo el proceso duró entre 2 y 3 semanas. No tuvimos que preocuparnos por nada: el equipo es muy responsable, amable y dispuesto a ayudar en cada etapa.',
      uk: 'Висловлюємо з чоловіком величезну подяку компанії Malaga Community! Попри те, що ми жили в іншому місті, нам швидко підібрали відповідні варіанти й організували перегляди. Увесь процес від початку до кінця зайняв 2–3 тижні. Ми ні про що не хвилювалися: люди в компанії дуже відповідальні, доброзичливі й готові підтримати на кожному етапі.',
      en: 'My husband and I are hugely grateful to Malaga Community. Even though we were living in another city, they quickly found suitable options and arranged the viewings. The whole process took 2–3 weeks from start to finish. We had nothing to worry about: the team is responsible, friendly and ready to help at every step.',
    },
  },
  {
    author: { ru: 'Ольга', es: 'Olga', uk: 'Ольга', en: 'Olga' },
    avatar: '/img/review-olga.png',
    story: '3352193441317669300',
    quote: {
      ru: 'Ребята, кому нужна помощь в поиске жилья, можете смело обращаться к Александру. Подскажет, покажет, поможет с поиском, всё подробно объяснит. Нам квартиру нашёл за неделю, мы квартирой довольны. На каждую квартиру Александр ездил с нами и не пытался приукрасить тот или иной вариант. Оценивал как для себя. От нас большое спасибо за помощь!',
      es: 'Si alguien necesita ayuda para encontrar vivienda, puede acudir a Alexander con total confianza. Orienta, enseña, ayuda con la búsqueda y lo explica todo con detalle. A nosotros nos encontró piso en una semana y estamos contentos con él. Alexander nos acompañó a cada visita y no intentó adornar ninguna opción. Valoraba cada piso como si fuera para él. ¡Muchas gracias por la ayuda!',
      uk: 'Друзі, кому потрібна допомога в пошуку житла, можете сміливо звертатися до Олександра. Підкаже, покаже, допоможе з пошуком, усе детально пояснить. Нам квартиру знайшов за тиждень, ми квартирою задоволені. На кожну квартиру Олександр їздив із нами і не намагався прикрасити той чи інший варіант. Оцінював як для себе. Від нас велике спасибі за допомогу!',
      en: 'If anyone needs help finding a place to live, you can turn to Alexander with confidence. He advises, shows you around, helps with the search and explains everything in detail. He found us a flat in a week and we are happy with it. Alexander came with us to every viewing and never tried to oversell an option. He judged each one as if it were for himself. A big thank you from us!',
    },
  },
  {
    author: { ru: 'Марина и Павел', es: 'Marina y Pável', uk: 'Марина і Павло', en: 'Marina and Pavel' },
    avatar: '/img/review-marina-pavel.png',
    story: '3835892850416694480',
    quote: {
      ru: 'Хочу выразить огромную благодарность ребятам из Malaga Community за профессиональную помощь в аренде жилья и поддержку 24/7 — даже по вопросам, которые вас в принципе не касались, но вы всё равно помогали. Большое человеческое спасибо! Квартира, которую вы нашли, просто огонь, и район тоже супер — я очень довольна.',
      es: 'Quiero dar las gracias de corazón al equipo de Malaga Community por su ayuda profesional con el alquiler y su apoyo 24/7, incluso en temas que en principio no les correspondían, y aun así nos ayudaron. ¡Un enorme gracias de verdad! El piso que nos encontraron es una maravilla y el barrio también es genial: estoy encantada.',
      uk: 'Хочу висловити величезну подяку команді Malaga Community за професійну допомогу з орендою житла й підтримку 24/7 — навіть у питаннях, які вас загалом не стосувалися, але ви все одно допомагали. Щире людське спасибі! Квартира, яку ви знайшли, просто вогонь, і район теж чудовий — я дуже задоволена.',
      en: 'A huge thank you to the Malaga Community team for their professional help with renting and their 24/7 support, even with things that were not really their job, yet they still helped. A big, heartfelt thank you! The flat you found us is amazing and the neighbourhood is great too. I am really happy.',
    },
  },
  {
    author: { ru: 'Татьяна', es: 'Tatiana', uk: 'Тетяна', en: 'Tatiana' },
    avatar: '/img/review-tatiana.png',
    story: '3239752104996473109',
    quote: {
      ru: 'Хочу выразить огромную благодарность Александру и его команде за помощь в поиске квартиры в Малаге. Всё было очень быстро и профессионально: идеальную квартиру нашли за две недели, помогли с подготовкой документов и оформлением договора. Отдельная благодарность за помощь с переездом из временной квартиры.',
      es: 'Quiero dar las gracias de corazón a Alexander y a su equipo por ayudarnos a buscar piso en Málaga. Todo fue muy rápido y profesional: encontraron el piso ideal en dos semanas y nos ayudaron a preparar la documentación y a formalizar el contrato. Un agradecimiento aparte por la ayuda con la mudanza desde el piso temporal.',
      uk: 'Хочу висловити величезну подяку Олександру та його команді за допомогу в пошуку квартири в Малазі. Усе було дуже швидко і професійно: ідеальну квартиру знайшли за два тижні, допомогли з підготовкою документів та оформленням договору. Окрема подяка за допомогу з переїздом із тимчасової квартири.',
      en: 'A huge thank you to Alexander and his team for helping us find a flat in Málaga. Everything was very quick and professional: they found the ideal flat in two weeks and helped prepare the documents and finalise the contract. Special thanks for helping with the move from our temporary flat.',
    },
  },
  {
    author: { ru: 'Ирина', es: 'Iryna', uk: 'Ірина', en: 'Iryna' },
    avatar: '/img/review-iryna.png',
    story: '3352196849625800082',
    quote: {
      ru: 'Очень благодарна Александру за помощь в поиске аренды квартиры. За неделю был найден отличный вариант, подходящий по цене и месту расположения. Помощь с переводом и общением с владельцами квартир бесценна. Все договорённости выполнены. Рекомендую!',
      es: 'Estoy muy agradecida a Alexander por su ayuda en la búsqueda de un piso de alquiler. En una semana encontró una opción excelente, adecuada por precio y ubicación. La ayuda con la traducción y la comunicación con los propietarios no tiene precio. Se cumplió todo lo acordado. ¡Lo recomiendo!',
      uk: 'Дуже вдячна Олександру за допомогу в пошуку оренди квартири. За тиждень було знайдено чудовий варіант, який підходить за ціною та розташуванням. Допомога з перекладом і спілкуванням із власниками квартир безцінна. Усі домовленості виконано. Рекомендую!',
      en: 'I am very grateful to Alexander for his help in finding a flat to rent. Within a week he found an excellent option that suited us on price and location. The help with translation and with talking to the owners was priceless. Everything we agreed was delivered. I recommend him!',
    },
  },
  {
    author: { ru: 'Иван', es: 'Ivan', uk: 'Іван', en: 'Ivan' },
    avatar: '/img/review-ivan.png',
    story: '3352196937186194751',
    quote: {
      ru: 'Благодарю за колоссальную помощь в поиске жилья! Всё было очень быстро, профессионально и надёжно. Особенно вдохновляет отзывчивость на любой, даже пустяковый вопрос. Очень ценно, что ты переживаешь за наше жильё как за своё. Плюс отдельная благодарность за позитивные эмоции в этом непростом деле.',
      es: '¡Gracias por la enorme ayuda en la búsqueda de vivienda! Todo fue muy rápido, profesional y fiable. Me anima especialmente la disposición a responder cualquier pregunta, por pequeña que sea. Valoro mucho que te preocupes por nuestra vivienda como si fuera la tuya. Y gracias aparte por las emociones positivas en un asunto nada fácil.',
      uk: 'Дякую за колосальну допомогу в пошуку житла! Усе було дуже швидко, професійно і надійно. Особливо надихає чуйність до будь-якого, навіть дрібного питання. Дуже цінно, що ти переживаєш за наше житло як за своє. Плюс окрема подяка за позитивні емоції в цій непростій справі.',
      en: 'Thank you for the tremendous help in finding a home! Everything was very quick, professional and reliable. What I appreciate most is the readiness to answer any question, however small. It means a lot that you care about our home as if it were your own. And a separate thank you for the positive mood in what is not an easy process.',
    },
  },
  {
    author: { ru: 'Ольга и Евгений', es: 'Olga y Yevgueni', uk: 'Ольга і Євген', en: 'Olga and Evgeniy' },
    avatar: '/img/review-olga-evgeniy.png',
    story: '3930808128325318052',
    quote: {
      ru: 'Хотим выразить огромную благодарность Александру и его команде за профессионализм, внимательное отношение и отличную работу! Благодаря им мы нашли именно ту квартиру в Малаге, о которой мечтали. На каждом этапе они были на связи, оперативно отвечали на все вопросы, помогали разобраться во всех нюансах и сопровождали нас до самого заселения. С уверенностью рекомендуем всем, кто ищет надёжного и ответственного риелтора.',
      es: 'Queremos dar las gracias de corazón a Alexander y a su equipo por su profesionalidad, su atención y su gran trabajo. Gracias a ellos encontramos en Málaga justo el piso con el que soñábamos. Estuvieron disponibles en cada etapa, respondían rápido a todas las preguntas, nos ayudaron con todos los detalles y nos acompañaron hasta el día de la mudanza. Lo recomendamos con total confianza a quien busque un agente fiable y responsable.',
      uk: 'Хочемо висловити величезну подяку Олександру та його команді за професіоналізм, уважне ставлення й чудову роботу! Завдяки їм ми знайшли в Малазі саме ту квартиру, про яку мріяли. На кожному етапі вони були на зв’язку, оперативно відповідали на всі питання, допомагали розібратися в усіх нюансах і супроводжували нас до самого заселення. Упевнено рекомендуємо всім, хто шукає надійного й відповідального рієлтора.',
      en: 'We want to thank Alexander and his team for their professionalism, attentiveness and excellent work. Thanks to them we found exactly the flat in Málaga we had dreamed of. They were in touch at every stage, answered all our questions quickly, helped us understand every detail and supported us right up to moving in. We confidently recommend them to anyone looking for a reliable, responsible agent.',
    },
  },
];
