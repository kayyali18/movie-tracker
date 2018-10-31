/* eslint-disable */


import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Movie from './Movie';


describe('Movie', ()=>{

  let wrapper;
  let props;

  beforeEach(()=>{

    let props = {
      movie: [{movie: 'movie1'}]
    }

    wrapper = shallow(<Movie movie={props}/>);

  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
})
