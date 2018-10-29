import * as API from '../utils/api'

export const loginReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      const success = API.loginUser(action.email, action.password)
      return {success}

    default:
      return state
  }
}