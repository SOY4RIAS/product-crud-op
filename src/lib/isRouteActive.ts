import { Paths } from '@/lib/constants';

const nestedRoutes: Record<string, string[]> = {
  [Paths.PRODUCTS]: [
    Paths.PRODUCTS,
    Paths.PRODUCT_CREATE,
    Paths.PRODUCT_UPDATE.replace('/:id', ''),
  ],
};

export const isRouteActive = (pathname: string, path: string): boolean => {
  const nestedRoute = nestedRoutes[path];

  if (nestedRoute) {
    return !!nestedRoute.find((route) => {
      return pathname.startsWith(route);
    });
  }

  return pathname === path;
};
