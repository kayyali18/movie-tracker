import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import Login from './Login';


describe('Login', ()=>{

  const mockStore = configureStore();
  let wrapper;
  let loginCheck;
  let store;

  beforeEach(()=>{

    loginCheck = []

    store = mockStore(loginCheck);

    wrapper = shallow(<Login store={store}/>, store);

  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
})
