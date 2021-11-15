import { FaTrash } from 'react-icons/fa'
import imagem from '../../assets/phone.jpg';

import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import React from "react";
import * as S from './style';
export default function CartProduct({product}){
    const {
        model, capacity, value, description, color, brand, productImages,
      } = product;
      const firstImage = productImages.find((img) => img.perspective === 'front');

    return (
        <S.ProductBox>
          <S.ProductImage>
            <img src={firstImage.url} alt="imagem do produto" />
          </S.ProductImage>
          <S.ProductDescription>
            <h3>{product.model} {product.capacity} {product.color}</h3>
            <p>{product.brand} - {product.description}</p>
          </S.ProductDescription>
          <S.PoductPrice>
            <p>R$ {(product.value/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
          </S.PoductPrice>
          <S.Quantity>
            <div>           
              <AiOutlinePlusCircle/>            
            </div>
            <div>            
              <p>{product.quantity}</p>
              </div>
            <div>          
              <AiOutlineMinusCircle/>            
            </div>
          <S.DeleteButton>
              <FaTrash/>
            </S.DeleteButton>
          </S.Quantity>
        </S.ProductBox>
      )
}