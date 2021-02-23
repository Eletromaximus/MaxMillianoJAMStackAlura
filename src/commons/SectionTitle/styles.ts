import styled from 'styled-components';

export const TitleStyle = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  border: solid ;
  border-color: ${({ theme }) => theme.colors.primary};
`;