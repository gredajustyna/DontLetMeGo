import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, Image} from 'react-native';
import {Category} from '../types/Category';
import styled from 'styled-components';
import {mapCategoryToPhoto} from '../utils/mapCategoryToPhoto';
import {ArrowButton} from './ArrowButton';

const StyledImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface CategoryRowProps {
  currentCategory: Category;
  setCurrentCategory: Dispatch<SetStateAction<Category>>;
  categories: Category[];
}

export const CategoryRow = ({
  currentCategory,
  setCurrentCategory,
  categories,
}: CategoryRowProps) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const toNextCategory = (): void => {
    if (currentCategoryIndex === categories.length - 1) {
      setCurrentCategoryIndex(0);
    } else {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    }
    setCurrentCategory(categories[currentCategoryIndex]);
  };

  const toPreviousCategory = (): void => {
    if (currentCategoryIndex === 0) {
      setCurrentCategoryIndex(0);
    } else {
      setCurrentCategoryIndex(categories.length - 1);
    }
    setCurrentCategory(categories[currentCategoryIndex]);
  };

  return (
    <StyledView>
      <ArrowButton onPress={() => toPreviousCategory()} symbol="<" />
      <StyledImage source={mapCategoryToPhoto(currentCategory)} />
      <ArrowButton onPress={() => toNextCategory()} symbol=">" />
    </StyledView>
  );
};
