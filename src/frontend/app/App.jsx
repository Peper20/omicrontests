import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react'

import './App.css'
import {TestsPage, ProfilePage, CatalogPage, GroupsPage, LoginPage, AnyPage} from './components/pages.jsx'



export default function App() {
  const location = useLocation()
  const [user, setUser] = useState(null)
  

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
