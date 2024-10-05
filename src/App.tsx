
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Auth } from './components/Auth'
import { TaskList } from './components/TaskList'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='' element={< Auth />} />
        <Route path='/tasks' element={<TaskList/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
