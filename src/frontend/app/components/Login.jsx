import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';


import main_logo from '../assets/imgs/main_logo.png' // <img src={main_logo} style={{width: '40px'}}/>
import {login} from '../assets/scripts/auth.js'


const loginRegisterEnum = {
    login: 0,
    register: 1,
}

function FormLogo(){
    return (
        <div style={{textAlign: 'center'}}>
        <img
            src={main_logo}
            width="60px"
            height="60px"
            className="d-inline-block align-top"
        />
        <p style={{marginLeft: '6px', marginTop: '2px', fontSize: '27px'}} className='mb-3'>OmicronTests</p>
        </div>
    )
}

function LoginForm({onChange}){
    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    function validate(event){
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
          setValidated(true)
        } else {
            loginSubmit(event).then(
                (response) => {
                    navigate('/tests')
                }
            ).catch(
                (error) => {
                    switch (error.code) {
                        case 'ERR_BAD_REQUEST':
                            setErrorMessage('Неверный email или пароль.')
                            setShow(true)
                            break;
                    
                        default:
                            setErrorMessage('Произошла непредвиденная ошибка.')
                            setShow(true)
                            break;
                    }
                }
            )
        }
    }

    return (
        <Form noValidate validated={validated} className='d-grid' onSubmit={validate}>
        <Form.Group className="mb-3" controlId="loginForm">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control required type="email" placeholder="example@mail.ru" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control required type="password" placeholder='Введите пароль'/>
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
            Войти
        </Button>
        <Alert show={show} onClose={() => setShow(false)} variant="danger" dismissible className='mt-3 mb-0'>
            {errorMessage}
        </Alert>
        <hr />
        <div>Нет аккаунта? — <a href="" onClick={onChange}>зарегестрируйтесь</a></div>
        </Form>
    )
}

function RegisterForm({onChange, onSend}){
    const [validated, setValidated] = useState(false)

    function validate(event){
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
          setValidated(true)
        } else {
            // 232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323
            onSend(event)
        }
    }

    return (
        <Form noValidate validated={validated} className='d-grid' onSubmit={validate}>
        <Form.Group className="mb-3" controlId="loginForm">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control required type="email" placeholder="example@mail.ru" />
        </Form.Group>

        <Form.Group controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control required type="password" placeholder='Введите пароль'/>
        </Form.Group>
        
        {/* <Form.Group className="mt-3" controlId="repeatPassword">
            <Form.Control type="password" placeholder='Повторите пароль'/>
        </Form.Group> */}

        <Button variant="primary" type="submit" className='mt-3'>
            Зарегестрироваться
        </Button>
        <hr />
        <div>Уже есть аккаунт? — <a href="" onClick={onChange}>войдите</a></div>
        </Form>
    )
}


function loginSubmit(event){
    event.preventDefault();
    return login(event.currentTarget.elements[0].value, event.currentTarget.elements[1].value)
}

export default function Login(){
    const [lor, setLor] = useState(loginRegisterEnum.login)

    function onChange(e){
        e.preventDefault()
        setLor((lor + 1) % 2) // changes to another one
    }

    
    return (
        <div className="border col-sm-9 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5 p-4">
            <FormLogo></FormLogo>
            {lor ===  loginRegisterEnum.login
                ?<LoginForm onChange={onChange}></LoginForm>
                :<RegisterForm onChange={onChange}></RegisterForm>
            }
        </div>
    )
}