import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Counter from './Counter';

describe('Counter', () => {
  it('renders the initial count', () => {
    render(<Counter initCount={5} />);

    expect(screen.getByRole('heading', { name: 'Count: 5' })).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toHaveValue(5);
  });

  it('increments the count when the button is clicked', async () => {
    const user = userEvent.setup();

    render(<Counter initCount={5} />);

    await user.click(screen.getByRole('button', { name: '++' }));

    expect(screen.getByRole('heading', { name: 'Count: 6' })).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toHaveValue(6);
  });

  it('updates the count when the input value changes', () => {
    render(<Counter initCount={5} />);

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, {
      target: { value: '12', valueAsNumber: 12 },
    });

    expect(screen.getByRole('heading', { name: 'Count: 12' })).toBeInTheDocument();
    expect(input).toHaveValue(12);
  });
});
