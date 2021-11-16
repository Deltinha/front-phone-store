import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 100px;
    min-height: calc(100vh - 50px);

`;

export const Cart = styled.div`
    position: relative;
    width: 65vw;
    height: auto;
    min-height: 500px;
    background-color: white;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px var(--secondary);

    box-sizing: border-box;
    padding: 25px 20px 75px 20px;
    border-radius: 4px;
    display: inline-flex;
    flex-direction: column;
    gap: 15px;
`;

export const CartTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: #464646;
  padding: 10px 0 20px 20px;
  box-sizing: border-box;
  text-align: left;
  width: 60vw;
`;

export const CleanCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    color: var(--detail);
    height: 42px;
    width: 220px;
    background-color: white;
    border: 1px solid var(--detail);
    position: absolute;
    left: 25px;
    bottom: 25px;
    font-size: 18px;
    &:hover {
    transition: all 0.3s;
    border: 1.5px solid var(--primary);
    color: var(--primary);
    font-weight: 500;
    cursor: pointer;
  }
`;
export const IsEmpt = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    > p{
        font-size: 20px;
        text-align: center;
        font-weight: 500;
        color: var(--text);
    }
    a {
      color: var(--detail);
      &:hover{
        color: var(--primary);
      }
    }

`;
