import {FlatList, View} from 'react-native';
import Item from './components/Item';
import styles from './styles';
import {useContextProvider} from '../../../../services/context';

const Initial = () => {
  const {animes} = useContextProvider();

  return (
    <View style={styles.container}>
      <FlatList
        data={animes}
        numColumns={3}
        keyExtractor={item => `${item.id}`}
        renderItem={item => <Item uri={item.item.url} id={item.item.id} />}
      />
    </View>
  );
};

export default Initial;
