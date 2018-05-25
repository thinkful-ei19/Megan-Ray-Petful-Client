import {FETCH_DOG_SUCCESS, FETCH_DOG_ERROR} from '../actions/index';

const initialState = {
  dogToAdopt: {
    class: '',
    name: '',
    age: '', 
    sex: '',
    breed: '',
    story: '',
    img: '',
    description:''
  },
  error: false,
  loading: false
};

export const dogReducer = (state=initialState, action) => {
  if(action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dogToAdopt: {
        img: action.dogToAdopt.imageURL,
        description: action.dogToAdopt.imageDescription,
        name: action.dogToAdopt.name,
        sex: action.dogToAdopt.sex,
        age: action.dogToAdopt.age,
        breed: action.dogToAdopt.breed,
        story: action.dogToAdopt.story,
        class:'dog'
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