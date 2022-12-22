import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[0]};
  gap: ${props => props.theme.space[4]}px;
`;

export const StatisticItem = styled.li``;

export const StatisticText = styled.p`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[0]};
  font-size: ${props => props.theme.fontSizes.l};
  gap: ${props => props.theme.space[3]}px;
`;

export const TotalFeedbackList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[0]};
  gap: ${props => props.theme.space[4]}px;
`;

export const TotalFeedbacItem = styled.li``;

export const TotalFeedbacText = styled.p`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[0]};
  font-size: ${props => props.theme.fontSizes.l};
  gap: ${props => props.theme.space[3]}px;
`;
