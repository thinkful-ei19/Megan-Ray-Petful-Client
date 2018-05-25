import {FETCH_DOG_SUCCESS} from '../action';

const initialState = {
  dogObj: {},
  error: false,
  loading: false
};

export const dogReducer = (state=initialState, action) => {
  if(action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dogObj: action.dogObj,
      error: false,
      loading: false
    });
  }
  return state;
}

export default dogReducer;