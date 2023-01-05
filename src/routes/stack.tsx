import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import React from 'react';
const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Biblioteca" component={Main} />
  </Stack.Navigator>
);

export default StackNavigation;
