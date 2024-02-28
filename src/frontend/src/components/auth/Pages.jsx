import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


import {Login} from './Login.jsx'
import {Register} from './Register.jsx'
import Loading from '../Loading.jsx'




export function LoginPage({user}) {
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

export function RegisterPage({user}) {
    const navigate = useNavigate()
    if (user){
        useEffect(() => {navigate('/tests')}, [])
        return <Loading></Loading>
    }
    return (
        <Container>
            <Register></Register>
        </Container>
    )
}



