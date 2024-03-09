import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';


import plus_logo from '../../assets/imgs/plus.png' // <img alt="Добавить" src={plus_logo} style={{height: '3.8em'}}/>  




export function  Quiz(){
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column sticky-top">
                        <Nav.Item className='mt-4'>
                            <Nav.Link eventKey="first">Обзор</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="questions">Вопросы</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="results">Результаты</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className='mt-4'>
                        <Tab.Pane eventKey="first">
                            <Dashboard></Dashboard>
                        </Tab.Pane>
                        <Tab.Pane eventKey="questions">
                            <Questions></Questions>
                        </Tab.Pane>
                        <Tab.Pane eventKey="results">Результаты</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}


function Dashboard(){
    return (
        <>
            <h2>Основная информация</h2>
            <Row className='mb-3'>
                <Col sm className='shadow-sm p-1 m-1' style={{textAlign: 'center'}}>
                    <small style={{fontSize: '0.9em'}}>Дата создания</small>
                    <br />
                    <span style={{fontSize: '1.1em'}}>28.02.2024 16:53</span>
                </Col>
                <Col sm className='shadow-sm p-1 m-1' style={{textAlign: 'center'}}>
                    <small style={{fontSize: '0.9em'}}>Участников</small>
                    <br />
                    <span style={{fontSize: '1.1em'}}>0</span>
                </Col>
                <Col sm className='shadow-sm p-1 m-1' style={{textAlign: 'center'}}>
                    <small style={{fontSize: '0.9em'}}>Вопросов</small>
                    <br />
                    <span style={{fontSize: '1.1em'}}>4</span>
                </Col>
                <Col sm className='shadow-sm p-1 m-1' style={{textAlign: 'center'}}>
                    <small style={{fontSize: '0.9em'}}>Тип теста</small>
                    <br />
                    <span style={{fontSize: '1.1em'}}>Образовательный</span>
                </Col>
                <Col sm className='shadow-sm p-1 m-1' style={{textAlign: 'center'}}>
                    <small style={{fontSize: '0.9em'}}>Вариантов</small>
                    <br />
                    <span style={{fontSize: '1.1em'}}>1</span>
                </Col>
            </Row>
            <Row className='shadow-sm mb-3'>
                <Col sm>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontSize: '1.1em'}}>Наименование</Form.Label>
                            <Form.Control type="text" placeholder="Название теста" readOnly value={'Какой ты хлеб'}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className='shadow-sm'>
                <h4>Экспорт теста</h4>
                <Col sm={3} className='p-3'>
                    <Card>
                      <Card.Body>
                        <Card.Title>PDF</Card.Title>
                        <Card.Text>
                          Скачать PDF файл теста.
                        </Card.Text>
                        <Button variant="primary">Скачать</Button>
                      </Card.Body>
                    </Card>
                </Col>
                <Col sm={3} className='p-3'>
                    <Card>
                      <Card.Body>
                        <Card.Title>DOCX</Card.Title>
                        <Card.Text>
                          Скачать DOCX файл теста.
                        </Card.Text>
                        <Button variant="primary">Скачать</Button>
                      </Card.Body>
                    </Card>
                </Col>
                <Col sm={3} className='p-3'>
                    <Card>
                      <Card.Body>
                        <Card.Title>Онлайн</Card.Title>
                        <Card.Text>
                          Открыть тест для прохождения онлайн.
                        </Card.Text>
                        <Button variant="success">Открыть</Button>
                      </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}


