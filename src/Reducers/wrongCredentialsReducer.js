export const wrongCredentialsReducer = (state = false, action) => {
  switch (action.type){
    case 'WRONG_CREDENTIALS':
      return action.wrong
    default:
      return state
  }
}