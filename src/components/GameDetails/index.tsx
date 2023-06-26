import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

type Platform = 'windows' | 'linux' | 'mac'

export type GameDetailsProps = {
  platforms: Platform[]
}

const GameDetails = ({ platforms }: Platform) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    windows: <Windows title="Windows" size={18} />,
    mac: <Apple title="Mac" size={18} />
  }
  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          GameDetails
        </Heading>
      </MediaMatch>
      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Rockstar Games</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>Nov 16. 2023</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Plataform</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2k</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action/Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
