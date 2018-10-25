import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import MovieContainer from './MovieContainer';


describe('MovieContainer', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<MovieContainer />);
  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
})
