import {ScrollView, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';
import React from 'react';
const AddAnime = () => (
  <ScrollView style={styles.container}>
    <TouchableOpacity
      style={styles.buttonGetImage}
      onPress={async () => {
        const result = await launchImageLibrary();
      }}
    />
  </ScrollView>
);

export default AddAnime;
