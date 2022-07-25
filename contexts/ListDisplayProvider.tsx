import { ReactNode, useState } from 'react'
import { ListDisplayContext } from './listDisplayContext'

export function ListDisplayProvider({ children }: { children: ReactNode }) {
    const [listDisplay, setListDisplay] = useState(true)

    const changeListDisplay = (value: boolean) => {
        setListDisplay(listDisplay => listDisplay = value)
    }

    return (
        <ListDisplayContext.Provider value={{ listDisplay, changeListDisplay }}>
            {children}
        </ListDisplayContext.Provider>
    )
}
