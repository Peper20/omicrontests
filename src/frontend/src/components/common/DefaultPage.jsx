import {Header, active_enum as _active_enum} from './Header'
import Container from 'react-bootstrap/Container';


export const active_enum = _active_enum


export function DefaultPage(props){
    return (
        <>
            <Header active={props.active}></Header>
            <Container className='mt-4'>
                {props.children}
            </Container>
        </>
    )
}
