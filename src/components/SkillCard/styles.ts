import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.backgroundButton};
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 20px ${({ theme }) => theme.shadowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  transition: all 0.3s ease-in-out;

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    opacity: 0.9;
    text-indent: 1.5rem;
  }

  &:hover {
    box-shadow: 0 12px 24px ${({ theme }) => theme.shadowColor};
  }
`;

export const Icon = styled.div`
  font-size: 3rem;
  transition: transform 0.3s ease, filter 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0 0 8px ${({ theme }) => theme.shadowColor});
  }
`;
