import React, { useState } from 'react'

function App() {
  const [name, setName] = useState<string>('')
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input type="text" name="name" id="name" value={name} onChange={({target: {value}}) => {
        setName(value)
      }}/>
    </div>
  )
}

export default App
