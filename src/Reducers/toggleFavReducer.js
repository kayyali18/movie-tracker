export const toggleFavReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAV':
      if (state.includes(action.movie)) {
        return state.filter(movie => !movie.title.includes(action.movie.title))
      }
      return [...state, action.movie]
    default:
      return state
  }
}