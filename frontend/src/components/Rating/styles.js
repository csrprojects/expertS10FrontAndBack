import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 0.6rem;
    margin-top: 0.8rem;

    > span {
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
`;
