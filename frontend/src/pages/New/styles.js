import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas:
        'header'
        'content'
        'footer';
`;

export const Main = styled.main`
    grid-area: content;
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    padding: 0 8rem;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 10vh;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 4rem;

    > button {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.ROSE};
        background: none;
        border: none;
        cursor: pointer;
    }

    > h1 {
        font-size: 3.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    overflow-y: auto;

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

    > textarea {
        min-height: 22.7rem;
    }
`;

export const Space = styled.div`
    display: flex;
    gap: 4rem;
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    > div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2.4rem;
        padding: 1.6rem;
        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        > div {
            display: flex;
            align-items: center;
            width: auto;
            height: 5.6rem;
            padding: 1.6rem;

            > input {
                width: 13rem;
                padding: 0;
            }
        }
    }
`;
