import styled from "styled-components";
import theme from "../../styles/theme";


export const Container = styled.div`
  height: 100vh;
`;


export const Content = styled.div`
    display: flex;
    height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: ${theme.COLORS.BG_600};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${theme.COLORS.BG_50};

  img {
    width: 3rem;
    color: white;
    filter: invert(1);
  }

  h1 {
    font-size: 2.25rem;
    font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-text-stroke: 0.5px black;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 3rem;
  width: 45rem;
  
  height: calc(100% - 5rem);
  justify-content: center;

  span {
    font-weight: bold;
    margin-bottom: -0.5rem;
  }

  
`;

export const Img = styled.div`
  flex: 1;
  background-image: url("src/assets/homepage-img.png");
  background-size: cover;
  background-position: center;
  height: calc(100% - 5rem);
`;