import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      houses: []
    }
  }

  getHouses() {
    // console.log(this.state.houses);
    axios.get('/api/houses').then((res) => {
      // console.log(res.data);
      this.setState({
        houses: res.data
      })
    })
  }

  componentDidMount() {
    this.getHouses();
  }

  
  

  render() {
    return(
      <div>
        <h1> Dashboard </h1>
        <Link to='/wizard'>
          <button> Add New Property </button>
        </Link>
        {this.state.houses.map(house => {
          return <House 
            key={house.id}
            house={house}
          />
        })}
      </div>
    )
  }
}