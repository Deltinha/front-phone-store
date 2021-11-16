import styled from 'styled-components';

export const AddToCartButton = styled.button`
    display: flex;
    background-color: var(--primary);
    width: 230px;
    height: 42px;
    cursor: pointer;
    border-radius: 2px;
    > span {
      font-size: 16px;
        margin: auto;
        color: white;       
    }
    :hover {
        font-weight: 500;
        svg {
            animation: mymove 1s;
            @keyframes mymove {
                50% {transform: rotate(-12deg);}
            }
        }
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
        color: white;
    }
`;
