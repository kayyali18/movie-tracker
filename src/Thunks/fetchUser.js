import {loginUser} from '../Actions'
import * as API from '../utils/api'


export const fetchUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await API.loginUser(email, password)
      if (!response.ok) throw Error(response.statusText)
      const user = await response.json()
      dispatch(loginUser(user.data))
      console.log(user)
    } catch (error) {
      console.log (error)
    }
  }
}