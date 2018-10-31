export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const userExists = bool => ({
  type: 'USER_EXISTS',
  userExists: bool

})

export const wrongCredentials = bool => ({
  type: 'WRONG_CREDENTIALS',
  wrong: bool
})

export const createAccountDisplay = string => ({
  type: 'CREATE_ACCOUNT_DISPLAY',
  active: string
})

export const switchFave = (bool) => ({
  type: 'SWITCH_FAVE',
  selected: bool
})

export const latestMovies = (movies) => ({
  type: 'NOW_PLAYING',
  latestMovies: movies
})

export const addFav = (movie, userID) => ({
  type: 'ADD_FAV',
  movie,
  userID
})

export const removeFav = (movie) => ({
  type: 'REMOVE_FAV',
  movie
})

export const setFavLocal = favs => ({
  type: 'FAV_LOCAL',
  favs
})

export const isAuthenticated = (bool) => ({
  type: 'IS_AUTHENTICATED',
  isAuthenticated: bool
})
