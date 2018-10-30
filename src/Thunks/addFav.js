import * as API from '../utils/api'


export const addFavThunk = (movie, userID) => {
  return async (dispatch) => {
    try {
      const response = await API.postFav(movie, userID)
      console.log (response)
      //dispatch{addedtofavs}
      //dispatch{addfavs}
      //dispatch{removefavs}
    } catch (error) {

    }
  }
}



import {loginUser, wrongCredentials, createAccountDisplay, isAuthenticated} from '../Actions'


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