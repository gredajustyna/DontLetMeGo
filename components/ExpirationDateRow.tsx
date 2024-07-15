import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarPicker from 'react-native-calendar-picker';

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

const CalendarContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80px;
  z-index: 1;
`;

interface ExpirationDateRowProps {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

export const ExpirationDateRow = ({
  selectedDate,
  setSelectedDate,
}: ExpirationDateRowProps) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  return (
    <StyledView>
      <Text>Expiration date:</Text>
      <InputContainer>
        <TouchableOpacity
          onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
          <StyledIcon name="calendar" size={20} />
        </TouchableOpacity>
        {isCalendarVisible && (
          <CalendarContainer>
            <CalendarPicker
              onDateChange={date => {
                setSelectedDate(date.toLocaleDateString());
                setIsCalendarVisible(false);
              }}
              startFromMonday
              selectedDayColor="green"
              minDate={new Date()}
            />
          </CalendarContainer>
        )}
        <StyledInput
          editable={false}
          value={selectedDate}
          placeholder="name"
          cursorColor="green"
        />
      </InputContainer>
    </StyledView>
  );
};
