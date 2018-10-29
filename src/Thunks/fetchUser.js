import {loginUser} from '../Actions'
import * as API from '../utils/api'


export const fetchUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await API.loginUser(email, password)
      console.log (response)
    } catch (error) {
      console.log (error)
    }
  }
}