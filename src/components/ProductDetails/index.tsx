'use client';

import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import {
  Wrapper,
  Card,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  BackLink,
  ErrorCard,
  ErrorTitle,
  ErrorMessage
} from './styles';

interface ProductDetailsProps {
  product: Product | null;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const router = useRouter();

  if (!product) {
    return (
      <Wrapper>
        <BackLink onClick={() => router.back()}>
          ← Вернуться к списку
        </BackLink>
        <ErrorCard>
          <ErrorTitle>Ошибка</ErrorTitle>
          <ErrorMessage>Товар не найден</ErrorMessage>
        </ErrorCard>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <BackLink onClick={() => router.back()}>
        ← Вернуться к списку
      </BackLink>
      <Card>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductDescription>
          Описание товара №{product.id}
        </ProductDescription>
      </Card>
    </Wrapper>
  );
};

export default ProductDetails; 