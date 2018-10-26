import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Movie from './Movie';


describe('Movie', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Movie />);
  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
})
