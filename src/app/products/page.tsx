import { Metadata } from 'next';
import products from '@/data/products.json';
import ProductList from '@/components/ProductList';

export const metadata: Metadata = {
  title: 'Products List',
  description: 'List of all available products',
};

export const dynamic = 'force-dynamic';
export const revalidate = 30;

export default function ProductsPage() {
  return <ProductList products={products} />;
} 