import { memo } from 'react';
import {CategoryCardWrapper, CategoryCard as StyleCategoryCard, CategoryCardNumber, CategoryCardName} from '../styles/home';

type Props = {
  item: any;
  i: number;
}

const CategoryCard = ({ item, i }: Props) => {
  return (
    <CategoryCardWrapper>
      <StyleCategoryCard href={"/"}>
        <CategoryCardNumber>/0{i + 1}</CategoryCardNumber>
        <CategoryCardName>{item.name}</CategoryCardName>
      </StyleCategoryCard>
    </CategoryCardWrapper>
  )
};

export default memo(CategoryCard);
