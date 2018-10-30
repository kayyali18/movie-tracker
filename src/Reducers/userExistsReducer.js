export const userExistsReducer = (state = false, action) => {
  switch(action.type) {
    case 'USER_EXISTS':
      return action.userExists
    default:
      return state
  }
}