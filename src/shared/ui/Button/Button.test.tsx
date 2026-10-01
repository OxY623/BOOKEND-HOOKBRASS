import { render, screen } from '@testing-library/react';
import Button from './Button'; // без расширения .tsx

describe('Button component', () => {
  test('displays the correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('applies the correct variant and size classes', () => {
    render(<Button variant="secondary" size="lg">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-[#1a1814]/50');
    expect(button).toHaveClass('px-8 py-4 text-lg rounded-lg');
  });

  test('applies the correct classes for icon variant', () => {
    render(<Button variant="icon" size="sm">Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-black/20');
    expect(button).toHaveClass('p-2 rounded-md');
  });

  test('applies the correct classes for ghost variant', () => {
    render(<Button variant="ghost" size="md">Ghost</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('px-6 py-3 text-base rounded-lg');
  });

  test('applies additional className prop', () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  
});