function Questions(){
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const toggleShow = () => setShow((s) => !s)
  
    return (
        <>
            <Nav variant="pills" className="justify-content-end">
                <Nav.Item>
                    <Button variant="primary" onClick={toggleShow} className="me-2">Добавить вопрос</Button>
                </Nav.Item>
            </Nav>
            <h3>Список вопросов:</h3>
            <QuestionsList></QuestionsList>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ButtonGroup vertical className='btn-in-group-text-left'>
                        <QSingleSelection></QSingleSelection>
                        <Button className='m-1' variant="light">Множественный выбор</Button>
                        <Button className='m-1' variant="light">Ввод числа</Button>
                        <Button className='m-1' variant="light">Ввод текста</Button>
                        <Button className='m-1' variant="light">Свободный ответ</Button>
                        <Button className='m-1' variant="light">Загрузка фото</Button>
                        <Button className='m-1' variant="light">Загрузка файла</Button>
                    </ButtonGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

function QuestionsList(){
    return (
        <>
            <div className='shadow-sm rounded p-2'>
                <Row>
                    <Col>
                        <h5>Сколько будет 2+2?</h5>
                    </Col>
                    <Col className='text-end'>
                        <span className='bg-light p-1 m-1 rounded'>
                            Одиночный выбор
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form><Form.Check inline label="2" type={'radio'} id={'324'}/></Form>
                    </Col>
                    <Col>
                        <Form><Form.Check inline label="5" type={'radio'} id={'324'}/></Form>
                    </Col>
                    <Col>
                        <Form><Form.Check inline label="4" type={'radio'} id={'324'}/></Form>
                    </Col>
                    <Col>
                        <Form><Form.Check inline label="3" type={'radio'} id={'324'}/></Form>
                    </Col>
                    <Col></Col>
                </Row>
                <Row >
                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                    <Col>
                        <Button variant="secondary">Отредактировать</Button>
                    </Col>
                </Row>
            </div>
            <div className='shadow-sm rounded p-2'>
                <Row>
                    <Col>
                        <h5>Сколько будет 11-8?</h5>
                    </Col>
                    <Col className='text-end'>
                        <span className='bg-light p-1 m-1 rounded'>
                            Ввод числа
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form>
                    </Col>
                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                </Row>
                <Row >
                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                    <Col>
                        <Button variant="secondary">Отредактировать</Button>
                    </Col>
                </Row>

            </div>
            <div className='shadow-sm rounded p-2'>
                <Row>
                    <Col>
                        <h5>Укажите второй месяц в году</h5>
                    </Col>
                    <Col className='text-end'>
                        <span className='bg-light p-1 m-1 rounded'>
                            Ввод текста
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form>
                    </Col>
                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                </Row>
                <Row >
                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                    <Col>
                        <Button variant="secondary">Отредактировать</Button>
                    </Col>
                </Row>

            </div>
            <div className='shadow-sm rounded p-2'>
                <Row>
                    <Col>
                        <h5>Выберите все фрукты</h5>
                    </Col>
                    <Col className='text-end'>
                        <span className='bg-light p-1 m-1 rounded'>
                            Множественный выбор
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form><Form.Check inline label="Яблоко" type={'checkbox'} id={'324'}/></Form>
                    </Col>
                    <Col>
                        <Form><Form.Check inline label="Картофель" type={'checkbox'} id={'324'}/></Form>
                    </Col>
                    <Col>
                        <Form><Form.Check inline label="Малина" type={'checkbox'} id={'324'}/></Form>
                    </Col>
                    <Col>
                        <Form><Form.Check inline label="Апельсин" type={'checkbox'} id={'324'}/></Form>
                    </Col>
                    <Col></Col>
                </Row>
                <Row >
                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                    <Col>
                        <Button variant="secondary">Отредактировать</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

function QSingleSelection(){
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    function newQ(e){
        e.preventDefault()

    }

    return (
        <>
            <Button className='m-1' variant="light" onClick={handleShow}>Одиночный выбор</Button>
            <Form>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                        <Modal.Title>Добавить вопрос с одиночным выбором</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formQText">
                            <Form.Label>Текст вопроса</Form.Label>
                            <Form.Control as="textarea" placeholder="Введите текст" />
                        </Form.Group>
                        <Variants></Variants>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Отмена</Button>
                        <Button variant="success" type="submit" onClick={newQ}>Добавить вопрос</Button>
                    </Modal.Footer>
                </Modal>
              </Form>
        </>
    )
}


function Variants(){
    const [variants, setVariants] = useState(1)

    return (
        <>
            <Form.Label>Варианты ответа</Form.Label>
            {(new Array(variants).fill(0)).map((_, idx) => {
                return (
                    <Form.Group key={idx} controlId={idx}>
                        <Form.Control type="text" className="mb-3"/>
                    </Form.Group>
                )
            })}
            <Button variant="primary" onClick={() => {setVariants(variants + 1)}}>Добавить вариант ответа</Button>
        </>
    )
}