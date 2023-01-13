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
import React from 'react';
import {useFormik} from 'formik';
import newAnime from '../../../services/api/newAnime';

const AddAnime = () => {
  const formik = useFormik({
    initialValues: {
      url: '',
      name: '',
      episodeNumbers: '',
      category: '',
      review: '',
      date: '',
      resume: '',
    },
    async onSubmit(values) {
      try {
        await newAnime(values);
      } catch {}
    },
  });

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
            formik.setFieldValue('url', result?.assets[0]?.uri);
          } catch {
            Alert.alert('JSON.stringify(result)');
          }
        }}>
        <Image
          source={{uri: formik.values.url}}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={formik.values.name}
        placeholder="Nome do anime"
      />
      <View style={styles.row}>
        <TextInput
          placeholder="Nota"
          keyboardType="decimal-pad"
          value={formik.values.review}
          style={[styles.input, {marginRight: 16}]}
        />

        <TextInput style={styles.input} placeholder="N Episódios" />
      </View>
      <View style={styles.row}>
        <TextInput
          value={formik.values.category}
          placeholder="Categoria"
          style={[styles.input, {marginRight: 16}]}
        />
        <TextInput
          value={formik.values.date}
          style={styles.input}
          placeholder="Data"
        />
      </View>
      <TextInput
        value={formik.values.resume}
        textAlignVertical="top"
        multiline
        style={styles.textarea}
      />
      <TouchableOpacity style={styles.buttonSave}>
        <Text style={styles.buttonSaveText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddAnime;
