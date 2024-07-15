import React, {useState} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AddButton} from '../components/AddButton';
import {CategoryRow} from '../components/CategoryRow';
import {ExpirationDateRow} from '../components/ExpirationDateRow';

const IconContainer = styled(View)`
  width: 100%;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: start;
  display: flex;
`;

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

export const AddPage = () => {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={{height: '100%'}}>
      <IconContainer>
        <Icon name="chevron-left" size={20} color="green" />
      </IconContainer>
      <InputContainer>
        <StyledInput
          onChangeText={onChangeText}
          value={text}
          placeholder="name"
        />
      </InputContainer>
      <CategoryRow />
      <ExpirationDateRow />
      <AddButton />
    </SafeAreaView>
  );
};
