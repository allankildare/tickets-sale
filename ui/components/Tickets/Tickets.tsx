import { getTickets } from 'services'
import { If } from '../If'
import { StyledTickets } from './styles'
import { Heading } from 'ui/layout-components'
export function Tickets() {
    const {
        data: tickets,
        isError: isTicketsError,
        isFetched: isTicketsFetched,
        isLoading: isTicketsLoading,
        isFetching: isTicketsFetching,
        isSuccess: isTicketsSuccess
    } = getTickets()

    return (
        <StyledTickets>
            <If condition={tickets && isTicketsSuccess}>
                {tickets.map((ticket, index) => {
                    return (
                    <div key={`ticket-${index}`}>
                        <Heading type="3">{ticket.name}</Heading>
                    </div>)
                })}
            </If>
        </StyledTickets>
    )
}
