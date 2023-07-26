import React from 'react'
import Header from '../../components/Header'

import * as S from './styles'
import CreateNewContact from '../../components/CreateNewContact'

const NewContact: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <CreateNewContact />
    </S.Container>
  )
}

export default NewContact
