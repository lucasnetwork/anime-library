/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, Text, TouchableOpacity, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './routes/stack';
import styles from './styles';
const App = () => {
  const isDarkMode = useColorScheme() !== 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>

      <TouchableOpacity style={styles.containerButtonAdd}>
        <Text style={styles.containerButtonAddText}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default App;
