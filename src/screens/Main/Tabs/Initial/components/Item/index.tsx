import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Item = ({uri, id, openModal}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onLongPress={() => {
        openModal(id);
      }}
      onPress={() => navigation.navigate('Anime', {id})}>
      <Image style={styles.container} source={{uri}} />
    </TouchableOpacity>
  );
};

export default Item;
