import { useState } from 'react'
import Calendar from 'react-calendar'
import { Icon } from 'layout-components/Icon'
import { CalendarDiv, StyledDate } from './styles'
import { If } from 'ui/components/If'
import dayjs from 'dayjs'

export function DateField(props: any) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [value, onChange] = useState(new Date())
  const [calendarValue, setCalendarValue] = useState(value)

  const openCalendar = () => {
    setIsCalendarOpen(isCalendarOpen => !isCalendarOpen)
  }

  const handleCalendarChange = ({ target }) => {
    setCalendarValue(target.value)
  }

  return (
    <>
      <CalendarDiv>
        <StyledDate type="text" onChange={handleCalendarChange} value={calendarValue} />
        <div className="icon" onClick={openCalendar}>
          <Icon name="calendar" />
        </div>
      </CalendarDiv>
      <If condition={isCalendarOpen}>
        <Calendar
            onChange={onChange}
            onClickDay={(value) => {
                const formattedDate = dayjs(value).format('DD/MM/YYYY') as string
                setCalendarValue(formattedDate)
            }}
            value={value}
        />
      </If>
    </>
  )
}
