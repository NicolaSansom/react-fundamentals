// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState('')
  const inputRef = useRef()
  const handleOnChange = event => {
    const value = event.target.value
    return setUsername(value.toLowerCase())
  }
  const handleSubmit = event => {
    event.preventDefault()
    return onSubmitUsername(username)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleOnChange}
          ref={inputRef}
          value={username}
          name="username"
          id="username"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
