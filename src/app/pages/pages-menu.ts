import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Businesses',
    icon: 'briefcase',
    children: [
      {
        title: 'List',
        link: '/pages/business/list',
        home: true,
        icon: 'keypad-outline',

      },
      {
        title: 'Add',
        link: '/pages/business/add',
        icon: 'plus-square'
      },
    ],
  },

];
