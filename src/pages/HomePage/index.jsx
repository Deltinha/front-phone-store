import React, { useState } from 'react';
import CategoriesSideBar from '../../components/CategoriesSidebar';
import ProductsWrapper from '../../components/ProductsWrapper';
import * as S from './style';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <S.HomePage>
      <CategoriesSideBar
        products={products}
        setProducts={setProducts}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <ProductsWrapper
        products={products}
        setProducts={setProducts}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </S.HomePage>
  );
}
