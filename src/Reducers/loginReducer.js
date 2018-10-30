import * as API from '../utils/api'

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user

    default:
      return state
  }
}
