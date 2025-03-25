import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`

export const MySelf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 3rem;

  strong {
    color: red;
  }

  div {
    position: relative;
  }

  div img:first-child {
    border-radius: 50%;
    width: 12rem;
    border: 2px solid ${(props) => props.theme['green-100']};
    padding: .5rem;
    height: 12rem;
  }

  div img:last-child {
    width: 4rem;
    height: 4rem;
    position: absolute;
    bottom: .5rem;
    right: -1.5rem;
  }
`

export const About = styled.div``