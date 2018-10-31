export const favsLocalReducer = (state = [], action) => {
  switch(action.type){
    case 'FAV_LOCAL':
      return action.favs
    default:
      return state
  }
}