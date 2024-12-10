import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import Experience from './component/Experience'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Canvas>
        <Experience /> 
      </Canvas>    
    </>
  )
}

export default App
