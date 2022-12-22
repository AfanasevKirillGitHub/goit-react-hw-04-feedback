import styled from "styled-components"


export const FeedbackList = styled.ul`
margin: 20px 0px 0px 0;
padding: 0;
list-style: none;
display: flex;
justify-content: center;
gap: 20px;
`;

export const FeedbackItem = styled.li`
`;

export const FeedbackButton = styled.button`
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
  padding: 6px 20px;
  border-radius: 30px;
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