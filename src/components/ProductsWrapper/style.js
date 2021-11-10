import styled from 'styled-components';

const ProductsWrapper = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
`;

const ProductsTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #464646;
  padding: 10px 0 20px 0;
  box-sizing: border-box;
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

export { ProductsWrapper, ProductsTitle, ProductsList, NoProductsFound, LoaderWrapper };
