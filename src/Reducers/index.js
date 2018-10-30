import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import movieReducer from './movieReducer';
import {userExistsReducer} from './userExistsReducer';
import {createAccountDisplayReducer} from './createAccountReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  user: loginReducer,
  createAccountDisplay: createAccountDisplayReducer,
  userExists: userExistsReducer
})

export default rootReducer;
