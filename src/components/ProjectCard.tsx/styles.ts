import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  background:${(props) => props.theme['gray-500']}; 
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.4);

  &:hover {
    border-color: ${(props) => props.theme['green-100']};
    transform: scale(1.05);
  }

  img {
    width: 28rem;
    border-radius: 8px;
  }

  h4 {
    margin: 1rem 0;
    color: ${(props) => props.theme['gray-100']};
  }

  p {
    font-size: 1.4rem;
    color: #BBB;
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: auto;

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
        background: ${(props) => props.theme['green-100']};
        color: #292929;
        border-color: #fff;
      }
    }
  }
`;
