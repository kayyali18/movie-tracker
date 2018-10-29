import React from 'react';
import * as apiCaller from '/Users/Cierra/Documents/TP/movie-tracker/movie-tracker/src/Helpers/apiCaller.js';
import { configure } from 'enzyme';
import {shallow, mount} from 'enzyme';

describe('apiCaller', ()=>{

  let mockMovies;

  beforeEach(()=>{

    mockMovies = [
      {
        movie: 'movie1'
      }
    ]

    window.fetch = jest.fn().mockImplementation(()=> Promise.resolve({
      json: () => Promise.resolve({
        movies: mockMovies
      })

    }))

  })

  it('calls fetch with the correct data', async ()=>{

    const expected = 'https://api.themoviedb.org/3/movie/now_playing?api_key=617fc2c281e5fb3063937f52c63598cd';

    await apiCaller.fetchNowPlaying()

    await expect(window.fetch).toHaveBeenCalledWith(expected)
  })

})
