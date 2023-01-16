import {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item from './components/Item';
import styles from './styles';
import {IAnimeWithId} from '../../../../interfaces/anime';
import {useFocusEffect} from '@react-navigation/native';

const Initial = () => {
  const [animes, setAnimes] = useState<IAnimeWithId[]>([]);
  useFocusEffect(
    useCallback(() => {
      async function callback() {
        try {
          const newAnime = JSON.parse(
            (await AsyncStorage.getItem('animes')) || '',
          );
          setAnimes(newAnime);
        } catch {}
      }

      callback();
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={animes}
        contentContainerStyle={{flexDirection: 'row'}}
        keyExtractor={item => `${item.id}`}
        renderItem={item => <Item uri={item.item.url} id={item.item.id} />}
      />
    </View>
  );
};

export default Initial;
