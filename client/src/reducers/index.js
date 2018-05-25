import { combineReducers } from 'redux';

import catReducer from './cat';
import dogReducer from './dog';

const reducer = combineReducers({
  cat: catReducer,
  dog: dogReducer
});

export default reducer;