import { typography } from 'material-ui/styles';
import styled, { css } from 'styled-components';
import typographyVariants from '../../components/theme/typographyVariants'
import breakpointsMedia from '../../components/theme/utils/breakpointsMedia';

export const TitleStyle = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  border: solid ;
  border-color: ${({ theme }) => theme.colors.primary};
  h1 {
    ${breakpointsMedia({
      xs: css`
        font-size: ${typographyVariants.title.fontSize}
        font-weight: ${typographyVariants.title.fontWeight}
        line-height: ${typographyVariants.title.lineHeight}
      `,
    })}
}`