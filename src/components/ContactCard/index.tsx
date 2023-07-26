import React, { useState } from 'react'
import * as S from './styles'
import { FileSearch, PencilLine, Trash } from 'phosphor-react'
import { Contact } from '../../types'
import Modal from '../Modal'
import DeleteTaskModal from './components/DeleteContactModal'
import { Link } from 'react-router-dom'

interface ContactCardProps {
  contact: Contact
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const [modalToggle, setModalToggle] = useState(false)

  const handleCloseModal = () => {
    setModalToggle(false)
  }

  const handleOpenModal = () => {
    setModalToggle(true)
  }

  return (
    <S.Container>
      <S.Info>
        <img src={contact.imageUrl} alt="imagem do contato" />
        <h4>{contact.name}</h4>
      </S.Info>
      <S.Config>
        <Link to={`/${contact.id}`}>
          <FileSearch size={18} />
        </Link>
        <PencilLine size={18} />
        <Trash size={18} onClick={handleOpenModal} />
      </S.Config>
      {modalToggle && (
        <Modal onCloseOverlay={handleCloseModal}>
          {
            <DeleteTaskModal
              onClose={handleCloseModal}
              contactId={contact.id}
            />
          }
        </Modal>
      )}
    </S.Container>
  )
}

export default ContactCard
