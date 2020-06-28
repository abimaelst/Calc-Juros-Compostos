import React from 'react'

export default function InputEditable({ name, value }) {

  const handleInputValue = (event) => {
    value(event.target.value)
  }
  return (
    <div className="input-field col s4">
      <input id={name} type="number" className="validate" onChange={handleInputValue} />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}
