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

import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import {useContextProvider} from '../../../services/context';

const AddAnime = () => {
  const {addAnime, categories} = useContextProvider();
  const navigate = useNavigation();
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
        await addAnime(values);
        navigate.goBack();
      } catch (e) {
        Alert.alert(JSON.stringify(e));
      }
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
              maxHeight: 200,
              maxWidth: 200,
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
        onChangeText={e => formik.setFieldValue('name', e)}
      />
      <View style={styles.row}>
        <TextInput
          placeholder="Nota"
          keyboardType="decimal-pad"
          value={formik.values.review}
          style={[styles.input, {marginRight: 16}]}
          onChangeText={e => formik.setFieldValue('review', e)}
        />

        <TextInput
          style={styles.input}
          value={formik.values.episodeNumbers}
          placeholder="N Episódios"
          onChangeText={e => formik.setFieldValue('episodeNumbers', e)}
        />
      </View>
      <View style={styles.row}>
        <View style={[styles.row, {flex: 1}]}>
          <TextInput
            value={formik.values.category}
            placeholder="Categoria"
            style={[styles.input, {marginRight: 16}]}
            onChangeText={e => formik.setFieldValue('category', e)}
          />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Picker
              style={{width: 20}}
              selectedValue={formik.values.category}
              onValueChange={itemValue =>
                formik.setFieldValue('category', itemValue)
              }>
              {categories.map(category => (
                <Picker.Item label={category.label} value={category.value} />
              ))}
            </Picker>
          </View>
        </View>
        <TextInput
          value={formik.values.date}
          style={styles.input}
          placeholder="Data"
          onChangeText={e => formik.setFieldValue('date', e)}
        />
      </View>
      <TextInput
        value={formik.values.resume}
        textAlignVertical="top"
        multiline
        style={styles.textarea}
        onChangeText={e => formik.setFieldValue('resume', e)}
      />
      <TouchableOpacity style={styles.buttonSave} onPress={formik.handleSubmit}>
        <Text style={styles.buttonSaveText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddAnime;
