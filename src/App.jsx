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
     <Canvas camera={{fov:64, position:[2.3, 1.5, 2.3]}}>
        <Experience /> 
      </Canvas>    
    </>
  )
}

export default App
