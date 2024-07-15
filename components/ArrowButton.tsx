import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styled from 'styled-components';

const ButtonContainer = styled(View)`
  border-radius: 50px;
  background-color: green;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledText = styled(Text)`
  color: white;
`;

interface ArrowButtonProps {
  symbol: string;
  onPress: () => void;
}

export const ArrowButton = ({symbol, onPress}: ArrowButtonProps) => {
  return (
    <ButtonContainer>
      <TouchableOpacity onPress={onPress}>
        <StyledText>{symbol}</StyledText>
      </TouchableOpacity>
    </ButtonContainer>
  );
};
