import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Dashboard from '../Dashboard/Dashboard'

export default class Wizard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      img: '',
      mortgage: '',
      rent: ''
    }

    // let unboundThingy = module.getThingy;
    // let boundThing = unboundGetThingy.bind(module);
  }

  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  createHouse = (newHouse) => {
    let { name, address, city, state, zip, img, mortgage, rent } = this.state
    axios.post('/api/house', { name, address, city, state, zip, img, mortgage, rent } ).then(res => {
      
    })
  }

  render() {
    return(
      <div>
        <div>
          <Link to='/'>
            <button> Cancel </button>
          </Link>
        </div>
        <div>
          <input 
              placeholder='House Name'
              name='name'
              value={this.state.name}
              type='text'
              maxLength='30'
              onChange={this.handleChange}
          />

          <input 
              placeholder='Address'
              name='address'
              value={this.state.address}
              type='text'
              maxLength='100'
              onChange={this.handleChange}
          />

          <input 
              placeholder='City'
              name='city'
              value={this.state.city}
              type='text'
              maxLength='100'
              onChange={this.handleChange}
          />

          <input 
              placeholder='State'
              name='state'
              value={this.state.state}
              type='text'
              maxLength='2'
              onChange={this.handleChange}
          />  
          <input 
              placeholder='Zip Code'
              name='zip'
              value={this.state.zip}
              type='number'
              onChange={this.handleChange}
          />

          <input 
              placeholder='Image Url'
              name='img'
              value={this.state.img}
              onChange={this.handleChange}
          />

          <input 
              placeholder='Mortgage Amount'
              name='mortgage'
              value={this.state.mortgage}
              onChange={this.handleChange}
              type='number'
          />

          <input 
              placeholder='Renting Amount'
              name='rent'
              value={this.state.rent}
              onChange={this.handleChange}
              type='number'
          />
          <button onClick={this.createHouse}> Add Property </button>
        </div>
      </div>
    )
  }
}