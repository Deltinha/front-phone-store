import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './style';
import ProductBox from '../../components/productBox';

// eslint-disable-next-line react/prop-types
function Product({ productId }) {
  const [product, setProduct] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:4000/product/${productId}`).then((res) => {
      setProduct(res.data[0]);
    });
  }, []);

  //   const phone = [{
  //     id: 1,
  //     model: 'iPhone 7',
  //     description: '',
  //     brand: 'Apple',
  //     color: 'Preto Matte',
  //     value: 134900,
  //     capacity: '32GB',
  //     image: 'https://imagens.trocafone.com/images/phones/iphone7-black-1.jpg',
  //   }];
  return (
    <S.Container>
      {(product)
        ? <ProductBox product={product} />
        : <p>produto indisponível</p>}
    </S.Container>
  );
}
export default Product;
