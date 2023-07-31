import React from 'react'
import Header from '../../components/Header'

import * as S from './styles'
import CreateNewContact from '../../components/CreateNewContact'
import { Link } from 'react-router-dom'
import { House } from 'phosphor-react'

const NewContact: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <Link to="/">
          <House weight="bold" size={16} />
          <span>Home</span>
        </Link>
      </S.Wrapper>

      <CreateNewContact />
    </S.Container>
  )
}

export default NewContact
