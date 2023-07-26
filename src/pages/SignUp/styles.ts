import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 35rem;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1.6rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.6rem;
`

export const Title = styled.h1`
  display: flex;
  font-weight: 700;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.blue};
  justify-content: center;
  margin-bottom: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.2rem;
  }
`

export const Input = styled.input`
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};

  color: ${({ theme }) => theme.colors['black-300']};
  padding: 0.9rem 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors['black-300']};
    opacity: 0.4;
    font-size: 1.2rem;
    font-weight: 400;
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border-radius: 0.8rem;
  padding: 0.7rem 3rem;
  align-self: center;
  margin-top: 1.5rem;

  &:not(:disabled) {
    background: ${({ theme }) => theme.colors.blue};

    &:hover {
      opacity: 0.8;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors['gray-300']};
    cursor: not-allowed;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const Links = styled(Link)`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: underline;
  opacity: 0.7;
  align-self: center;
  margin-top: 1.6rem;
  font-size: 1.2rem;
  :hover {
    color: ${({ theme }) => theme.colors.blue};
    opacity: 0.9;
  }
`
