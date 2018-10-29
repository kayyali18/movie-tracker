const cleanMovies = data => {
  const { results } = data;
  const movie = results.map(result => {

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

  return movie;
}

export default cleanMovies;
