import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    padding: 0.5rem 1.6rem;
    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;