import axios from 'axios'


import {ROOT_QUIZZES_URL} from '../../settings.js'




export function getQuizzesOverview(){
    return [
        {
            id: 1,
            name: 'название теста',
            discover_status: true,
            created_at: '25.01.2024 17:23',
            updated_at: '23.01.2024 12:43',
        },
        {
            id: 2,
            name: 'aaaaaaa',
            discover_status: false,
            created_at: '28.02.2024 16:53',
            updated_at: '30.01.2024 11:08',
        },
    ]
}

export function getQuiz(id){
    return {
        
    }
}

