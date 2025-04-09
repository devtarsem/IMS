
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './components/dashboard'
import Home from './components/home'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Dashboard/>,
    children : [
        {
          path : '/home',
          element : <Home/>
        }
    ]
  }
  
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
