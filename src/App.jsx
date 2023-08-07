import React, { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/textForm'


const App = () => {

  const [mode, setMode] = useState('light')

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'blue'
      document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
     
        <Navbar title='TextUtils' aboutText="About" mode={mode} toogleMode={toogleMode} />
        <div className="container my-3">
        <TextForm heading='Enter the text to Analyze' mode={mode} />
        
        </div>
      
    </>
  )
}

export default App
