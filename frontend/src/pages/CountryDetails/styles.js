import styled from "styled-components";

// Estilização com styled-components
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

export const Sidebar = styled.div`
  width: 25%;
  padding: 1.25rem;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
    object-position: center;
    border-radius: 0.7rem;
  }
`;

export const BackButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  color: #555;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const CountryName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.60rem 0;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.5rem;

  & svg {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 4rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  border-bottom: 1px solid #000;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;

export const GridItem = styled.div`
  padding: 1rem;

  ul {
    padding: 0.5rem 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;