/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ColorPickerCategorie = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ColorCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ color }) => (color)};
  border: black 1px solid;
`;
