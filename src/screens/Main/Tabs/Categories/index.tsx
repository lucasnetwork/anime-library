import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {useContextProvider} from '../../../../services/context';
import styles from './styles';
const Categories = () => {
  const {categories} = useContextProvider();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.value}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.containerCategory}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;
