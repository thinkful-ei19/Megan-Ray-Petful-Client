import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST='FETCH_CAT_REQUEST'
export const fetchCatRequest=()=>({
    type:FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS='FETCH_CAT_SUCCESS'
export const fetchCatSuccess=(catToAdopt)=>({
    type:FETCH_CAT_SUCCESS,
    catToAdopt
});

export const FETCH_CAT_ERROR='FETCH_CAT_ERROR'
export const fetchCatError=(error)=>({
    type:FETCH_CAT_ERROR,
    error
});

export const fetchCat =()=>(dispatch, getState)=>{
    dispatch(fetchCatRequest)
    fetch(`${API_BASE_URL}/api/cat`)
        .then(res => 
            res.json()
        )
        .then(cat=>dispatch(fetchCatSuccess(cat)))
        .catch(err=> {
            console.log(err);
            dispatch(fetchCatError);
        })
    
}

export const deleteCat =()=>(dispatch, getState)=>{
    fetch(`${API_BASE_URL}/api/cat`, {
        method: 'DELETE'})
        .then(recipes=> dispatch(fetchCat()))
        .catch(err=> {
            console.log(err);
        })
}
