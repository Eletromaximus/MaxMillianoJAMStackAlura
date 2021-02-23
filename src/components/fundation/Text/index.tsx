import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import propToStyle from '../../theme/utils/propToStyle'
// eslint-disable-next-line no-use-before-define
import React from 'react'
import typographyVariants from '../../theme/typographyVariants'

interface Props {
  tag?: 'p' | 'span' | 'h1' | undefined;
  variant: string;
  textAlign?: string | object;
  color?: string | object;
  children: string | number | React.ReactNode;
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

export const TextStyleVariants: Record<string, any> = {
  smallestException,
  paragraph1
}

const TextBase = styled.span<Props>`
  ${({ variant }) => TextStyleVariants[variant]}
  ${propToStyle('textAlign')}
`

export default function Text ({ tag, variant, children, textAlign }: Props) {
  return (

    <TextBase as={tag} variant={variant} textAlign={textAlign}>
      {children}
    </TextBase>
  )
}

Text.prototype = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1'
}
