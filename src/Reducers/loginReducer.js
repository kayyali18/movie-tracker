import * as API from '../utils/api'

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user

    default:
      return state
  }
}

export const authenticateReducer = (state = false, action)=>{
  switch(action.type){
    case 'IS_AUTHENTICATED':
      return action.isAuthenticated == true;
    default:
      return state
  }
}
