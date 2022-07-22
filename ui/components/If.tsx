import { ReactNode } from "react"

interface IfProps {
    condition: any
    children: ReactNode
}
export function If(props: IfProps) {
    const { condition, children } = props
    
    return (
        <>
            {Boolean(condition) && children}
        </>
    )
}
