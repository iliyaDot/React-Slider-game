import React from 'react'
import State from './State'

export default function UnitStates({units, name}) {


  const states = units.map(unit => <State state={unit.state} value={unit.value}/> )
  return (
    <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>

       
      {states} 
       
        {/* <State state={20} value='Training'/>
        <State state={16} value='Speed'/>
  <State state={150} value='TCost'/> */}


</div>
  )
}
