import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import Header from '../../components/Header'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { Contact } from '../../types'

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [contact, setContact] = useState<Contact | undefined>()

  const fetchContact = async (id: string | undefined) => {
    try {
      const contactDoc = doc(db, 'contacts', id!)
      const response = await getDoc(contactDoc)
      const data = response.data() as Contact
      setContact(data)
      console.log('data', data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchContact(id)
  }, [])

  return (
    <S.Container>
      <Header />
      <S.Card>
        <img src={contact?.imageUrl} alt="imagem do contato" />
        <h4>{contact?.name}</h4>
        <span>{contact?.email}</span>
        <span>{contact?.name}</span>
      </S.Card>
    </S.Container>
  )
}

export default ContactDetails
