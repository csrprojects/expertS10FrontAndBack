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

    > a {
        align-self: center;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.ROSE};
        margin-top: 4.2rem;
    }
`;

export const Background = styled.div`
    flex: 1;
    background-size: cover;
    background: url(${backgroundImg}) no-repeat center;
`;
