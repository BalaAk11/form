import React, { Component } from 'react'
import FileB from './fileB';

 class FileA extends Component {
    constructor(){
        super();
        this.state = {news:"pls wait"}
    }

    updateMsg = (data)=>{
        this.setState({news:data})
        
    }
  render() {
    return (
      <div>fileA
        <h1>{this.state.news}</h1>
        <FileB msg2={this.state.news} newMsg={this.updateMsg}/>
      </div>
    )
  }
}
export default FileA;
