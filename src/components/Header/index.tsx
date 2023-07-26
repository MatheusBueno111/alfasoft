import React from 'react'
import * as S from './styles'
import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <S.Container>
      <S.Logo>
        <Link to="/">
          <h1>AlfaSoft</h1>
        </Link>
      </S.Logo>
      <S.Wrapper>
        <S.Login>Hi</S.Login>
        <span>|</span>
        <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
