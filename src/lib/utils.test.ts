import { describe, expect, it } from 'vitest';

import { cn } from '@/lib/utils';

describe('utils', () => {
  it('cn', () => {
    const result = cn('a', 'b', 'c');
    expect(result).toBe('a b c');
  });

  it('should return a string with the merged class names when given valid class values', () => {
    const result = cn('class1', 'class2');
    expect(typeof result).toBe('string');
    expect(result).toContain('class1');
    expect(result).toContain('class2');
  });
});
