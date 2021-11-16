import styled from 'styled-components';

export const Center = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.6rem 4.4rem;
`;

export const Logo = styled.img`
  width: 100px;
  margin-top: 6rem;
`;

export const PageTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: #000;
  padding: 10px 0 20px 20px;
  box-sizing: border-box;
  text-align: left;
  width: 70%;
`;

export const LinkTo = styled.div`
 a {
    margin-top: 0;
    color: var(--detail);
    font-size: 15px;
    &:hover {
      transition: all 0.3s;
      color: var(--primary);
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  align-items: center;

  input {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    font-size: 16px;
    border-radius: 2px;
    height: 42px;
    background-color: white;
    border: 1px solid var(--detail);  
    margin: 5px;      
  }

  button {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    font-size: 18px;
    border-radius: 2px;
    height: 42px;
    background-color: var(--detail);
    margin: 5px;
    color: white;

    &:hover {
      transition: all 0.3s;
      background-color: var(--primary);
      font-weight: 500;
      cursor: pointer;
    }    
  }
`;

export const DivRegister = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
