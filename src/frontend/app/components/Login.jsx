import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';


import main_logo from '../assets/imgs/main_logo.png' // <img src={main_logo} style={{width: '40px'}}/>
import {login, register} from '../assets/scripts/auth.js'


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
    const [validated, setValidated] = useState(false)
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    function validate(event){
        const form = event.currentTarget
        const email = form.elements[0].value
        const password = form.elements[1].value

        event.preventDefault()

        if (form.checkValidity() === false) {
            event.stopPropagation()
            setValidated(true)
        } else {
            login(email, password).then(
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
        <Form noValidate validated={validated} className='d-grid' onSubmit={validate} name="login">
        <Form.Group className="mb-3" controlId="email">
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

function RegisterForm({onChange}){
    const [validated, setValidated] = useState(false)
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    function validate(event){
        const form = event.currentTarget
        const email = form.elements[0].value
        const password = form.elements[1].value

        event.preventDefault()
        
        if (form.checkValidity() === false) {
            event.stopPropagation()
            setValidated(true)
        } else {
            register(email, password).then(
                (response) => {
                    login(email, password).then(
                        (response) => {
                            navigate('/tests')
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                            setErrorMessage('Произошла непредвиденная ошибка.')
                            setShow(true)
                        }
                    )
                }
            ).catch(
                (error) => {
                    switch (error.code) {
                        case 'ERR_BAD_REQUEST':
                            setErrorMessage('Аккаунт с указанной почтой уже существует.')
                            setShow(true)
                            break;
                    
                        default:
                            console.log(error)
                            setErrorMessage('Произошла непредвиденная ошибка.')
                            setShow(true)
                            break;
                    }
                }
            )
        }
    }

    return (
        <Form noValidate validated={validated} className='d-grid' onSubmit={validate} name="register">
        <Form.Group className="mb-3" controlId="email">
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
        <Alert show={show} onClose={() => setShow(false)} variant="danger" dismissible className='mt-3 mb-0'>
            {errorMessage}
        </Alert>
        <hr />
        <div>Уже есть аккаунт? — <a href="" onClick={onChange}>войдите</a></div>
        </Form>
    )
}


export default function Login(){
    const [lor, setLor] = useState(loginRegisterEnum.login)

    function onChange(e){
        e.preventDefault()
        setLor((lor + 1) % 2) // it changes to another one
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