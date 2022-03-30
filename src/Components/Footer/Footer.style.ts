import styled from "styled-components";

export const FooterWrapper = styled.div`
width: 100%;
height: 5rem;
background-color: ${props => props.theme.color.blue};
display: flex;
justify-content: center;
align-items: center;

p{
  color: ${props => props.theme.color.beige};
  font-size: 0.5rem;

  @media ${props => props.theme.device.laptop} {
    font-size: 0.8rem;
  }
}
`