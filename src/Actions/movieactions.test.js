/* eslint-disable */


import React from 'react';
import * as Actions from './TheActionMan.js';
import { configure } from 'enzyme';
import {shallow, mount} from 'enzyme';
import rootReducer from '../Reducers/index.js'

describe('movieActions', ()=>{

  it('should have an action of type NOW_PLAYING', ()=>{

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
