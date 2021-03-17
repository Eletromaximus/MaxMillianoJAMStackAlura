import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import typographyVariants from '../../theme/typographyVariants'
// import get from 'lodash/get'
import propToStyle from '../../theme/utils/propToStyle'

interface Props {
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3';
  variant: string;
  textAlign?: string | object;
  children: string | number | React.ReactNode;
  color?: string;
  name?: string;
  ref?: string | object;
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
  ${({ variant }) => TextStyleVariants[variant]};
  ${propToStyle('color')}
`
// color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
export default function Text (props: Props) {
  return (

    <TextBase
      as={props.tag}
      variant={props.variant}
      textAlign={props.textAlign}
      color={props.color}
      name={props.name}
    >
      {props.children}
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
