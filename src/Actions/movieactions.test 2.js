import * as Actions from './index';

describe('movieActions', () => {

  it('should have an action of type NOW_PLAYING', () => {

    let mockMovies = [
      {
        movie: 'movie1'
      }
    ]

    let expectedAction = {
      type: 'NOW_PLAYING',
      latestMovies: mockMovies
    }

    let result = Actions.latestMovies(mockMovies);

    expect(result).toEqual(expectedAction);

  })

})
