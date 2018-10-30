export const createAccountReducer = (state = {class: ''}, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      return {class: action.active}

    default:
      return state
  }
}