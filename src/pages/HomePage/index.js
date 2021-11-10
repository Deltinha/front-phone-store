import CategoriesSideBar from '../../components/CategoriesSidebar';
import ProductsWrapper from '../../components/ProductsWrapper';
import * as S from './style';

export default function HomePage() {
  return (
    <S.HomePage>
      <CategoriesSideBar />
      <ProductsWrapper />
    </S.HomePage>
  );
}
