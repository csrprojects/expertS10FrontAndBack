import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: start;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.ROSE_005};
    padding: 3.2rem;
    border: none;
    border-radius: 1.6rem;
    cursor: pointer;
    > footer {
        display: flex;
        gap: 0.8rem;
    }
`;

export const Text = styled.div`
    text-align: left;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
