import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import main_logo from '../assets/imgs/main_logo.png' // <img src={main_logo} style={{width: '40px'}}/>



export const active_enum = {
    tests: 1,
    groups: 2,
    catalog: 3,
}


function Profile(){
    return (
        <NavDropdown title="Профиль" id="profile-dropdown">
            <NavDropdown.Item href="/profile">Настройки</NavDropdown.Item>
            <NavDropdown.Item>Выход</NavDropdown.Item>
        </NavDropdown>
    )
}

function Alerts(){
    return (
        <NavDropdown title="Уведомления" id="alerts-dropdown">
            <NavDropdown.Item href="#action/3.1">Alert 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Alert 2</NavDropdown.Item>
        </NavDropdown>
    )
}

function Navigation({active}){
    return (
        <Nav className="me-auto">
            <Nav.Link href="/tests" className={active == active_enum.tests ? 'active' : ''}>Мои тесты</Nav.Link>
            <Nav.Link href="/groups" className={active == active_enum.groups ? 'active' : ''}>Группы</Nav.Link>
            <Nav.Link href="/catalog" className={active == active_enum.catalog ? 'active' : ''}>Каталог</Nav.Link>
        </Nav>
    )
}

function Logo(){
    return (
        <>
            <img
                src={main_logo}
                width="39"
                height="39"
                className="d-inline-block align-top"
            />
            <Navbar.Brand href="#home" style={{marginLeft: '6px'}}>OmicronTests</Navbar.Brand>
        </>
    )
}


export function Header({active}) {
    return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
        <Container>
        <Logo></Logo>
        <Navbar.Collapse id="basic-navbar-nav">
            <Navigation active={active}></Navigation>
            <Nav>
                <Alerts></Alerts>
                <Profile></Profile>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      )
}