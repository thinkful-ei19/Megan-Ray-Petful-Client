import {FETCH_CAT_SUCCESS, FETCH_CAT_ERROR} from '../index';

const initialState = {
  catToAdopt: {
    class: '',
    name: '',
    age: '', 
    sex: '',
    breed: '',
    story: '',
    img: ''
  },
  error: null,
  loading: false
}

export const catReducer = (state=initialState, action) => {
  if(action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      catToAdopt: {
        imageURL: action.catToAdopt.imageURL,
        imageDescription: aciton.catToAdopt.imageDescription,
        name: action.catToAdopt.name,
        sex: action.catToAdopt.sex,
        age: aciton.catToAdopt.age,
        breed: aciton.catToAdopt.breed,
        story: action.catToAdopt.story
      },
      error: null,
      loading: false
    });
  }
  else if(action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      error: true
    });
  }
  return state;
}

export default catReducer;