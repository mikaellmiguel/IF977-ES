import styled from "styled-components";

export const  Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    display: inline-block;
    width: 8rem;
    transition: 0.3s;

    img {
        width: 8rem;
        height: 5.5rem;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 8px;
    }

    h2 {
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        width:100%;
        text-overflow: ellipsis;
        overflow: hidden;
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