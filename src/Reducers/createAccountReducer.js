export const createAccountDisplayReducer = (state = {class: ''}, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT_DISPLAY':
      return {class: action.active}

    default:
      return state
  }
}