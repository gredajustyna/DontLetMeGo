import React from 'react';
import type {ReactElement} from 'react';
import {Food} from '../types/Food.ts';
import '../assets/images/index.ts';
import uuid from 'react-native-uuid';

import {
  FlatList,
  SafeAreaView,
  useColorScheme,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Category} from '../types/Category';
import {FoodRow} from '../components/FoodRow';
import {useDispatch, useSelector} from 'react-redux';
import {foodSelector} from '../store/app.selector.ts';

export const MainPage = ({navigation}): ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const food = useSelector(foodSelector);
  const sampleFood: Food = {
    id: uuid.v4().toString(),
    name: 'milk',
    category: Category.DAIRY,
    expirationDate: new Date(),
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
    padding: '4px',
  };

  console.log(food);

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        {food.map(item => (
          <FoodRow food={item} />
        ))}
      </ScrollView>
      <FoodRow food={sampleFood} />
      <FlatList data={food} renderItem={({item}) => <FoodRow food={item} />} />
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
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'lighter'}}>
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
