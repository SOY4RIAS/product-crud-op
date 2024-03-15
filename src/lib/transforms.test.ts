import { describe, expect, it } from 'vitest';

import { transformCurrency } from '@/lib/transforms';

describe('transforms', () => {
  it('transformCurrency', () => {
    const value = 1000;
    const result = transformCurrency(value.toString());
    expect(result).toBe('$1,000.00');
  });
});
