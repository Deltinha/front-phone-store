import styled from 'styled-components';

const ProductCard = styled.div`
  width: 190px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #a7a7a7;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > img {
    height: 150px;
    object-fit: contain;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const ProductBrand = styled.span`
  font-size: 12px;
  margin-bottom: 8px;
`;

const ProductTitle = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const PriceTitle = styled.span`
  font-size: 11px;
  color: grey;
  margin-bottom: 3px;
`;

const Price = styled.div`
  color: #ff8800;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const CurrencySign = styled.span`
  font-size: 12px;
`;

const PriceValue = styled.span`
  font-size: 18px;
`;

export {
  ProductCard,
  ProductBrand,
  ProductTitle,
  Price,
  CurrencySign,
  PriceValue,
  PriceTitle,
};
