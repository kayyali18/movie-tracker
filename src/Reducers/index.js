import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import movieReducer from './movieReducer';
import { userExistsReducer } from './userExistsReducer';
import { wrongCredentialsReducer } from './wrongCredentialsReducer';
import { createAccountDisplayReducer } from './createAccountReducer';
import { authenticateReducer } from './authenticateReducer';
import { favsLocalReducer } from './favsLocalReducer';
import { switchFaveReducer } from './switchFaveReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  user: loginReducer,
  createAccountDisplay: createAccountDisplayReducer,
  userExists: userExistsReducer,
  wrongCredentials: wrongCredentialsReducer,
  isAuthenticated: authenticateReducer,
  favs: favsLocalReducer,
  faveSelected: switchFaveReducer
})

export default rootReducer;
