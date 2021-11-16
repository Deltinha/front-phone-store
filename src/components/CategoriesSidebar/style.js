import styled from 'styled-components';

const Sidebar = styled.div`
  height: 100%;
  min-height: 24rem;
  width: 18rem;
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--secondary);
  box-sizing: border-box;
  padding: 25px 20px 30px 20px;
  border-radius: 4px;
  background-color: white;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

`;

const CategoriesTitle = styled.span`
  font-size: 18px;
  padding: 2px;
  font-weight: 600;
  border-color: var(--primary);
  border-style: solid;
  border-width: 0 0 1px 0;
  color: var(--primary);

`;

const CategorieName = styled.span`
  font-size: 15px;
  color: var(--text);
  &:hover{
    cursor: pointer;
    font-weight: 500;
    color: black;
  }
`;

export { Sidebar, CategoriesTitle, CategorieName };
