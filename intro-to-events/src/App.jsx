import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './Clicker'
import Form from './Form'

function App() {
  return (
    <>
    <Form/>
      <Clicker message = "yey you clicked me" buttonText />
    </>
  )
}

export default App
