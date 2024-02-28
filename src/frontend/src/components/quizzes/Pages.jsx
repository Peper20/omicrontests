import Container from 'react-bootstrap/Container'
import {useParams} from 'react-router-dom'


import Overview from './Overview'
import {Header, active_enum} from '../common/Header.jsx'
import {DefaultPage} from '../common/DefaultPage.jsx'
import {Quiz} from './Quiz.jsx'


export function OverviewPage(){
    const params = useParams()
    
    if (params.id === undefined){
        return (
        <DefaultPage active={active_enum.tests}>
            <Overview></Overview>
        </DefaultPage>
        )
    } else {
        return <QuizPage id={params.id}></QuizPage>
    }

}


function QuizPage({id}){
    return (
        <>
            <Header active={active_enum.tests}></Header>
            <Container>
                <Quiz></Quiz>
            </Container>
        </>
    )
}
