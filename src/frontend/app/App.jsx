import axios from 'axios'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'


import './App.css'
import {TestsPage, ProfilePage, CatalogPage, GroupsPage, LoginPage, AnyPage} from './components/pages.jsx'
import {ROOT_AUTH_URL, ROOT_USERS_URL} from './settings.js'


function getMe() {
  axios.get(ROOT_USERS_URL + '/me').then(
    (response) => {
      return response.data
    }
  ).catch((error) => {
    return null
  })
}


export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const [user, setUser] = useState(null)
  useEffect(() => {() => setUser(getMe())}, [])

  if (location.pathname !== 'login' && !user){
    useEffect(() => {navigate('/login')}, [])
  }


  return (
    <>
      <Routes>
        <Route path="*" element={<AnyPage />} />
        <Route path="tests" element={<TestsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="groups" element={<GroupsPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  )
}
