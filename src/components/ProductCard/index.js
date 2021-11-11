import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import getColorName from '../../services/color-name-api.js';
import * as S from './style.js';

export default function ProductCard({ product }) {
  const { model, capacity, color, brand, url, id } = product;
  const value = product.value / 100;
  const [colorName, setColorName] = useState('');
  const history = useHistory();

  useEffect(() => {
    getColorName(color)
      .then((res) => {
        setColorName(res.data?.colors[0].name);
      })
      .catch(() => setColorName(''));
  }, []);

  return (
    <S.ProductCard onClick={() => history.push(`/products/${id}`)}>
      <img src={url} />
      <div>
        <S.ProductBrand>{brand}</S.ProductBrand>
        <S.ProductTitle>
          {model} {capacity} {colorName}
        </S.ProductTitle>
        <S.PriceTitle>A partir de</S.PriceTitle>
        <S.Price>
          <S.CurrencySign>R$</S.CurrencySign>
          <S.PriceValue>
            {value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </S.PriceValue>
        </S.Price>
      </div>
    </S.ProductCard>
  );
}
