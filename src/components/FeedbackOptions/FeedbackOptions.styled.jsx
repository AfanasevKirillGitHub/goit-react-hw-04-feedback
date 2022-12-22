import styled from "styled-components"


export const FeedbackList = styled.ul`
margin: 0;
padding: 0;
list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;

`;

export const FeedbackItem = styled.li`
    margin-top: 20px;
`;

export const FeedbackButton = styled.button`
  padding: 6px 20px;
  border-radius: 30px;
  background-color: ${props => {
        if (props.name === 'good') {
            return props.theme.colors.green;
        }
        if (props.name === 'neutral') {
            return props.theme.colors.orange;
        }
        if (props.name === 'bad') {
            return props.theme.colors.red;
        }
    }};
  background-image: 
  ${props => {
        if (props.children === 'good') {
            return props.theme.colors.buttonGreen
        }
        if (props.children === 'neutral') {
            return props.theme.colors.buttonOrange;
        }
        if (props.children === 'bad') {
            return props.theme.colors.buttonRed;
        }
    }};
  background-position: 100% 0;
  background-size: 200% 200%;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
  transition: .5s;
  border: none;

    :hover  {
  box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
  background-position: 0 0;
  cursor: pointer;
}
`;