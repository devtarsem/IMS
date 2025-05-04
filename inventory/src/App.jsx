
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './components/dashboard'
import Home from './components/home'
import AddSecret from './components/addSecret'
import ShareLink from './components/secureShareLink'
import ProtectedFileViewer from './components/protectedFileViewer'
import MySecrets from './components/mySecrets'
import Exports from './components/exports'
import SecMoreshare from './components/secMoreShare'
import Setting from './components/settings'
import Marketing from './components/marketing'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Marketing/>,
    
  }
  ,
  {
    path : '/dashboard',
    element : <Dashboard/>,
    children : [
      {
        path : 'home',
        element : <Home/>
      }
      ,
      {
        path : 'secret',
        element : <AddSecret/>
      }
      ,
      
      {
        path : 'my-secret',
        element : <MySecrets/>
      }
      ,

      {
        path : 'sec-share',
        element : <SecMoreshare/>
      }
      ,

      {
        path : 'setting',
        element : <Setting/>
      }
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
