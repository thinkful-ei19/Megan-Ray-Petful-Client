import React from 'react';
import {deleteDog, deleteCat} from '../actions/index'
import {connect} from 'react-redux'


export function Pet(props){
    return(
        <div className={props.pet.class}>
                <header>
                    <img alt={props.pet.description} src={props.pet.img}/>
                    <h2>More About {props.pet.name}</h2>
                </header>
                <main>
                    <dl>
                        <dt>Sex</dt>
                        <dd>{props.pet.sex}</dd>
                        <dt>Age</dt>
                        <dd>{props.pet.age}</dd>
                        <dt>Breed</dt>
                        <dd>{props.pet.breed}</dd>
                        <dt>Story</dt>
                        <dd>{props.pet.story}</dd>
                    </dl> 
                 </main>
                <button type='submit' onClick={
                    ()=> {
                        console.log('delete called')
                        console.log(props.pet)
                        if(props.pet.class==='cat'){
                            console.log('cat delete');
                            props.dispatch(deleteCat());
                        }
                        if(props.pet.class==='dog'){
                            console.log('dog delete')
                            props.dispatch(deleteDog())
                        }
                    }
                }>
                Adopt</button>
            </div>
    )
}


export default connect()(Pet)
