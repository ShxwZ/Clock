import './App.css'
import React from 'react'
import Clock from './components/clock/Clock'

function App() {

  return (
    <>
      <div className='screen' style={{ border: '4px solid red' }}>
        <h1>Clock 1</h1>
        <Clock></Clock>
      </div>
      <div className='screen' style={{ border: '4px solid green' }}>
        <h1>Clock 2</h1>
        <Clock showSeconds={true}></Clock>
      </div>
    </>
  )
}

export default App
