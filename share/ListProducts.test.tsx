import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Product } from '../model/Product';
import ListProductsPage from './ListProducts';

const navigateMock = vi.fn();
const useTitleMock = vi.fn();
const useProductsMock = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}));

vi.mock('../hooks/useTitle', () => ({
  useTitle: (title: string) => useTitleMock(title),
}));

vi.mock('../hooks/useProducts', () => ({
  useProducts: (url: string) => useProductsMock(url),
}));

vi.mock('../components/ProductView', () => ({
  default: ({
    product,
    onDelete,
    onEdit,
  }: {
    product: Product;
    onDelete?: (product: Product) => void;
    onEdit?: (product: Product) => void;
  }) => (
    <div data-testid={`product-${product.id}`}>
      <span>{product.name}</span>
      <button onClick={() => onDelete?.(product)}>Delete {product.id}</button>
      <button onClick={() => onEdit?.(product)}>Edit {product.id}</button>
    </div>
  ),
}));

describe('ListProductsPage', () => {
  const initialProducts: Product[] = [
    { id: 1, name: 'Phone', price: 100, description: 'Smart phone' },
    { id: 2, name: 'Laptop', price: 250, description: 'Work laptop' },
  ];

  beforeEach(() => {
    navigateMock.mockReset();
    useTitleMock.mockReset();
    useProductsMock.mockImplementation(() => {
      const [products, setProducts] = useState<Product[]>([...initialProducts]);

      return {
        products,
        setProducts,
      };
    });
  });

  it('renders the page, title hook, and total price', () => {
    render(<ListProductsPage />);

    expect(useTitleMock).toHaveBeenCalledWith('List-Products');
    expect(useProductsMock).toHaveBeenCalledWith('http://localhost:9000/secure_products');
    expect(screen.getByRole('heading', { name: 'List Products' })).toBeInTheDocument();
    expect(screen.getByText('Total Price: 350')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Laptop')).toBeInTheDocument();
  });

  it('toggles the info message visibility', async () => {
    const user = userEvent.setup();

    render(<ListProductsPage />);

    expect(screen.getByText('Demo for ListProducts')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Hide' }));

    expect(screen.queryByText('Demo for ListProducts')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show' })).toBeInTheDocument();
  });

  it('removes a product from the page when delete is triggered', async () => {
    const user = userEvent.setup();

    render(<ListProductsPage />);

    await user.click(screen.getByRole('button', { name: 'Delete 1' }));

    expect(screen.queryByText('Phone')).not.toBeInTheDocument();
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Total Price: 250')).toBeInTheDocument();
  });

  it('navigates to edit with the selected product in route state', async () => {
    const user = userEvent.setup();

    render(<ListProductsPage />);

    await user.click(screen.getByRole('button', { name: 'Edit 2' }));

    expect(navigateMock).toHaveBeenCalledWith('/products/2', {
      state: { product: initialProducts[1] },
    });
  });
});
