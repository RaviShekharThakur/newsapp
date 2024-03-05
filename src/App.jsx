import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Alert } from 'flowbite-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-500'>hello ravi</h1>
      <Alert>heya</Alert>
    </>
  )
}

export default App
