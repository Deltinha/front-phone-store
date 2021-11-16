import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as S from './style';
import ProductBox from '../../components/productBox';
import { getProductById } from '../../services/phone-store-api';

function Product() {
  const [product, setProduct] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const productInfo = getProductById(productId);
    productInfo.then((res) => {
      setProduct(res.data);
    }).catch(() => {
      Swal.fire('Algo deu errado, por favor recarregue a página.');
    });
  }, []);

  return (
    <S.Container>
      {(product)
        ? <ProductBox product={product} />
        : (
          <S.IsEmpt>
            <p>
              Produto  indisponível.
              Dê uma olhada nas
              {' '}
              <Link to="/">nossas ofertas!</Link>
            </p>
          </S.IsEmpt>
        )}
    </S.Container>
  );
}
export default Product;
