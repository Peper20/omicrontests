import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import {useNavigate} from 'react-router-dom';


import main_logo from '../../assets/imgs/main_logo.png'
import {logout} from '../../assets/scripts/auth.js'



export const active_enum = {
    tests: 1,
    groups: 2,
    catalog: 3,
}


function Profile(){
    const navigate = useNavigate()

    function logoutHandler(event){
        logout().then(
            (response) => {
                navigate('/login')
            }
        )
    }

    return (
        <Dropdown as={NavItem}>
            <Dropdown.Toggle className='active' as={Nav.Link}>Профиль</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/profile">Настройки</Dropdown.Item>
                <Dropdown.Item onClick={logoutHandler}>Выход</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
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

export function Logo(){
    return (
        <>
            <img
                src={main_logo}
                width="39"
                height="39"
                className="d-inline-block align-top"
            />
            <Navbar.Brand href="/tests" style={{marginLeft: '6px'}}>OmicronTests</Navbar.Brand>
        </>
    )
}


export function Header({active}) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Logo></Logo>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navigation active={active}></Navigation>
                    <Nav>
                        <Profile></Profile>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}