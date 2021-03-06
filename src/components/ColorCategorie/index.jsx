/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './style';

export default function ColorPickerCategorie({ colors, updateProducts }) {
  return (
    <S.ColorPickerCategorie>
      {colors.map((color, index) => (
        <S.ColorCircle
          onClick={() => updateProducts('color', color)}
          key={index}
          color={color}
        />
      ))}
    </S.ColorPickerCategorie>
  );
}
