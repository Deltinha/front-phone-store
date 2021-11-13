import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const TopBar = styled.div`
    position: fixed;
    width: 100%;
    height: 4rem;
    top: 0;
    left: 0;
    background-color: var(--secondary);
    text-align: center;
    display: flex;
    justify-content: space-between;

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
`;

export const LogButtonWrapper = styled.div`
    background-color: #ff6b8f;
`;

export const RegisterButtonWrapper = styled.div`
    background-color: #ff9ab4;
`;
