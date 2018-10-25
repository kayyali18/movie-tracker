const cleanMovies = data => {
  const { results } = data;
  const easyObj = results.map(result => {

    return {
      movie_id: result.id,
      title: result.title,
      release: result.release_date,
      overview: result.overview,
      rating: result.vote_average,
      cover: `http://image.tmdb.org/t/p/original${result.poster_path}`,
      favd: false
    }
  })
  return easyObj;
}

export default cleanMovies;
