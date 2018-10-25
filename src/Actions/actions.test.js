import React from 'react';
import * as Actions from './userActions';
import { configure } from 'enzyme';
import {shallow, mount} from 'enzyme';
import rootReducer from '../Reducers/index.js'

describe('userActions', ()=>{

  it('should have an action of type ADD_FAVORITE', ()=>{

    const id = 2;

    let expectedAction = {
      type: 'ADD_FAVORITE',
      id
    }
  })

  it('should have an action of type DELETE_FAVORITE', ()=>{

    const id = 2;

    let expectedAction = {
      type: 'DELETE_FAVORITE',
      id
    }
  })
})
