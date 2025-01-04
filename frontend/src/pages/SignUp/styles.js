import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 13.6rem;

    > h1 {
        font-size: 4.8rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        margin-bottom: 4.8rem;
    }

    > h2 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        margin-bottom: 4.8rem;
    }

    > button:first-child {
        font-size: 1.6rem;
    }

`;

export const BackNavigation = styled.div`
    margin: 0 auto;
    margin-top: 4.2rem;
    button {
            color: ${({ theme }) => theme.COLORS.ROSE};
            align-self: center;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            background: none;
            border: none;
            cursor: pointer;

            svg {
                font-size: 2rem;
            }
        }
`;

export const Background = styled.div`
    flex: 1;
    background-size: cover;
    background: url(${backgroundImg}) no-repeat center;
`;
