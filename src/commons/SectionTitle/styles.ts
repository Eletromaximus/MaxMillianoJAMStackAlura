import { colors } from '@material-ui/core';
import styled from 'styled-components';

export const TitleStyle = styled.div`
  margin: auto;
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary} 
`;