import TextField from 'components/TextField'
import * as S from './styles'
import Button from 'components/Button'
import { Email, Lock } from 'styled-icons/entypo'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="passaword"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <S.FormLink>Don't have an account? <a>Sign up</a></S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
