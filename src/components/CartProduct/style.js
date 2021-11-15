import styled from "styled-components";

export const ProductImage = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: auto;
        height: 130px;
    }
`;
export const ProductBox = styled.div`
    width: 100%;
    height: auto;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px var(--secondary);
    display: inline-flex;
    align-items: center;
    gap: 20px;
`;
export const ProductDescription = styled.div`
    width: calc(100% - 380px);
    h3{
        font-size: 24px;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 8px;
    }
    p{
        font-size: 18px;        
    }
`;
export const PoductPrice = styled.div`
    width: 130px;
    p {
        font-size: 20px;
    }
`;

export const DeleteButton = styled.div`
    margin-top: 15px;
`;

export const Quantity = styled.div`
    width: 50px;
    p{
        font-size: 20px;   
        color: black;     
    }
    width: 100px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    color: var(--primary);    
    div {
        width: 30px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;