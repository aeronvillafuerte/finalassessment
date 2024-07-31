// src/components/Citizens.jsx
import React, { useState } from 'react'
import Citizen from './Citizen'
import SearchFilter from './SearchFilter'
import './Citizens.css'

const Citizens = () => {
  const initialCitizens = [
    { name: 'Aeron Villafuerte', age: 21, address: 'Usmad, Argao', status: 'Active' },
    { name: 'Aicee Villafuerte', age: 20, address: 'Usmad, Argao', status: 'Active' },
    { name: 'Tyron Shane Villafuerte', age: 25, address: 'Usmad, Argao', status: 'Inactive' },
    { name: 'Quin Hailey Villafuerte', age: 20, address: 'Usmad, Argao', status: 'Active' },
    { name: 'Kulbem Ross Villafuerte', age: 30, address: 'Usmad, Argao', status: 'Inactive' },
    { name: 'Kenneth Jane Villafuerte', age: 32, address: 'Usmad, Argao', status: 'Active' },
    { name: 'Kent Marjory Villafuerte', age: 35, address: 'Usmad, Argao', status: 'Inactive' },
    { name: 'Knight Nexxus Velasquez', age: 20, address: 'Bachelor Village', status: 'Active' },
    { name: 'Knight Minrod Velasquez', age: 40, address: 'Bachelor Village', status: 'Active' },
    { name: 'Midnight Thanatus Velasques', age: 40, address: 'Bachelor Villagenpe', status: 'Inactive' }
  ]

  const [citizens, setCitizens] = useState(initialCitizens)
  const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleStatus = (index) => {
    const updatedCitizens = [...citizens]
    updatedCitizens[index].status =
      updatedCitizens[index].status === 'Active' ? 'Inactive' : 'Active'
    setCitizens(updatedCitizens)
    setFilteredCitizens(updatedCitizens.filter(citizen => 
      citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
    ))
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setFilteredCitizens(citizens.filter((citizen) =>
      citizen.name.toLowerCase().includes(query.toLowerCase())
    ))
  }

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} onSearch={handleSearch} />
      <ul className="citizen-list">
        {/* List header */}
        <li className="citizen-list-header">
          <span className="column no">No.</span>
          <span className="column name">Name</span>
          <span className="column age">Age</span>
          <span className="column address">Address</span>
          <span className="column status">Status</span>
          <span className="column toggle">Toggle Status</span>
        </li>
        {/* List items */}
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={index}
            index={index}
            citizen={citizen}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  )
}

export default Citizens
