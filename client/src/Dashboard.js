import React from 'react';
import Pet from './components/Pet'
import './Dashboard.css';
import {fetchCat, fetchDog, deleteDog, deleteCat} from './actions/index'
import {connect} from 'react-redux'



export class Dashboard extends React.Component{
  componentDidMount(){
      this.props.dispatch(fetchCat());
      this.props.dispatch(fetchDog());

  }
    onAdoptPet(type) {
      console.log('delete called')
      if(type==='cat'){
        console.log('cat delete');
        this.props.dispatch(deleteCat());
      }
      if(type==='dog'){
        console.log('dog delete')
        this.props.dispatch(deleteDog())
      }
    };

    render() {
        return (
          <div className="App">
            <Pet pet={this.props.catToAdopt} />
            <Pet pet={this.props.dogToAdopt} />
          </div>
        );
      }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.catToAdopt,
  dogToAdopt: state.dog.dogToAdopt,
});

export default connect(mapStateToProps)(Dashboard);