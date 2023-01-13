export interface IAnime {
  url: string;
  name: string;
  episodeNumbers: string;
  category: string;
  review: string;
  date: string;
  resume: string;
}

export interface IAnimeWithId extends IAnime {
  id: string;
}
