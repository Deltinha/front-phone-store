/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { getCategories, getProductsByCategorie } from '../../services/phone-store-api';
import ColorPickerCategorie from '../ColorCategorie';
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

export default function CategoriesSideBar({
  setProducts, setIsLoading,
}) {
  const [categories, setCategories] = useState([]);

  function updateProducts(categorie, value) {
    setIsLoading(true);
    getProductsByCategorie({ categorie, value })
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }

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
              <ColorPickerCategorie colors={categorie.names} updateProducts={updateProducts} />
            </div>
          );
        }
        return (
          <div key={index}>
            <S.CategoriesTitle>{categorie.type}</S.CategoriesTitle>
            {categorie.names.map((name, key) => (
              <S.CategorieName
                key={key}
                onClick={() => updateProducts(categorie.type, name)}
              >
                {name}
              </S.CategorieName>
            ))}
          </div>
        );
      })}
    </S.Sidebar>
  );
}
