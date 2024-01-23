import axios from 'axios'


import {ROOT_AUTH_URL, ROOT_USERS_URL} from '../../settings.js'




export function getMe() {
  return axios.get(
    ROOT_USERS_URL + '/me',
    {
      headers: {
        'accept': 'application/json',
      },
      withCredentials: true,
    }
  )
}

