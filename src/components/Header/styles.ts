import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 2rem;
    a {
      padding: 1rem;
      border-radius: 99px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`