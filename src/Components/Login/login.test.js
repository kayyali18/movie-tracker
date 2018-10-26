import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Login from './Login';


describe('Login', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Login />);
  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
})
