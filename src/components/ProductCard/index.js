import * as S from './style.js';

export default function ProductCard({ product }) {
  const { model, capacity, color, brand, imageUrl } = product;
  const value = product.value / 100;
  return (
    <S.ProductCard>
      <img src={imageUrl} />
      <div>
        <S.ProductBrand>{brand}</S.ProductBrand>
        <S.ProductTitle>
          {model} {capacity} {color}
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
