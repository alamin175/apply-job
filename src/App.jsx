import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import HeadingSection from './Component/HeadingSection/HeadingSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='all-items'>
      <Header></Header>
    </div>
  )
}

export default App
