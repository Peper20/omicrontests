import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';


import {login} from '../../assets/scripts/auth.js'
import {BaseContour} from './Base.jsx'



export function Login(){
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
        <BaseContour>
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
                <div>Нет аккаунта? — <a href="/register">зарегестрируйтесь</a></div>
            </Form>
        </BaseContour>
    )
}



