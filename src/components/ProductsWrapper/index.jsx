/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import UserContext from '../../contexts/userContext';
import ProductCard from '../ProductCard';
import * as S from './style';

export default function ProductsWrapper() {
  const { areProductsLoading, products, loadProducts } = useContext(UserContext);
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <S.ProductsWrapper>
      <S.ProductsTitle>
        <span>Celulares em oferta</span>
      </S.ProductsTitle>
      <S.ProductsList>
        {areProductsLoading && (
          <S.LoaderWrapper>
            <Loader type="Oval" color="#ff2768" height={110} width={110} />
          </S.LoaderWrapper>
        )}
        {products.length > 0 && (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )))}
        {products.length === 0 && !areProductsLoading && (
          <S.NoProductsFound>Nenhum produto encontrado</S.NoProductsFound>
        )}
      </S.ProductsList>
    </S.ProductsWrapper>
  );
}
