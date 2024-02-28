import {useEffect} from 'react'
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';


import {DefaultPage} from './common/DefaultPage.jsx'
import {active_enum} from './common/Header.jsx'
import {OverviewPage} from './quizzes/Pages.jsx'
import {LoginPage, RegisterPage} from './auth/Pages.jsx'





function CatalogPage() {
    return (
        <DefaultPage active={active_enum.catalog}>

        </DefaultPage>
    )
}

function GroupsPage() {
    return (
        <DefaultPage active={active_enum.groups}>

        </DefaultPage>
    )
}

function ProfilePage() {
    return (
        <DefaultPage>
            
        </DefaultPage>
    )
}


function NotFoundPage() {
    return (
        <DefaultPage>
            404
        </DefaultPage>
    )
}



export default function MyRoutes({user}){
    const navigate = useNavigate()
    const location = useLocation()
  
    if (!user){
        useEffect(() => {
            if (location.pathname !== '/register' && location.pathname !== '/login') {
                navigate('/login')
            }
        }, [])
    }
  
  
    return (
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="tests" element={<OverviewPage />} />
        <Route path="tests/:id" element={<OverviewPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="groups" element={<GroupsPage />} />
        <Route path="login" element={<LoginPage user={user} />} />
        <Route path="register" element={<RegisterPage user={user} />} />
      </Routes>
    )
  }