import styled from 'styled-components';

export const Message = styled.p`
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.red};
`;
