import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Word from './Word'; 
import '@testing-library/jest-dom';

describe('Word', () => {
  it('deve renderizar sem erros', () => {
    const { container } = render(<Word />); 
    expect(container).toBeInTheDocument(); 
  });
});
