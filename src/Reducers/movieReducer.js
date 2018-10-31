


const movieReducer = (state = [], action) => {
  switch (action.type) {
    case 'NOW_PLAYING':
      return action.latestMovies
    default:
      return state;
  }
}

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return undefined
    case 'REMOVE_FAVORITE':
    default:
      return state
  }
}

export default movieReducer;
