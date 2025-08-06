import React from 'react';
import {View, Image, Text} from 'react-native';
import styled from 'styled-components';
import {Food} from '../types/Food';
import {mapCategoryToPhoto} from '../utils/mapCategoryToPhoto';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import {DeleteSwipeable} from './DeleteSwipeable';

const StyledRow = styled(View)`
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  max-height: 100px;
  padding: 8px;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
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

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: drag.value + 50}],
    };
  });

  return <DeleteSwipeable styleAnimation={styleAnimation} />;
}

export const FoodRow = ({food}: FoodRowProps) => {
  return (
    <Swipeable
      friction={1}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      renderRightActions={RightAction}
      onSwipeableOpen={direction => {
        console.log(`Opening swipeable from the ${direction}`);
      }}>
      <StyledRow>
        <StyledImage source={mapCategoryToPhoto(food.category)} />
        <NameRow>
          <Text>{food.name}</Text>
          <Text>{food.expirationDate}</Text>
        </NameRow>
      </StyledRow>
    </Swipeable>
  );
};
