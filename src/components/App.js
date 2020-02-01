import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Index from './Index'
import hogs from '../porkers_data'


class App extends Component {

  sendDownInfo = (isItGreased) => {
    let filteredArr = []
    if (isItGreased === true) {
      filteredArr = hogs.filter((hog) => hog.greased === true)
    } else {
      filteredArr = hogs.filter((hog) => hog.greased === false)
    }
    return filteredArr
  }



  render() {
    // console.log("in app js", hogs)
    return (
      <div className="App">
          < Nav />
          < Index hogs={hogs} sent={this.sendDownInfo}/>
      </div>
    )
  }
}

export default App;
