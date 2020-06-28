import axios from 'axios'
export const apiBaseUrl = 'http://localhost:3333'
export const coachServicesEndpoint = 'coach-service'
export const coachesEndpoint = 'coach'
export const sessionEndpoint = 'session'
export const userEndpoint = 'user'
export const fileEndpoint = 'file'

export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'api-key': 'procoach'
  }
})
