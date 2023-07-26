import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.blue};
  max-width: 1080px;
  width: 100%;
  padding: 2.2rem;
  justify-content: space-between;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`

export const Logo = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  span {
    align-self: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 700;
  }
`

export const Login = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: 700;
`

export const LogoutButton = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
`
