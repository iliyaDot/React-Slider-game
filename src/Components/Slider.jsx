import React, {useState , useEffect} from 'react'
import Arrow from './Arrow'
import Card from './Card'

export default function Slider() {

const [heroes ,setHeroes]= useState([])

useEffect(() =>{
fetch('http://localhost:3000/heroes')
.then(response => response.json())
.then(heroes => setHeroes(heroes))
},[])
  return (
    <div className="slide-container">

    <div className="wrapper">
      <Arrow direction='prev'/>
        <Card />
      <Arrow direction='next' />

    </div>
    </div>
  )
}
