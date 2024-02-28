import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import last_visit_logo from '../assets/imgs/last_visit_logo.png'
import created_logo from '../assets/imgs/created_logo.png'



export default function Tests(){
    return (
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
            {Array.from({ length: 5 }).map((_, idx) => (
                <Col key={idx}>
                    <Card className='shadow-sm'>
                        <Card.Body className='p-3'>
                            <Card.Title>Название теста</Card.Title>
                            {idx % 2
                                ?<Card.Subtitle className="mb-2 text-danger">Закрыт</Card.Subtitle>
                                :<Card.Subtitle className="mb-2 text-success">Открыт</Card.Subtitle>
                            }
                        </Card.Body>
                        <Card.Footer className='p-2'>
                            <small className="text-muted">
                                <img alt="Просмотрено" src={last_visit_logo} style={{
                                    width: '1.1em', height: '1.1em',
                                    marginRight: '0.3em', marginLeft: '0px'
                                }} className='mb-1'/>
                                25.01.2024 17:23
                                <br />
                                <img alt="Создано" src={created_logo} style={{
                                    width: '1.3em', height: '1.3em',
                                    marginRight: '0.1em',
                                }} className='mb-1'/>
                                23.01.2024 12:43
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}