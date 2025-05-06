import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hangman from './Hangman';
import '@testing-library/jest-dom';

describe('Hangman', () => {
  it('deve renderizar sem erros', () => {
    const { container } = render(<Hangman />);

    expect(container).toBeInTheDocument();
  });
});
