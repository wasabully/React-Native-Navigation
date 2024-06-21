const data = [
  {
    id: '1',
    title: 'Ремонт телефона',
    description: 'Выполняем ремонт телефонов всех марок и моделей.',
    address: 'Ул. Примерная, д. 123',
    phone: '+7 (723) 456-78-90',
    category: 'Сервисные услуги',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '2',
    title: 'Ремонт машины',
    description: 'Проводим комплексный ремонт автомобилей любых марок.',
    address: 'Проспект Первый, д. 456',
    phone: '+7 (987) 654-32-10',
    category: 'Автомобильные услуги',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '3',
    title: 'Фотограф',
    description: 'Профессиональная фотосъемка любых событий и портретов.',
    address: 'Ул. Примерова, д. 456',
    phone: '+7 (111) 222-33-44',
    category: 'Фото и Видео',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },

  /*============================= */
  {
    id: '4',
    title: 'Стрижка мужская',
    description: 'Стрижка и уход за волосами для мужчин всех возрастов.',
    address: 'Площадь Примерная, д. 789',
    phone: '+7 (555) 666-77-88',
    category: 'Парикмахерские услуги',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '5',
    title: 'Стрижка женская',
    description: 'Женские стрижки, окрашивание и стайлинг волос.',
    address: 'Ул. Женская, д. 123',
    phone: '+7 (999) 888-77-66',
    category: 'Парикмахерские услуги',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '6',
    title: 'Стрижка животных',
    description: 'Стрижка и уход за шерстью для домашних питомцев.',
    address: 'Ул. Домашняя, д. 456',
    phone: '+7 (777) 666-55-44',
    category: 'Услуги для животных',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  /*============================= */
  {
    id: '7',
    title: 'Уборка квартир',
    description: 'Комплексная уборка квартир любой площади и сложности.',
    address: 'Ул. Уборочная, д. 789',
    phone: '+7 (777) 123-45-67',
    category: 'Уборка и Уход за домом',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '8',
    title: 'Уборка дома',
    description: 'Ежедневная уборка дома с использованием профессиональных средств.',
    address: 'Ул. Домашняя, д. 789',
    phone: '+7 (888) 765-43-21',
    category: 'Уборка и Уход за домом',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '9',
    title: 'Уборка территории',
    description: 'Уборка территории от мусора и листвы в любое время года.',
    address: 'Площадь Территориальная, д. 123',
    phone: '+7 (999) 333-22-11',
    category: 'Уборка и Уход за территорией',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },

  /*============================= */
  {
    id: '10',
    title: 'Продам 2 кв квартиру',
    description: 'Продаю двухкомнатную квартиру в центре города.',
    address: 'Ул. Продажная, д. 456',
    phone: '+7 (111) 222-33-44',
    category: 'Недвижимость',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '11',
    title: 'Продам 1 кв квартиру',
    description: 'Продаю однокомнатную квартиру в новом жилом комплексе.',
    address: 'Проспект Продажный, д. 789',
    phone: '+7 (999) 888-77-66',
    category: 'Недвижимость',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '12',
    title: 'Продам 3 кв квартиру',
    description: 'Продаю трехкомнатную квартиру с отличным ремонтом.',
    address: 'Площадь Продажная, д. 123',
    phone: '+7 (777) 666-55-44',
    category: 'Недвижимость',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  /*============================= */
  {
    id: '13',
    title: 'Сдам 2 кв квартиру',
    description: 'Сдаю двухкомнатную квартиру на длительный срок.',
    address: 'Ул. Арендная, д. 456',
    phone: '+7 (888) 999-11-22',
    category: 'Недвижимость',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '14',
    title: 'Сдам 1 кв квартиру',
    description: 'Сдаю однокомнатную квартиру в новом доме.',
    address: 'Проспект Арендный, д. 789',
    phone: '+7 (777) 888-99-00',
    category: 'Недвижимость',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
  {
    id: '15',
    title: 'Сдам 3 кв квартиру',
    description: 'Сдаю трехкомнатную квартиру с мебелью и бытовой техникой.',
    address: 'Площадь Арендная, д. 123',
    phone: '+7 (111) 222-33-44',
    category: 'Недвижимость',
    source:
      'https://sun9-71.userapi.com/impf/c625321/v625321352/37c09/u6h34P8vqU4.jpg?size=200x192&quality=96&sign=160e187c4112d2887590a42be4892b8f&type=album',
  },
];
export default data;
