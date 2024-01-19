import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'


import main_logo from '../assets/imgs/main_logo.png' // <img src={main_logo} style={{width: '40px'}}/>


const loginRegisterEnum = {
    login: 0,
    register: 1,
}


export default function Login(){
    const [lor, setLor] = useState(loginRegisterEnum.login)

    function onClick(e){
        e.preventDefault()
        setLor((lor + 1) % 2)
    }

    function onSend(e){
        e.preventDefault()
        console.log(123)
    }

    
    return (
        <div className="border col-sm-9 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5 p-4">
            <div style={{textAlign: 'center'}}>
                <img
                    src={main_logo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                />
                <p style={{marginLeft: '6px', marginTop: '2px', fontSize: '27px'}} className='mb-3'>OmicronTests</p>
            </div>
            <Form className='d-grid'>
            <Form.Group className="mb-3" controlId="loginForm">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control type="email" placeholder="example@mail.ru" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder='Введите пароль'/>
            </Form.Group>
            
            {lor == loginRegisterEnum.login ? '' :
                <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                    <Form.Control required type="password" placeholder='Повторите пароль'/>
                </Form.Group>
            }
            <Button onClick={onSend} variant="primary" type="submit" className='mt-3'>
                {lor == loginRegisterEnum.login ? 'Войти' : 'Зарегистрироваться' }
            </Button>
            </Form>
            <hr />
            
            {lor == loginRegisterEnum.login ?
                <div>{'Нет аккаунта? — '}<a href="" onClick={onClick}>{' зарегестрируйтесь '}</a></div> :
                <div>{'Уже есть аккаунт? — '}<a href="" onClick={onClick}>{' войдите '}</a></div>
            }
        </div>
    )
}