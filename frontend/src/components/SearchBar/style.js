import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    border-radius: 12px;
    padding: 0 1rem;
    width: 70vw;

    background-color: ${theme.COLORS.BG_300};

    align-items: center;

    input {
        width: 100%;
        padding: 0.5rem;
        border: none;
        background-color: transparent;

        &:active, &:focus {
            outline: none;
        }

        font-size: 1.2rem;
        color: ${theme.COLORS.BG_900};
    }

    svg {
        font-size: 1.5rem;
        color: ${theme.COLORS.BG_900};
    }

    &:active, &:focus-within{
        border: 2px solid black;
    }
`;