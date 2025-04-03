import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  max-width: 130rem;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  img {
    width: 30rem;
    height: 12rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    gap: 2rem;
    a {
      border: 1px solid ${(props) => props.theme.textColor};
      padding: 1rem;
      border-radius: 99px;
      box-shadow: 0px 2px 10px ${(props) => props.theme.shadowColor};
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    div {
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }
  }
`