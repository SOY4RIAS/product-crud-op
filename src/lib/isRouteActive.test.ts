import { describe, expect, it } from 'vitest';

import { isRouteActive } from '@/lib/isRouteActive';

describe('isRouteActive', () => {
  it('should return true when the given pathname is equal to the given path', () => {
    const pathname = '/products';
    const path = '/products';
    const result = isRouteActive(pathname, path);
    expect(result).toBe(true);
  });

  it('should return false when the given pathname is empty', () => {
    const pathname = '';
    const path = '/products';
    const result = isRouteActive(pathname, path);
    expect(result).toBe(false);
  });
});
