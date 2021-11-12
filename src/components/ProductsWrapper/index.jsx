/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { getProducts } from '../../services/phone-store-api';
import ProductCard from '../ProductCard';
import * as S from './style';

export default function ProductsWrapper({
  products, setProducts, setIsLoading, isLoading,
}) {
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);
  return (
    <S.ProductsWrapper>
      <S.ProductsTitle>
        <span>Celulares em oferta</span>
      </S.ProductsTitle>
      <S.ProductsList>
        {isLoading && (
          <S.LoaderWrapper>
            <Loader type="Oval" color="#00BFFF" height={110} width={110} />
          </S.LoaderWrapper>
        )}
        {products.length > 0 && (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )))}
        {products.length === 0 && !isLoading && (
          <S.NoProductsFound>Nenhum produto encontrado</S.NoProductsFound>
        )}
      </S.ProductsList>
    </S.ProductsWrapper>
  );
}
