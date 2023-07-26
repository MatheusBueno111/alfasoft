import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 2.2rem;
    font-weight: 700;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  justify-content: flex-end;
`

export const Cancel = styled.button`
  padding: 0.7rem 3.2rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-600']};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.white};
  width: 12srem;
`

export const Delete = styled.button`
  padding: 0.7rem 3.2rem;
  border-radius: 0.8rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  width: 12rem;
`
