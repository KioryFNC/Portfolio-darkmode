import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.textColor};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
`;
