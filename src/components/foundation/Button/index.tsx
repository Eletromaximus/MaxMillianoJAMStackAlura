import React from 'react'
import styled from 'styled-components'
import propToStyle from '../../../theme/utils/propToStyle'
import { TextStyleVariants } from '../Text'
import Link from '../Link'
// import get from 'lodash/get'

interface IButton {
  variant: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  paddingRight?: string | object;
  padding?: string | object;
  name?: string;
}

const ButtonBase = styled.button<IButton>`
  background-color: transparent;
  border: none;
  
  ${(props) => TextStyleVariants[props.variant]};
  ${propToStyle('color')};
  ${propToStyle('paddingRight')};
  ${propToStyle('padding')};
`
// color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)}
export default function Button ({ variant, href, children, ...props }: IButton) {
  const hasTag = Boolean(href)
  const tag = hasTag ? Link : 'button'

  return (
    <ButtonBase as={tag} variant={variant} {...props} >
      {children}
    </ButtonBase>
  )
}
