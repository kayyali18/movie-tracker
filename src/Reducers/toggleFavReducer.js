import * as API from '../utils/api'

export const toggleFavReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAV':
      if (state.includes(action.movie)) {
        const favs = state.filter(movie => !movie.title.includes(action.movie.title))
        API.setFavs(favs)
        return favs
      }
      API.setFavs([...state, action.movie])
      return [...state, action.movie]
    default:
      return state
  }
}