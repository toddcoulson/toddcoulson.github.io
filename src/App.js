import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      numbersArray:[1,2,3,4,5,6,7,8,9]
    }
  }
createMap=()=>{
return this.state.numbersArray.map(x=>{
  return <div key={x} className="circle"><span>{x}</span></div>
})
}

  render() {
    return (
      <div className="App">
        {this.createMap()}
      </div>
    );
  }
}

export default App;
