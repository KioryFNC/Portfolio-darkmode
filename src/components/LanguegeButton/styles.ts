import styled from "styled-components";

export const LanguageToggleWrapper = styled.label`
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

export const LanguageToggleInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

export const LanguageToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 0.4s ease-in-out;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    object-fit: cover;
  }
  &:hover {
    background-color: ${({ theme }) => theme.hoverButton || "#666"};
    img {
      transform: scale(1.1);
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.activeButton || "#444"};
    transform: scale(0.95);
    img {
      transform: scale(0.95);
    }
  }
`;

export const FlagImage = styled.img`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: 2px solid black;
`;
