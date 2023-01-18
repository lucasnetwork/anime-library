import AsyncStorage from '@react-native-async-storage/async-storage';
import {ICategory} from '../../interfaces/category';

export default async (id: string) => {
  let getCategories: ICategory[] = [];
  try {
    getCategories = JSON.parse(
      (await AsyncStorage.getItem('categories')) || '',
    );
  } catch {}
  const newCategories = getCategories.filter(category => category.value !== id);
  await AsyncStorage.setItem('categories', JSON.stringify(newCategories));
  return newCategories;
};
