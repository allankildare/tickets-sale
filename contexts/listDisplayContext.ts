import { createContext } from 'react'

interface ListDisplayContextProps {
    listDisplay: boolean
    changeListDisplay: (value: boolean) => void
}

export const ListDisplayContext = createContext<ListDisplayContextProps>({
    listDisplay: true,
    changeListDisplay: () => 'not functional yet'  
})
