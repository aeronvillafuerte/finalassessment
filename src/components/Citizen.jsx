// src/components/Citizen.jsx
import React from 'react'
import './Citizen.css'

const Citizen = ({ index, citizen, toggleStatus }) => {
  return (
    <li className="citizen-list-item">
      <span className="column no">{index + 1}.</span>
      <span className="column name">{citizen.name}</span>
      <span className="column age">{citizen.age}</span>
      <span className="column address">{citizen.address}</span>
      <span className="column status">{citizen.status}</span>
      <button className="column toggle" onClick={() => toggleStatus(index)}>Toggle Status</button>
    </li>
  )
}

export default Citizen
