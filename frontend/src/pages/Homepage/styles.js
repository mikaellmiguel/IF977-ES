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

    
    &::-webkit-scrollbar {
        width: 8px; 
    }

    /* Estilo do fundo da barra */
    &::-webkit-scrollbar-track {
        background: transparent; /* Cor do fundo */
        border-radius: 10px; /* Deixa as bordas arredondadas */
    }

    /* Estilo do "thumb" (a parte que se move) */
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #4CAF50, #2E7D32); /* Degradê verde */
        border-radius: 10px; /* Bordas arredondadas */
    }

    /* Efeito ao passar o mouse */
    &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #388E3C, #1B5E20);
    }

`;