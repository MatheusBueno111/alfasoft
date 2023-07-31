import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  display: flex;

  width: fit-content;
  align-self: end;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  margin-top: 1rem;
  border-radius: 0.4rem;
  padding: 1.6rem;
  font-size: 1.6rem;
  font-weight: 700;

  a {
    all: unset;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
`
