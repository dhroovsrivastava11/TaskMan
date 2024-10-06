
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Auth } from './components/Auth'
import { TaskList } from './components/TaskList'
import PrivateRoute from './components/PrivateRouter'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='' element={< Auth />} />
        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <TaskList />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
