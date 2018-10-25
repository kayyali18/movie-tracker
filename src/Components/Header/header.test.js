import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Header from './Header';


describe('Header', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Header />);
  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
})
