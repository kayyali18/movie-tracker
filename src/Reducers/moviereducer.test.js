import * as Actions from '/Users/Cierra/Documents/TP/movie-tracker/movie-tracker/src/Actions/TheActionMan.js';
import movieReducer from '/Users/Cierra/Documents/TP/movie-tracker/movie-tracker/src/Reducers/movieReducer.js';

describe('movieReducer', () => {

  it('should return default state', () => {
    const expected = [];

    const result = movieReducer(undefined, {});

    expect(result).toEqual(expected);

  })

  it('should new state with latest movies in store', () => {
    const mockMovies =
      {
        movie: 'movie1'
      }


    const mockAction = Actions.latestMovies([{ movie: 'movie1' }]);

    const expected = [mockMovies];

    const result = movieReducer([], mockAction)

    expect(result).toEqual(expected);

  })

})
