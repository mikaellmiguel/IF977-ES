import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 4rem 5rem 0rem 5rem;
    width: 100%;
    max-width: 1366px;
    place-items: center;
    min-height: 100vh;
    margin: 0 auto;
`;

export const CountryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    overflow-y: auto;
`;