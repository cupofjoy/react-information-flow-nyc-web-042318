import React from 'react'
import Tier3 from './Tier3'


const Tier2 = (props) => {
  return (
    <div className="tier2" style={{backgroundColor: props.color, color: props.color}} onClick={props.handleClick}>
      <Tier3 color={props.childColor} handleClick={props.handleChildClick}/>
      <Tier3 color={props.childColor} handleClick={props.handleChildClick} />
    </div>
  )
}

export default Tier2
