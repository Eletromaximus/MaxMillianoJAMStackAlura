import styled, { css } from 'styled-components'
import propToStyle from '../../../theme/utils/propToStyle'
import { TextStyleVariants } from '../Text'
interface ILinkProps {
  textAlign?: string | object;
  variant: string;
}

export const LinkBase = styled.a<ILinkProps>`
  ${propToStyle('color')};
  ${({ variant }) => TextStyleVariants[variant]};
  ${propToStyle('textAlign')};
  text-decoration: none;
  ${({ color }) => {
    if (!color) {
      return css`
        color: ${({ theme }) => theme.colors.text}
      `
    } else {
      return css`
      color: ${color};
      `
    }
  }}
  
`
