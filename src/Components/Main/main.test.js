import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Main from './Main';


describe('Main', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Main />);
  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
})
