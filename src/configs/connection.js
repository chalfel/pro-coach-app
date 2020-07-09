import axios from 'axios'
// export const apiBaseUrl = 'http://localhost:3333'
export const apiBaseUrl = 'http://192.168.0.11:3333'
export const coachServiceEndpoint = 'coach-service'
export const coachEndpoint = 'coach'
export const sessionEndpoint = 'session'
export const userEndpoint = 'user'
export const fileEndpoint = 'file'
export const orderEndpoint = 'order'
export const gameEndpoint = 'game'

export const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  headers: {
    'api-key': 'procoach'
  }
})
