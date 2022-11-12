import React, { Component } from 'react'
import StudentItem from './StudentItem'

export default class StudentList extends Component {
studentName = "Sua";
studentAge = 22;

  render() {
    return (
      <div style={{backgroundColor : "green" , padding:30}}>
        <h1>Studentlist</h1>
        <StudentItem  name = {this.studentName} age={this.studentAge}/>
      </div>
    )
  }
}
