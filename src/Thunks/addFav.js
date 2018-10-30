import * as API from '../utils/api'
import {loginUser, wrongCredentials, createAccountDisplay, isAuthenticated} from '../Actions'


export const addFavThunk = (movie, userID) => {
  return async (dispatch) => {
    try {
      const response = await API.postFav(movie, userID)
      if (!response.ok) throw Error(response.statusText)
      //dispatch{addedtofavs}
      //dispatch{addfavs}
      //dispatch{removefavs}
    } catch (error) {
      console.log (error)

    }
  }
}





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
      dispatch(wrongCredentials(true))
    }
  }
}