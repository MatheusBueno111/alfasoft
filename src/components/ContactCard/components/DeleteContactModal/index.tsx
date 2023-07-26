import React from 'react'
import * as S from './styles'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../../../services/firebase'
import { useContacts } from '../../../../contexts/ContactContext'
import { toast } from 'react-toastify'

interface DeleteTaskModalProps {
  onClose: () => void
  contactId: string
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  onClose,
  contactId,
}) => {
  const { fetchContacts } = useContacts()

  const handleDeleteContact = async (id: string | undefined) => {
    try {
      const contactDoc = doc(db, 'contacts', id!)
      await deleteDoc(contactDoc)
      onClose()
      fetchContacts()
      toast.success('Contato deletado')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <S.Container>
      <p>Tem certeza que deseja deletar esse contato?</p>
      <S.Buttons>
        <S.Cancel onClick={onClose}>Cancelar</S.Cancel>
        <S.Delete onClick={() => handleDeleteContact(contactId)}>
          Deletar
        </S.Delete>
      </S.Buttons>
    </S.Container>
  )
}

export default DeleteTaskModal
