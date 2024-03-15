import {
  BookmarkIcon,
  FileBarChartIcon,
  FileSlidersIcon,
  GraduationCapIcon,
  HomeIcon,
  ReceiptIcon,
} from 'lucide-react';

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
    icon: BookmarkIcon,
  },
  {
    name: 'Products',
    path: Paths.PRODUCTS,
    icon: GraduationCapIcon,
  },
  {
    name: 'Payment',
    path: Paths.PAYMENTS,
    icon: ReceiptIcon,
  },
  {
    name: 'Reports',
    path: Paths.REPORT,
    icon: FileBarChartIcon,
  },
  {
    name: 'Settings',
    path: Paths.SETTINGS,
    icon: FileSlidersIcon,
  },
];
