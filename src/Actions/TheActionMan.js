export const loginUser = (email, password) => ({
  type: 'LOGIN_USER',
  email,
  password
})

export const latestMovies = (movies) =>({
  type: 'NOW_PLAYING',
  latestMovies: movies
})

export const isAuthenticated = (bool) =>({
  type: 'IS_AUTHENTICATED',
  isAuthenticated: bool
})
