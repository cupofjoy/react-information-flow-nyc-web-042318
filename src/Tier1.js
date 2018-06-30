import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)

    const initialColor = getRandomColor();
    const reducedColor = getReducedColor(initialColor);
    this.state = {
      color: initialColor,
      childColor: reducedColor,
      grandChildColor: getReducedColor(reducedColor)
    }
  }

  handleClick = () => {
    let c1 = getRandomColor();
    let c2 = getReducedColor(c1)
    let c3 = getReducedColor(c2)
    this.setState({
      color: c1,
      childColor: c2,
      grandchildColor: c3,
    })
  }

  handleChildClick = (event) => {
    event.stopPropagation();
    let c1 = getRandomColor();
    let c2 = getReducedColor(c1)
    this.setState = {
      childColor: c1,
      grandChildColor: c2
    }
  }

  handleGrandChildClick = (event) => {
    event.stopPropagation();
    this.setState = {
      grandChildColor: getRandomColor()
    }
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} childColor={this.state.grandChildColor} handleClick={this.handleChildClick} handleChildClick={this.handleGrandChildClick}/>
        <Tier2 color={this.state.childColor} childColor={this.state.grandChildColor} handleClick={this.handleChildClick} handleChildClick={this.handleGrandChildClick}/>
      </div>
    )
  }
}
