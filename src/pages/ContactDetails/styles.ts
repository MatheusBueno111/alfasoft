import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`

export const Card = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
  padding: 2.2rem;
  gap: 1.6rem;
  border-radius: 1.6rem;

  img {
    width: 20rem;
    height: 20rem;
  }
`
