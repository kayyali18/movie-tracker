import { Key } from '../key'

export const fetchNowPlaying = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=617fc2c281e5fb3063937f52c63598cd`
  const response = await fetch(url)
  const data = await response.json()
  const movieData = await movieInfo(data)
  return movieData
}

export const movieInfo = async data => {
  let movieDetails = data.results.map(movie => {
    let movieObj = {
      title: movie.title,
      releaseDate: movie.release_date,
      overview: movie.overview,
      rating: movie.vote_average,
      id: movie.id,
      poster: movie.poster_path
    }
    return movieObj
  })
  return movieDetails
}

export default fetchNowPlaying;
