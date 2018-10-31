/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import {shallow, mount} from 'enzyme';
import Nav from './Nav';

describe('Nav', ()=>{

  const mockStore = configureStore();
  let wrapper;
  let logoutUser;
  let props;
  let store;

  beforeEach(()=>{

    logoutUser = jest.fn()

    store = mockStore(logoutUser)

    wrapper = shallow(<Nav store={store} />, store);
  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })

})
