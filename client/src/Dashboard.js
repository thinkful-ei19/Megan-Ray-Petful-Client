import React from 'react';

export default class Dashboard extends React.Component{
    constructor(){
        super();
    
        this.state={
            catToAdopt:{
                name:'Charlie',
                age:'3mnths',
                breed: 'kitten',
                story:'teststestet',
                img:'https://lh3.googleusercontent.com/aGFfr04fxrySBqOnIMfW6ibioA7lJs-Mu1S_2aJ9ionBywFvM_gei2r9hOEWQaJCMkByezdwuR3m3gw1vc2-3s1hFlQZDrg-SfVPE_9rCiz9j9TvknVFipRFZaXDl5gtNquEF6d4=w2400'
            },
            dogToAdopt:{
                name:'Doggo',
                age:'3mnths',
                breed: 'kitten',
                story:'teststestet',
                img:'https://lh3.googleusercontent.com/FY6jhC1EVK7THmrsNwQdNOsVyKYaDEvwOIL9WWagB17iTekclKIQhJGJ08KcyzUpKnvrcR93v4e6CDAV42ewpcZd8ru9lr-60Hznl3g8MEyJpypTBj-3tjwxrcgcoWoWkZTud4jx=w2400'
            }
        }
      }

    render() {
        return (
          <div className="App">
            <div className='catToAdopt'>
                <header>
                    <img alt='adoptable cat' src={this.state.catToAdopt.img}/>
                    <h2>More About {this.state.catToAdopt.name}</h2>
                </header>
                <main>
                    <dl>
                        <dt>Sex</dt>
                        <dd>{this.state.catToAdopt.sex}</dd>
                        <dt>Age</dt>
                        <dd>{this.state.catToAdopt.age}</dd>
                        <dt>Breed</dt>
                        <dd>{this.state.catToAdopt.breed}</dd>
                        <dt>Story</dt>
                        <dd>{this.state.catToAdopt.story}</dd>
                    </dl>
                </main>
                <button type='submit'>Adopt</button>
            </div>

            <div className='dogToAdopt'>
            <header>
                    <img alt='adoptable dog' src=''/>
                    <h2>More About {this.state.dogToAdopt.name}</h2>
                </header>
                <main>
                    <dl>
                        <dt>Sex</dt>
                        <dd>{this.state.dogToAdopt.sex}</dd>
                        <dt>Age</dt>
                        <dd>{this.state.dogToAdopt.age}</dd>
                        <dt>Breed</dt>
                        <dd>{this.state.dogToAdopt.breed}</dd>
                        <dt>Story</dt>
                        <dd>{this.state.dogToAdopt.story}</dd>
                    </dl>
                </main>
                <button type='submit'>Adopt</button>
            </div>
          </div>
        );
      }
}