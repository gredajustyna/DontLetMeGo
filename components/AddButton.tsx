import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

const ButtonContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: green;
  position: absolute;
  bottom: 20px;
`;

const StyledButton = styled(TouchableOpacity)`
  background-color: green;
  border-radius: 12px;
  padding: 10px;

  width: 80px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Text)`
  color: white;
`;

interface AddButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

export const AddButton = ({onPress, disabled = false}: AddButtonProps) => {
  return (
    <ButtonContainer>
      <StyledButton onPress={onPress} disabled={disabled}>
        <StyledText>Add</StyledText>
      </StyledButton>
    </ButtonContainer>
  );
};
