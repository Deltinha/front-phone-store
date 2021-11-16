import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const TopBar = styled.div`
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 4rem;
    top: 0;
    left: 0;
    background-color: var(--secondary);
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
    }

    > span {
        background-color: #ff83a2;
        height: 4rem;
        width: 22rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 3rem;
    }
`;

export const HomeButtonWrapper = styled.div`
    background-color: var(--primary);
`;

export const RightButtonsWrapper = styled.div`
    display: flex;
    align-items: center;

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
    background-color: var(--primary);
    position: relative;
`;

export const LogButtonWrapper = styled.div`
    background-color: #ff6b8f;
`;

export const RegisterButtonWrapper = styled.div`
    background-color: #ff9ab4;
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
