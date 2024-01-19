import Container from 'react-bootstrap/Container';


import {Header, active_enum} from './Header.jsx'
import Tests from './Tests.jsx'


function DefaultPage(props){
    return (
        <>
            <Header active={props.active}></Header>
            <Container>
                {props.children}
            </Container>
        </>
    )
}

export function TestsPage() {
    return (
        <DefaultPage active={active_enum.tests}>
            <Tests></Tests>
        </DefaultPage>
    )
}

export function CatalogPage() {
    return (
        <DefaultPage active={active_enum.catalog}>

        </DefaultPage>
    )
}

export function GroupsPage() {
    return (
        <DefaultPage active={active_enum.groups}>

        </DefaultPage>
    )
}

export function ProfilePage() {
    return (
        <DefaultPage>
            
        </DefaultPage>
    )
}

export function LoginPage() {
    return (
        <DefaultPage>
            login
        </DefaultPage>
    )
}

export function AnyPage() {
    return (
        <DefaultPage>
            404
        </DefaultPage>
    )
}


