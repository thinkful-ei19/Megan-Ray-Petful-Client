import React from 'react';
import Pet from './components/Pet'
import './Dashboard.css';
import {fetchCat, fetchDog} from './actions/index'
import {connect} from 'react-redux'



export class Dashboard extends React.Component{
  componentDidMount(){
      this.props.dispatch(fetchCat());
      this.props.dispatch(fetchDog());

  }
    onAdoptPet() {
      console.log('Adopted!');
    };

    render() {
        return (
          <div className="App">
            <Pet pet={this.props.catToAdopt} onAdoptPet={this.onAdoptPet()}/>
            <Pet pet={this.props.dogToAdopt} onAdoptPet={this.onAdoptPet()}/>
          </div>
        );
      }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.catToAdopt,
  dogToAdopt: state.dog.dogToAdopt
});

export default connect(mapStateToProps)(Dashboard);