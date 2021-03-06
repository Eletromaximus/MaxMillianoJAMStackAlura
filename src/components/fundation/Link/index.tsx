// eslint-disable-next-line no-use-before-define
import React from 'react'
import { LinkBase } from './styles'

interface ILinkProps {
  variant: string;
  href: string;
  children?: React.ReactNode,
  color?: string;
  target?: string;
}

export default function Link ({ variant, href, children, color, target }: ILinkProps) {
  return (

    <LinkBase variant={variant} href={href} color={color} target={target === '' ? '_blanck' : target} >
      {children}
    </LinkBase>

  )
}
