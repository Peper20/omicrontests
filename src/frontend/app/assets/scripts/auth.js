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
        }
      )
}