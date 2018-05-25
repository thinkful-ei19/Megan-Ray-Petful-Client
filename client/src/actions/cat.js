import {API_BASE_URL} from '../config';

export const FETCH_CAT_SUCCESS='FETCH_CAT_SUCCESS'
export const fetchCatSuccess=(catObj)=>({
    type:FETCH_CAT_SUCCESS,
    catObj
});

export const fetchCat =()=>(dispatch, getState)=>{
    fetch(`${API_BASE_URL}/api/cat`)
        .then(res => 
            res.json()
        )
        .then(cat=>dispatch(fetchCatSuccess(cat)))
        .catch(err=> {
            console.log(err);
        })
    
}