/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './assets/images/index.ts';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';
import {MainPage} from './pages/MainPage.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddPage} from './pages/AddPage.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Add"
              component={AddPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default App;
