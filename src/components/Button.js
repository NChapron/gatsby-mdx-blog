import React from "react"
import { ButtonWrapper } from "../elements/ButtonElements"

export const Button = ({ children, href }) => {
  return <ButtonWrapper to={href}>{children}</ButtonWrapper>
}
