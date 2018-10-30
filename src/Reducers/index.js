import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import movieReducer from './movieReducer';
import {createAccountReducer} from './createAccountReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  user: loginReducer,
  createAccount: createAccountReducer
})

export default rootReducer;
