/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CheckoutButton = styled.button`
    display: flex;
    background-color: var(--detail);
    width: 230px;
    height: 50px;
    cursor: pointer;
    position: absolute;
    right: 25px;
    bottom: 25px;

    > span {
        font-size: 15px;
        font-weight: 700;
        margin: auto;
    }

    :hover {
      svg {
        animation: bounce 300ms ease infinite;
        @keyframes bounce {
        0% { transform:translateY(2%); }
        50% { transform:translateY(-2%); }
        100% { transform:translateY(2%); }
        }
      }
    }
`;

export const CheckoutIconWrapper = styled.div`
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
