import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {Category} from '../types/Category';
import styled from 'styled-components';
import {mapCategoryToPhoto} from '../utils/mapCategoryToPhoto';
import {ArrowButton} from './ArrowButton';

const CATEGORIES = Object.values(Category);

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

export const CategoryRow = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(
    CATEGORIES[currentCategoryIndex],
  );

  const toNextCategory = (): void => {
    if (currentCategoryIndex === CATEGORIES.length - 1) {
      setCurrentCategoryIndex(0);
    } else {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    }
    setCurrentCategory(CATEGORIES[currentCategoryIndex]);
  };

  const toPreviousCategory = (): void => {
    if (currentCategoryIndex === 0) {
      setCurrentCategoryIndex(0);
    } else {
      setCurrentCategoryIndex(CATEGORIES.length - 1);
    }
    setCurrentCategory(CATEGORIES[currentCategoryIndex]);
  };

  return (
    <StyledView>
      <ArrowButton onPress={() => toPreviousCategory()} symbol="<" />
      <StyledImage source={mapCategoryToPhoto(currentCategory)} />
      <ArrowButton onPress={() => toNextCategory()} symbol=">" />
    </StyledView>
  );
};
