import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import axios from 'axios';


import main_logo from '../assets/imgs/main_logo.png' // <img src={main_logo} style={{width: '40px'}}/>
import {ROOT_AUTH_URL, ROOT_USERS_URL} from '../settings.js'


const loginRegisterEnum = {
    login: 0,
    register: 1,
}

function FormLogo(){
    return (
        <div style={{textAlign: 'center'}}>
        <img
            src={main_logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
        />
        <p style={{marginLeft: '6px', marginTop: '2px', fontSize: '27px'}} className='mb-3'>OmicronTests</p>
        </div>
    )
}

function LoginForm({onChange, onSend}){
    const [validated, setValidated] = useState(false)

    function validate(event){
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
          setValidated(true)
        } else {
            onSend(event)
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

function login(username, password) {
    axios.post(
        ROOT_AUTH_URL + '/login',
        new URLSearchParams({
        //   'grant_type': '',
          'username': username,
          'password': password,
        //   'scope': '',
        //   'client_id': '',
        //   'client_secret': ''
        }),
        {
          headers: {
            'accept': 'application/json'
          },
          withCredentials: true,
        }
      ).then(
      (response) => {
        return true
      }
    ).catch((error) => {
      return false
    })
  }


export default function Login(){
    const [lor, setLor] = useState(loginRegisterEnum.login)

    function onChange(e){
        e.preventDefault()
        setLor((lor + 1) % 2)
    }

    function onSend(event){
        event.preventDefault();
        login(event.currentTarget.elements[0].value, event.currentTarget.elements[1].value)
    }

    
    return (
        <div className="border col-sm-9 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5 p-4">
            <FormLogo></FormLogo>
            {lor ===  loginRegisterEnum.login
                ?<LoginForm onSend={onSend} onChange={onChange}></LoginForm>
                :<RegisterForm onSend={onSend} onChange={onChange}></RegisterForm>
            }
        </div>
    )
}