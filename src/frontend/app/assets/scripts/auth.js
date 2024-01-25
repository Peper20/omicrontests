import axios from 'axios'


import {ROOT_AUTH_URL} from '../../settings.js'




export function login(username, password) {
    return axios.post(
        ROOT_AUTH_URL + '/login',
        new URLSearchParams({
            'username': username,
            'password': password,
        }),
        {
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true,
        },
    )
}

export function register(email, password, is_active=true, is_superuser=false, is_verified=false) {
    return axios.post(
        ROOT_AUTH_URL + '/register',
        {
            'email': email,
            'password': password,
            'is_active': is_active,
            'is_superuser': is_superuser,
            'is_verified': is_verified,      
        },
        {
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true,
        },
    )
}


export function logout(){
    return axios.post(
        ROOT_AUTH_URL + '/logout',
        '',
        {
            headers: {
                'accept': 'application/json',
            },
            withCredentials: true,
        },
    )
}