import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AddButton} from '../components/AddButton';
import {CategoryRow} from '../components/CategoryRow';
import {ExpirationDateRow} from '../components/ExpirationDateRow';
import {FoodNameRow} from '../components/FoodNameRow';
import {Category} from '../types/Category';
import {useDispatch} from 'react-redux';
import {Food} from '../types/Food';
import uuid from 'react-native-uuid';
import {addFood} from '../store/app.actions';

const IconContainer = styled(View)`
  width: 100%;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: start;
  display: flex;
`;

const CATEGORIES = Object.values(Category);

export const AddPage = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString(),
  );
  const dispatch = useDispatch();
  const isAddButtonDisabled = text.length === 0;

  const handleAddButtonPress = (): void => {
    const food: Food = {
      id: uuid.v4().toString(),
      name: text,
      category: selectedCategory,
      expirationDate: selectedDate,
    };
    dispatch(addFood(food));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <IconContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-left" size={20} color="green" />
        </TouchableOpacity>
      </IconContainer>
      <FoodNameRow text={text} onChangeText={onChangeText} />
      <CategoryRow
        categories={CATEGORIES}
        currentCategory={selectedCategory}
        setCurrentCategory={setSelectedCategory}
      />
      <ExpirationDateRow
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AddButton
        onPress={handleAddButtonPress}
        disabled={isAddButtonDisabled}
      />
    </SafeAreaView>
  );
};
