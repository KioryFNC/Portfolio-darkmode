import styled from 'styled-components';

export const Card = styled.div`
  background:${(props) => props.theme['gray-400']}; 
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    border-color: #E96379; /* Destaque ao passar o mouse */
    transform: scale(1.05);
  }

  img {
    width: 28rem;
    border-radius: 8px;
  }

  h4 {
    margin: 1rem 0;
    color: #FFF;
  }

  p {
    font-size: 1.4rem;
    color: #BBB;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    a {
      background: #292929;
      color: #FFF;
      padding: 0.6rem 1.2rem;
      font-size: var(--fs-base);
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s;
      border: 1px solid transparent;

      &:hover {
        background: #E96379;
        border-color: #fff;
      }
    }
  }
`;
