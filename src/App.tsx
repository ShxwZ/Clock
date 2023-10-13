import './App.css'
import React from 'react'
import Clock from './components/clock/Clock'

function App() {

  return (
    <>
    <main>
      <section className='screen' >
        <div className='title'>
          <h1>Clock with dots 🕔</h1>
        </div>
        <Clock></Clock>
      </section>
      <section className='screen' >
        <div className='title'>
          <h1>Clock with seconds 🕔</h1>
        </div>
        <Clock showSeconds={true}></Clock>
      </section>
      </main>
    </>
  )
}

export default App
