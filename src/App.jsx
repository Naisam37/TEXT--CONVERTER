import { useState } from 'react'
import './App.css'
import Cahnge from './task.jsx'
import './task1.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      < Cahnge/>
    </div>
  )
}

export default App;
