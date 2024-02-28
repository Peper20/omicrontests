


import Overview from './Overview'
import {DefaultPage, active_enum} from '../common/DefaultPage.jsx'



export function OverviewPage(){
    return (
        <DefaultPage active={active_enum.tests}>
            <Overview></Overview>
        </DefaultPage>
    )    
}