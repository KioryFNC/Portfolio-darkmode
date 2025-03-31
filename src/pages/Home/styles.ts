import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
  gap: 6rem;

  @media (width >= 48em) {
    padding: 4rem 10rem;
  }
  @media (width >= 80em) {
    padding: 4rem 25rem;
  }
`

export const MySelf = styled.div`
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  strong {
    background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  div {
    position: relative;
  }

  div img:first-child {
    border-radius: 50%;
    width: 12rem;
    border: 2px solid ${(props) => props.theme['green-100']};
    padding: .5rem;
    height: 12rem;
  }

  div img:last-child {
    width: 4rem;
    height: 4rem;
    position: absolute;
    bottom: .5rem;
    right: -1.5rem;
  }

  @media (width >= 80em) {
    p {
      text-align: center;
    }
  }
`

export const About = styled.div.attrs({ id: 'about'})`
  display: flex;
  flex-direction: column;
  max-width: 100rem;
`

export const Skills = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  margin-top: 4rem;
  gap: 1rem;
  user-select: none;
  
  span {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: .3rem;
    background: ${(props) => props.theme['gray-400']};
    border-radius: 99px;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
    
    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    &:hover {
      transform: scale(1.1);
      background: linear-gradient(90deg, rgb(240, 67, 139) 0%, #8b5cf6 100%);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    span {
      flex: 1 1 40%; 
      max-width: 120px;
    }
  }
`

export const MyProjects = styled.section.attrs({ id: 'project'})`
  text-align: center;
  padding: 4rem 0;

  div {
    h3, h3 span{
      font-size: 2rem;
      font-weight: bold;
    }
    
    h4 {
      font-weight: bold;
      margin-bottom: 2rem;
      color: ${(props) => props.theme['gray-100']};
    }
    
    @media (width >= 48em) {
      h3, h3 span {
        font-size: 3.6rem;
      }
    }
  } 
`;

export const Project = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 2rem;
  max-width: 100rem;
  margin: 0 auto;
  
  @media (width <= 64em) {
    grid-template-columns: repeat(2, 1fr); 
  }
  
  @media (width <= 48em) {
    grid-template-columns: 1fr; 
  }
`

export const Contact = styled.div.attrs({ id: 'contact'})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-bottom: 15rem;

  .informations {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`
export const ContactCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`