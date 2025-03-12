import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Left = styled.div`
  display: flex;
  flex: 0.8;
  flex-direction: column;

  justify-content: center;
  height: 100vh;
  
  gap: 2rem;
  padding: 3rem;
  color: ${theme.COLORS.BG_600};

  img {
    width: 4rem;
    color: white;
  }

  background: rgb(209,250,229);
  background: linear-gradient(90deg, rgba(209,250,229,1) 68%, rgba(236,253,245,1) 100%);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Img = styled.div`
  flex: 1;
  background-image: url("src/assets/signup-img.png");
  background-size: cover;
  background-position: center;
`;