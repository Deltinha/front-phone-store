import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8rem;
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
