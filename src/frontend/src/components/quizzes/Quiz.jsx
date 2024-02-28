import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';


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
                        <Tab.Pane eventKey="results">Результаты</Tab.Pane>
                        <Tab.Pane eventKey="questions">Вопросы</Tab.Pane>
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
                    <span style={{fontSize: '1.1em'}}>0</span>
                </Col>
                <Col sm className='shadow-sm p-1 m-1' style={{textAlign: 'center'}}>
                    <small style={{fontSize: '0.9em'}}>Тип теста</small>
                    <br />
                    <span style={{fontSize: '1.1em'}}>Образовательный</span>
                </Col>
                <Col sm className='shadow-sm p-1 m-1' style={{textAlign: 'center'}}>
                    <small style={{fontSize: '0.9em'}}>Вариантов</small>
                    <br />
                    <span style={{fontSize: '1.1em'}}>0</span>
                </Col>
            </Row>
            <Row className='shadow-sm'>
                <Col sm>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontSize: '1.1em'}}>Наименование</Form.Label>
                            <Form.Control type="text" placeholder="Название теста" readOnly value={'Название теста'}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </>
    )
}