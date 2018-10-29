export const loginUser = (email, exists, success) => ({
  type: 'LOGIN_USER',
  email,
  userSuccess: success,
  userExists: exists
})

export const latestMovies = (movies) =>({
  type: 'NOW_PLAYING',
  latestMovies: movies
})
