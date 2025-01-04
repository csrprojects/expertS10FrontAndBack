import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 11.6rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};

    display: flex;
    gap: 6.4rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;

    > a {
        font-size: 2.4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > a {
        > img {
            width: 5.6rem;
            height: 5.6rem;
            border-radius: 50%;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        line-height: 2.4rem;
        margin-right: 0.9rem;
        width: 13.3rem;

        strong {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
        }

        > button {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

    }
`;
