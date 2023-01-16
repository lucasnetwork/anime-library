import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Item = ({uri, id}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Anime', {id})}>
      <Image style={styles.container} source={{uri}} />
    </TouchableOpacity>
  );
};

export default Item;
