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
  background-color: ${({ theme }) => theme.backgroundButton};
  transition: background-color 0.4s ease-in-out;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PTLabel = styled.span`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
`;

export const ENLabel = styled.span`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
`;
