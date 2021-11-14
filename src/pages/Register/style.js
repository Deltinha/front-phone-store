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
  width: 200px;

`;

export const Register = styled.div`
 display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 1rem;
  a {
    margin-top: 0;
    color: var(--detail);
    font-size: 14px;
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
      height: 31px;
      margin: 10px;      
  }
  button {
    width: 70%;
      height: 31px;
      margin: 10px;  
      border-radius: 2px;
  }
`;

export const DivRegister = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
