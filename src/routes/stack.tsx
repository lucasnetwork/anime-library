import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import React from 'react';
import AddAnime from '../screens/Main/AddAnime';
const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Biblioteca" component={Main} />
    <Stack.Screen name="Cadastrar Anime" component={AddAnime} />
  </Stack.Navigator>
);

export default StackNavigation;
