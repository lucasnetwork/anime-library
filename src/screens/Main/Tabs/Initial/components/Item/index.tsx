import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Item = () => (
  <TouchableOpacity>
    <Image style={styles.container} />
  </TouchableOpacity>
);

export default Item;
