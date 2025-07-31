import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 90%;
  max-width: 40rem;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem;
  margin: 2rem auto;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px ${(props) => props.theme.shadowColor};

  &:hover {
    border-color: ${(props) => props.theme.shadowColor};
    transform: scale(1.05);
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColor};
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    div {
      flex-direction: column;
      align-items: flex-start;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;
