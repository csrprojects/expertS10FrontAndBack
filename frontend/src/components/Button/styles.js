import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    width: 100%;
    background-color: ${(props) => props.theme.COLORS.ROSE};
    color: ${(props) => props.theme.COLORS.BACKGROUND_800};
    height: 5.6rem;
    border: 0;
    padding: 1.6rem 2.4rem;
    margin-top: 1.6rem;
    border-radius: 0.8rem;
    font-weight: 500;
    font-size: 1.6rem;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
    &[data-view='inverse'] {
        background-color: ${(props) => props.theme.COLORS.BACKGROUND_900};
        color: ${(props) => props.theme.COLORS.ROSE};
    }
`;
