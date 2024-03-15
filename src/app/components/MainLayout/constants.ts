import { BookMarkedIcon, HomeIcon, SheetIcon } from 'lucide-react';

import { Paths } from '@/lib/constants';

export const SIDEBAR_LINKS = [
  {
    name: 'Home',
    path: Paths.HOME,
    icon: HomeIcon,
  },
  {
    name: 'Ecommerce',
    path: Paths.ECOMMERCE,
    icon: BookMarkedIcon,
  },
  {
    name: 'Products',
    path: Paths.PRODUCTS,
    icon: BookMarkedIcon,
  },
  {
    name: 'Payment',
    path: Paths.PAYMENTS,
    icon: BookMarkedIcon,
  },
  {
    name: 'Reports',
    path: Paths.REPORT,
    icon: SheetIcon,
  },
  {
    name: 'Settings',
    path: Paths.SETTINGS,
    icon: BookMarkedIcon,
  },
];
