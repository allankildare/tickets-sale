import { useQuery } from 'react-query'
import { apiTicketsClient } from 'clients'

export function getDetail(id?: string) {
    /* eslint-disable react-hooks/rules-of-hooks */
    const {data, ...restQuery} = useQuery('getDetail', async () => {
        return await apiTicketsClient.get(`ticket/${id}`)
    }, {
        enabled: Boolean(id)
    })

    const response = data?.data

    return { data: response, ...restQuery }
}
