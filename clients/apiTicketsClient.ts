import axios from 'axios'

export const apiTicketsClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TICKETS_API,
    headers: {
        'Content-type': 'application/json'
    }
})
