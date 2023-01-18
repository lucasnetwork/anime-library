import {FlatList, Modal, Pressable, Text, View} from 'react-native';
import Item from './components/Item';
import styles from './styles';
import {useContextProvider} from '../../../../services/context';
import {useState} from 'react';
import React from 'react';

const Initial = () => {
  const [modal, setModal] = useState<string>('');
  const {animes, deleteAnime} = useContextProvider();

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
                await deleteAnime(modal);
                setModal('');
              }}
              style={styles.buttonModal}>
              <Text style={styles.textModal}>Deletar Anime</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        data={animes}
        numColumns={3}
        keyExtractor={item => `${item.id}`}
        renderItem={item => (
          <Item
            uri={item.item.url}
            onLongPress={() => setModal(item.item.id)}
            id={item.item.id}
          />
        )}
      />
    </View>
  );
};

export default Initial;
