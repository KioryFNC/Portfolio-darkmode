import styled from "styled-components";

export const ThemeToggleWrapper = styled.label`
  margin-left: 1rem;
  position: relative;
  display: inline-block;
  min-width: 4.5em;
  height: 2.2em;
  font-size: 1.7rem;
  border-radius: 30px;
  box-shadow: 0 0 10px ${(props) => props.theme.shadowColor};
  cursor: pointer;

  @media (max-width: 1280px) {
    min-width: 4em;
    max-width: 4em;
  }
`;

export const ThemeToggleInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  `;

export const ThemeToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundButton};
  transition: background-color 0.4s ease-in-out;
  border-radius: 30px;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    height: 1.2em;
    width: 1.2em;
    border-radius: 50%;
    bottom: 0.4em;
    left: ${({ theme }) => (theme.title === "dark" ? "0.5em" : "2.3em")};
    background-color: ${({ theme }) => (theme.title === "dark" ? "none" : "#ffcf48")};
    box-shadow: ${({ theme }) =>
      theme.title === "dark"
        ? "inset 5px -2px 2px 0px #fff" 
        : "inset 4px -2px 0px 0px #e2ac29"}; 
    transition: left 0.4s ease-in-out, background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  }
`;

export const Star = styled.div`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  width: 5px;
  height: 5px;
  transition: opacity 0.4s ease-in-out;
  opacity: ${({ theme }) => (theme.title === "dark" ? 1 : 0)};
`;

export const Star1 = styled(Star)`
  left: 2.8em;
  top: 0.6em;
`;

export const Star2 = styled(Star)`
  left: 2.4em;
  top: 1.2em;
`;

export const Star3 = styled(Star)`
  left: 3.2em;
  top: 1em;
`;

export const Cloud = styled.div`
  position: absolute;
  left: -.1em;
  top: 80%;
  transform: translateY(-50%);
  width: 1.8em;
  height: 1em;
  background: #fff;
  border-radius: 0.5em;
  opacity: ${({ theme }) => (theme.title === "dark" ? 0 : 1)};
  transition: opacity 0.4s ease-in-out;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #fff;
    border-radius: 50%;
  }

  &:before {
    width: 1em;
    height: 1em;
    top: -0.5em;
    left: 0.4em;
  }
`;