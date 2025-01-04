import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 98vh;
    display: grid;
    overflow: hidden;
    grid-template-areas:
        'header'
        'content';
`;

export const Main = styled.main`
    grid-area: content;
    width: 100%;
    height: 100vh;
    padding: 0 8rem;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4.8rem;

    h1 {
        font-size: 3.2rem;
        font-weight: normal;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    > button {
        width: 20.7rem;
        height: 4.8rem;
    }
`;

export const Posts = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 100%;
    height: 60vh;
    margin-top: 3.8rem;
    overflow-y: scroll;

    scrollbar-width:auto;
    scrollbar-color: ${({ theme }) => theme.COLORS.ROSE} ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &::-webkit-scrollbar {
        width: 10rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.ROSE};
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`;


