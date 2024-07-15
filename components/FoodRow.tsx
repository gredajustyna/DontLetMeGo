import React from 'react';
import {View, Image, Text} from 'react-native';
import styled from 'styled-components';
import {Food} from '../types/Food';
import {mapCategoryToPhoto} from '../utils/mapCategoryToPhoto';

const StyledRow = styled(View)`
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  max-height: 100px;
  padding: 8px;
`;

const StyledImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

const NameRow = styled(View)`
  display: flex;
  flex-direction: column;
`;

interface FoodRowProps {
  food: Food;
}

export const FoodRow = ({food}: FoodRowProps) => {
  return (
    <StyledRow>
      <StyledImage source={mapCategoryToPhoto(food.category)} />
      <NameRow>
        <Text>{food.name}</Text>
        <Text>{food.expirationDate}</Text>
      </NameRow>
    </StyledRow>
  );
};
