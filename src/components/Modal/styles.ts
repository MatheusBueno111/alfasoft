import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.48);
  z-index: 1;
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 66rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
`
