import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  max-width: 130rem;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    gap: 2rem;
    a {
      border: 1px solid ${(props) => props.theme['gray-300']};
      padding: 1rem;
      border-radius: 99px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`