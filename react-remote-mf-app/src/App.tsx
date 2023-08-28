import { useState } from 'react'
import './App.css'

interface AppProps {
  rootCounter?: number
}

function App(props?: AppProps) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>React MF MFE</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        <span>Counter from Host: {props?.rootCounter}</span>
    </div>
  )
}

export default App
