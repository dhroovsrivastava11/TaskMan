
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Auth } from './routes/Auth'
import { TaskList } from './routes/TaskList'
import PrivateRoute from './routes/PrivateRouter'
import { Profile } from './routes/Profile'


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
        
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
