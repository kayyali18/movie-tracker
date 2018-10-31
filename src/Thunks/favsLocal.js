import * as API from '../utils/api'
import {setFavLocal} from '../Actions'


export const favsLocalThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await API.getFavs(id) 
      dispatch(setFavLocal(response.data))
     
      //dispatch{addedtofavs}
      //dispatch{addfavs}
      //dispatch{removefavs}
    } catch (error) {
      console.log (error)

    }
  }
}