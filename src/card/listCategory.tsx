import { NavigationTopTabsProps } from '../interfaces/Navigation';
import CategoryScreen from '../screens/authorized/CategoryScreen';

const categories: NavigationTopTabsProps[] = [
  {
    id: 1,
    name: 'Недвижимость',
    component: CategoryScreen,
    idParent: null,
  },
  {
    id: 2,
    name: 'Транспорт',
    component: CategoryScreen,
    idParent: null,
  },

  {
    id: 3,
    name: 'Услуги',
    component: CategoryScreen,
    idParent: null,
  },

  {
    id: 4,
    name: 'Работа',
    component: CategoryScreen,
    idParent: null,
  },

  /*========== Подкатегории ============ */
  {
    id: 5,
    name: 'Продажа',
    component: CategoryScreen,
    idParent: 1,
  },
  {
    id: 6,
    name: 'Посуточная аренда',
    component: CategoryScreen,
    idParent: 1,
  },
  {
    id: 7,
    name: 'Долгосрочная аренда',
    component: CategoryScreen,
    idParent: 1,
  },

  /*====================== */
  {
    id: 8,
    name: 'Запчасти',
    component: CategoryScreen,
    idParent: 2,
  },
  {
    id: 9,
    name: 'Автомобили',
    component: CategoryScreen,
    idParent: 2,
  },
  {
    id: 10,
    name: 'Колеса/шины',
    component: CategoryScreen,
    idParent: 2,
  },
  /*====================== */
  {
    id: 11,
    name: 'Ремонт',
    component: CategoryScreen,
    idParent: 3,
  },
  {
    id: 12,
    name: 'Стрижка',
    component: CategoryScreen,
    idParent: 3,
  },
  {
    id: 13,
    name: 'Уборка',
    component: CategoryScreen,
    idParent: 3,
  },

  /*====================== */
  {
    id: 14,
    name: 'Зап.часть на автомобиль',
    component: CategoryScreen,
    idParent: 8,
  },
  {
    id: 15,
    name: 'Зап.часть на мотоцикл',
    component: CategoryScreen,
    idParent: 8,
  },
];

export { categories };
