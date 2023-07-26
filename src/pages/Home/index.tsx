import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import ContantList from './ContactList'
import { PlusCircle } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useContacts } from '../../contexts/ContactContext'

const Home: React.FC = () => {
  const { contacts } = useContacts()
  return (
    <S.Container>
      <Header />
      <S.NewContact>
        <Link to="/newcontact">
          <PlusCircle weight="bold" size={16} />
          <span>Novo Contato</span>
        </Link>
      </S.NewContact>
      <ContantList contacts={contacts} />
    </S.Container>
  )
}

export default Home
