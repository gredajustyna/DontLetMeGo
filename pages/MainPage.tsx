import React from 'react';
import type {ReactElement} from 'react';
import '../assets/images/index.ts';

import {
  FlatList,
  SafeAreaView,
  useColorScheme,
  Text,
  TouchableOpacity,
} from 'react-native';

import {FoodRow} from '../components/FoodRow';
import {useSelector} from 'react-redux';
import {foodSelector} from '../store/app.selector.ts';

export const MainPage = ({navigation}): ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';
  const food = useSelector(foodSelector);

  // const StyledList = styled(FlatList)`
  //   padding-top: 80px;
  // `;

  console.log(food);

  return (
    <SafeAreaView>
      <FlatList
        data={food}
        renderItem={({item}) => <FoodRow food={item} key={item.id} />}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          position: 'absolute',
          bottom: 20,
          right: 20,
          height: 50,
          backgroundColor: 'green',
          borderRadius: 100,
          zIndex: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 5,
        }}
        onPress={() => navigation.navigate('Add')}>
        <Text>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
