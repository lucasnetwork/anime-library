/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {StatusBar, Text, TouchableOpacity, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import StackNavigation from './routes/stack';
import styles from './styles';
import ContextProvider from './services/context';

const App = () => {
  const isDarkMode = useColorScheme() !== 'dark';
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  return (
    <ContextProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#CC0000"
      />
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>

      <TouchableOpacity
        style={styles.containerButtonAdd}
        onPress={() => navigationRef.current?.navigate('Cadastrar Anime')}>
        <Text style={styles.containerButtonAddText}>+</Text>
      </TouchableOpacity>
    </ContextProvider>
  );
};

export default App;
