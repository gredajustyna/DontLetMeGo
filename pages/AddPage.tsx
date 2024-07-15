import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const InputContainer = styled.div``;

export const AddPage = (): ReactElement => {
  return (
    <SafeAreaView>
      <IconContainer>
        <Icon name="rocket" size={30} color="#900" />
      </IconContainer>
    </SafeAreaView>
  );
};
