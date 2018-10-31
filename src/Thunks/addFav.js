import * as API from '../utils/api'
import {loginUser, wrongCredentials, isAuthenticated} from '../Actions'


export const addFavThunk = (movie, userID) => {
  return async (dispatch) => {
    try {
      const response = await API.getFavs(userID)
      const bool = checkFavs(response, movie)
      if (bool) API.deleteFav(movie, userID)
      else API.postFav(movie, userID)
    } catch (error) {

    }
  }
}

const checkFavs = (favs, ourMovie) => {
  console.log (favs)
  let bool = false;
  favs.data.forEach(movie => {
    if (movie.movie_id === ourMovie.id ) bool = true
  });
 return bool

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
