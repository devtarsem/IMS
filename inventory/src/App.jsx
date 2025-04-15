
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './components/dashboard'
import Home from './components/home'
import AddSecret from './components/addSecret'
import ShareLink from './components/secureShareLink'
import ProtectedFileViewer from './components/protectedFileViewer'
import MySecrets from './components/mySecrets'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Dashboard/>,
    children : [
        {
          path : '/home',
          element : <Home/>
        }
        ,
        {
          path : '/secret',
          element : <AddSecret/>
        }
        ,
        
        {
          path : '/my-secret',
          element : <MySecrets/>
        }
        ,
    ]
  }
  ,
  {
    path : '/secure/:id/:iv',
    element : <ShareLink/>
  }
  ,
  {
    path : '/protect/:id/:identifier',
    element : <ProtectedFileViewer/>
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
