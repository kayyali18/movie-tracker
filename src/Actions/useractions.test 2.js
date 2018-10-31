/* eslint-disable */

import * as Actions from './userActions';

describe('userActions', () => {

  it('should have an action of type ADD_FAVORITE', () => {

    const id = 2;

    let expectedAction = {
      type: 'ADD_FAVORITE',
      id
    }
  })

  it('should have an action of type DELETE_FAVORITE', () => {

    const id = 3;

    let expectedAction = {
      type: 'DELETE_FAVORITE',
      id
    }
  })
})
