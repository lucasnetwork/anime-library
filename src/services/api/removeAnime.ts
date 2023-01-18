import AsyncStorage from '@react-native-async-storage/async-storage';
import {IAnimeWithId} from '../../interfaces/anime';

export default async (id: string) => {
  let getAnimes: IAnimeWithId[] = [];
  try {
    getAnimes = JSON.parse((await AsyncStorage.getItem('animes')) || '');
  } catch {}
  const newAnimes = getAnimes.filter(anime => anime.id !== id);
  await AsyncStorage.setItem('animes', JSON.stringify(newAnimes));
  return newAnimes;
};
