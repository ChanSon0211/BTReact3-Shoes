import React, { Component } from 'react'
import BlackCar from "../assets/black-car.jpg";
import RedCar from "../assets/img/red-car.jpg";
import SilverCar from "../assets/img/silver-car.jpg";
import SteelCar from "../assets/img/steel-car.jpg";




export default class Home extends Component {
state = {
    carImage: BlackCar, RedCar , SilverCar ,SteelCar,
};

handleChangeColor= (img) => {
this.setState({
    carImage:img,
})
}



  render() {
    return (
      <div>
        <img src={BlackCar} style={{width:500}} alt=""/>
        <img src={RedCar }style={{width:500}} alt=""/>
        <img src={SilverCar }style={{width:500}} alt=""/>
        <img src={SteelCar }style={{width:500}} alt=""/>
        <h2>Pick Color</h2>
        <button onClick={()=>{
            this.handleChangeColor(BlackCar)
        }} type="">Black</button>
        <button onClick={()=>{
            this.handleChangeColor(RedCar)
        }} >Red</button>
        <button onClick={()=>{
            this.handleChangeColor(SilverCar)
        }}>Silver</button>
        <button onClick={()=>{
            this.handleChangeColor(SteelCar)
        }}>Steel</button>
      </div>
    )
  }
}

