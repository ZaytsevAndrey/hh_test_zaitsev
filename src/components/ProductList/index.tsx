'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { Container, ProductCard, ProductName, ProductPrice, RefreshButton } from './styles';
import { getProducts } from '@/utils/api';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products: initialProducts }: ProductListProps) => {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const newProducts = await getProducts();
      setProducts(newProducts);
      console.log('Текущий список товаров:', newProducts);
      alert('Список товаров выведен в консоль!');
    } catch (error) {
      console.error('Failed to refresh products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <RefreshButton onClick={handleRefresh} disabled={isLoading}>
        {isLoading ? 'Обновление...' : 'Обновить список'}
      </RefreshButton>
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <ProductCard>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        </Link>
      ))}
    </Container>
  );
};

export default ProductList; 