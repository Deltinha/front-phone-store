import { FaTrash } from 'react-icons/fa'
import imagem from '../../assets/phone.jpg';

import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import React from "react";
import * as S from './style';
export default function CartProduct({product}){
    return (
        <S.ProductBox>
          <S.ProductImage>
            <img src={imagem} alt="imagem do produto" />
          </S.ProductImage>
          <S.ProductDescription>
            <h3>{product.model} {product.capacity} {product.color}</h3>
            <p>{product.brand} - {product.description}</p>
          </S.ProductDescription>
          <S.PoductPrice>
            <p>R$ {product.value}</p>
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