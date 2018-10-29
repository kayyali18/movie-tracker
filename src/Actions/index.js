export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const latestMovies = (movies) =>({
  type: 'NOW_PLAYING',
  latestMovies: movies
})
