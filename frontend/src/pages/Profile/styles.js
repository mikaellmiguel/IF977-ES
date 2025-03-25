import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
`

export const Content = styled.div`
    display: flex;
    gap: 3rem;
    padding: 4rem 5rem 0rem 5rem;
    width: 100%;
    max-width: 1366px;
    place-items: center;
    min-height: 100vh;
    margin: 0 auto;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
`;

export const Options = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
    flex-direction: column;
`;