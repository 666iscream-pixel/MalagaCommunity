import type { Lang } from '../i18n/ui';

export interface Review {
  author: Record<Lang, string>;
  avatar?: string;
  quote: Record<Lang, string>;
}

// Только настоящие отзывы клиентов (PDF-макет и раздел «Отзывы» в Instagram).
// Язык оригинала: первый и второй — русский, третий — украинский; остальное — перевод.
export const reviews: Review[] = [
  {
    author: { ru: 'Дмитрий и Полина', es: 'Dmitri y Polina', uk: 'Дмитро і Поліна', en: 'Dmitry and Polina' },
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
    quote: {
      ru: 'Ребята, кому нужна помощь в поиске жилья, можете смело обращаться к Александру. Подскажет, покажет, поможет с поиском, всё подробно объяснит. Нам квартиру нашёл за неделю, мы квартирой довольны. На каждую квартиру Александр ездил с нами и не пытался приукрасить тот или иной вариант. Оценивал как для себя. От нас большое спасибо за помощь!',
      es: 'Si alguien necesita ayuda para encontrar vivienda, puede acudir a Alexander con total confianza. Orienta, enseña, ayuda con la búsqueda y lo explica todo con detalle. A nosotros nos encontró piso en una semana y estamos contentos con él. Alexander nos acompañó a cada visita y no intentó adornar ninguna opción. Valoraba cada piso como si fuera para él. ¡Muchas gracias por la ayuda!',
      uk: 'Друзі, кому потрібна допомога в пошуку житла, можете сміливо звертатися до Олександра. Підкаже, покаже, допоможе з пошуком, усе детально пояснить. Нам квартиру знайшов за тиждень, ми квартирою задоволені. На кожну квартиру Олександр їздив із нами і не намагався прикрасити той чи інший варіант. Оцінював як для себе. Від нас велике спасибі за допомогу!',
      en: 'If anyone needs help finding a place to live, you can turn to Alexander with confidence. He advises, shows you around, helps with the search and explains everything in detail. He found us a flat in a week and we are happy with it. Alexander came with us to every viewing and never tried to oversell an option. He judged each one as if it were for himself. A big thank you from us!',
    },
  },
  {
    author: { ru: 'Максим', es: 'Maksym', uk: 'Максим', en: 'Maksym' },
    quote: {
      ru: 'Хочу оставить отзыв о работе Александра, который помогает с поиском квартир. Всё было отлично, каждый день я получал по несколько вариантов квартир для просмотра. Вас будут сопровождать вплоть до подписания контракта. Общение с владельцами квартир и проверку контракта Александр берёт на себя, поэтому, если вы не знаете испанский, проблем с этим не будет. В целом очень доволен конечным результатом.',
      es: 'Quiero dejar una opinión sobre el trabajo de Alexander, que ayuda a buscar piso. Todo fue estupendo: cada día recibía varias opciones para visitar. Le acompañan hasta el momento de firmar el contrato. Alexander se encarga de la comunicación con los propietarios y de revisar el contrato, así que no hay problema si no habla español. En general, estoy muy satisfecho con el resultado final.',
      uk: 'Хочу залишити відгук стосовно роботи Олександра, який допомагає з пошуком квартир. Все було чудово, кожного дня я отримував по декілька варіантів квартир для перегляду. Вас будуть супроводжувати аж до моменту підписання контракту. Комунікацію з власниками квартир, а також перевірку контракту Олександр бере на себе, тому якщо ви не знаєте іспанську, з цим проблем не буде. Загалом дуже задоволений кінцевим результатом.',
      en: 'I want to leave a review of the work of Alexander, who helps people find flats. Everything was great: every day I received several flats to view. You are supported right up to signing the contract. Alexander handles communication with the owners and checks the contract himself, so it is no problem if you do not speak Spanish. Overall I am very happy with the final result.',
    },
  },
  {
    author: { ru: 'Татьяна', es: 'Tatiana', uk: 'Тетяна', en: 'Tatiana' },
    quote: {
      ru: 'Хочу выразить огромную благодарность Александру и его команде за помощь в поиске квартиры в Малаге. Всё было очень быстро и профессионально: идеальную квартиру нашли за две недели, помогли с подготовкой документов и оформлением договора. Отдельная благодарность за помощь с переездом из временной квартиры.',
      es: 'Quiero dar las gracias de corazón a Alexander y a su equipo por ayudarnos a buscar piso en Málaga. Todo fue muy rápido y profesional: encontraron el piso ideal en dos semanas y nos ayudaron a preparar la documentación y a formalizar el contrato. Un agradecimiento aparte por la ayuda con la mudanza desde el piso temporal.',
      uk: 'Хочу висловити величезну подяку Олександру та його команді за допомогу в пошуку квартири в Малазі. Усе було дуже швидко і професійно: ідеальну квартиру знайшли за два тижні, допомогли з підготовкою документів та оформленням договору. Окрема подяка за допомогу з переїздом із тимчасової квартири.',
      en: 'A huge thank you to Alexander and his team for helping us find a flat in Málaga. Everything was very quick and professional: they found the ideal flat in two weeks and helped prepare the documents and finalise the contract. Special thanks for helping with the move from our temporary flat.',
    },
  },
  {
    author: { ru: 'Ирина', es: 'Iryna', uk: 'Ірина', en: 'Iryna' },
    quote: {
      ru: 'Очень благодарна Александру за помощь в поиске аренды квартиры. За неделю был найден отличный вариант, подходящий по цене и месту расположения. Помощь с переводом и общением с владельцами квартир бесценна. Все договорённости выполнены. Рекомендую!',
      es: 'Estoy muy agradecida a Alexander por su ayuda en la búsqueda de un piso de alquiler. En una semana encontró una opción excelente, adecuada por precio y ubicación. La ayuda con la traducción y la comunicación con los propietarios no tiene precio. Se cumplió todo lo acordado. ¡Lo recomiendo!',
      uk: 'Дуже вдячна Олександру за допомогу в пошуку оренди квартири. За тиждень було знайдено чудовий варіант, який підходить за ціною та розташуванням. Допомога з перекладом і спілкуванням із власниками квартир безцінна. Усі домовленості виконано. Рекомендую!',
      en: 'I am very grateful to Alexander for his help in finding a flat to rent. Within a week he found an excellent option that suited us on price and location. The help with translation and with talking to the owners was priceless. Everything we agreed was delivered. I recommend him!',
    },
  },
  {
    author: { ru: 'Иван', es: 'Ivan', uk: 'Іван', en: 'Ivan' },
    quote: {
      ru: 'Благодарю за колоссальную помощь в поиске жилья! Всё было очень быстро, профессионально и надёжно. Особенно вдохновляет отзывчивость на любой, даже пустяковый вопрос. Очень ценно, что ты переживаешь за наше жильё как за своё. Плюс отдельная благодарность за позитивные эмоции в этом непростом деле.',
      es: '¡Gracias por la enorme ayuda en la búsqueda de vivienda! Todo fue muy rápido, profesional y fiable. Me anima especialmente la disposición a responder cualquier pregunta, por pequeña que sea. Valoro mucho que te preocupes por nuestra vivienda como si fuera la tuya. Y gracias aparte por las emociones positivas en un asunto nada fácil.',
      uk: 'Дякую за колосальну допомогу в пошуку житла! Усе було дуже швидко, професійно і надійно. Особливо надихає чуйність до будь-якого, навіть дрібного питання. Дуже цінно, що ти переживаєш за наше житло як за своє. Плюс окрема подяка за позитивні емоції в цій непростій справі.',
      en: 'Thank you for the tremendous help in finding a home! Everything was very quick, professional and reliable. What I appreciate most is the readiness to answer any question, however small. It means a lot that you care about our home as if it were your own. And a separate thank you for the positive mood in what is not an easy process.',
    },
  },
  {
    author: { ru: 'Ксения', es: 'Ksenia', uk: 'Ксенія', en: 'Ksenia' },
    quote: {
      ru: 'Хочу выразить огромную благодарность Александру и его команде за помощь в поиске квартиры в Малаге. Ситуация у нас была непростая: искать нужно было дистанционно, и у нас не было испанской резиденции. Несмотря на это, квартиру нам нашли за две недели. После каждого просмотра Александр присылал подробнейший видеоотчёт. Потом ребята помогли оформить договор и избежать всех подводных камней.',
      es: 'Quiero dar las gracias de corazón a Alexander y a su equipo por ayudarnos a buscar piso en Málaga. Nuestra situación no era fácil: teníamos que buscar a distancia y no teníamos residencia española. Aun así, nos encontraron piso en dos semanas. Después de cada visita, Alexander nos enviaba un informe en vídeo muy detallado. Luego nos ayudaron a formalizar el contrato y a evitar todos los escollos.',
      uk: 'Хочу висловити величезну подяку Олександру та його команді за допомогу в пошуку квартири в Малазі. Ситуація в нас була непроста: шукати потрібно було дистанційно, і в нас не було іспанської резиденції. Попри це, квартиру нам знайшли за два тижні. Після кожного перегляду Олександр надсилав докладний відеозвіт. Потім допомогли оформити договір і уникнути всіх підводних каменів.',
      en: 'A huge thank you to Alexander and his team for helping us find a flat in Málaga. Our situation was not simple: we had to search remotely and we had no Spanish residency. Even so, they found us a flat in two weeks. After every viewing Alexander sent a very detailed video report. Then they helped us finalise the contract and avoid all the pitfalls.',
    },
  },
];
