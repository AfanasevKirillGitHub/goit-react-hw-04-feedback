import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 20px 0px 0px 0;
  padding: ${props => props.theme.space[0]};
  gap: ${props => props.theme.space[4]}px;
`;

export const FeedbackItem = styled.li``;

export const FeedbackButton = styled.button`
  background-image: ${props => {
    if (props.children === 'good') {
      return props.theme.colors.buttonGreen;
    }
    if (props.children === 'neutral') {
      return props.theme.colors.buttonOrange;
    }
    if (props.children === 'bad') {
      return props.theme.colors.buttonRed;
    }
  }};
  padding: 6px 20px;
  background-position: 100% 0;
  background-size: 200% 200%;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;
  border: ${props => props.theme.borders.none};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.middle};
  font-size: ${props => props.theme.fontSizes.m};

  :hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
    cursor: pointer;
  }
`;
