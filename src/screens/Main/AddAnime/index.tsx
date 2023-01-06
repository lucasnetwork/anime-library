import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';
import React, {useState} from 'react';
const AddAnime = () => {
  const [image, setImage] = useState('');

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonGetImage}
        onPress={async () => {
          try {
            const result = await launchImageLibrary({
              mediaType: 'photo',
            });
            if (!result.assets) {
              return;
            }
            setImage(result?.assets[0]?.uri);
          } catch {
            Alert.alert('JSON.stringify(result)');

            console.log('error');
          }
        }}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Nome do anime" />
      <View style={styles.row}>
        <TextInput placeholder="Nota" style={styles.input} />

        <TextInput
          style={[styles.input, {marginHorizontal: 16}]}
          placeholder="N Episódios"
        />
        <TextInput style={styles.input} placeholder="Data" />
      </View>
      <TextInput textAlignVertical="top" multiline style={styles.textarea} />
      <TouchableOpacity style={styles.buttonSave}>
        <Text style={styles.buttonSaveText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddAnime;
