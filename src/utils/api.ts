import { Product } from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/api/products`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/api/products/${id}`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
}; 