import React, { useState } from 'react'

export default function Componet() {

  const [text, setText ] = useState()
  const [updated, setUpdated ] = useState()

  const textOnChange = (event) => {
    setText(event.target.value)
  }

  const buttonOnClick = () => {
    setUpdated(text)
  }

  return (
    <div>
      <input type="text" vale={text} onChange={textOnChange}/>
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Texto input: {text} </p>
      <p>Texto actualizado: {updated}</p>
      
    </div>
  )
}
