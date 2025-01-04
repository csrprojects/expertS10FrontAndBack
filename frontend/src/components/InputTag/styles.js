import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    padding: 0.5rem 1.4rem;
    margin-right: 0.6rem;


    margin-bottom: 0.8rem;
    border-radius: 1rem;

    ${({ theme, $isnew }) =>
        $isnew === 'true'
            ? `
            color: ${theme.COLORS.GRAY_300};
            background-color: transparent;
            border: 2px dashed ${theme.COLORS.WHITE};
            
            `
            : `
            color: ${theme.COLORS.WHITE};
            background-color: ${theme.COLORS.BACKGROUND_700};
            `};



  > button {
    display: flex;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
    background: none;
    border: none;
    cursor: pointer;

    > svg {
      margin-left: 1.6rem;
      align-self: center;
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: transparent;

    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`;
