import React, { Component } from 'react';
import Card from './Card'

class Index extends Component {

    state = {
      greased: true,
      clickedName: true,
      clickedWeight: true
    }

	  handleFilter = (event) => {
		    this.props.sent(this.state.greased ? false : true )
		    this.state.greased ? this.setState({greased: false}) : this.setState({greased: true})
      }

    handleNameSort = (event) => {
      // console.log(this.props.hogs)
      // console.log([...this.props.hogs].sort('name'))
      this.state.clickedName ? this.setState({clickedName: false}) : this.setState({clickedName: true})
    }

    handleWeightSort = (event) => {
      this.state.clickedWeight ? this.setState({clickedWeight: false}) : this.setState({clickedWeight: true})
    }

  render() {
    // console.log((this.state))
    // console.log("in index", this.props.hogs)
    let getAllHogs = () => {
      if (this.state.greased === false) {
        let filteredFalse = this.props.hogs.filter((hog) => hog.greased === false )
        return filteredFalse.map(hog => < Card singleHog={hog} key={hog.weight} />)
      } else {
        let filteredTrue = this.props.hogs.filter((hog) => hog.greased === true )
        return filteredTrue.map(hog => < Card singleHog={hog} key={hog.weight} />)
      }
    }

    let handleSorting = () => {
      if (this.clickedName === true) {
        let sortedNames = []
        sortedNames = this.props.hogs.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        let sortedArrayOfNames = sortedNames.map((hog) =>  < Card singleHog={hog} key={hog.weight} />)
        return sortedArrayOfNames
      } else if (this.clickedWeight === true){
        let sortedWeights = []
        sortedWeights = this.props.hogs.sort((a, b) => {
          return a.weight - b.weight
        })
        let sortedArrayOfWeights = sortedWeights.map((hog) =>  < Card singleHog={hog} key={hog.weight} />)
        return sortedArrayOfWeights
      }
    }

    return (
      <div>
      <button name='filter-hogs' onClick={this.handleFilter}>greased</button>
      <button name='sort-names' onClick={this.handleNameSort}>name</button>
      <button name='sort-weights' onClick={this.handleWeightSort}>weight</button>
      <div className='ui grid container'>

      {this.state.clickedName ? getAllHogs() : handleSorting()}
      </div>
      </div>
    );
  }
}

export default Index;
