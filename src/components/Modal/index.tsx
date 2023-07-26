import React, { ReactNode } from 'react'
import * as S from './styles'

interface ModalProps {
  onCloseOverlay: () => void
  children: ReactNode | ReactNode[]
}

const Modal: React.FC<ModalProps> = ({ children, onCloseOverlay }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCloseOverlay()
    }
  }

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Container>{children}</S.Container>
    </S.Overlay>
  )
}

export default Modal
