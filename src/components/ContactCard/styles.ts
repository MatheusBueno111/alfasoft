import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
  padding: 2.2rem;
  gap: 1.6rem;
  border-radius: 1.6rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  img {
    width: 7rem;
    height: 7rem;
    border-radius: 9999rem;
  }

  text-align: center;
`

export const Config = styled.div`
  display: flex;

  justify-content: center;
  gap: 1.6rem;

  :hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`
