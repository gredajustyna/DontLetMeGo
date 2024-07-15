import React from 'react';
import {View, TextInput} from 'react-native';
import styled from 'styled-components';

const InputContainer = styled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
`;

const StyledInput = styled(TextInput)`
  height: 40px;
  border-width: 1px;
  padding: 10px;
  background-color: '#fff';
  color: '#000';
  border-radius: 12px;
  margin-left: 10px;
  margin-right: 10px;

  &:focus {
    border-color: green;
  }
`;

interface FoodNameRowProps {
  text: string;
  onChangeText: (text: string) => void;
}

export const FoodNameRow = ({text, onChangeText}: FoodNameRowProps) => {
  return (
    <InputContainer>
      <StyledInput
        onChangeText={onChangeText}
        value={text}
        placeholder="name"
      />
    </InputContainer>
  );
};
