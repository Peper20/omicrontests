import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


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
                            <Nav.Link eventKey="results">Результаты</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="questions">Вопросы</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className='mt-4'>
                        <Tab.Pane eventKey="first">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet aperiam quam quibusdam quo quos reiciendis exercitationem accusantium velit consectetur nisi quisquam eaque esse sit, consequatur soluta deserunt fugiat doloremque?
                        </Tab.Pane>
                        <Tab.Pane eventKey="results">Результаты</Tab.Pane>
                        <Tab.Pane eventKey="questions">Вопросы</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
