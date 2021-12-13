import { FC } from "react"
import { SButton } from "./Button.style"
import { ButtonProps } from "./Button.types"

export const Button: FC<ButtonProps> = ({children, onClick}) => {
    return (
        <SButton onClick={onClick}>{children}</SButton>
    )
}