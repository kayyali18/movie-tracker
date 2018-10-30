export const authenticateReducer = (state = true, action)=>{
  switch(action.type){
    case 'IS_AUTHENTICATED':
      return action.isAuthenticated;
    default:
      return state
  }
}
