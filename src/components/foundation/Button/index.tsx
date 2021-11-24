import React from 'react'
import styled from 'styled-components'
import propToStyle from '../../../theme/utils/propToStyle'
import { TextStyleVariants } from '../Text'
import Link from '../Link'
// import get from 'lodash/get'

interface IButton {
  variant: string;
  target: string;
  children: React.ReactNode;
  onClick?: (e?: Event) => void;
  href?: string;
  paddingRight?: string | object;
  padding?: string | object | number;
  margin?: string | object | number;
  name?: string;
  color?: string;
  width?: string;
}

const ButtonBase = styled.button<IButton>`
  background-color: transparent;
  border: none;
  
  ${(props) => TextStyleVariants[props.variant]};
  ${propToStyle('color')};
  ${propToStyle('paddingRight')};
  ${propToStyle('margin')};
  ${propToStyle('padding')};
  ${propToStyle('width')};
`
// color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)}
export default function Button ({ variant, href, children, ...props }: IButton) {
  const hasTag = Boolean(href)
  const tag = hasTag ? Link : 'button'

  return (
    <ButtonBase as={tag} variant={variant} href={href} {...props} >
      {children}
    </ButtonBase>
  )
}

Button.defaultProps = {
  variant: 'paragraph1',
  target: '_blanck',
  href: undefined
}
