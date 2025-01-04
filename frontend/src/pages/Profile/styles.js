import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
width: 100%;

> header {
  width: 100%;
  height: 14.4rem;
  background: ${({ theme }) => theme.COLORS.ROSE_005};
  display: flex;
  align-items: center;
  padding: 0 12.4rem;

  svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > button {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 1.6rem;
    background: none;
    border: none;
    cursor: pointer;
  }
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;

  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
position: relative;
margin: -13rem 0 6.4rem;
width: 18.6rem;
height: 18.6rem;  

> img {
    width: 18.6rem;
    height: 18.6rem; 
    border-radius: 50%;
}

input {
    display: none;
}

> label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({theme})=> theme.COLORS.ROSE};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    cursor: pointer;
}

svg {
    width: 2rem;
    height: 2rem;
    color: ${({theme})=> theme.COLORS.WHITE};
}

`;


