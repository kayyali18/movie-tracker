import * as types from '../Actions/userActions';


const favorites = (state = [], action) =>{
  switch(action.type){
    case 'ADD_FAVORITE':
      return undefined
    default:
      return state
  }
}

export default favorites;
