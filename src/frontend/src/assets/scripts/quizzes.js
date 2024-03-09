import axios from 'axios'


import {ROOT_QUIZZES_URL} from '../../settings.js'




export function getQuizzesOverview(){
    return [
        {
            id: 1,
            name: 'Какой ты хлеб',
            discover_status: true,
            created_at: '25.01.2024 17:23',
            updated_at: '23.01.2024 12:43',
        },
        {
            id: 2,
            name: 'Основы арифметики',
            discover_status: false,
            created_at: '28.02.2024 16:53',
            updated_at: '30.01.2024 11:08',
        },
        {
            id: 3,
            name: 'Теория чисел',
            discover_status: false,
            created_at: '28.02.2024 16:55',
            updated_at: '20.02.2024 18:54',
        },
        {
            id: 4,
            name: 'Столицы мира',
            discover_status: true,
            created_at: '28.02.2024 17:03',
            updated_at: '02.03.2024 07:08',
        },
    ]
}

export function getQuiz(id){
    return {
        
    }
}

