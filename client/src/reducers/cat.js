import {FETCH_CAT_SUCCESS} from '../actions';

const initialState = {
  catObj: {},
  error: null,
  loading: false
}

export const catReducer = (state=initialState, action) => {
  if(action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      catObj: action.catObj,
      error: null,
      loading: false
    });
  }
  return state;
}

export default catReducer;