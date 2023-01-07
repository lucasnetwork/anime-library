import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Item = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Anime')}>
      <Image style={styles.container} />
    </TouchableOpacity>
  );
};

export default Item;
