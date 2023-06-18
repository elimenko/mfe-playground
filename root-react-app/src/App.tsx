import { useState, useRef, useEffect } from 'react'
import './App.css'

import AppWrapper from 'remoteVueApp/AppWrapper'

function App() {
  const [count, setCount] = useState(0)
  const vueMFRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vueMFRef.current) {
      console.log('Ref: ', vueMFRef.current);
      AppWrapper(vueMFRef.current);
    }
  }, [vueMFRef.current]);

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
          <iframe src="http://localhost:5001" title="microfrontend1"></iframe>
          <div id="vue-mf-app" ref={vueMFRef}></div>
        </div>
      </div>
    </>
  )
}

export default App
