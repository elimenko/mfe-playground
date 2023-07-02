import { useState } from 'react'
import './App.css'
import { ErrorBoundary } from "react-error-boundary";

import MFRemoteApp from './MFRemoteApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Root app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>Microfrontends</h2>
        <div className="mfe-grid">
          <ErrorBoundary fallback={<div>Couldn't load IFrame MFE</div>}>
            <iframe src="http://myapp.localhost" title="microfrontend1"></iframe>
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Couldn't load Module Federation MFE</div>}>
            <MFRemoteApp rootCounter={count}/>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export default App
