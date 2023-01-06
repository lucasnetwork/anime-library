import {View} from 'react-native';
import Item from './components/Item';
import styles from './styles';

const Initial = () => (
  <View style={styles.container}>
    <Item />
    <Item />
    <Item />
  </View>
);

export default Initial;
