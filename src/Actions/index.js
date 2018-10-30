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

export const latestMovies = (movies) =>({
  type: 'NOW_PLAYING',
  latestMovies: movies
})
