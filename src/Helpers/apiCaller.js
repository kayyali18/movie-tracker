import { Key } from '../key';

export const fetchNowPlaying = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=617fc2c281e5fb3063937f52c63598cd`;
  const response = await fetch(url);
  const data = await response.json();
  const movieData = await movieInfo(data);
  return data;
}

export const movieInfo = async (data) =>{
  let movieDetails = data.results.map(movie=>{
    let movieObj = {title: movie.title, releaseDate: movie.release_date, overview: movie.overview, rating: movie.vote_average, id: movie.id};
    console.log(movieObj)
    return movieObj
  })
}
export default fetchNowPlaying;
