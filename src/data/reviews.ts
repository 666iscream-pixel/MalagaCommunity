import type { Lang } from '../i18n/ui';

export interface Review {
  author: Record<Lang, string>;
  avatar: string;
  // пост с отзывом в Instagram
  link: string;
  quote: Record<Lang, string>;
}

// Отзывы из постов Instagram по списку клиента; аватары вырезаны из этих же постов.
// Длинные слегка сокращены, имена сотрудников убраны; остальные языки — перевод.
const post = (id: string) => `https://www.instagram.com/p/${id}/`;

export const reviews: Review[] = [
  {
    author: { ru: 'Мадлена', es: 'Madlena', uk: 'Мадлена', en: 'Madlena' },
    avatar: '/img/review-01.webp',
    link: post('DetWIC6sM2q'),
    quote: {
      ru: 'Хочу посоветовать и поблагодарить Александра и его команду за помощь с арендой квартиры в Малаге! Всё прошло отлично: ребята всегда были на связи, помогали со всеми вопросами и сделали процесс намного проще. Отвечали быстро и всегда были вежливы, поэтому смело рекомендую их всем, кто ищет жильё в Малаге или в Мадриде!',
      es: '¡Quiero recomendar y dar las gracias a Alexander y a su equipo por la ayuda con el alquiler de un piso en Málaga! Todo salió perfecto: siempre estuvieron disponibles, nos ayudaron con todas las dudas y hicieron el proceso mucho más fácil. Respondían rápido y siempre con amabilidad, así que los recomiendo a todo el que busque vivienda en Málaga o en Madrid.',
      uk: 'Хочу порадити й подякувати Олександру та його команді за допомогу з орендою квартири в Малазі! Усе пройшло чудово: хлопці завжди були на зв’язку, допомагали з усіма питаннями й зробили процес набагато простішим. Відповідали швидко й завжди ввічливо, тож сміливо рекомендую їх усім, хто шукає житло в Малазі чи Мадриді!',
      en: 'I want to recommend and thank Alexander and his team for helping us rent a flat in Málaga! Everything went perfectly: they were always in touch, helped with every question and made the process much simpler. They replied quickly and were always polite, so I warmly recommend them to anyone looking for a home in Málaga or Madrid!',
    },
  },
  {
    author: { ru: 'Наталья', es: 'Natalia', uk: 'Наталя', en: 'Natalia' },
    avatar: '/img/review-02.webp',
    link: post('Dd8iP6kM6ZS'),
    quote: {
      ru: 'Благодарю Александра и его команду за квартиру моей мечты. Нашли быстро и точно по запросу. Теперь я с благодарностью смотрю на море из панорамного окна и могу сказать: это было профессионально, быстро и без единого проблемного момента. Искренне рекомендую!',
      es: 'Doy las gracias a Alexander y a su equipo por el piso de mis sueños. Lo encontraron rápido y justo según lo que pedí. Ahora miro el mar desde una ventana panorámica y puedo decir que fue profesional, rápido y sin ningún problema. ¡Lo recomiendo de corazón!',
      uk: 'Дякую Олександру і його команді за квартиру своєї мрії. Знайшли швидко і за запитом. Тепер я з вдячністю дивлюся на море з панорамного вікна і можу сказати, що це було професійно, швидко і без будь-яких проблемних моментів. Щиро рекомендую!',
      en: 'Thank you to Alexander and his team for the flat of my dreams. They found it quickly and exactly to my brief. Now I look at the sea from a panoramic window and can say it was professional, fast and completely trouble-free. I sincerely recommend them!',
    },
  },
  {
    author: { ru: 'Ярослав и Мария', es: 'Yaroslav y María', uk: 'Ярослав і Марія', en: 'Yaroslav and Maria' },
    avatar: '/img/review-03.webp',
    link: post('Dcs2PNxM3bW'),
    quote: {
      ru: 'Хотим выразить огромную благодарность команде Malaga Community! За 2 недели нашли нам квартиру по нашему запросу. Всё проходило удалённо: мы приехали из Польши в уже арендованную квартиру. Очень профессионально проводят переговоры с агентствами и собственниками и отстаивают ваши интересы. Рекомендуем обращаться к профессионалам!',
      es: '¡Queremos dar las gracias de corazón al equipo de Malaga Community! En 2 semanas nos encontraron un piso según lo que pedíamos. Todo se hizo a distancia: llegamos desde Polonia a un piso ya alquilado. Negocian con agencias y propietarios de forma muy profesional y defienden tus intereses. ¡Recomendamos acudir a profesionales!',
      uk: 'Хочемо висловити величезну подяку команді Malaga Community! За 2 тижні знайшли нам квартиру за нашим запитом. Усе відбувалося дистанційно: ми приїхали з Польщі вже в орендовану квартиру. Дуже професійно ведуть переговори з агентствами та власниками й відстоюють ваші інтереси. Рекомендуємо звертатися до професіоналів!',
      en: 'A huge thank you to the Malaga Community team! In 2 weeks they found us a flat that matched our request. Everything was done remotely: we arrived from Poland to a flat that was already rented. They negotiate with agencies and owners very professionally and stand up for your interests. We recommend the professionals!',
    },
  },
  {
    author: { ru: 'Никита и Инна', es: 'Nikita e Inna', uk: 'Микита та Інна', en: 'Nikita and Inna' },
    avatar: '/img/review-04.webp',
    link: post('DbFm_jNM79j'),
    quote: {
      ru: 'Хотим выразить искреннюю благодарность Александру и его команде за оперативную сделку по аренде жилья, профессионализм, отзывчивость и сопровождение на всех этапах. Спасибо за быструю работу, внимание к деталям и готовность помочь в любой ситуации. С вами было приятно и комфортно сотрудничать!',
      es: 'Queremos dar las gracias sinceramente a Alexander y a su equipo por cerrar el alquiler tan rápido, por su profesionalidad, su disposición y su acompañamiento en cada etapa. Gracias por el trabajo ágil, la atención a los detalles y las ganas de ayudar en cualquier situación. ¡Ha sido un placer trabajar con ustedes!',
      uk: 'Хочемо щиро подякувати Олександру та його команді за оперативну угоду з оренди житла, професіоналізм, чуйність і супровід на всіх етапах. Дякуємо за швидку роботу, увагу до деталей і готовність допомогти в будь-якій ситуації. З вами було приємно й комфортно співпрацювати!',
      en: 'We sincerely thank Alexander and his team for closing our rental so quickly, for their professionalism, responsiveness and support at every stage. Thank you for the fast work, attention to detail and readiness to help in any situation. It was a pleasure working with you!',
    },
  },
  {
    author: { ru: 'Ольга и Евгений', es: 'Olga y Yevgueni', uk: 'Ольга і Євген', en: 'Olga and Evgeniy' },
    avatar: '/img/review-05.webp',
    link: post('DaL9TMlsxys'),
    quote: {
      ru: 'Хотим выразить огромную благодарность Александру и его команде за профессионализм, внимательное отношение и отличную работу! Благодаря им мы нашли именно ту квартиру в Малаге, о которой мечтали. На каждом этапе они были на связи, оперативно отвечали на все вопросы и сопровождали нас до самого заселения. С уверенностью рекомендуем всем, кто ищет надёжного риелтора.',
      es: 'Queremos dar las gracias a Alexander y a su equipo por su profesionalidad, su atención y su gran trabajo. Gracias a ellos encontramos en Málaga justo el piso con el que soñábamos. Estuvieron disponibles en cada etapa, respondían rápido a todas las preguntas y nos acompañaron hasta la mudanza. Lo recomendamos a quien busque un agente fiable.',
      uk: 'Хочемо висловити величезну подяку Олександру та його команді за професіоналізм, уважне ставлення й чудову роботу! Завдяки їм ми знайшли в Малазі саме ту квартиру, про яку мріяли. На кожному етапі вони були на зв’язку, оперативно відповідали на всі питання й супроводжували нас до самого заселення. Упевнено рекомендуємо всім, хто шукає надійного рієлтора.',
      en: 'We want to thank Alexander and his team for their professionalism, attentiveness and excellent work. Thanks to them we found exactly the flat in Málaga we had dreamed of. They were in touch at every stage, answered all our questions quickly and supported us right up to moving in. We confidently recommend them to anyone looking for a reliable agent.',
    },
  },
  {
    author: { ru: 'Андрей и Анастасия', es: 'Andréi y Anastasia', uk: 'Андрій та Анастасія', en: 'Andrey and Anastasia' },
    avatar: '/img/review-06.webp',
    link: post('DYrR8wJsKYd'),
    quote: {
      ru: 'Хотим всей семьёй выразить благодарность Malaga Community за помощь и поддержку на всех этапах поиска аренды, вплоть до получения ключей. Если вы в поиске квартиры, смело обращайтесь к Александру. Мы очень благодарны ребятам за консультацию и оперативное подписание договора. Прозрачно, быстро, квалифицированно!',
      es: 'Toda la familia quiere dar las gracias a Malaga Community por su ayuda y apoyo en cada etapa de la búsqueda, hasta la entrega de llaves. Si busca piso, no dude en acudir a Alexander. Agradecemos mucho la asesoría y la rapidez con la firma del contrato. ¡Transparente, rápido y profesional!',
      uk: 'Хочемо всією родиною подякувати Malaga Community за допомогу й підтримку на всіх етапах пошуку оренди, аж до отримання ключів. Якщо ви шукаєте квартиру, сміливо звертайтеся до Олександра. Ми дуже вдячні хлопцям за консультацію та оперативне підписання договору. Прозоро, швидко, кваліфіковано!',
      en: 'Our whole family wants to thank Malaga Community for their help and support at every stage of the rental search, right up to getting the keys. If you are looking for a flat, turn to Alexander with confidence. We are very grateful for the advice and the quick contract signing. Transparent, fast and professional!',
    },
  },
  {
    author: { ru: 'Дмитрий и Яна', es: 'Dmitri y Yana', uk: 'Дмитро та Яна', en: 'Dmitry and Yana' },
    avatar: '/img/review-07.webp',
    link: post('DXG6qseDIPF'),
    quote: {
      ru: 'Если вы находитесь в поиске квартиры, смело обращайтесь к Александру в агентство Malaga Community. Мы очень благодарны ребятам за консультацию, поддержку на всех этапах и оперативное подписание договора. Прозрачно, быстро, квалифицированно!',
      es: 'Si está buscando piso, no dude en acudir a Alexander en la agencia Malaga Community. Agradecemos mucho al equipo la asesoría, el apoyo en cada etapa y la rapidez con la firma del contrato. ¡Transparente, rápido y profesional!',
      uk: 'Якщо ви шукаєте квартиру, сміливо звертайтеся до Олександра в агентство Malaga Community. Ми дуже вдячні хлопцям за консультацію, підтримку на всіх етапах і оперативне підписання договору. Прозоро, швидко, кваліфіковано!',
      en: 'If you are looking for a flat, turn to Alexander at Malaga Community with confidence. We are very grateful to the team for the advice, support at every stage and the quick contract signing. Transparent, fast and professional!',
    },
  },
  {
    author: { ru: 'Дмитрий и Полина', es: 'Dmitri y Polina', uk: 'Дмитро і Поліна', en: 'Dmitry and Polina' },
    avatar: '/img/review-08.webp',
    link: post('DV-7wUCjAw4'),
    quote: {
      ru: 'Выражаем с мужем огромную благодарность компании Malaga Community! Несмотря на то, что мы проживали в другом городе, нам смогли быстро подобрать подходящие варианты и организовать просмотры. Весь процесс от и до занял 2–3 недели. Мы ни о чём не переживали: люди в компании очень ответственны, доброжелательны и готовы поддержать на каждом этапе.',
      es: 'Mi marido y yo queremos dar las gracias de corazón a Malaga Community. Aunque vivíamos en otra ciudad, nos encontraron opciones adecuadas muy rápido y organizaron las visitas. Todo el proceso duró entre 2 y 3 semanas. No tuvimos que preocuparnos por nada: el equipo es muy responsable, amable y dispuesto a ayudar en cada etapa.',
      uk: 'Висловлюємо з чоловіком величезну подяку компанії Malaga Community! Попри те, що ми жили в іншому місті, нам швидко підібрали відповідні варіанти й організували перегляди. Увесь процес від початку до кінця зайняв 2–3 тижні. Ми ні про що не хвилювалися: люди в компанії дуже відповідальні, доброзичливі й готові підтримати на кожному етапі.',
      en: 'My husband and I are hugely grateful to Malaga Community. Even though we were living in another city, they quickly found suitable options and arranged the viewings. The whole process took 2–3 weeks from start to finish. We had nothing to worry about: the team is responsible, friendly and ready to help at every step.',
    },
  },
  {
    author: { ru: 'Марина и Павел', es: 'Marina y Pável', uk: 'Марина і Павло', en: 'Marina and Pavel' },
    avatar: '/img/review-09.webp',
    link: post('DU71FdODDs9'),
    quote: {
      ru: 'Хочу выразить огромную благодарность ребятам из Malaga Community за профессиональную помощь в аренде жилья и поддержку 24/7 — даже по вопросам, которые вас в принципе не касались, но вы всё равно помогали. Большое человеческое спасибо! Квартира, которую вы нашли, просто огонь, и район тоже супер — я очень довольна.',
      es: 'Quiero dar las gracias de corazón al equipo de Malaga Community por su ayuda profesional con el alquiler y su apoyo 24/7, incluso en temas que en principio no les correspondían, y aun así nos ayudaron. ¡Un enorme gracias de verdad! El piso que nos encontraron es una maravilla y el barrio también es genial: estoy encantada.',
      uk: 'Хочу висловити величезну подяку команді Malaga Community за професійну допомогу з орендою житла й підтримку 24/7 — навіть у питаннях, які вас загалом не стосувалися, але ви все одно допомагали. Щире людське спасибі! Квартира, яку ви знайшли, просто вогонь, і район теж чудовий — я дуже задоволена.',
      en: 'A huge thank you to the Malaga Community team for their professional help with renting and their 24/7 support, even with things that were not really their job, yet they still helped. A big, heartfelt thank you! The flat you found us is amazing and the neighbourhood is great too. I am really happy.',
    },
  },
  {
    author: { ru: 'Тарас и Ирина', es: 'Tarás e Irina', uk: 'Тарас та Ірина', en: 'Taras and Iryna' },
    avatar: '/img/review-10.webp',
    link: post('DS4UdC5iKPj'),
    quote: {
      ru: 'Хочу выразить огромную благодарность вашему агентству за помощь в поиске квартиры! Благодаря вам мы нашли именно тот вариант, который искали: уютная светлая квартира в новом комплексе со спортзалом и бассейном, полностью соответствующая нашим пожеланиям. Отдельное спасибо за внимательность, терпение и профессиональный подход. Работа с вами — одно удовольствие!',
      es: '¡Quiero dar las gracias de corazón a su agencia por la ayuda en la búsqueda de piso! Gracias a ustedes encontramos justo lo que buscábamos: un piso acogedor y luminoso en un complejo nuevo con gimnasio y piscina, que cumple todos nuestros deseos. Gracias especialmente por la atención, la paciencia y el trato profesional. ¡Trabajar con ustedes es un placer!',
      uk: 'Хочу висловити величезну подяку вашому агентству за допомогу в пошуку квартири! Завдяки вам ми знайшли саме той варіант, який шукали: затишна світла квартира в новому комплексі зі спортзалом і басейном, яка повністю відповідає нашим побажанням. Окреме спасибі за уважність, терпіння й професійний підхід. Працювати з вами — одне задоволення!',
      en: 'A huge thank you to your agency for helping us find a flat! Thanks to you we found exactly what we were looking for: a cosy, bright flat in a new complex with a gym and a pool that fully meets our wishes. Special thanks for your attentiveness, patience and professional approach. Working with you is a pleasure!',
    },
  },
  {
    author: { ru: 'Лев и Ирина', es: 'Lev e Irina', uk: 'Лев та Ірина', en: 'Lev and Irina' },
    avatar: '/img/review-11.webp',
    link: post('DR1vUuQjPIi'),
    quote: {
      ru: 'Спасибо всей команде Malaga Community за помощь в поиске жилья в Малаге. Настоящие профессионалы: прекрасно знают рынок, грамотно и системно подходят к поиску вариантов, всегда на связи и знают все тонкости работы с арендодателями и агентами. И, что немаловажно, относятся к клиентам с теплотой и вниманием. Искренне рекомендую!',
      es: 'Gracias a todo el equipo de Malaga Community por la ayuda para encontrar vivienda en Málaga. Auténticos profesionales: conocen muy bien el mercado, buscan opciones con método, siempre están disponibles y dominan todos los matices del trato con propietarios y agentes. Y, algo importante, tratan a los clientes con cariño y atención. ¡Lo recomiendo sinceramente!',
      uk: 'Дякую всій команді Malaga Community за допомогу в пошуку житла в Малазі. Справжні професіонали: чудово знають ринок, грамотно й системно підходять до пошуку варіантів, завжди на зв’язку й знають усі тонкощі роботи з орендодавцями та агентами. І, що важливо, ставляться до клієнтів із теплотою та увагою. Щиро рекомендую!',
      en: 'Thank you to the whole Malaga Community team for helping us find a home in Málaga. True professionals: they know the market inside out, search methodically, are always in touch and know every detail of dealing with landlords and agents. And, importantly, they treat clients with warmth and care. I sincerely recommend them!',
    },
  },
  {
    author: { ru: 'Александр и Каролина', es: 'Aleksandr y Karolina', uk: 'Олександр і Кароліна', en: 'Aleksandr and Karolina' },
    avatar: '/img/review-12.webp',
    link: post('DRPng5jDIX4'),
    quote: {
      ru: 'Мы арендовали квартиру дистанционно, находясь в Эстонии, и остались очень довольны всем процессом. Команда, которая помогала нам в Испании, работала на высоком уровне: каждый день нам отправляли варианты квартир под наши требования. Мы искренне благодарны за проделанную работу и смело рекомендуем этот сервис всем, кто ищет жильё удалённо!',
      es: 'Alquilamos el piso a distancia, desde Estonia, y quedamos muy contentos con todo el proceso. El equipo que nos ayudó en España trabajó a un gran nivel: cada día nos enviaban opciones según nuestros requisitos. Agradecemos sinceramente su trabajo y recomendamos este servicio a todo el que busque vivienda a distancia.',
      uk: 'Ми орендували квартиру дистанційно, перебуваючи в Естонії, і залишилися дуже задоволені всім процесом. Команда, яка допомагала нам в Іспанії, працювала на високому рівні: щодня нам надсилали варіанти квартир під наші вимоги. Ми щиро вдячні за виконану роботу й сміливо рекомендуємо цей сервіс усім, хто шукає житло дистанційно!',
      en: 'We rented our flat remotely while living in Estonia and were very happy with the whole process. The team helping us in Spain worked at a high level: every day they sent us flats matching our requirements. We are sincerely grateful for their work and warmly recommend this service to anyone searching remotely!',
    },
  },
  {
    author: { ru: 'Артур и Ольга', es: 'Artur y Olga', uk: 'Артур та Ольга', en: 'Artur and Olga' },
    avatar: '/img/review-13.webp',
    link: post('DQWhOnCDHhk'),
    quote: {
      ru: 'Искренне благодарим вашу команду за помощь в поиске и аренде жилья. Все наши пожелания были учтены, с нами всегда были на связи и отвечали на все вопросы. Ситуация осложнялась тем, что квартиру нужно было найти удалённо (мы переезжали из Польши), и у нас не было испанского трудового контракта. С вашей помощью переезд прошёл гладко, комфортно и без стресса.',
      es: 'Agradecemos de corazón a su equipo la ayuda para buscar y alquilar vivienda. Tuvieron en cuenta todos nuestros deseos, siempre estuvieron disponibles y respondieron a todas las preguntas. Lo complicaba que había que encontrar el piso a distancia (nos mudábamos desde Polonia) y que no teníamos contrato de trabajo español. Con su ayuda, la mudanza fue fluida, cómoda y sin estrés.',
      uk: 'Щиро дякуємо Вашій команді за допомогу в пошуку й оренді житла. Усі наші побажання були враховані, з нами завжди були на зв’язку й відповідали на всі питання. Ситуацію ускладнювало те, що квартиру треба було знайти віддалено (ми переїжджали з Польщі), а також те, що в нас не було іспанського робочого контракту. З Вашою допомогою переїзд пройшов гладенько, комфортно й безстресово.',
      en: 'We sincerely thank your team for helping us find and rent a home. All our wishes were taken into account, they were always in touch and answered every question. It was complicated by the fact that we had to find a flat remotely (we were moving from Poland) and had no Spanish employment contract. With your help the move was smooth, comfortable and stress-free.',
    },
  },
  {
    author: { ru: 'Светлана и Андрей', es: 'Svetlana y Andréi', uk: 'Світлана й Андрій', en: 'Svetlana and Andrey' },
    avatar: '/img/review-14.webp',
    link: post('DP3ofSeDCc1'),
    quote: {
      ru: 'Выражаем огромную благодарность за качественную работу в поиске жилья! Подбор квартиры происходил онлайн, при этом ребята всегда были на связи, оперативно решали любые сложности и проводили нам просмотры по видеосвязи. По приезде в Испанию нас встретили с ключами на адресе, и мы сразу заселились в нашу квартиру. Большое вам спасибо!',
      es: '¡Muchas gracias por el gran trabajo en la búsqueda de vivienda! La selección del piso se hizo online: el equipo siempre estuvo disponible, resolvía rápido cualquier dificultad y hacía las visitas por videollamada. Al llegar a España nos esperaban con las llaves en la dirección y entramos a vivir enseguida. ¡Muchísimas gracias!',
      uk: 'Висловлюємо величезну подяку за якісну роботу з пошуку житла! Підбір квартири відбувався онлайн, хлопці завжди були на зв’язку, оперативно вирішували будь-які складнощі й проводили перегляди по відеозв’язку. Коли ми приїхали до Іспанії, нас зустріли з ключами на адресі, і ми одразу заселилися. Щиро дякуємо!',
      en: 'Many thanks for the great work in finding us a home! The flat search was done online: the team was always in touch, quickly solved any difficulties and held viewings by video call. When we arrived in Spain, they met us at the address with the keys and we moved straight in. Thank you so much!',
    },
  },
  {
    author: { ru: 'Александр и Александра', es: 'Aleksandr y Aleksandra', uk: 'Олександр і Олександра', en: 'Aleksandr and Aleksandra' },
    avatar: '/img/review-15.webp',
    link: post('DOiwxRWjCfm'),
    quote: {
      ru: 'Хочу сказать огромное спасибо Александру и его чудесной команде. Мы искали жильё для семьи в Испании, и всё происходило онлайн — казалось бы, почти нереально. Но ребята сделали невозможное возможным: Александр лично показывал нам квартиры по видео, всё подробно объяснял, проверял документы и поддерживал на каждом этапе. Теперь мы живём в чудесной квартире в Малаге, о которой мечтали.',
      es: 'Quiero dar las gracias de corazón a Alexander y a su maravilloso equipo. Buscábamos vivienda para la familia en España y todo se hacía online, algo que parecía casi imposible. Pero lo hicieron posible: Alexander nos enseñaba los pisos por vídeo, lo explicaba todo con detalle, revisaba los documentos y nos apoyó en cada etapa. Ahora vivimos en el piso de nuestros sueños en Málaga.',
      uk: 'Хочу сказати величезне спасибі Олександру та його чудовій команді. Ми шукали житло для родини в Іспанії, і все відбувалося онлайн — здавалося б, майже нереально. Але хлопці зробили неможливе можливим: Олександр особисто показував нам квартири по відео, усе детально пояснював, перевіряв документи й підтримував на кожному етапі. Тепер ми живемо в чудовій квартирі в Малазі, про яку мріяли.',
      en: 'I want to say a huge thank you to Alexander and his wonderful team. We were looking for a family home in Spain and everything happened online, which seemed almost impossible. But they made it happen: Alexander personally showed us flats on video, explained everything in detail, checked the documents and supported us at every stage. Now we live in the Málaga flat we dreamed of.',
    },
  },
  {
    author: { ru: 'Илья', es: 'Iliá', uk: 'Ілля', en: 'Ilya' },
    avatar: '/img/review-16.webp',
    link: post('DNYEC4QscVC'),
    quote: {
      ru: 'Золотые люди, профессионалы, искренне рекомендую! Я даже не представлял, что поиск квартиры в Испании может быть настолько сложным. У меня было много специфических пожеланий, но команда Malaga Community сумела подобрать именно то, что я искал. В итоге нашли квартиру, которая меня полностью устраивает. Очень благодарен команде и точно могу рекомендовать её всем.',
      es: '¡Gente de oro, profesionales, los recomiendo de corazón! No imaginaba que buscar piso en España pudiera ser tan complicado. Tenía muchos requisitos específicos, pero el equipo de Malaga Community supo encontrar justo lo que buscaba. Al final encontramos un piso que me encaja por completo. Estoy muy agradecido al equipo y lo recomiendo a todos.',
      uk: 'Золоті люди, професіонали, щиро рекомендую! Я навіть не уявляв, що пошук квартири в Іспанії може бути настільки складним. У мене було багато специфічних побажань і різних хотілок, але команда Malaga Community зуміла підібрати саме те, що я шукав. У підсумку знайшли квартиру, яка мене абсолютно влаштовує. Я дуже вдячний команді й точно можу рекомендувати її всім.',
      en: 'Golden people, true professionals, I sincerely recommend them! I had no idea how hard finding a flat in Spain could be. I had lots of specific wishes, but the Malaga Community team managed to find exactly what I was looking for. In the end we found a flat that suits me perfectly. I am very grateful to the team and can recommend them to everyone.',
    },
  },
  {
    author: { ru: 'Инна и Олег', es: 'Inna y Oleg', uk: 'Інна та Олег', en: 'Inna and Oleg' },
    avatar: '/img/review-17.webp',
    link: post('DNA9zZKN-UQ'),
    quote: {
      ru: 'Огромная благодарность всей команде Malaga Community и их руководителю Александру! Профессионализм и скорость работы — просто на высочайшем уровне. Помогли снять идеальную квартиру, на 100% соответствующую нашим потребностям, всего за неделю поиска. Рекомендую!',
      es: '¡Muchísimas gracias a todo el equipo de Malaga Community y a su director, Alexander! La profesionalidad y la rapidez están al más alto nivel. Nos ayudaron a alquilar un piso ideal, que cumple al 100 % con lo que necesitábamos, en solo una semana de búsqueda. ¡Lo recomiendo!',
      uk: 'Величезна подяка всій команді Malaga Community та їхньому керівнику Олександру! Професіоналізм і швидкість роботи — просто на найвищому рівні. Допомогли зняти ідеальну квартиру, яка на 100% відповідає нашим потребам, лише за тиждень пошуку. Рекомендую!',
      en: 'Huge thanks to the whole Malaga Community team and their head, Alexander! Their professionalism and speed are simply top level. They helped us rent an ideal flat that meets our needs 100% after just one week of searching. I recommend them!',
    },
  },
  {
    author: { ru: 'Сергей и Алла', es: 'Serguéi y Alla', uk: 'Сергій та Алла', en: 'Sergey and Alla' },
    avatar: '/img/review-18.webp',
    link: post('DMsc1upNfPd'),
    quote: {
      ru: 'Благодарю всю команду невероятных профессионалов своего дела. Квартиру нашли быстро, всегда были на связи, очень приятные и отзывчивые. Нам очень посчастливилось встретить это агентство честных и порядочных профессионалов. Если вам нужно найти квартиру в Малаге, то они самые лучшие!',
      es: 'Gracias a todo el equipo de increíbles profesionales. Encontraron el piso rápido, siempre estuvieron disponibles y son muy agradables y atentos. Tuvimos mucha suerte de dar con esta agencia de profesionales honestos y serios. Si necesita encontrar piso en Málaga, ¡son los mejores!',
      uk: 'Дякую всій команді неймовірних професіоналів своєї справи. Квартиру знайшли швидко, завжди були на зв’язку, дуже приємні й чуйні. Нам дуже пощастило зустріти це агентство чесних і порядних професіоналів. Якщо вам потрібно знайти квартиру в Малазі, то вони найкращі!',
      en: 'Thank you to the whole team of incredible professionals. They found the flat quickly, were always in touch and are very pleasant and helpful. We were really lucky to come across this agency of honest, decent professionals. If you need to find a flat in Málaga, they are the best!',
    },
  },
  {
    author: { ru: 'Анастасия', es: 'Anastasia', uk: 'Анастасія', en: 'Anastasiia' },
    avatar: '/img/review-19.webp',
    link: post('DK_r2GFt_y4'),
    quote: {
      ru: 'Хотим поблагодарить каждого из вашей команды за слаженную работу, помощь и сопровождение на всех этапах, за решение вопросов по ходу и за то, что сняли нам нашу квартиру. Это было непросто в нашей ситуации: в центре Фуэнхиролы, у пляжа, с хорошим ремонтом, долгосрочно и в начале сезона. Путь к ней был нелёгким, и хорошо, что вы подсказывали и направляли. Мы в восторге от квартиры и от вас!',
      es: 'Queremos agradecer a cada miembro del equipo su trabajo coordinado, la ayuda y el acompañamiento en cada etapa, la solución de los problemas sobre la marcha y que nos consiguieran nuestro piso. No era fácil en nuestra situación: en el centro de Fuengirola, junto a la playa, bien reformado, de larga duración y a principio de temporada. El camino fue duro y fue genial que nos orientaran. ¡Estamos encantados con el piso y con ustedes!',
      uk: 'Хочемо ще тут подякувати кожному з вашої команди за злагоджену роботу, допомогу й супровід на всіх етапах, за вирішення питань, які з’являлися по ходу, і за те, що зняли нам нашу квартиру. Це було складно в нашій ситуації: у центрі Фуенхіроли, біля пляжу, з гарним ремонтом, довгостроково і на початку сезону. Шлях до неї був нелегким, і добре, що ви підказували й направляли. Ми в захваті від квартири і від вас!',
      en: 'We want to thank every member of your team for the well-coordinated work, help and support at every stage, for solving issues as they came up and for renting us our flat. It was not easy in our situation: in the centre of Fuengirola, by the beach, nicely renovated, long-term and at the start of the season. The road was hard, and it was great that you guided us. We love the flat and we love you!',
    },
  },
  {
    author: { ru: 'Александр', es: 'Oleksandr', uk: 'Олександр', en: 'Oleksandr' },
    avatar: '/img/review-20.webp',
    link: post('DEhOU4xOiHy'),
    quote: {
      ru: 'Хочу выразить огромную благодарность Александру и его команде за профессионализм и помощь в поиске квартиры в Малаге. Мы искали трёхкомнатную квартиру в новом доме и хорошем районе в сжатые сроки. Несмотря на языковой барьер, ребята сделали всё возможное, и уже через 6 дней после начала просмотров мы подписали договор! Там, где жильё сдаётся в основном на сезон, это настоящее чудо.',
      es: 'Quiero dar las gracias de corazón a Alexander y a su equipo por su profesionalidad y su ayuda para encontrar piso en Málaga. Buscábamos un piso de 3 dormitorios en un edificio nuevo y en buena zona, con plazos muy ajustados. A pesar de la barrera del idioma, hicieron todo lo posible: ¡solo 6 días después de empezar las visitas firmamos el contrato! Donde casi todo se alquila por temporada, es un auténtico milagro.',
      uk: 'Хочу висловити величезну подяку Олександру та його команді за професіоналізм і допомогу в пошуку квартири в Малазі. Ми шукали трикімнатну квартиру в новому будинку й гарному районі в стислі терміни. Попри мовний бар’єр, хлопці зробили все можливе, і вже через 6 днів після початку переглядів ми підписали договір! Там, де житло здається переважно на сезон, це справжнє диво.',
      en: 'I want to thank Alexander and his team for their professionalism and help in finding a flat in Málaga. We were looking for a three-bedroom flat in a new building and a good area on a tight deadline. Despite the language barrier, they did everything possible, and just 6 days after the viewings started we signed the contract! Where most homes are let only for the season, that is a real miracle.',
    },
  },
];
