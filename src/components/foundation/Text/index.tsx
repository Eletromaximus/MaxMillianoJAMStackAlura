import styled, { css } from 'styled-components'
import React from 'react'
import typographyVariants from '../../../theme/typographyVariants'
import Link from '../Link'
import propToStyle from '../../../theme/utils/propToStyle'

interface Props {
  tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | any;
  variant: string;
  textAlign?: string | object;
  children: string | number | React.ReactNode;
  color?: string;
  name?: string;
  href: string | object;
  paddingRight?: string | object;
  paddingTop?: string | object;
  marginBottom?: string | object;
  margin?: string | object;
}

const smallestException = css`
  font-size: ${() => typographyVariants.smallestException.fontSize};
  font-weight: ${() => typographyVariants.smallestException.fontWeight};
  line-height: ${() => typographyVariants.smallestException.lineHeight};
`
const paragraph1 = css`
  font-size: ${() => typographyVariants.paragraph1.fontSize};
  font-weight: ${() => typographyVariants.paragraph1.fontWeight};
  line-height: ${() => typographyVariants.paragraph1.lineHeight};
`
const title = css`
  font-size: ${() => typographyVariants.title.fontSize};
  font-weight: ${() => typographyVariants.title.fontWeight};
  line-height: ${() => typographyVariants.title.lineHeight};
`
const subtitle = css`
  font-size: ${() => typographyVariants.subtitle.fontSize};
  font-weight: ${() => typographyVariants.subtitle.fontWeight};
  line-height: ${() => typographyVariants.subtitle.lineHeight};
`
const navbar = css`
  font-size: ${() => typographyVariants.title.fontSize};
  font-weight: ${() => typographyVariants.title.fontWeight};
  line-height: ${() => typographyVariants.title.lineHeight};
`

export const TextStyleVariants: Record<string, any> = {
  smallestException,
  paragraph1,
  title,
  subtitle,
  navbar
}

const TextBase = styled.span<Props>`
  ${({ variant }) => TextStyleVariants[variant]}
  ${propToStyle('color')}
  ${propToStyle('marginBottom')}
  ${propToStyle('paddingRight')}
  ${propToStyle('paddingTop')}
  ${propToStyle('margin')}
  ${propToStyle('textAlign')}
`
// ;
export default function Text ({ variant, href, tag, children, ...props }: Props) {
  const hasTag = Boolean(href)
  const xtag = hasTag ? Link : tag

  if (href) {
    return (
      <TextBase
        as={xtag}
        variant={variant}
        href={href}
        {...props}
      >
        {children}
      </TextBase>
    )
  }

  return (
    <TextBase
      as={xtag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  )
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  href: undefined
}
