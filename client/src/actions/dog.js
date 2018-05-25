import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST='FETCH_DOG_REQUEST'
export const fetchDogRequest=()=>({
    type:FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS='FETCH_DOG_SUCCESS'
export const fetchDogSuccess=(dogToAdopt)=>({
    type:FETCH_DOG_SUCCESS,
    dogToAdopt
});

export const FETCH_DOG_ERROR='FETCH_DOG_ERROR'
export const fetchDogError=(error)=>({
    type:FETCH_DOG_ERROR,
    error
});

export const fetchDog =()=>(dispatch, getState)=>{
    dispatch(fetchDogRequest)
    fetch(`${API_BASE_URL}/api/dog`)
        .then(res => 
            res.json()
        )
        .then(dog=>dispatch(fetchDogSuccess(dog)))
        .catch(err=> {
            console.log(err);
            dispatch(fetchDogError);
        })
    
}

export const deleteDog =()=>(dispatch, getState)=>{
    fetch(`${API_BASE_URL}/api/dog`, {
        method: 'DELETE'})
        .then(()=>dispatch(fetchDog()))
        .catch(err=> {
            console.log(err);
        })
}