import AsyncStorage from '@react-native-async-storage/async-storage';
import {IAnime, IAnimeWithId} from '../../interfaces/anime';
import uuid from 'react-native-uuid';
export default async (anime: IAnime) => {
  let getAnimes: IAnimeWithId[] = [];
  try {
    getAnimes = JSON.parse((await AsyncStorage.getItem('animes')) || '');
  } catch {}
  const animeWithId = {
    ...anime,
    id: uuid.v4().toString(),
  };
  getAnimes.push(animeWithId);
  await AsyncStorage.setItem('animes', JSON.stringify(getAnimes));
};
