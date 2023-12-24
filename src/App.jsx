import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './a.html' 

function App() {
  const [count, setCount] = useState(0)
  const size=5;
  console.log(size)
  console.log('hello')
  console.log('newMiri')
  const a=[1,2,3];
  console.log(a)
  console.log('second confilct')

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
