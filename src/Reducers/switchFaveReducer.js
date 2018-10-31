export const switchFaveReducer = (state = false, action) => {
  switch (action.type) {
    case 'SWITCH_FAVE':
      return action.selected
    default:
      return state
  }
}