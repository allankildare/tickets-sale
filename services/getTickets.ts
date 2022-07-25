import { useQuery } from 'react-query'
import { apiTicketsClient } from 'clients'

export function getTickets() {
    /* eslint-disable react-hooks/rules-of-hooks */
    const {data, ...restQuery} = useQuery('getTickets', async () => {
        return await apiTicketsClient.get('ticket')
    })

    const response = data?.data

    return { data: response, ...restQuery }
}
