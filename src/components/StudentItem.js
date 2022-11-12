import React, { Component } from 'react'

export default class StudentItem extends Component {
  render() {
    return (
      <div style = {{backgroundColor:"gray" , padding : 10 }}>
        <h1>StudentItem</h1>
        <h4>Name : {this.props.name}</h4>
        <h4> Age : {this.props.age}</h4>
      </div>    
    )
  }
}
