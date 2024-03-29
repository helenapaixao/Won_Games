import Link from 'next/link'
import * as S from './styles'
import {
  AccountCircle,
  CreditCard,
  FormatListBulleted,
  Logout
} from 'styled-icons/material-outlined'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="My Profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>
    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My Cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>
    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="My Orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
    </Link>
    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My Cards">
        <Logout size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
