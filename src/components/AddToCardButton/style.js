/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AddToCartButton = styled.button`
    display: flex;
    background-color: #fdac75;
    width: 230px;
    height: 50px;
    cursor: pointer;

    > span {
        font-size: 15px;
        font-weight: 700;
        margin: auto;
    }
`;

export const CartIconWrapper = styled.div`
    background-color: var(--primary);
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
        font-size: 30px;
    }
`;
