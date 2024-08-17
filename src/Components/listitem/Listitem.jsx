import React from 'react'
import "./Listitem.scss"
import Gran_Torino from '../../Assets/Gran_Torino.jpg'

export default function Listitem() {
  return (
    <div>
      <div className="listitem">
        <img className='Thumbnail' src = {Gran_Torino} alt = ""/>
      </div>
    </div>
  )
}
