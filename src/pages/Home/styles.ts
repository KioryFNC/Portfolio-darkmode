import styled from "styled-components";
import BackgroundHeader from '../../assets/BackgroundHeader.png'
import BackgroundContact from '../../assets/BackgroundContact.png'


export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  gap: 6rem;
`

export const ContentHeader = styled.div`
  width: 100vw;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: calc(-50vw + 50%);
  gap: 7rem;
  padding: 4rem;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundHeader});
    background-size: 100% auto;
    background-position: top center;
    opacity: 0.4;
    z-index: -1; 
  }
`;
export const MySelf = styled.div`
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
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
  margin: 4rem 0 10rem 0;
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
  padding: 0 2rem;
  
  @media (width <= 64em) {
    grid-template-columns: repeat(2, 1fr); 
  }
  
  @media (width <= 48em) {
    grid-template-columns: 1fr; 
  }
`

export const Contact = styled.div.attrs({ id: 'contact'})`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 15rem;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundContact});
    background-size: 100% auto;
    background-position: top center;
    opacity: 0.5;
    z-index: -1;
  }

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