import * as S from './styles'

export type HeadingsProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
}

const Heading = ({ children, color = 'white' }: HeadingsProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Heading
