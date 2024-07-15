import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  padding-left: 10px;
`;

const InputContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: auto;
  flex: 1;
  margin-left: 10px;
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
  flex: 1;
`;

const StyledIcon = styled(Icon)`
  color: green;
`;

export const ExpirationDateRow = () => {
  const [text, onChangeText] = useState(new Date().toLocaleDateString());
  return (
    <StyledView>
      <Text>Expiration date:</Text>
      <InputContainer>
        <TouchableOpacity>
          <StyledIcon name="calendar" size={20} />
        </TouchableOpacity>

        <StyledInput
          onChangeText={onChangeText}
          value={text}
          placeholder="name"
          cursorColor="green"
        />
      </InputContainer>
    </StyledView>
  );
};
