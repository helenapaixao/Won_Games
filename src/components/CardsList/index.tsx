import Heading from 'components/Heading'
import {PaymentCard} from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({cards}: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small" >
      My Cards
    </Heading>
    {cards?.map((card) => {
      <S.Card>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    })}
  </>
)

export default CardsList
