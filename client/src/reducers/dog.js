import {FETCH_DOG_SUCCESS, FETCH_DOG_ERROR} from '../index';

const initialState = {
  dogToAdopt: {
    class: '',
    name: '',
    age: '', 
    sex: '',
    breed: '',
    story: '',
    img: ''
  },
  error: false,
  loading: false
};

export const dogReducer = (state=initialState, action) => {
  if(action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dogToAdopt: {
        imageURL: action.dogToAdopt.imageURL,
        imageDescription: aciton.dogToAdopt.imageDescription,
        name: action.dogToAdopt.name,
        sex: action.dogToAdopt.sex,
        age: aciton.dogToAdopt.age,
        breed: aciton.dogToAdopt.breed,
        story: action.dogToAdopt.story
      },
      error: false,
      loading: false
    });
  }
  else if(action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      error: true
    });
  }
  return state;
}

export default dogReducer;