import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme.background};
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px ${(props) => props.theme.shadowColor};

  &:hover {
    border-color: ${(props) => props.theme.scrollbarThumb};
    transform: scale(1.05);
  }

  img {
    width: 28rem;
    border-radius: 8px;
  }

  h4 {
    margin: 1rem 0;
    color: ${(props) => props.theme.textColor};
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.textColor};
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: auto;

    a {
      background: ${(props) => props.theme.scrollbarTrack};
      color: ${(props) => props.theme.textColor};
      padding: 0.8rem 2rem;
      font-size: var(--fs-base);
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s;
      border: 1px solid transparent;

      &:hover {
        background: ${(props) => props.theme.scrollbarThumb};
        color: ${(props) => props.theme.background};
        border-color: ${(props) => props.theme.textColor};
      }
    }
  }
`;
