import styled from 'styled-components'

export default styled.div`
  background: ${props => props.theme.color.teal};
  color: ${props => props.theme.color.lightGrey};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: center;
  align-items: center;
  opacity: 1;
  visibility: visible;
  height: 45px;
  @media (${props => props.theme.device.desktop}) {
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    height: 0px;
  }
  transition-property: opacity, visibility, height;
  transition-duration: 0.5s;
  h1 {
    font-size: larger;
    font-weight: 100;
    padding-right: 20px;
  }
  button {
    color: ${props => props.theme.color.lightGrey};
    background: none;
    border: none;
    font-size: larger;
    justify-self: left;
    padding-left: 20px;
  }
`
