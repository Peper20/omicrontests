import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import main_logo from '../assets/main_logo.png' // <img src={main_logo} style={{width: '40px'}}/>




export default function Header() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <img
                src={main_logo}
                width="39"
                height="39"
                className="d-inline-block align-top"
            />
            <Navbar.Brand href="#home" style={{marginLeft: '6px'}}>OmicronTests</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/tests" className='active'>Мои тесты</Nav.Link>
                <Nav.Link href="/groups">Группы</Nav.Link>
            </Nav>
            <Nav>
                <NavDropdown title="Уведомления" id="alerts-dropdown">
                    <NavDropdown.Item href="#action/3.1">Alert 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Alert 2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Профиль" id="profile-dropdown">
                    <NavDropdown.Item href="#action/3.1">Настройки</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Выход</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      )
}