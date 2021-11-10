import styled from 'styled-components';

export const ProductDetail = styled.div`
display: inline-flex;
div {
    display: inline-flex;
    flex-direction: column;
    gap: 0.4rem;
    h3 {
        margin: 0.2rem 0;
        font-size: 1.1rem;
    }
}
`;
export const ProductImage = styled.img`
width: 24rem;
margin: 1rem;
`;
export const Title = styled.h1`
    font-size: 1.4rem;
    font-weight: 700;
    margin: 1rem 0;
    color: var(--primary)
`;
