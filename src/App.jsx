import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'antd'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import DoctorTable from './components/DoctorTable'
import DoctorInfo from './components/DoctorInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


<div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hospital" element={<DoctorTable />} />
          {/* <Route path="create" element={<CreateProduct />} /> */}
          <Route path="hospital/:id" element={<DoctorInfo />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
