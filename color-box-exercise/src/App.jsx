import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxContainer from './BoxContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxContainer Xdim={5} Ydim ={5}/>
    </>
  )
}

export default App
