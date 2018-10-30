import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import movieReducer from './movieReducer';
import {userExistsReducer} from './userExistsReducer';
import {wrongCredentialsReducer} from './wrongCredentialsReducer';
import {createAccountDisplayReducer} from './createAccountReducer';
import { authenticateReducer } from './authenticateReducer';
import { toggleFavReducer } from './toggleFavReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  user: loginReducer,
  createAccountDisplay: createAccountDisplayReducer,
  userExists: userExistsReducer,
  wrongCredentials: wrongCredentialsReducer,
  isAuthenticated: authenticateReducer,
  favs: toggleFavReducer
})

export default rootReducer;
