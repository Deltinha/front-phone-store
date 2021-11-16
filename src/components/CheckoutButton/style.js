import styled from 'styled-components';

export const CheckoutButton = styled.button`
    display: flex;
    background-color: var(--detail);
    width: 230px;
    height: 42px;
    cursor: pointer;
    position: absolute;
    right: 25px;
    bottom: 25px;
    border-radius: 2px;
    > span {
      font-size: 18px;
        margin: auto;
        color: white;
        :hover{
          font-weight: 500;
        }
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
    background-color: var(--detail);
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    > svg {
        font-size: 30px;
    }
`;
