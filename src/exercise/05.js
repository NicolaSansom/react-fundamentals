// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const Box = ({className = '', size = 'small', style, ...otherProps}) => {
  return (
    <div
      className={`${className} box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <div
    className="box box--small"
    style={{background: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{background: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{background: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      <Box size="small" style={{background: 'lightblue'}}>
        small lightblue box
      </Box>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
