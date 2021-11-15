/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 100px;
`;

export const Cart = styled.div`
    position: relative;
    width: 65vw;
    height: auto;
    min-height: 500px;
    background-color: white;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px var(--secondary);

    box-sizing: border-box;
    padding: 25px 20px 75px 20px;
    border-radius: 4px;
    display: inline-flex;
    flex-direction: column;
    gap: 15px;
`;

export const CartTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: #464646;
  padding: 10px 0 20px 20px;
  box-sizing: border-box;
  text-align: left;
  width: 60vw;
`;


export const ConfirmPurchase = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 2px;
color: white;
height: 34px;
width: 220px;
background-color: var(--primary);
position: absolute;
right: 25px;
bottom: 25px;
font-size: 18px;
`;
