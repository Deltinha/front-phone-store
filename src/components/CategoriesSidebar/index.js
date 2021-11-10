import * as S from './style';

export default function CategoriesSideBar() {
  return (
    <S.Sidebar>
      <S.CategoriesTitle>Marca</S.CategoriesTitle>
      <span>marca1</span>
      <span>marca2</span>
      <S.CategoriesTitle>Cor</S.CategoriesTitle>
      <span>cor1</span>
      <span>cor2</span>
      <S.CategoriesTitle>Capacidade</S.CategoriesTitle>
      <span>128GB</span>
      <span>256GB</span>
    </S.Sidebar>
  );
}
