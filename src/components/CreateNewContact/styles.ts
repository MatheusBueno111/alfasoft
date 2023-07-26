import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
  border-radius: 1rem;
  margin-top: 1rem;
`

export const FormNewPost = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1rem;
    font-weight: 700;
  }

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const Input = styled.input`
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
  padding: 0.9rem 1.4rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.4;
    font-size: 1.4rem;
    font-weight: 400;
  }
`

export const Button = styled.button`
  max-width: 11.1rem;

  font-weight: 700;
  border-radius: 0.8rem;
  padding: 0.7rem 3rem;
  align-self: end;
  margin-top: 0.8rem;

  &:not(:disabled) {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue};

    &:hover {
      opacity: 0.9;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors['gray-500']};
    cursor: not-allowed;

    &:hover {
      opacity: 0.9;
    }
  }
`
