import { useState, useEffect } from 'react'


import './App.css'
import Loading from './components/Loading.jsx'
import MyRoutes from './components/MyRoutes.jsx'
import {getMe} from './assets/scripts/auth.js'



const USER_LOADING_STATUS = 0

export default function App() {
  const [user, setUser] = useState(USER_LOADING_STATUS)
  useEffect(() => {getMe().then((response) => {setUser(response.data)}).catch((error) => {setUser(null)})}, [])

  return (
    <>
      {user === USER_LOADING_STATUS ? <Loading></Loading> : <MyRoutes user={user}></MyRoutes>}
    </>
  )
}

