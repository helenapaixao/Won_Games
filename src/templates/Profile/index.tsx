import Base from 'templates/Base'
import * as S from './styles'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'

const Profile = () => (
  <Base>
    <Container>
      <Heading lineLeft lineColor='secondary'>
        My Profile
      </Heading>
      <S.Main>
        <ProfileMenu />
        <S.Content>
        </S.Content>
      </S.Main>
    </Container>

  </Base>
)

export default Profile
