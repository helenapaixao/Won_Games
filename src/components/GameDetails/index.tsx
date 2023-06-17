import Heading from 'components/Heading'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

const GameDetails = () => (
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
        <S.Description>Nov 16. 2023</S.Description>
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

export default GameDetails
