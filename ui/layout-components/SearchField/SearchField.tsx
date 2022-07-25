import { useState, MouseEvent } from 'react'
import { Icon } from '..'
import { StyledSearch, SearchDiv } from './styles'

interface SearchProps {
  placeholder?: string
  onClick?: () => void
}

export function SearchField(props: SearchProps) {
  const { placeholder, onClick } = props
  const [isOnFocus, setIsOnFocus] = useState(false)

  const handleFocus = () => {
    setIsOnFocus(isOnFocus => !isOnFocus)
  }

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if(onClick) onClick()
  }

  return (
    <>
      <SearchDiv>
        <StyledSearch
          type="text"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        <div className={`icon ${isOnFocus && 'focused'}`} onClick={handleClick}>
          <Icon name="search" />
        </div>
      </SearchDiv>
    </>
  )
}
