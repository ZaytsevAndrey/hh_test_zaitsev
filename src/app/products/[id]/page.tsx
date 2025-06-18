import { Metadata } from 'next';
import products from '@/data/products.json';
import ProductDetails from '@/components/ProductDetails';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find(p => p.id === params.id);
  
  return {
    title: product ? `${product.name} - Product Details` : 'Product Not Found',
    description: product ? `Details for ${product.name}` : 'Product not found',
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  return <ProductDetails product={product || null} />;
} 