
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Auth } from './routes/Auth'
import { TaskList } from './routes/TaskList'
import PrivateRoute from './routes/PrivateRouter'
import { Profile } from './routes/Profile'
import { Groups } from './routes/Groups'
import { GroupTaskList } from './routes/GroupTaskList'


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

        <Route path='/groups' element={
          <PrivateRoute>
            <Groups/>
          </PrivateRoute>
        } />

        <Route path='/grouptasks' element={
          <PrivateRoute>
            <GroupTaskList/>
          </PrivateRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
