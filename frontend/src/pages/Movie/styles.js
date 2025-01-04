import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Main = styled.main`
    grid-area: content;
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    padding: 0 8rem;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    overflow-y: scroll;
    height: 100%;
    scrollbar-width: auto;
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

    p {
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        text-align: justify;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1.9rem;
    height: 2.4rem;
    > h1 {
        font-size: 3.6rem;
    }
    span {
        margin-top: 0;
        font-size: 3rem;
    }
`;

export const Publish = styled.div`
    display: flex;
    gap: 0.8rem;
    font-size: 1.6rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        > svg {
            color: ${({ theme }) => theme.COLORS.ROSE};
        }

        > img {
            border-radius: 50%;
            width: 1.6rem;
            margin-right: 0.2rem;
        }
    }
`;

export const Tags = styled.div`
    display: flex;
    gap: 0.8rem;
    margin: 1.6rem 0;
`;

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > button {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        margin-right: 1rem;
        color: ${({ theme }) => theme.COLORS.ROSE};
        gap: 0.8rem;
        margin-top: 4rem;
        background: none;
        border: none;
        cursor: pointer;

        svg {
            font-size: 20.4rem;
        }
    }
`;
