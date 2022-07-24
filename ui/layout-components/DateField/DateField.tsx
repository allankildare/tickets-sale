import { ChangeEvent, useState } from 'react'
import Calendar from 'react-calendar'
import { Icon } from 'layout-components/Icon'
import { CalendarDiv, StyledDate } from './styles'
import { If } from 'ui/components/If'
import dayjs from 'dayjs'

export function DateField(props: any) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [value, onChange] = useState('')
  const [calendarValue, setCalendarValue] = useState(value)
  const [isOnFocus, setIsOnFocus] = useState(false)

  const openCalendar = () => {
    setIsCalendarOpen(isCalendarOpen => !isCalendarOpen)
  }

  const handleCalendarChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCalendarValue(target.value)
  }

  const handleFocus = () => {
    setIsOnFocus(isOnFocus => !isOnFocus)
  }

  return (
    <>
      <CalendarDiv>
        <StyledDate
          type="text"
          onChange={handleCalendarChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={calendarValue}
        />
        <div
          className={`icon ${isOnFocus && 'focused'}`}
          onClick={openCalendar}
        >
          <Icon name="calendar" />
        </div>
      </CalendarDiv>
      <If condition={isCalendarOpen}>
        <Calendar
          onChange={onChange}
          onClickDay={(value: string) => {
            const formattedDate = dayjs(value).format('DD/MM/YYYY') as string
            setCalendarValue(formattedDate)
          }}
          value={value}
        />
      </If>
    </>
  )
}
