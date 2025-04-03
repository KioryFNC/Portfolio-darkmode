import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 80%;
  max-width: 40rem;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border-radius: 8px;
  background: ${(props) => props.theme.background};
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px ${(props) => props.theme.shadowColor};

  &:hover {
    border-color: ${(props) => props.theme.scrollbarThumb};
    transform: scale(1.05);
  }
  
  div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  img {
    width: 2.8rem;
    height: 2.8rem;
    object-fit: cover;
    border-radius: 50%;
  }

  p {
    color:  ${(props) => props.theme.textColor};
    white-space: nowrap;
  }

  :last-child {
    width: 2rem;
    height: 2rem;
  }
`