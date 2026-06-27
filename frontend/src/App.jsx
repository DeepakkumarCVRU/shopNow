
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayOut from './components/LayOut/UserLayOut'

function App() {

  return (
    <>
      <Routes>
        {/* User layout */}
        <Route path="/" element={<UserLayOut/>} />
        {/* Admin Layout */}
        <Route path="/admin" element={<h1>Home</h1>} />

      </Routes>
    </>
  )
}

export default App
