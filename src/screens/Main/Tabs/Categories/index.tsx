import {useState} from 'react';
import {FlatList, Modal, Pressable, Text, View} from 'react-native';
import {useContextProvider} from '../../../../services/context';
import Category from './components/Category';
import styles from './styles';
import React from 'react';

const Categories = () => {
  const {categories, deleteCategory} = useContextProvider();
  const [modal, setModal] = useState<string>('');

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!modal}
        onRequestClose={() => {
          setModal('');
        }}>
        <View style={styles.containerModal}>
          <View style={styles.containerContentModal}>
            <Pressable
              onPress={async () => {
                await deleteCategory(modal);
                setModal('');
              }}
              style={styles.buttonModal}>
              <Text style={styles.textModal}>Deletar Categoria</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        data={categories}
        keyExtractor={item => item.value}
        renderItem={({item}) => (
          <Category onLongPress={() => setModal(item.value)} item={item} />
        )}
      />
    </View>
  );
};

export default Categories;
