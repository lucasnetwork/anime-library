import {useNavigation} from '@react-navigation/native';
import {GestureResponderEvent, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import React from 'react';

interface IItem {
  uri: string;
  id: string;
  onLongPress: (event: GestureResponderEvent) => void;
}

const Item = ({uri, id, onLongPress}: IItem) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={() => navigation.navigate('Anime', {id})}>
      <Image style={styles.container} source={{uri}} />
    </TouchableOpacity>
  );
};

export default Item;
