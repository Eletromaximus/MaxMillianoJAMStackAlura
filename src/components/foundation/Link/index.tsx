// eslint-disable-next-line no-use-before-define
import React from 'react'
import NextLink from 'next/link'
import { LinkBase } from './styles'

interface ILinkProps {
  href: string;
  children: React.ReactNode,
  color?: string;
  target?: string;
  variant: string;
}

export default function Link ({ href, children, target, variant, ...props }: ILinkProps) {
  return (

    <NextLink href={href} passHref>
      <LinkBase
        target={target === '' ? '_blanck' : target}
        variant={variant}
        {...props}
      >
        {children}
      </LinkBase>
    </NextLink>

  )
}

Link.defaultProps = {
  href: '',
  variant: 'subtitle'
}
