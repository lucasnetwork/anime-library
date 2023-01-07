import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import React from 'react';
import AddAnime from '../screens/Main/AddAnime';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import Anime from '../screens/Main/Anime';
const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={({navigation}) => ({
      headerLeft: ({canGoBack}) =>
        canGoBack && (
          <TouchableOpacity
            style={{marginRight: 8}}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" color="#fff" size={32} />
          </TouchableOpacity>
        ),
      headerStyle: {
        backgroundColor: '#CC0000',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    })}>
    <Stack.Screen name="Biblioteca" component={Main} />
    <Stack.Screen
      name="Anime"
      options={{headerShown: false}}
      component={Anime}
    />
    <Stack.Screen name="Cadastrar Anime" component={AddAnime} />
  </Stack.Navigator>
);

export default StackNavigation;
