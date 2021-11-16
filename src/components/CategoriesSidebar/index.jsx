/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ProductsContext from '../../contexts/productsContext';
import { getCategories, getProductsByCategory } from '../../services/phone-store-api';
import ColorPickerCategorie from '../ColorCategorie';
import * as S from './style';

function categoriesOrganizer(categories) {
  const preferredOrder = ['Brand', 'Color', 'Model'];
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
  const { setAreProductsLoading, setProducts } = useContext(ProductsContext);
  const [categories, setCategories] = useState([]);

  function updateProducts(category, value) {
    setProducts([]);
    setAreProductsLoading(true);
    getProductsByCategory({ category, value })
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        Swal.fire('Algo deu errado :( Por favor, recarregue a página.');
      })
      .finally(() => {
        setAreProductsLoading(false);
      });
  }

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(categoriesOrganizer(res.data));
      }).catch(() => {
        Swal.fire('Algo deu errado :( Por favor, recarregue a página.');
      });
  }, []);

  return (
    <S.Sidebar>
      {categories.map((category, index) => {
        if (category.type === 'Color') {
          return (
            <div key={index}>
              <S.CategoriesTitle>{category.type}</S.CategoriesTitle>
              <ColorPickerCategorie colors={category.names} updateProducts={updateProducts} />
            </div>
          );
        }
        return (
          <div key={index}>
            <S.CategoriesTitle>{category.type}</S.CategoriesTitle>
            {category.names.map((name, key) => (
              <S.CategorieName
                key={key}
                onClick={() => updateProducts(category.type.toLowerCase(), name)}
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
