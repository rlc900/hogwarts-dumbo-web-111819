import React, { Component } from 'react';

class Card extends Component {

    state = {
      clicked: true
    }

  handleClick = (event) => {
    // console.log(event)
    if (this.state.clicked === true) {
      this.setState({
        clicked: false
      })
    } else {
      this.setState({
        clicked: true
      })
    }
  }

  displayHogInfo = () => {
    let highestMedal = this.props.singleHog['highest medal achieved']
    let { specialty, greased, weight} = this.props.singleHog
    // console.log(greased)
    return (
      <ul>
      <li>{specialty}</li>
      <li>Greased: {greased? 'true' : 'false'}</li>
      <li>{weight}</li>
      <li>{highestMedal}</li>
      </ul>
    )
  }

  handleNames = (name) => {
    // console.log(name)
    return name.split(' ').join('_').toLowerCase()
  }

  render() {
    // console.log(this.props.singleHog ? this.props.singleHog.name : this.props.singleHog)
    // console.log("in card js", this.props)
    let { name } = this.props.singleHog
    // console.log(name.split(' ').join('_'))
    return (
      <div className='ui eight wide column pigTile' onClick={this.handleClick}>
        {this.state.clicked ? <button onClick={this.handleClick}> {name} </button> : this.displayHogInfo()}
        <img src={require(`../hog-imgs/${this.handleNames(name)}.jpg`)} alt={`${name}`}/>

      </div>
    );
  }

}

export default Card;
