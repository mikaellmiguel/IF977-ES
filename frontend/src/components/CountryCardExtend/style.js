import styled from "styled-components";
import theme from "../../styles/theme";

export const  Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    display: inline-block;
    width: 10rem;
    transition: 0.3s;
    height: 12rem;
    background-color: ${theme.COLORS.BG_50};
    justify-items: center;
    padding: 0.5rem;
    border-radius: 12px;

    img {
        width: 9rem;
        height: 6rem;
        object-fit: cover;
        border-radius: 8px;
    }

    h2 {
        font-size: 1rem;
        width: 100%;
        font-weight: 600;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 0.4rem;
    }
    
    p > span{
        font-weight: 600;
    }

    p{
        font-size: 0.8rem;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    &:active {
        transform: scale(0.9);
    }
`;