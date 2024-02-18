import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './Clicker'

function App() {
  return (
    <>
      <Clicker message="yey you clicked me" buttonText="click the button" />
      <Clicker message="pls stop clicking me" buttonText="dont click this button" />
    </>
  )
}

export default App
