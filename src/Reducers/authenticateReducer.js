export const authenticateReducer = (state = false, action)=>{
  switch(action.type){
    case 'IS_AUTHENTICATED':
      return action.isAuthenticated;
    default:
      return state
  }
}
