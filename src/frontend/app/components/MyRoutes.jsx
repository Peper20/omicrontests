import Container from 'react-bootstrap/Container';
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';


import {Header, active_enum} from './Header.jsx'
import Tests from './Tests.jsx'
import Login from './Login.jsx'
import Loading from './Loading.jsx'


function DefaultPage(props){
    return (
        <>
            <Header active={props.active}></Header>
            <Container>
                {props.children}
            </Container>
        </>
    )
}

function TestsPage() {
    return (
        <DefaultPage active={active_enum.tests}>
            <Tests></Tests>
        </DefaultPage>
    )
}

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

function LoginPage({user}) {
    const navigate = useNavigate()
    if (user){
        useEffect(() => {navigate('/tests')}, [])
        return <Loading></Loading>
    }
    return (
        <Container>
            <Login></Login>
        </Container>
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
  
    if (!user){
      useEffect(() => {navigate('/login')}, [])
    }
  
  
    return (
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="tests" element={<TestsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="groups" element={<GroupsPage />} />
        <Route path="login" element={<LoginPage user={user} />} />
      </Routes>
    )
  }