import React from 'react';

export default function Pet(props){
    return(
        <div className={props.pet.class}>
                <header>
                    <img alt={props.pet.name} src={props.pet.img}/>
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
                <button type='submit' onClick={props.onAdoptPet}>Adopt</button>
            </div>
    )
}


