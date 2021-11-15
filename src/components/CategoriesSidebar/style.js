import styled from 'styled-components';

const Sidebar = styled.div`
  height: 100%;
  width: 252px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--secondary);
  box-sizing: border-box;
  padding: 25px 20px 30px 20px;
  border-radius: 4px;
  background-color: white;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

`;

const CategoriesTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  border-color: var(--primary);
  border-style: solid;
  border-width: 0 0 1px 0;
  color: var(--primary);
`;

const CategorieName = styled.span`
  font-size: 15px;
  cursor: pointer;
`;

export { Sidebar, CategoriesTitle, CategorieName };
