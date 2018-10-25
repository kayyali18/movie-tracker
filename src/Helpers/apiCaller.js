import { Key } from '../key';
import { cleanMovies } from '../Helpers/dataCleaner';

export const fetchNowPlaying = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=617fc2c281e5fb3063937f52c63598cd`;
  const response = await fetch(url);
  const nowPlaying = await response.json();
  return cleanMovies(nowPlaying);
}