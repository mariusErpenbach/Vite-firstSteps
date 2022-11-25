import { useState } from 'react'

import Schedule from './components/Schedule'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Schedule/>
    </div>
  )
}

export default App
