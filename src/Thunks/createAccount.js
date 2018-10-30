import {userExists} from '../Actions'
import {fetchUser} from './fetchUser'
import * as API from '../utils/api'


export const createAccountThunk = (username, email, password) => {
  return async (dispatch) => {
    try {
      const response = await API.createUser(username, email, password)
      if (!response.ok) throw Error(response.statusText)
      dispatch(userExists(false))
      fetchUser(email, password)
    } catch (error) {
      dispatch(userExists(true))
    }
  }
}
