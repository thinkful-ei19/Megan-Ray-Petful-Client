import React from 'react';
import Pet from './components/Pet'
import './Dashboard.css';



export default class Dashboard extends React.Component{
    constructor(){
        super();
    
        this.state={
            catToAdopt:{
                class:'catToAdopt',
                name:'Charlie',
                age:'3mnths',
                sex:'female',
                breed: 'kitten',
                story:'teststestet',
                img:'https://lh3.googleusercontent.com/aGFfr04fxrySBqOnIMfW6ibioA7lJs-Mu1S_2aJ9ionBywFvM_gei2r9hOEWQaJCMkByezdwuR3m3gw1vc2-3s1hFlQZDrg-SfVPE_9rCiz9j9TvknVFipRFZaXDl5gtNquEF6d4=w2400'
            },
            dogToAdopt:{
                class:'dogToAdopt',
                name:'Doggo',
                age:'3mnths',
                sex: 'male',    
                breed: 'doggy',
                story:'teststestet',
                img:'https://lh3.googleusercontent.com/FY6jhC1EVK7THmrsNwQdNOsVyKYaDEvwOIL9WWagB17iTekclKIQhJGJ08KcyzUpKnvrcR93v4e6CDAV42ewpcZd8ru9lr-60Hznl3g8MEyJpypTBj-3tjwxrcgcoWoWkZTud4jx=w2400'
            }
        }
      }

    render() {
        return (
          <div className="App">
            <Pet pet={this.state.catToAdopt}/>
            <Pet pet={this.state.dogToAdopt}/>
          </div>
        );
      }
}