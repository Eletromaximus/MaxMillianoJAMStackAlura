import styled from 'styled-components'
import propToStyle from '../../../../theme/utils/propToStyle'

interface IBox {
  display?: string | object;
  flexDirection?: string | object;
  justifyContent?: string | object;
  flex?: string | object;
  flexWrap?: string | object;
  backgroundImage?: string | object;
  backgroundRepeat?: string | object;
  backgroundPosition?: string | object;
  backgroundColor?: string | object;
  boxShadown?: string | object;
  padding?: string | object;
  margin?: string | object;
  width?: string | object;
  maxWidth?: string | object;
  minWidth?: string | object;
  height?: string | object;
  mode?: string;
}

export const Box = styled.div<IBox>`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundColor')}

  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('maxWidth')}
  ${propToStyle('minWidth')}
  ${propToStyle('height')}
`
