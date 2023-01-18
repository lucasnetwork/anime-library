import {createContext, useContext, useEffect, useState} from 'react';
import {IAnime, IAnimeWithId} from '../interfaces/anime';
import React from 'react';
import newAnime from './api/newAnime';
import newCategory from './api/newCategory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ICategory} from '../interfaces/category';
import removeCategory from './api/removeCategory';
import removeAnime from './api/removeAnime';

interface IContext {
  animes: IAnimeWithId[];
  categories: {label: string; value: string}[];
  addAnime: (props: IAnime) => Promise<boolean>;
  deleteCategory: (id: string) => Promise<void>;
  deleteAnime: (id: string) => Promise<void>;
}

const Context = createContext({} as IContext);

const ContextProvider = ({children}) => {
  const [animes, setAnimes] = useState<IAnimeWithId[]>([]);
  const [categories, setCategories] = useState<
    {label: string; value: string}[]
  >([]);

  async function addAnime(anime: IAnime) {
    if (!categories.find(category => category.value === anime.category)) {
      const category = await newCategory(anime.category as string);
      setCategories(props => [...props, category]);
      anime.category = category.value;
    }
    const newAnimeResponse = await newAnime(anime);
    setAnimes(props => [...props, newAnimeResponse]);
    return true;
  }

  const deleteCategory = async (id: string) => {
    try {
      const newCategoryList = await removeCategory(id);
      setCategories(newCategoryList);
    } catch {}
  };

  const deleteAnime = async (id: string) => {
    try {
      const newAnimeList = await removeAnime(id);
      setAnimes(newAnimeList);
    } catch {}
  };

  useEffect(() => {
    async function callback() {
      try {
        const getAnimes: IAnimeWithId[] = JSON.parse(
          (await AsyncStorage.getItem('animes')) || '',
        );
        setAnimes(getAnimes);
      } catch {}

      try {
        const getCategories: ICategory[] = JSON.parse(
          (await AsyncStorage.getItem('categories')) || '',
        );
        setCategories(getCategories);
      } catch {}
    }
    callback();
  }, []);

  return (
    <Context.Provider
      value={{categories, animes, addAnime, deleteCategory, deleteAnime}}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => useContext(Context);

export default ContextProvider;
