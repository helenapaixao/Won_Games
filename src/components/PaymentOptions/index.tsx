import Heading from 'components/Heading'
import * as S from './styles'
import Radio from 'components/Radio'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
  <S.Wrapper>
    <S.Body>
      <Heading color="black" lineBottom>
        Payment
      </Heading>
      <S.CardList>
        {cards?.map((card) => (
          <S.CardItem key={card.number}>
            <S.CardInfo>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </S.CardInfo>
            <Radio
              onCheck={() => {}}
              name="credit-card"
              id={card.number}
              value={card.number}
            />
          </S.CardItem>
        ))}
      </S.CardList>
    </S.Body>
    <S.Footer></S.Footer>
  </S.Wrapper>
)

export default PaymentOptions
