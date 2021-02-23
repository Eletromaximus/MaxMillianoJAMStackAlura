import styled, { css } from 'styled-components';
import breakpointsMedia from '../../components/theme/utils/breakpointsMedia';


export const CardImage = styled.div`
  height: 180px;
  ${breakpointsMedia({
    md: css`
      flex: 2;
      height: 100%;
    `,
  })}
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 25px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  ${breakpointsMedia({
    md: css`
      flex: 1;
      padding: 10px;
      align-items: center;
      justify-content: center;
    `,
  })}
  h2 {
    ${breakpointsMedia({
      md: css`
        font-size: 24px;
      `,
    })}
  }
`;

export const CardDescription = styled.div`
  flex: 2;
  padding: 10px;
  display: none;
  ${breakpointsMedia({
    md: css`
      display: flex;
    `,
  })}
`;

export const CardWrapper = styled.div`
  max-width: 100%;
  height: 250px;
  margin-bottom: 30px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secundary};
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  ${breakpointsMedia({
    md: css`
      display: flex;
      height: 320px;
      margin-bottom: 50px;
    `,
  })}
`;