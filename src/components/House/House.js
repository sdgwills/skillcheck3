import React, { Component } from 'react'

export default class House extends Component {
  render() {
    let { house } = this.props
    return(
      <div>

        <h4> House: </h4>
        <p>
          Name: {house.name} <br/>
          Address: {house.address} <br/>
          City: {house.city} <br/>
          State: {house.state} <br/>
          Zipcode: {house.zip} <br/>
          Mortgage: {house.mortgage} <br/>
          Renting: {house.rent} <br/>
          <button> Delete </button> <br/>
          <img src={house.img} />
        </p>
      </div>
    )
  }
}