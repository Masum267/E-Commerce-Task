import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import MyRouter from './Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyRouter/>
    </>
  )
}

export default App
