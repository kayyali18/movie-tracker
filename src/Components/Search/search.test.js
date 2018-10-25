import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Search from './Search';


describe('Search', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Search />);
  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
})
