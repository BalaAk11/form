import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Garage from './garage';

class Car extends React.Component{
 constructor(){
    super();
    this.state={color:"red"};
 }
 changeClr = ()=>{
    this.setState({color:"black"});
 }
 render(){
    return(
      <div>
        <h2>i have a {this.state.color} car</h2>
        <button onClick={this.changeClr}>change color</button>
        <Garage brand="Audi"/>
      </div>  
    )
 }
}

export default Car;