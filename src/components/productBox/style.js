import styled from 'styled-components';

export const ProductDetail = styled.div`
    display: inline-flex;
    position: relative;
    > div {
        box-shadow: 6px 6px 15px 5px rgba(0, 0, 0, 0.1);
        position: absolute;
        width: 500px;
        height: 300px;
        right: 0;
        top: 50%;
        left: 80%;
        transform: translate(0, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 35px;
            h3 {
                margin: 0.2rem 0;
                font-weight: 700;
                font-size: 1.3rem;
                color: var(--primary);
            }
            
        background-color: var(--tertiary);
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    h4 {
        margin: 0;
        font-weight: 300;
        font-size: 1rem;
        width: 300px;
        text-align: center;
    }
`;

export const ProductImage = styled.img`
    width: 24rem;
    margin: 1rem;
    background-color: white;
    padding: 20px;
    box-sizing: initial !important;
    box-shadow: 6px 6px 15px 5px rgba(0, 0, 0, 0.1);
    border: solid 1px var(--secondary);
    border-radius: 4px;
`;
export const Title = styled.h1`
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    color: var(--primary)
`;
