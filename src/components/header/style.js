import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const TopBar = styled.div`
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 4rem;
    top: 0;
    left: 0;
    background: linear-gradient(to right, var(--primary), var(--detail));    
    text-align: center;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);

    & svg {
        font-size: 30px;
    }
`;

export const LeftButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        width: 4rem;
        padding-left: 2rem;
    }

    > span {
        font-family: 'Major Mono Display';
        height: 4rem;
        width: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 2rem;
    }
`;

export const HomeButtonWrapper = styled.div`
`;

export const RightButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        width: 4rem;
        cursor: pointer;
    }
`;

export const CartButtonWrapper = styled.div`
<<<<<<< HEAD
    background-color: var(--primary);
    position: relative;
=======
>>>>>>> main
`;

export const LogButtonWrapper = styled.div`
`;

export const RegisterButtonWrapper = styled.div`
`;

export const CartItemCount = styled.div`
    position: absolute;
    right: 25%;
    top: 25%;
    width: 18px;
    height: 18px;
    background-color: #fffce3;
    border-radius: 50%;    
    span {
        color: black;
        font-weight: 700;
        font-size: 12px;
    }
`;
