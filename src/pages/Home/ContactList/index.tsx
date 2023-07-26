import React from 'react'

import { Contact } from '../../../types'
import ContactCard from '../../../components/ContactCard'
import * as S from './styles'

interface ContantListProps {
  contacts: Contact[]
}

const ContantList: React.FC<ContantListProps> = ({ contacts }) => {
  return (
    <S.Container>
      {contacts.map((contact) => {
        return <ContactCard key={contact.id} contact={contact} />
      })}
    </S.Container>
  )
}

export default ContantList
