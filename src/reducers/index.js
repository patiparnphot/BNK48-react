import { combineReducers } from 'redux';
import IdolsReducer from './reducer_idols';
import MemberReducer from './reducer_user';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  idols: IdolsReducer, //<-- Idols
  member: MemberReducer, //<-- user
  form: formReducer // <-- redux-form
});

export default rootReducer;