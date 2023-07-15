import Heading from 'components/Heading'
import * as S from './styles'
import Radio from 'components/Radio'
import { Add, ShoppingCart } from 'styled-icons/material-outlined'
import Button from 'components/Button'

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
        <S.AddCard>
          <Add size={14} /> Add new Card
        </S.AddCard>
      </S.CardList>
    </S.Body>
    <S.Footer>
      <Button as="a"  fullWidth minimal>
        Continue shopping
      </Button>
      <Button fullWidth icon={<ShoppingCart />}>
        Buy Now
      </Button>
    </S.Footer>
  </S.Wrapper>
)

export default PaymentOptions
