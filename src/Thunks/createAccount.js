import {userExists, createAccountDisplay} from '../Actions'
import {fetchUser} from './fetchUser'
import * as API from '../utils/api'


export const createAccountThunk = (username, email, password) => {
  return async (dispatch) => {
    try { 
      const response = await API.createUser(username, email, password)
      if (!response.ok) throw Error(response.statusText)
      const user = await response.json()
      dispatch(userExists(false))
      dispatch(createAccountDisplay(''))
    } catch (error) {
      dispatch(userExists(true))
    }
  }
}
