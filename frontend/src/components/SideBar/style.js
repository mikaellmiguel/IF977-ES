
import styled from "styled-components";

export const Sidebar = styled.nav`
  width: 250px;
  height: 100vh;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  img {
    width: 7rem;
    margin-bottom: 2rem;
  }
`;

export const MenuItem = styled.a`
  width: 80%;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  margin: 0.8rem 0;
  border-radius: 12px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  &:active {
    transform: scale(0.9);
  }

`;

export const BottomMenu = styled.div`
  &::before {
    content: '';
    left: 0;
    width: 100%;
    height: 2px; 
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%);
  }
  
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  border-top: 1px thick #000;
`;
