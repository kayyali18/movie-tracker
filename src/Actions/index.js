export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const createAccount = string => ({
  type: 'CREATE_ACCOUNT',
  active: string
})

export const latestMovies = (movies) =>({
  type: 'NOW_PLAYING',
  latestMovies: movies
})
