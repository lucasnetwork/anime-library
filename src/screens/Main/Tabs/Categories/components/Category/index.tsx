import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import {ICategory} from '../../../../../../interfaces/category';
import styles from './styles';
import React from 'react';

interface ICategoryComponent {
  item: ICategory;
  onLongPress: (event: GestureResponderEvent) => void;
}

const Category = ({item, onLongPress}: ICategoryComponent) => {
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      style={styles.containerCategory}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
};

export default Category;
