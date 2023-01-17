import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {ICategory} from '../../interfaces/category';
export default async (category: string) => {
  let getCategories: ICategory[] = [];
  try {
    getCategories = JSON.parse(
      (await AsyncStorage.getItem('categories')) || '',
    );
  } catch {}
  const newCategory = {
    label: category,
    value: uuid.v4().toString(),
  };
  getCategories.push(newCategory);
  await AsyncStorage.setItem('categories', JSON.stringify(getCategories));
  return newCategory;
};
