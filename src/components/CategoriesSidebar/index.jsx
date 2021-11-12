/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/phone-store-api';
import ColorPickerCategorie from '../ColorPickerCategorie';
import * as S from './style';

function categoriesOrganizer(categories) {
  const preferredOrder = ['model', 'color'];
  const sortedCategories = [];

  for (let i = 0; i < preferredOrder.length; i += 1) {
    categories.forEach((categorie, index) => {
      if (categorie.type === preferredOrder[i]) {
        sortedCategories.push(...categories.splice(index, 1));
      }
    });
  }
  return sortedCategories.concat(categories);
}

export default function CategoriesSideBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(categoriesOrganizer(res.data));
      });
  }, []);

  return (
    <S.Sidebar>
      {categories.map((categorie, index) => {
        if (categorie.type === 'color') {
          return (
            <div key={index}>
              <S.CategoriesTitle>{categorie.type}</S.CategoriesTitle>
              <ColorPickerCategorie colors={categorie.names} />
            </div>
          );
        }
        return (
          <div key={index}>
            <S.CategoriesTitle>{categorie.type}</S.CategoriesTitle>
            {categorie.names.map((name, key) => (
              <span key={key}>{name}</span>
            ))}
          </div>
        );
      })}
    </S.Sidebar>
  );
}
