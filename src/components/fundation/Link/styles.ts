import styled from 'styled-components'
import propToStyle from '../../theme/utils/propToStyle'
import { TextStyleVariants } from '../Text/index'

interface ILinkProps {
  variant: string;
}

export const LinkBase = styled.a<ILinkProps>`
  ${props => TextStyleVariants[props.variant]}

  ${propToStyle('textAlign')}
`
