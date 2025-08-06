import FontAwesomeIcon from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Reanimated, {AnimatedStyle} from 'react-native-reanimated';
import styled from 'styled-components';

// const StyledText = styled(Text)`
//   max-height: 100px;
//   align-items: center;
//   background-color: red;
//   color: white;
//   width: 80px;
//   height: max-content;
//   margin-bottom: 8px;
//   margin-right: -20px;
// `;

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  size: 80px;
`;

interface DeleteSwipeableProps {
  styleAnimation: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
}

export const DeleteSwipeable = (props: DeleteSwipeableProps) => {
  return (
    <Reanimated.View
      style={[
        props.styleAnimation,
        {
          backgroundColor: 'red',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: '100%',
          paddingRight: 20,
        },
      ]}>
      <StyledIcon name="trash" iconStyle="solid" />
    </Reanimated.View>
  );
};
