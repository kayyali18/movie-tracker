import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';

describe('App',()=>{

  let wrapper;
  const mockStore = configureStore();
  let latestMovies;
  let store;

  beforeEach(()=>{

    latestMovies = []

    store = mockStore(latestMovies);

    wrapper = shallow(<App store={store}/>, store);

  })

  it('should match the snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

})
