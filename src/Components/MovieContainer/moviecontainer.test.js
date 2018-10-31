import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from './MovieContainer';
import configureStore from 'redux-mock-store';

describe('MovieContainer', () => {

  const mockStore = configureStore();
  let wrapper;
  let latestMovies;
  let store;

  beforeEach(() => {

    latestMovies = [{ movies: 'movie3' }]

    store = mockStore(latestMovies);

    wrapper = shallow(<MovieContainer store={store} />, store);

  })

  it('should match the snapshot', () => {

    const testState = {
      latestMovies: [{ movies: 'movie2' }]
    }

    expect(wrapper).toMatchSnapshot();

  })
})
