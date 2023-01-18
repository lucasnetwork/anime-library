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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View style={{backgroundColor: '#fff', width: 200, padding: 32}}>
            <Pressable
              onPress={async () => {
                await deleteCategory(modal);
                setModal('');
              }}
              style={{
                backgroundColor: '#CC0000',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 5,
              }}>
              <Text style={{color: '#fff'}}>Deletar Categoria</Text>
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
