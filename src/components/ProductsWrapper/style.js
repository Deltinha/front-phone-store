import styled from 'styled-components';

const ProductsWrapper = styled.div`
  width: calc(100% - 22rem);
  display: flex;
  flex-direction: column;
`;

const ProductsTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: #000;
  padding: 10px 0 20px 20px;
  box-sizing: border-box;
  text-align: left;
  width: 70%;
`;

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const NoProductsFound = styled.span`
  width: 100%;
  font-size: 20px;
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;

export {
  ProductsWrapper, ProductsTitle, ProductsList, NoProductsFound, LoaderWrapper,
};
