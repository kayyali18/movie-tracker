import {loginUser, wrongCredentials, createAccountDisplay, isAuthenticated} from '../Actions'
import * as API from '../utils/api'


export const fetchUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await API.loginUser(email, password)

      if (!response.ok) throw Error(response.statusText)
      const user = await response.json()
      dispatch(loginUser(user.data))
      dispatch(isAuthenticated(true))
      dispatch(wrongCredentials(false))
    } catch (error) {
      dispatch(isAuthenticated(false))
      dispatch(createAccountDisplay('active'))
      dispatch(wrongCredentials(true))
    }
  }
}