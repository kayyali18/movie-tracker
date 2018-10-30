import {loginUser, createAccount} from '../Actions'
import * as API from '../utils/api'


export const createAccountThunk = (username, email, password) => {
  return async (dispatch) => {
    try {
      const response = await API.createUser(username, email, password)
      if (!response.ok) throw Error(response.statusText)
      const user = await response.json()
      // dispatch(loginUser(user.data))
      console.log(user)
    } catch (error) {
      // dispatch(createAccountDisplay('active'))
    }
  }
}
