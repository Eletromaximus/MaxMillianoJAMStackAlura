import styled, { css } from 'styled-components'
import typographyVariants from '../theme/typographyVariants'
import propToStyle from '../theme/utils/propToStyle'

interface ILinkProps {
  variant: string;
}

const TextStyleVariants: Record<string, any> = {
  smallestException: css`
    font-size: ${typographyVariants.smallestException.fontSize};
    font-weight: ${typographyVariants.smallestException.fontWeight};
    line-height: ${typographyVariants.smallestException.lineHeight};
  `,

  paragraph1: css`
    font-size: ${typographyVariants.paragraph1.fontSize};
    font-weight: ${typographyVariants.paragraph1.fontWeight};
    line-height: ${typographyVariants.paragraph1.lineHeight};
  `
}

export const LinkBase = styled.a<ILinkProps>`
  ${props => TextStyleVariants[props.variant]}

  ${propToStyle('textAlign')}
`
